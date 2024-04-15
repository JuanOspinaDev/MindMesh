// Modal.tsx
import React, { ReactNode } from 'react';
import './Modal.css';
import Button from '../Button/Button';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        
      </div>
    </div>
  );
};

export default Modal;
