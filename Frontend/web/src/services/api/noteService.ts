// src/services/noteService.ts

interface NoteData {
    title: string;
    content: string;
}

interface NoteResponse {
    noteid: number;
    title: string;
    content: string;
    create_date?: string; 
}

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