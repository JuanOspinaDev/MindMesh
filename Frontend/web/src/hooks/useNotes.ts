// src/hooks/useNotes.ts
import { useState, useEffect, useCallback } from 'react';
import { getNotes, createNote } from '../services/api/noteService';

interface Note {
  noteid: number;
  title: string;
  content: string;
}

export const useNotes = () => {
  const [items, setItems] = useState<Note[]>([]);

  const fetchNotes = useCallback(async () => {
    try {
      const fetchedNotes = await getNotes();
      setItems(fetchedNotes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const addNote = async (title: string, content: string) => {
    try {
      const newNote = await createNote({ title, content });
      setItems((prevItems) => [...prevItems, newNote]);
    } catch (error) {
      console.error('Error creating a note:', error);
    }
  };

  return {
    items,
    addNote,
    fetchNotes
  };
};
