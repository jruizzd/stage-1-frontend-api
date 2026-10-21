import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import "./RegisterModal.css";

export default function RegisterModal({
  isOpen,
  onClose,
  onRegister,
  onSwitchToLogin,
}) {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };

  const { values, handleChange, setValues } = useForm(defaultValues);

  const [touched, setTouched] = useState({
    name: false,
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

  if (!values.name.trim()) {
    errors.name = "Name is required";
  } else if (values.name.length > 30) {
    errors.name = "Name must be under 30 characters";
  }

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      await onRegister(values);
      setValues(defaultValues);
      setTouched({ name: false, email: false, password: false });
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
    >
      {/* NAME */}
      <label className="modal__label">
        Name*
        <input
          type="text"
          name="name"
          className={`modal__input ${
            touched.name && errors.name ? "modal__input_error" : ""
          }`}
          value={values.name}
          onChange={handleInputChange}
          maxLength={30}
          required
        />
        {touched.name && errors.name && (
          <span className="modal__error">{errors.name}</span>
        )}
      </label>

      {/* EMAIL */}
      <label className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          className={`modal__input ${
            touched.email && errors.email ? "modal__input_error" : ""
          }`}
          value={values.email}
          onChange={handleInputChange}
          required
        />
        {touched.email && errors.email && (
          <span className="modal__error">{errors.email}</span>
        )}
      </label>

      {/* PASSWORD */}
      <label className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          className={`modal__input ${
            touched.password && errors.password ? "modal__input_error" : ""
          }`}
          value={values.password}
          onChange={handleInputChange}
          required
        />
        {touched.password && errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>

      <div className="register-footer">
        <p className="register__switch">
          Already have an account{" "}
          <span
            className="register__switch-link"
            onClick={() => {
              onClose();
              onSwitchToLogin();
            }}
          >
            Log in
          </span>
        </p>
      </div>
    </ModalWithForm>
  );
}
