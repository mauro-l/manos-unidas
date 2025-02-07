import { Link, useNavigate } from "react-router-dom";
import LoginButton from "../auth/LoginButton.jsx";
import { HiOutlineBars3 } from "react-icons/hi2";
import useAuth from "../../hooks/useAuth.js";
import { ROUTES } from "../../routes/index.routes.js";
import BottomNavbar from "./BottomNavbar.jsx";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const role = user && user.role;

  

  const handleLogout = () => {
    logout();
    navigate(ROUTES.HOME);
  };

  return (
    <div className="container mx-auto navbar bg-base-100 lg:justify-center">
      <div className="navbar-start lg:w-auto">
        <Link className="text-xl btn btn-ghost -ms-2" to="/">
          <img src="/Hand-In-Hand.ico" alt="Logo page" />
          <h2 className="text-2xl font-bold tracking-tight text-neutral text-nowrap">
            ManosUnidas
          </h2>
        </Link>
      </div>
      <div className="hidden navbar-center lg:w-auto lg:flex lg:mx-auto max-h-12">
        <BottomNavbar />
      </div>
      <div className="lg:w-auto navbar-end">
        {user && role === "voluntario" ? (
          <Link
            to={ROUTES.VOLUNTEER.EXPLORAR}
            className="font-semibold leading-4 text-end text-primary"
          >
            ¡Hola, <br /> {user.name}!
          </Link>
        ) : user && role === "fundacion" ? (
          <Link
            to={ROUTES.FOUNDATION.PUBLICACIONES}
            className="font-semibold leading-4 text-end text-secondary"
          >
            ¡Bienvenidos, <br /> {user.name}!
          </Link>
        ) : (
          <LoginButton />
        )}
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="px-2 btn btn-ghost lg:ms-4">
          <HiOutlineBars3 className="text-4xl" />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={ROUTES.VOLUNTEER.EXPLORAR}>Explorar voluntariados</Link>
          </li>
          {user && (
            <>
              <div className="divider"></div>
              <li>
                <button onClick={handleLogout}>Cerrar sesión</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
