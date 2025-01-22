import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Contraseña es requerida"),
});
