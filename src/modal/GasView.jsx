import "./gasView.css";
import React, { useRef, useEffect } from 'react';


export const GasView = ({  isOpen, onClose, chain }) => {
  const modalRef = useRef();

  const handleCloseModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleCloseModal);
    } else {
      document.removeEventListener('mousedown', handleCloseModal);
    }

    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, [isOpen]);

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, []);

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} style={`${isOpen ? 'overflow:hidden' : ''}`}>
    <div ref={modalRef} className="modal-content">
      <span className="modal-close-btn" onClick={onClose}>&times;</span>
      {chain}
    </div>
  </div>
  );
};
