package services

import (
	"Backend/internal/core/models"
	"Backend/internal/repository"
)

// NoteService define la interfaz para el servicio de notas, incluyendo todas las operaciones necesarias.
type NoteService interface {
	Create(note *models.Note) error
	GetById(id int) (*models.Note, error)
	GetAll() ([]*models.Note, error)
	Update(note *models.Note) error
	Delete(id int) error
}

// noteService es la implementación concreta de NoteService que usa un NoteRepository.
type noteService struct {
	noteRepository repository.NoteRepository
}

// NewNoteService crea una nueva instancia de noteService con el repositorio proporcionado.
func NewNoteService(noteRepository repository.NoteRepository) NoteService {
	return &noteService{
		noteRepository: noteRepository,
	}
}

// Create llama al método Create del repositorio para insertar una nueva nota en la base de datos.
func (n *noteService) Create(note *models.Note) error {
	return n.noteRepository.Create(note)
}

// GetById llama al método GetById del repositorio para obtener una nota por su ID.
func (n *noteService) GetById(id int) (*models.Note, error) {
	return n.noteRepository.GetById(id)
}

// GetAll llama al método GetAll del repositorio para recuperar todas las notas.
func (n *noteService) GetAll() ([]*models.Note, error) {
	return n.noteRepository.GetAll()
}

// Update llama al método Update del repositorio para actualizar los detalles de una nota existente.
func (n *noteService) Update(note *models.Note) error {
	return n.noteRepository.Update(note)
}

// Delete llama al método Delete del repositorio para eliminar una nota por su ID.
func (n *noteService) Delete(id int) error {
	return n.noteRepository.Delete(id)
}
