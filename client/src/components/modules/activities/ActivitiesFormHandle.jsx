import { HiPlus } from "react-icons/hi2";
import FileInput from "../../common/forms/FileInput.jsx";
import InputForm from "../../common/forms/InputForm.jsx";
import RadioSelect from "../../common/forms/RadioSelect.jsx";
import TextArea from "../../common/forms/TextArea.jsx";
import TitleDoubleXL from "../../common/headers/TitleDoubleXL.jsx";
import { Form, Formik } from "formik";
import InputDate from "../../common/forms/InputDate.jsx";
import { useEffect, useState } from "react";
import ModalSkills from "../../layout/ModalSkills.jsx";
import { useSkills } from "../../../hooks/useSkills.js";
import { useNavigate, useParams } from "react-router-dom";
import useActivityById from "../../../hooks/useActivityById.js";

function ActivitiesFormHandle() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skillsData, setSkillsData] = useState({});
  const [initialValues, setInitialValues] = useState({
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
    skills: [],
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const { skills, loading, error } = useSkills();
  const {
    loading: activityLoading,
    error: activityError,
    activity,
  } = useActivityById(id);

  useEffect(() => {
    if (!loading) {
      const skillsMap = skills.reduce(
        (acc, skill) => ({
          ...acc,
          [skill.id]: skill.skill,
        }),
        {}
      );
      setSkillsData(skillsMap);
    }
  }, [loading, skills]);

  useEffect(() => {
    if (id && !activityLoading && activity) {
      console.log(activity);
      setInitialValues({
        title: activity.titulo || "",
        description: activity.descripcion || "",
        tasks: activity.tareas || "",
        category: activity.categoria || "",
        country: activity.ubicacion.pais || "",
        province: activity.ubicacion.provincia || "",
        city: activity.ubicacion.ciudad || "",
        address: activity.ubicacion.direccion || "",
        vacancies: activity.cupos_disponibles || "",
        profile: activity.perfil_buscado || "",
        skills: activity.skills || [],
      });
    }
  }, [id, activityLoading, activity]);

  const locations = [
    { name: "country", label: "País", placeholder: "Ingresa el país" },
    {
      name: "province",
      label: "Provincia",
      placeholder: "Ingresa tu provincia o estado",
    },
    { name: "city", label: "Localidad", placeholder: "Ingresa tu localidad" },
    {
      name: "address",
      label: "Dirección donde se realizará la actividad",
      placeholder: "Ingresa la dirección",
    },
  ];

  const addActivity = (values) => {
    console.log(values);
  };

  if (error) {
    return <div>{error || activityError}</div>;
  }

  return (
    <div className="lg:px-12">
      <Formik
        initialValues={initialValues}
        onSubmit={addActivity}
        enableReinitialize={true}
      >
        {({ values }) => (
          <Form>
            <TitleDoubleXL className={"py-4"}>Información básica</TitleDoubleXL>
            <InputForm
              label={"Título del voluntariado"}
              name={"title"}
              placeholder={"Ingresa un titulo"}
            />
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
            <RadioSelect
              label={"Categoría de voluntariado"}
              name={"category"}
            />
            <FileInput
              label={"Imagen de la actividad"}
              altLabel={"JPG o PNG"}
              name={"file"}
            />
            <small className="mt-2 text-xs leading-3 text-neutral">
              Añade una imagen que los voluntarios verán al acceder a la
              actividad. Puede ser una foto de la fundación o de la ubicación
              donde se realizará el voluntariado.
            </small>
            <div className="my-6 text-sm divider text-base-400">Ubicación</div>
            <div>
              {locations.map((location, index) => (
                <InputForm
                  key={index}
                  label={location.label}
                  name={location.name}
                  placeholder={location.placeholder}
                />
              ))}
            </div>
            <div className="divider"></div>
            <TitleDoubleXL className={"py-4"}>Fechas y horarios</TitleDoubleXL>
            <InputDate
              label={"Fecha límite de inscripción"}
              name={"limite"}
              placeholder="Selecciona una fecha límite"
            />
            <InputDate
              label={"Fecha de inicio de actividad"}
              name={"limite"}
              placeholder="Selecciona la fecha de inicio"
            />
            <InputDate
              label={"Fecha de cierre de actividad"}
              name={"limite"}
              placeholder="Selecciona la fecha de cierre"
            />
            <TextArea
              label={"Disponibilidad"}
              name={"availability"}
              placeholder="Indica los días y horarios en los que se realizarán las jornadas de la actividad, y/o la carga horaria que requieres de los voluntarios "
            />
            <div className="divider"></div>
            <TitleDoubleXL className={"py-4"}>
              Requisitos para los voluntarios
            </TitleDoubleXL>
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
            <div className="form-control">
              <p className="text-sm">Habilidades necesarias</p>
              <div className="flex items-center justify-between w-full px-2 py-2 mx-auto border rounded-lg border-base-300 min-h-24">
                <span className="flex flex-wrap gap-2 mb-2">
                  {values.skills != "" ? (
                    values.skills.map((skillId) => (
                      <div key={skillId} className="badge badge-info">
                        {skillsData[skillId] || "Cargando..."}
                      </div>
                    ))
                  ) : (
                    <p>
                      Añade las Habilidades que buscas en los voluntarios (hasta
                      un maximo de 10)
                    </p>
                  )}
                </span>
                <button
                  type="button"
                  className="btn btn-ghost btn-xs"
                  onClick={() => setIsModalOpen(true)}
                >
                  <HiPlus className="text-2xl" />
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full my-6 font-bold btn btn-primary text-primary-content"
            >
              {id ? "Editar actividad" : "Publicar actividad"}
            </button>
            <div className="text-center">
              <button
                className="font-bold link text-primary"
                onClick={() => navigate(-1)}
              >
                Cancelar
              </button>
            </div>
            <ModalSkills
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              skills={skills}
              loading={loading}
              error={error}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ActivitiesFormHandle;
