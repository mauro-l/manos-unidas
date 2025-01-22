import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("El nombre es requerido")
    .matches(
      /^[a-zA-Z\s]+$/,
      "El nombre solo puede contener letras y espacios"
    ),
  lastName: Yup.string()
    .min(3, "El apellido debe tener al menos 3 caracteres")
    .required("El apellido es requerido")
    .matches(
      /^[a-zA-Z\s]+$/,
      "El apellido solo puede contener letras y espacios"
    ),
  email: Yup.string().email("Email inválido").required("Email es requerido"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*[a-z])/,
      "La contraseña debe contener al menos una letra minúscula"
    )
    .matches(
      /^(?=.*[A-Z])/,
      "La contraseña debe contener al menos una letra mayúscula"
    )
    .matches(/^(?=.*[0-9])/, "La contraseña debe contener al menos un número")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])/,
      "La contraseña debe contener letras y números"
    )
    .required("La contraseña es requerida"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("Confirmar contraseña es requerido"),
});
