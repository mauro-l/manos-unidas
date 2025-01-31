import { Link } from "react-router-dom";

function BottomFooter() {
  return (
    <>
      <footer className="p-10 footer bg-neutral-content text-base-content">
        <Link to={"/"}>
          <img src="/Hand-In-Hand.ico" alt="favicon logo" />
          <h2 className="text-2xl font-bold tracking-tight text-neutral text-nowrap">
            ManosUnidas
          </h2>
        </Link>
        <nav className="text-primary">
          <p className="link link-hover">Inicio</p>
          <p className="link link-hover">Explorar voluntarios</p>
          <p className="link link-hover">Sobre nosotros</p>
          <p className="link link-hover">Ayuda</p>
          <p className="link link-hover">Configuracion</p>
        </nav>
      </footer>
      <footer className="px-10 py-4 border-t footer bg-neutral-content text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2025</p>
        </aside>
      </footer>
    </>
  );
}

export default BottomFooter;
