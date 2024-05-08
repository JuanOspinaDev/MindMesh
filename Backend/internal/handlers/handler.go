package handlers

import (
	"net/http"
	"strconv"

	"Backend/internal/core/models"
	"Backend/internal/services"
	"github.com/gin-gonic/gin"
)

// NoteHandler es la estructura que maneja las peticiones HTTP para las notas.
type NoteHandler struct {
	service services.NoteService
}

// NewNoteHandler crea una nueva instancia de NoteHandler.
func NewNoteHandler(service services.NoteService) *NoteHandler {
	return &NoteHandler{service: service}
}

// CreateNote maneja la solicitud POST para crear una nueva nota.
func (h *NoteHandler) CreateNote(c *gin.Context) {
	var note models.Note
	if err := c.ShouldBindJSON(&note); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error en los datos de entrada: " + err.Error()})
		return
	}

	err := h.service.Create(&note)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al crear la nota: " + err.Error()})
		return
	}

	c.JSON(http.StatusOK, note)
}

// GetNote maneja la solicitud GET para obtener una nota por su ID.
func (h *NoteHandler) GetNote(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	note, err := h.service.GetById(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al obtener la nota: " + err.Error()})
		return
	}

	c.JSON(http.StatusOK, note)
}

// UpdateNote maneja la solicitud PUT para actualizar una nota existente.
func (h *NoteHandler) UpdateNote(c *gin.Context) {
	var note models.Note
	if err := c.ShouldBindJSON(&note); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error en los datos de entrada: " + err.Error()})
		return
	}

	note.ID, _ = strconv.Atoi(c.Param("id"))

	err := h.service.Update(&note)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al actualizar la nota: " + err.Error()})
		return
	}

	c.JSON(http.StatusOK, note)
}

// DeleteNote maneja la solicitud DELETE para eliminar una nota por su ID.
func (h *NoteHandler) DeleteNote(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	err = h.service.Delete(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al eliminar la nota: " + err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Nota eliminada correctamente"})
}

// GetAllNotes maneja la solicitud GET para obtener todas las notas.
func (h *NoteHandler) GetAllNotes(c *gin.Context) {
	notes, err := h.service.GetAll()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al obtener las notas: " + err.Error()})
		return
	}

	c.JSON(http.StatusOK, notes)
}
