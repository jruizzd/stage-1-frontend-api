import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import "./LoginModal.css";

export default function LoginModal({ isOpen, onClose, onLogin }) {
  const defaultValues = {
    email: "",
    password: "",
  };

  const { values, handleChange, setValues } = useForm(defaultValues);

  // Track touched fields
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleInputChange = (e) => {
    handleChange(e);
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  // Validation
  const errors = {};

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Email must be valid";
  }

  if (!values.password.trim()) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  const isFormValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    onLogin(values);
    setValues(defaultValues);
    setTouched({ email: false, password: false });
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
    >
      {/* EMAIL */}
      <label className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          className={`modal__input ${
            touched.email && errors.email ? "form-field__input--error" : ""
          }`}
          value={values.email}
          onChange={handleInputChange}
          required
        />
        {touched.email && errors.email && (
          <span className="form-field__error">{errors.email}</span>
        )}
      </label>

      {/* PASSWORD */}
      <label className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          className={`modal__input ${
            touched.password && errors.password
              ? "form-field__input--error"
              : ""
          }`}
          value={values.password}
          onChange={handleInputChange}
          required
        />
        {touched.password && errors.password && (
          <span className="form-field__error">{errors.password}</span>
        )}
      </label>
    </ModalWithForm>
  );
}
