import { useState } from "react";

function Task() {
  const [modalContent, setModalContent] = useState({ title: "", message: "" });

  const openModal = (content) => {
    setModalContent(content);
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Nombre</th>
              <th>Tarea</th>
              <th>Descripción</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Nelly</div>
                  </div>
                </div>
              </td>
              <td>
                Implementar el footer
                <br />
                <span className="badge badge-ghost badge-sm">Footer</span>
              </td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() =>
                    openModal({
                      title: "Detalles",
                      message:
                        "Crear en un componente un footer bonito de la libreria de Daisy",
                    })
                  }
                >
                  details
                </button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Valen</div>
                  </div>
                </div>
              </td>
              <td>
                Implementar un navbar
                <br />
                <span className="badge badge-ghost badge-sm">Navbar</span>
              </td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() =>
                    openModal({
                      title: "Detalles",
                      message:
                        "Crear en un componente un navbar bonito de la libreria de Daisy",
                    })
                  }
                >
                  details
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Mauro</div>
                  </div>
                </div>
              </td>
              <td>
                Comprobar instalación
                <br />
                <span className="badge badge-ghost badge-sm">Instalación</span>
              </td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() =>
                    openModal({
                      title: "Detalles",
                      message:
                        "Verificar que la libreria se haya instalado correctamente.",
                    })
                  }
                >
                  details
                </button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Tarea</th>
              <th>Descripción</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{modalContent.title}</h3>
          <p className="py-4">{modalContent.message}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Task;
