import { Link } from "react-router-dom";

const RegisterConfirm = () => {
  return (
    <>
      <div className="relative w-full h-[80vh] -z-10">
        <div className="flex items-center w-full h-full px-4 bg-black/60">
          <div className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover -z-10 bg-image-cta"></div>
          <div className="flex justify-end w-full mx-auto space-y-6">
            <div className="flex w-full mx-auto">
              <h1 className="text-5xl font-semibold text-neutral-content text-balance lg:mx-auto lg:max-w-[800px]">
                ¡Bienvenido a ManosUnidas!
                <br />
                La plataforma para conectar fundaciones y voluntarios{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pb-10">
        <div className="p-6 -mt-6 space-y-6 rounded-lg bg-base-100 lg:max-w-[800px] lg:mx-auto lg:p-12">
          <h3 className="text-3xl font-bold leading-tree text-neutral text-balance lg:text-4xl">
            ¡Tu cuenta ha sido creada con éxito!
          </h3>
          <p className="lg:text-lg">
            Solo queda un paso para comenzar a ayudar a tu comunidad. Por favor,
            completa tu perfil con información adicional para continuar.
          </p>
          <Link
            to={"/volunteer/profile"}
            role="button"
            className="w-full btn btn-primary text-primary-content lg:w-auto"
          >
            Completar perfil
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegisterConfirm;

