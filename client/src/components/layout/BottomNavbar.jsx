import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineBellAlert,
  HiOutlineClipboardDocumentList,
  HiOutlineMagnifyingGlassCircle,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import useAuth from "../../hooks/useAuth.js";
import { ROUTES } from "../../routes/index.routes.js";

const navItems = {
  voluntario: [
    {
      path: ROUTES.VOLUNTEER.EXPLORAR,
      label: "Explorar",
      icon: HiOutlineMagnifyingGlassCircle,
    },
    {
      path: ROUTES.VOLUNTEER.INSCRIPCIONES,
      label: "Mis voluntariados",
      icon: HiOutlineClipboardDocumentList,
    },
    {
      path: ROUTES.VOLUNTEER.PERFIL,
      label: "Mi Perfil",
      icon: HiOutlineUserCircle,
    },
    {
      path: ROUTES.NOTIFICACIONES,
      label: "Notificaciones",
      icon: HiOutlineBellAlert,
    },
  ],
  fundacion: [
    {
      path: ROUTES.FOUNDATION.PUBLICACIONES,
      label: "Publicaciones",
      icon: HiOutlineClipboardDocumentList,
    },
    {
      path: ROUTES.FOUNDATION.PERFIL,
      label: "Perfil de fundacioón",
      icon: HiOutlineUserCircle,
    },
    {
      path: ROUTES.NOTIFICACIONES,
      label: "Notificaciones",
      icon: HiOutlineBellAlert,
    },
  ],
};

function BottomNavbar() {
  const location = useLocation();
  const { user } = useAuth();

  if (!user || location.pathname === "/") return null;
  const role = user.role;

  return (
    <div
      className={`border border-t btm-nav lg:static lg:min-w-[400px] lg:border-none lg:max-w-[600px] lg:max-h-16 border-base-300 ${
        !role && "hidden"
      }`}
    >
      {navItems[role]?.map(({ path, label, icon: Icon }) => (
        <Link key={path} to={path}>
          <button
            className={`${
              location.pathname === path ? "active" : ""
            } flex flex-col justify-center items-center`}
          >
            <Icon className="w-5 h-5 text-primary" />
            <span className="mt-1 text-xs btm-nav-label">{label}</span>
          </button>
        </Link>
      ))}
    </div>
  );
}

export default BottomNavbar;
