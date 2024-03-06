import "./gasView.css";
import React, { useRef, useEffect } from "react";
import {AreaChart} from '../chart/AreaChart';
import {BarChart} from '../chart/BarChart';

export const GasView = ({ isOpen, onClose, chain }) => {
  const modalRef = useRef();

  const handleCloseModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleCloseModal);
    } else {
      document.removeEventListener("mousedown", handleCloseModal);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [isOpen]);

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      {isOpen
        ? (document.body.style.setProperty('overflow', 'hidden'))
        : (document.body.style.setProperty('overflow', 'scroll'))}
      <div ref={modalRef} className="modal-content">
        <span className="modal-close-btn" onClick={onClose}>
          &times;
        </span>
        <p className="chain-name">{chain}</p>
        <AreaChart/>
        <BarChart/>
      </div>
    </div>
  );
};
