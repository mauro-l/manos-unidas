const EventCard = ({className, icon:Icon, titulo:title, fecha_inicio, fecha_fin, cupos:cupos_disponibles }) => {
  return (
    <div>
      <div className={`${className} flex items-center p-4 border border-base-300 rounded-lg justify-center `}>
        < Icon  className="text-secondary text-2xl mr-4" />
        <p3 className="text-sm text-neutral font-normal"> {title} </p3>
        <p> {fecha_inicio} </p>
        <p> {fecha_fin} </p>
         <div className={`mt-2 p-2 rounded-full text-center font-semibold ${cupos_disponibles ? 'bg-secondary  text-secondary-content' : 'bg-secondary text-secondary-content'}`}>
        {cupos_disponibles ? 'Aprobado para participar' : 'Aprobación pendiente'}
      </div>

        
      </div>
     
     
     
     
      {/* <a
        href="https://www.figma.com/design/qEBxLVPZWtcpZkqMkRYFwI/Prototipo-en-alta?node-id=51-1335&t=XyEpaIC4lHqA69iN-0"
        target="_blank"
        rel="noopener noreferrer"
      ></a>{" "}
      <p>
        del card se renderizar (titulo,fechas inicio, fechas fin, cupo
        disponible si cupo disponoble es true mostar el aprobado para participar
        en verde si es false mostar aprovacion pendiente)
      </p> */}
    </div>
  );
};

export default EventCard;
