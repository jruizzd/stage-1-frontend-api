import { useEffect } from "react";
import "./ModalWithForm.css";

export default function ModalWithForm({
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  children,
  isFormValid,
}) {
  // --- ESCAPE KEY CLOSE ---
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    // --- OVERLAY CLICK CLOSE ---
    <div className={`modal ${isOpen ? "modal_open" : ""}`} onClick={onClose}>
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
      >
        <button className="modal__close" onClick={onClose}>
          ✖
        </button>

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          <button
            type="submit"
            className={`modal__submit ${
              isFormValid ? "modal__submit_active" : ""
            }`}
            disabled={!isFormValid}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
