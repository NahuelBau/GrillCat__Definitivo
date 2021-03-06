import { useDispatch, useSelector } from "react-redux";

import { useForm } from "./../../hooks/useForm";
import { startLoginEmailPassword } from "./../../actions/auth/auth";

import "./styles.css";

export const Login = () => {

  const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.ui);
  const [{email, password}, handleInputChange] = useForm();

  const handleLogin = () => {
    dispatch(startLoginEmailPassword(email, password));
  };

  return (
    <div className="login__screen content">
      <div className="login__container">
        <h1>Ingreso</h1>
        <hr />

        <label className="mb-2 form-label">Usuario:</label>
        <input
          className="mb-2 form-control"
          type="text"
          name="email"
          value={email}
          onChange={handleInputChange}
        />

        <label className="form-label">Contraseña:</label>
        <input
          className="mb-3 form-control"
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <button
          className={loading ? "btn btn-secondary disabled" : "btn btn-secondary"}
          onClick={handleLogin}
        >
          Iniciar sesión
        </button>

      </div>
    </div>

  );
};
