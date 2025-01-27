import * as Yup from "yup";

export const foundEditInfoSchema = Yup.object().shape({
  name: Yup.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  /* .required("El nombre es requerido") */ number: Yup.string()
    .min(3, "El numero de registro contiene al menos 3 caracteres")
    .max(10, "El numero de registro contiene un maximo de 10 caracteres"),
  /* .required("El numero de registro es requerido") */ email:
    Yup.string().email("Email inválido") /* .required("Email es requerido") */,
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
    ),
  /* .required("La contraseña es requerida") */ newPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Las contraseñas deben coincidir"
  ),
  /* .required("Confirmar contraseña es requerido") */ country: Yup.string()
    /* .required("Campo obligatorio") */
    .max(30, "No puede superar los 30 caracteres"),
  state: Yup.string()
    /* .required("Campo obligatorio") */
    .max(45, "No puede superar los 45 caracteres"),
  city: Yup.string()
    /* .required("Campo obligatorio") */
    .max(35, "No puede superar los 35 caracteres"),
  address: Yup.string()
    /* .required("Campo obligatorio") */
    .max(100, "No puede superar los 100 caracteres"),
});
