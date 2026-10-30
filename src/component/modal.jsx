import "./modal.css";

const Modal = ({ isOpen, title, message, type = "info", onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="custom-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`modal-icon ${type}`}>
          {type === "success" ? "✓" : type === "error" ? "!" : "i"}
        </div>

        <h2 id="modal-title">{title}</h2>

        <p>{message}</p>

        <button className="modal-button" onClick={onClose}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default Modal;
