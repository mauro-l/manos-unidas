import { Link } from "react-router-dom";
import Footer from "../../components/layout/Footer.jsx";

const ErrorPage = () => {
  return (
    <div className="flex flex-col h-screen">
     
      <div className="flex-grow flex flex-col items-center justify-center py-10">
        <div className="text-center">
          <h2 className="text-8xl font-semibold text-accent mb-4">404 :(</h2>
          <p className="text-6xl font-semibold text-neutral mb-4">
            Esta página no existe
          </p>
          <p className="text-neutral mb-4">
            ¡Lo lamentamos! No podemos encontrar la página que estás buscando.
            Mientras tanto, puedes volver a explorar todas las actividades que hay publicadas para ti.
          </p>
          <Link
            to="/explorar"
            className="btn bg-primary text-white font-bold py-3 px-6 rounded-lg mb-8"
          >
            Explorar actividades publicadas
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;

