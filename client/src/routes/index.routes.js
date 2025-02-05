export const ROUTES = {
  // Rutas públicas
  HOME: "/",

  // Rutas de autenticación
  AUTH: {
    REGISTER_FOUNDATION: "/registro/fundacion",
    REGISTER_VOLUNTEER: "/registro",
    REGISTER_CONFIRM: "/registro/confirmacion",
  },

  // Rutas de fundación
  FOUNDATION: {
    PERFIL: "/fundacion",
    EDIT_PERFIL: "/fundacion/edicion-perfil",
    EDIT_INFO: "/fundacion/edicion-datos",
    PUBLICACIONES: "/publicaciones",
    CREAR_PUBLICACIONES: "/publicaciones/crear",
    EDIT_PUBLICACIONES: (id = ":id") => `/publicaciones/editar/${id}`,
    DETALLE_PUBLICACIONES: (id = ":id") => `/publicaciones/detalle/${id}`,
    PERFIL_VOLUNT: (id = ":id") => `/fundacion/voluntario-perfil/${id}`,
  },

  // Rutas de voluntario
  VOLUNTEER: {
    EXPLORAR: "/explorar",
    VER_ACTIVIDAD: (id = ":id") => `/explorar/actividad/${id}`,
    PERFIL_FOUNDATION: (id = ":id") => `/explorar/actividad/fundacion/${id}`,
    INSCRIPCIONES: "/inscripciones",
    PERFIL: "/voluntario",
    EDIT_DATOS: "/voluntario/edicion-datos",
    EDIT_PERFIL: "/voluntario/edicion-perfil",
  },
  NOTIFICACIONES: "/notificaciones",
};
