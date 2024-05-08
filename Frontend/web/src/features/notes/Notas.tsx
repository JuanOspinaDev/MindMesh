import React, { useEffect } from 'react';
import { useNotes } from '../../hooks/useNotes';
import NoteCreationForm from './Creation/NotasCreation';
import NoteDisplay from './Display/NotasDisplay';
import './Notas.css';

const Notas: React.FC = () => {
  const { items, addNote, fetchNotes } = useNotes();

  useEffect(() => {
    fetchNotes(); 
  }, [fetchNotes]);

  const handleAddNote = (title: string, content: string) => {
    addNote(title, content);
  };

  return (
    <div className="notes-page">
      <NoteCreationForm onAddNote={handleAddNote} />
      <NoteDisplay items={items} />
    </div>
  );
};

export default Notas;
