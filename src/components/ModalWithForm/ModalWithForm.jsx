export default function ModalWithForm({
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  children,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_open" : ""}`}>
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          ✖
        </button>

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
