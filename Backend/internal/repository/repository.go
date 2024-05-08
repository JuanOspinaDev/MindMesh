package repository

import (
	"database/sql"
	"fmt"
	"Backend/internal/core/models"
)

type NoteRepository interface {
	Create(note *models.Note) error
	GetById(id int) (*models.Note, error)
	GetAll() ([]*models.Note, error)
	Update(note *models.Note) error
	Delete(id int) error
}

type noteRepository struct {
	db *sql.DB
}

func NewNoteRepository(db *sql.DB) NoteRepository {
	return &noteRepository{db: db}
}

// Create inserta una nueva nota en la base de datos.
func (n *noteRepository) Create(note *models.Note) error {
	query := `INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING id`
	err := n.db.QueryRow(query, note.Title, note.Content).Scan(&note.ID)
	if err != nil {
		return fmt.Errorf("error al crear la nota: %v", err)
	}
	return nil
}

// Create inserta una nueva nota en la base de datos.
func (n *noteRepository) GetById(id int) (*models.Note, error) {
	query := `SELECT id, title, content FROM notes WHERE id = $1`
	note := &models.Note{}

	err := n.db.QueryRow(query, id).Scan(&note.ID, &note.Title, &note.Content)

	if err != nil {
		if err == sql.ErrNoRows {
			return nil, fmt.Errorf("no se encontró la nota con ID: %d", id)
		}
		return nil, fmt.Errorf("error al obtener la nota: %v", err)
	}
	return note, nil
}

// GetAll recupera todas las notas de la base de datos.
func (n *noteRepository) GetAll() ([]*models.Note, error) {
	query := `SELECT id, title, content FROM notes`
	rows, err := n.db.Query(query)
	if err != nil {
		return nil, fmt.Errorf("error al obtener las notas: %v", err)
	}
	defer rows.Close()

	var notes []*models.Note
	for rows.Next() {
		note := &models.Note{}
		err := rows.Scan(&note.ID, &note.Title, &note.Content)
		if err != nil {
			return nil, fmt.Errorf("error al leer la fila: %v", err)
		}
		notes = append(notes, note)
	}

	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("error durante el procesamiento de las filas: %v", err)
	}

	return notes, nil
}

// Update actualiza los detalles de una nota existente.
func (n *noteRepository) Update(note *models.Note) error {
	query := `UPDATE notes SET title = $1, content = $2 WHERE id = $3`
	_, err := n.db.Exec(query, note.Title, note.Content, note.ID)
	if err != nil {
		return fmt.Errorf("error al actualizar la nota: %v", err)
	}
	return nil
}

// Delete elimina una nota por su ID.
func (n *noteRepository) Delete(id int) error {
	query := `DELETE FROM notes WHERE id = $1`
	_, err := n.db.Exec(query, id)
	if err != nil {
		return fmt.Errorf("error al eliminar la nota: %v", err)
	}
	return nil
}
