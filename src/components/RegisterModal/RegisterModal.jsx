import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
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

  const isFormValid = values.name && values.email && values.password;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    onRegister(values);
    setValues(defaultValues);
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

      {/* ⭐ Added footer section */}
      <div className="register-footer">
        <p className="register__switch">
          Already have an account?{" "}
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
