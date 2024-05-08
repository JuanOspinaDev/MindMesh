import React from 'react';
import Masonry from 'react-masonry-css';
import './Masonry.css'; // Asegúrate de tener el archivo de estilos CSS correcto

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  800: 2,
  500: 1
};

interface MyMasonryComponentProps {
  children: React.ReactNode; 
}

const MyMasonryComponent: React.FC<MyMasonryComponentProps> = ({ children }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
};

export default MyMasonryComponent;
