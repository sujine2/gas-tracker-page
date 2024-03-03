import "./gasView.css";

export const GasView = ({ isOpen, closeModal }) => {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <p>Modal</p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};
