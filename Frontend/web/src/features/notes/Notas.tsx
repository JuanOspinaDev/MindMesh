// src/pages/Notas/Notas.tsx
import React, { useEffect, useState } from 'react';
import Button from '../../components/common/Button/Button';
import TextareaAutosize from 'react-textarea-autosize';
import Card from '../../components/ui/card';
import { useNotes } from '../../hooks/useNotes';
import Placeholder from '../../components/common/Placeholder/Placeholder';
import { IoIosPaperPlane } from 'react-icons/io';
import './Notas.css';

const Notas: React.FC = () => {
  const { items, addNote, fetchNotes } = useNotes();
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  useEffect(() => {
    fetchNotes(); // Fetch existing notes on component mount
  }, [fetchNotes]);

  const handleSaveNote = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addNote(noteTitle, noteContent);
    setNoteTitle('');
    setNoteContent('');
  };

  return (
    <div className="notes-page">
      <div className="note-creation-section">
        <form onSubmit={handleSaveNote}>
          <input
            type="text"
            placeholder="Título"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <TextareaAutosize
            placeholder="Añade una nota..."
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            maxRows={10}
          />
          <Button text="Guardar Nota" type="submit" />
        </form>
      </div>
      {items.length > 0 ? (
        <div className="card-container">
          {items.map((note) => (
            <Card key={note.noteid} title={note.title} content={note.content} />
          ))}
        </div>
      ) : (
        <Placeholder icon={IoIosPaperPlane} text="No hay elementos para mostrar" />
      )}
    </div>
  );
};

export default Notas;
