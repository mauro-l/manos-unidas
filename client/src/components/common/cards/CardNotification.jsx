import { HiXMark } from "react-icons/hi2";

function CardNotification() {
  return (
    <div className="w-full bg-white border rounded-lg card border-base-300">
      <div className="gap-2 p-4 card-body">
        <div className="inline-flex items-center gap-2 pb-1.5 border-b text-nowrap border-base-300">
          <small className="text-xs font-bold leading-3 text-base-400">
            23/01/25 11:53
          </small>
          <h3 className="text-xs font-bold leading-3 line-clamp-1 text-ellipsis">
            Ayuda a organizar los alimentos donados a nuestro comedor
          </h3>
          <div className="justify-end card-actions">
            <button className="btn btn-square btn-xs btn-ghost">
              <HiXMark className="text-lg" />
            </button>
          </div>
        </div>

        <p className="text-sm text-neutral">
          ¡Hola Florencia! Queríamos recordarles que por favor lleven un
          alimento no perecedero al comedor el día del voluntariado, ¡muchas
          gracias!
        </p>
        <div className="justify-end card-actions">
          <p className="text-sm font-bold text-neutral">
            [Fundación organizadora]
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardNotification;
