package api

import (
	"database/sql"
	"Backend/internal/handlers"
	"Backend/internal/services"
	"Backend/internal/repository"

	"github.com/gin-gonic/gin"
)

func SetUpRouter(db *sql.DB) *gin.Engine {
	router := gin.Default()

	// Crear instancias del repositorio y del servicio
	noteRepo := repository.NewNoteRepository(db)
	noteService := services.NewNoteService(noteRepo)
	noteHandler := handlers.NewNoteHandler(noteService)

	// Definir grupo de rutas para notas
	app := router.Group("/notes")
	{
		app.POST("/", noteHandler.CreateNote)
		app.GET("/:id", noteHandler.GetNote)
		app.PUT("/:id", noteHandler.UpdateNote)
		app.DELETE("/:id", noteHandler.DeleteNote)
	}

	return router
}
