package main

import (
	"Backend/api"
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

func main() {
	// Configurar la conexión a la base de datos
	// Asegúrate de usar las credenciales y el nombre de la base de datos correctos.
	connStr := "postgres://juanospina:juanjose123@localhost:5432/notes_db?sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Error al conectar a la base de datos:", err)
	}
	defer db.Close()

	// Verificar la conexión a la base de datos
	if err := db.Ping(); err != nil {
		log.Fatal("Error al realizar ping a la base de datos:", err)
	}

	// Configurar y arrancar el servidor
	router := api.SetUpRouter(db)
	router.Run(":8080")
}
