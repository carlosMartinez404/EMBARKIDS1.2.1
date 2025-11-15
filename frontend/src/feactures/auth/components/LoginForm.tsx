import { useEffect, useState} from "react";
import type {FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { CustomeInput } from "../../../shared/components/Input";
import { CustomeButton } from "../../../shared/components/CustomeButton";
import styles from "./styles/LoginForm.module.css";
import Truck from "../../../assets/images/truck.png";
import { useAuth } from "../hooks/use.Auth";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login, error, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  //  Redirigir si ya esta autenticado
  useEffect(() => {
    if(isAuthenticated) {
      navigate("/dashboard")
    }
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await login({ email, password });

    if (success) {
      navigate("/dashboard");
    }

    setIsSubmitting(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={Truck} alt="Embarkids Logo" />
      </div>

      <div className={styles.labelsContainer}>
        <label className={styles.labelTitle}>EMBARKIDS</label>
        <label className={styles.labelSubTitle}>Inicia sesión en tu cuenta</label>
      </div>


      <div className={styles.inputContainer}>
        <CustomeInput
          label="Correo electrónico o usuario"
          type="text"
          width="80%"
          height="45px"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />

        <br />
        <CustomeInput
          className={styles.customeInputPassword}
          label="Password"
          type="password"
          width="80%"
          height="45px"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
      </div>

      {error && (
          <div
            className={styles.errorContainer}
          >
            {error}
          </div>
      )}
      <div className={styles.buttonContainer}>
        <CustomeButton
          contenido={isSubmitting ? "Cargando..." : "Iniciar Sesión"}
          type="submit"
          width="80%"
          height="40px"
        />
      </div>
    </form>
  );
}
