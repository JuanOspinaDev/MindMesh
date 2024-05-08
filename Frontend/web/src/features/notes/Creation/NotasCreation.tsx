import React, { useState } from 'react';
import Button from '../../../components/common/Button/Button';
import TextareaAutosize from 'react-textarea-autosize';
import './NotasCreation.css';

interface NoteCreationFormProps {
  onAddNote: (title: string, content: string) => void;
}

const NoteCreationForm: React.FC<NoteCreationFormProps> = ({ onAddNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onAddNote(noteTitle, noteContent);
    setNoteTitle('');
    setNoteContent('');
  };

  return (
    <div className="note-creation-section">
      <form onSubmit={handleSubmit}>
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
  );
};

export default NoteCreationForm;
