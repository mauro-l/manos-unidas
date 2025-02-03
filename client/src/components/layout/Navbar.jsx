import { Link } from "react-router-dom";
import LoginButton from "../auth/LoginButton.jsx";
import { HiOutlineBars3 } from "react-icons/hi2";
import useAuth from "../../hooks/useAuth.js";

const Navbar = () => {
  const { user, logout } = useAuth();
  const role = user && user.role;

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link className="text-xl btn btn-ghost -ms-2" to="/">
          <img src="/Hand-In-Hand.ico" alt="" />
          <h2 className="text-2xl font-bold tracking-tight text-neutral text-nowrap">
            ManosUnidas
          </h2>
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user && role === "voluntario" ? (
          <Link
            to={"/explore"}
            className="font-semibold leading-4 text-end text-primary"
          >
            ¡Hola, <br /> {user.name}!
          </Link>
        ) : user && role === "fundacion" ? (
          <Link
            to={"/dashboard"}
            className="font-semibold leading-4 text-end text-secondary"
          >
            ¡Bienvenidos, <br /> {user.name}!
          </Link>
        ) : (
          <LoginButton />
        )}
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="px-2 btn btn-ghost lg:hidden"
        >
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
            <Link to={"/explore"}>Explorar voluntariados</Link>
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
