import React from 'react';
import Card from '../../../components/ui/card';
import Placeholder from '../../../components/common/Placeholder/Placeholder';
import { IoIosPaperPlane } from 'react-icons/io';
import "./NotasDisplay.css"
import MyMasonryComponent from '../../../components/layout/Masonry/Masonry';

interface NoteDisplayProps {
  items: Array<{ noteid: number; title: string; content: string; }>;
}

const NoteDisplay: React.FC<NoteDisplayProps> = ({ items }) => {
  return (
    <div className="card-container">
      {items.length > 0 ? (
        <MyMasonryComponent>
            {items.map((note) => (
          <Card key={note.noteid} title={note.title} content={note.content} />
        ))}
        </MyMasonryComponent>
        
      ) : (
        <Placeholder icon={IoIosPaperPlane} text="No hay elementos para mostrar" />
      )}
    </div>
  );
};

export default NoteDisplay;
