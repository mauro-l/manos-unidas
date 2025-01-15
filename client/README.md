# Client

Esta carpeta contiene el código fuente para el desarrollo del frontend del proyecto. Aquí trabajarán los desarrolladores frontend para construir la interfaz de usuario y gestionar las interacciones del cliente con el sistema.

## Tecnologías Utilizadas

- **Lenguaje:** JavaScript
- **Framework:** React (con Vite como build tool)
- **Estilos:** TailwindCSS
- **Librerías de UI:** Daisy UI
- **Routing:** React-router-dom
- **Gestión de Estado:** Context API de React
- **Consultas HTTP:** Axios
- **Formularios:** react-hook-form con validaciones de Zod (aún por definir)

## Estructura del Proyecto

```
client/
├── public/          # Archivos estáticos
├── src/
│   ├── components/  # Componentes reutilizables
│   ├── pages/       # Páginas de la aplicación
│   ├── hooks/       # Custom hooks
│   ├── contexts/    # Manejo de estado global
│   ├── styles/      # Archivos de estilos globales
│   └── utils/       # Utilidades y helpers
└── vite.config.js   # Configuración de Vite
```

## Configuración Inicial

1. Asegúrate de tener **Node.js** instalado (versión recomendada: 16.x o superior).
2. Navega a la carpeta `client`:
   ```bash
   cd client
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera una versión optimizada para producción.
- `npm run preview`: Previsualiza la versión optimizada.
- `npm run lint`: Ejecuta el linter para verificar la calidad del código.

## Convenciones

- **Casing:** Utilizar camelCase para nombres de variables y funciones.
- **Commits:** Mensajes en español y concisos.
- **Idioma de Desarrollo:** Código en inglés.
- **Estructura del Proyecto:** Vite.
- **Linter:** ESLint rules + StandardJs.

## Deploy

- La aplicación frontend será desplegada utilizando **Vercel**.

## Contribuciones

1. Crea una nueva rama para tu feature:
   ```bash
   git checkout -b feature/nombre-feature
   ```
2. Realiza tus cambios y asegúrate de que el código pase el linter.
3. Haz un commit y sube la rama:
   ```bash
   git commit -m "Descripción clara del cambio"
   git push origin feature/nombre-feature
   ```
4. Crea un Pull Request hacia la rama principal.

## Notas Adicionales

- Asegúrate de documentar los componentes y hooks que desarrolles.
- Utiliza los tickets asignados en la herramienta de gestión de tareas (Trello, Jira, etc.) para organizar tu trabajo.

---

Si tienes preguntas o encuentras problemas, comunícate con el equipo líder de frontend.

