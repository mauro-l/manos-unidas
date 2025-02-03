import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineBellAlert,
  HiOutlineClipboardDocumentList,
  HiOutlineMagnifyingGlassCircle,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import useAuth from "../../hooks/useAuth.js";

const navItems = {
  voluntario: [
    {
      path: "/explore",
      label: "Explorar",
      icon: HiOutlineMagnifyingGlassCircle,
    },
    {
      path: "/inscriptions",
      label: "Mis voluntariados",
      icon: HiOutlineClipboardDocumentList,
    },
    {
      path: "/volunteer/profile",
      label: "Mi Perfil",
      icon: HiOutlineUserCircle,
    },
    {
      path: "/notifications",
      label: "Notificaciones",
      icon: HiOutlineBellAlert,
    },
  ],
  fundacion: [
    {
      path: "/dashboard",
      label: "Publicaciones",
      icon: HiOutlineClipboardDocumentList,
    },
    {
      path: "/profile",
      label: "Perfil de fundacioón",
      icon: HiOutlineUserCircle,
    },
    {
      path: "/notifications",
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
    <div className="border border-t btm-nav border-base-300">
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
