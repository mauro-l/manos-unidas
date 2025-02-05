import * as Yup from "yup";

export const messageSchema = Yup.object({
  message: Yup.string().required("El mensaje es obligatorio"),
  firm: Yup.string().required("La firma es obligatoria"),
});
