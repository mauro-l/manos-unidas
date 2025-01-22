const Hero = () => {
  return (
    <div className="w-full">
      <div className="p-4 pt-20 pb-24 bg-black">
        <div className="space-y-6 text-center text-white">
          <h2 className="text-4xl font-semibold">
            ¿Quieres ayudar a la comunidad?
          </h2>
          <p className="text-[#F9FAFB]">
            Explora las distintas oportunidades de voluntariado cerca de tu
            ubicación para realizar actividades que ayuden a cambiar el mundo.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <a href="/register" role="button" className="w-full bg-white btn">
            Quiero ser voluntario
          </a>
          <a
            href="/foundation/register"
            role="button"
            className="w-full bg-[#4E4E4E] border-[#4E4E4E] btn text-white"
          >
            Soy una fundacion
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
