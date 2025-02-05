

const MiniCard = ( {className, icon:Icon, title, text }  ) => {

  
  
  return (
    <div className={`${className} flex items-center p-4 border border-base-300 rounded-lg justify-center `}>
      < Icon  className="text-secondary w-6 h-6 mr-4" />
      <div>
        <p className="text-sm text-neutral font-normal">
          {title}


        </p>
        <p className=" font-bold text-neutral">{text} <span className={`${title !== "Quedan" && "hidden" }`}> vacantes </span>    </p>
      </div>
    </div>
  );
};

export default MiniCard;
