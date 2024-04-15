// src/services/noteService.ts

interface NoteData {
    title: string;
    content: string;
}

interface NoteResponse {
    noteid: number;
    title: string;
    content: string;
    create_date?: string; // Añadir cualquier otro campo que devuelva tu API
}

// Asegúrate de que esta URL coincida con la ruta configurada en tu backend.
const API_URL = 'http://localhost:8080/notas';

export const createNote = async (noteData: NoteData): Promise<NoteResponse> => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(noteData),
        });

        if (!response.ok) {
            throw new Error('Error al crear nota');
        }

        const noteResponse: NoteResponse = await response.json();
        return noteResponse;
    } catch (error) {
        // Aquí es mejor lanzar un error tipado para un mejor manejo del mismo.
        throw new Error('Error al comunicarse con la API');
    }
};

export const getNotes = async (): Promise<NoteResponse[]> => {
    try {
        const response = await fetch(API_URL); 
        if (!response.ok) {
            throw new Error('Error al obtener notas');
        }
        const notes: NoteResponse[] = await response.json();
        return notes;
    } catch (error) {
        throw new Error('Error al comunicarse con la API');
    }
};