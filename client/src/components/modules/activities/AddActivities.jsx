import { HiPlus } from "react-icons/hi2";
import FileInput from "../../common/forms/FileInput.jsx";
import InputForm from "../../common/forms/InputForm.jsx";
import RadioSelect from "../../common/forms/RadioSelect.jsx";
import TextArea from "../../common/forms/TextArea.jsx";
import TitleDoubleXL from "../../common/headers/TitleDoubleXL.jsx";
import ButtonLink from "../../common/buttons/ButtonLink.jsx";
import { Form, Formik } from "formik";

function AddActivities() {
  const locations = [
    { name: "country", label: "País" },
    { name: "province", label: "Provincia" },
    { name: "city", label: "Localidad" },
    { name: "address", label: "Dirección donde se realizará la actividad" },
  ];

  const initialValues = {
    title: "",
    description: "",
    tasks: "",
    category: "",
    country: "",
    province: "",
    city: "",
    address: "",
    vacancies: "",
    profile: "",
  };

  const addActivity = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={addActivity}>
        <Form className="space-y-2">
          <TitleDoubleXL>Información básica</TitleDoubleXL>
          <InputForm label={"Título del voluntariado"} name={"title"} />
          <TextArea
            label={"Descripción"}
            name={"description"}
            placeholder="Escribe una breve descripción sobre el voluntariado y las actividades a realizar"
          />
          <TextArea
            label={"Tareas a realizar"}
            name={"tasks"}
            placeholder="Incluye un listado de las actividades específicas que realizarán los voluntarios durante la/s jornada/s"
          />
          <RadioSelect label={"Categoría de voluntariado"} name={"category"} />
          <FileInput label={"Imagen de la actividad"} altLabel={"JPG o PNG"} />
          <small className="text-xs text-neutral">
            Añade una imagen que los voluntarios verán al acceder a la
            actividad. Puede ser una foto de la fundación o de la ubicación
            donde se realizará el voluntariado.
          </small>
          <div className="divider">Ubicación</div>
          <div>
            {locations.map((location, index) => (
              <InputForm
                key={index}
                label={location.label}
                name={location.name}
              />
            ))}
          </div>
          <div className="divider"></div>
          <TitleDoubleXL>Fechas y horarios</TitleDoubleXL>
          <label htmlFor="date">Fecha limite de inscripcion</label>
          <input type="date" />
          <TextArea
            label={"Disponibilidad"}
            name={"availability"}
            placeholder="Indica los días y horarios en los que se realizarán las jornadas de la actividad, y/o la carga horaria que requieres de los voluntarios "
          />
          <div className="divider"></div>
          <TitleDoubleXL>Requisitos para los voluntarios</TitleDoubleXL>
          <InputForm
            label={"Cantidad de vacantes"}
            name={"vacancies"}
            placeholder="Ingresa la cantidad de voluntarios"
          />
          <TextArea
            label={"Perfil buscado"}
            name={"profile"}
            placeholder="Añade una descripción del perfil que buscas, ya sea la edad apuntada, intereses o aficiones, etc. "
          />
          <div>
            <p className="text-sm">Habilidades necesarias</p>
            <div className="py-5 mx-auto border rounded-lg border-base-300">
              <span className="flex">
                <p>
                  Añade las Habilidades que buscas en los voluntarios (hasta un
                  maximo de 10)
                </p>
                <HiPlus />
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full font-bold btn btn-primary text-primary-content"
          >
            Publicar actividad
          </button>
          <ButtonLink path={"#"}>Cancelar</ButtonLink>
        </Form>
      </Formik>
    </div>
  );
}

export default AddActivities;
