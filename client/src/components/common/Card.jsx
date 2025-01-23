const Card = () => {
  return (
    <div className="card bg-base-100  shadow-xl mx-auto ">
      <figure>
        <img
          className=" h-36 w-96"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kp0xUTq4sBK1q-McB-ZgaDGzrzOKymk4_A&s"
          alt="Imagen"
        />
      </figure>
      <div className="card-body p-6 gap-4">
        <div className="inline-flex items-center text-[#818181] border-[#818181] gap-2 ">
          <div className="badge badge-outline ">CATEGORÍA DE VOLUNTARIADO</div>
          <div className="badge badge-outline ">OTRA</div>
        </div>
        <h2 className="card-title font-bold text-2xl leading-6 ">
          Título del voluntariado (máximo 2 o 3 líneas)
        </h2>
        <div className="inline-flex gap-2 text-[#515151] text-sm ">
          <a className="link font-bold "> Fundación organizadora </a>
          <p className="border-l-2 border-[#D1D5DB] ps-2"> Ciudad, País</p>
        </div>
        <p >
          Descripción de la actividad y las tareas: Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.{" "}
        </p>
        <div className="card-actions justify-end"></div>
        <button className="btn btn-outline font-bold border-[#D1D5DB]  ">
          Conocer más
        </button>
      </div>
    </div>
  );
};

export default Card;
