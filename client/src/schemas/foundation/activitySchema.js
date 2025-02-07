import * as Yup from "yup";

export const foundEditInfoSchema = Yup.object().shape({
  titulo: Yup.string()
    .required("El título es obligatorio")
    .min(10, "El título debe tener al menos 10 caracteres")
    .max(100, "El título no puede exceder los 100 caracteres"),

  descripcion: Yup.string()
    .required("La descripción es obligatoria")
    .min(20, "La descripción debe tener al menos 20 caracteres")
    .max(255, "La descripción no puede exceder los 255 caracteres"),

  fecha_inicio: Yup.date()
    .required("La fecha de inicio es obligatoria")
    .min(new Date(), "La fecha de inicio no puede ser en el pasado"),

  fecha_fin: Yup.date()
    .required("La fecha de fin es obligatoria")
    .min(
      Yup.ref("fecha_inicio"),
      "La fecha de fin debe ser posterior a la fecha de inicio"
    ),

  fecha_limite: Yup.date()
    .required("La fecha límite es obligatoria")
    .max(
      Yup.ref("fecha_inicio"),
      "La fecha límite debe ser anterior a la fecha de inicio"
    ),

  ubicacion: Yup.object().shape({
    pais: Yup.string().required("El país es obligatorio"),
    provincia: Yup.string().required("La provincia es obligatoria"),
    ciudad: Yup.string().required("La ciudad es obligatoria"),
    direccion: Yup.string().required("La dirección es obligatoria"),
  }),

  cupo_maximo: Yup.number()
    .required("El cupo máximo es obligatorio")
    .positive("El cupo máximo debe ser un número positivo")
    .integer("El cupo máximo debe ser un número entero")
    .max(50, "El cupo máximo no puede exceder 50 participantes"),

  cupo_disponible: Yup.boolean(),

  fundacion_id: Yup.string().required("El ID de fundación es obligatorio"),

  categoria_id: Yup.string()
    .default("animal") // Establece 'social-media' como valor por defecto
    .oneOf(["education", "social-help"], "Categoría no válida"),

  tareas: Yup.array()
    .of(Yup.string().required("Cada tarea debe tener un nombre"))
    .min(1, "Debe incluir al menos una tarea"),

  habilidades: Yup.array()
    .of(Yup.string().required("Cada habilidad debe tener un nombre"))
    .min(1, "Debe incluir al menos una habilidad"),

  perfil_buscado: Yup.string()
    .required("El perfil buscado es obligatorio")
    .min(50, "El perfil buscado debe tener al menos 50 caracteres"),

  disponibilidad: Yup.string()
    .required("La disponibilidad es obligatoria")
    .min(255, "La disponibilidad debe tener al menos 255caracteres"),

  imagen: Yup.string().url("Debe ser una URL válida"),
});
