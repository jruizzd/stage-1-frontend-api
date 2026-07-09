// src/components/RegisterModal/RegisterModal.jsx

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import "./RegisterModal.css";

export default function RegisterModal({ isOpen, onClose, onRegister }) {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };

  const { values, handleChange, setValues } = useForm(defaultValues);

  const isFormValid = values.name && values.email && values.password;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    // Stage‑1: no backend → store user locally
    onRegister(values);

    // Reset form
    setValues(defaultValues);
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name*
        <input
          type="text"
          name="name"
          className="modal__input"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>

      <label className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          className="modal__input"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>

      <label className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          className="modal__input"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>

      <button
        type="submit"
        className={`modal__submit ${isFormValid ? "modal__submit_active" : ""}`}
        disabled={!isFormValid}
      >
        Sign up
      </button>
    </ModalWithForm>
  );
}
