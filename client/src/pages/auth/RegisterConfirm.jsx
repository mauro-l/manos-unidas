import Banner from "../../components/layout/Banner.jsx";
import Footer from "../../components/layout/Footer.jsx";

const RegisterConfirm = () => {



  return (
    <div className="w-full">
    <Banner color="bg-primary-focus ">
      ¡Bienvenido a ManosUnidas! La plataforma para conectar fundaciones y
      voluntarios
    </Banner>
    <div className="p-6 m-4 mb-4 -mt-8 rounded-lg bg-base-100">
        <h2> ¡Tu cuenta ha sido creada con éxito!  </h2>
        <p>Solo queda un paso para comenzar a ayudar a tu comunidad. Por favor, completa tu perfil con información adicional para continuar.</p>
        <button className="w-full mt-6 mb-10 btn bg-primary
         text-primary-content">
          Completar perfil
        </button>
      </div>
      <Footer/>

    </div>
  );
};

export default RegisterConfirm;