import * as Yup from "yup";

export const foundEditInfoSchema = Yup.object().shape({
  name: Yup.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  number: Yup.string()
    .min(3, "El numero de registro contiene al menos 3 caracteres")
    .max(10, "El numero de registro contiene un maximo de 10 caracteres"),
  email: Yup.string().email("Email inválido"),
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
  newPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Las contraseñas deben coincidir"
  ),
  country: Yup.string().max(30, "No puede superar los 30 caracteres"),
  state: Yup.string().max(45, "No puede superar los 45 caracteres"),
  city: Yup.string().max(35, "No puede superar los 35 caracteres"),
  address: Yup.string().max(100, "No puede superar los 100 caracteres"),
});

export const foundEditProfileSchema = Yup.object().shape({
  description: Yup.string()
    .min(50, "La descripcion debe tener al menos 50 caracteres")
    .max(255, "No puede superar los 255 caracteres"),
  activityArea: Yup.string(),
  contactEmail: Yup.string().email("Email inválido"),
  phone: Yup.string()
    .min(9, "El numero de teléfono contiene al menos 9 caracteres")
    .max(12, "El numero de teléfono contiene un maximo de 12 caracteres"),
  website: Yup.string().max(45, "No puede superar los 45 caracteres"),
  donationLink: Yup.string().max(45, "No puede superar los 45 caracteres"),
});
