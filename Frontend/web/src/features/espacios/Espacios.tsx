import React from 'react';
import Placeholder from '../../components/common/Placeholder/Placeholder';
import { BsGrid1X2 } from "react-icons/bs";
import Button from '../../components/common/Button/Button';

const Notas = () => {
   const [items, setItems] = React.useState([]);
   return (

     <div className='page'>
        <Button text="Crear Nota" />
        {items.length === 0 && (
       <Placeholder
         icon={BsGrid1X2}
         text="No hay elementos para mostrar"
       />
     )}
   </div>
     
   );
};

export default Notas;