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
import CountInput from "../../common/forms/CountInput.jsx";
import useAuth from "../../../hooks/useAuth.js";
import usePostActivity from "../../../hooks/usePostActivity.js";

const ALERT_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};

const ALERT_COLORS = {
  success: "alert-success",
  error: "alert-error",
  warning: "alert-warning",
  info: "alert-info",
};

function ActivitiesFormHandle() {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skillsData, setSkillsData] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(ALERT_TYPES.INFO);
  const [initialValues, setInitialValues] = useState({
    titulo: "",
    descripcion: "",
    fecha_inicio: "",
    fecha_fin: "",
    fecha_limite: "",
    ubicacion: {
      pais: "",
      provincia: "",
      ciudad: "",
      direccion: "",
    },
    cupo_maximo: 3,
    cupo_disponible: true,
    fundacion_id: user.id,
    categoria_id: "social-help",
    tareas: [],
    habilidades: [],
    perfil_buscado: "",
    disponibilidad: "",
    imagen: "",
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
          [skill.skill]: skill.skill,
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
        titulo: activity.titulo || "",
        descripcion: activity.descripcion || "",
        fecha_inicio: activity.fecha_inicio || "",
        fecha_fin: activity.fecha_fin || "",
        fecha_limite: activity.fecha_limite || "",
        tareas: activity.tareas || [],
        categoria_id: activity.categoria_id || "",
        pais: activity.ubicacion?.pais || "",
        provincia: activity.ubicacion?.provincia || "",
        ciudad: activity.ubicacion?.ciudad || "",
        direccion: activity.ubicacion?.direccion || "",
        cupo_maximo: activity.cupo_maximo || 0,
        cupo_disponible: activity.cupo_disponible || true,
        perfil_buscado: activity.perfil_buscado || "",
        habilidades: activity.habilidades || [],
        disponibilidad: activity.disponibilidad || "",
        imagen: activity.imagen || "",
      });
    }
  }, [id, activityLoading, activity]);

  const showAlertMessage = (message, type = ALERT_TYPES.INFO) => {
    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const locations = [
    { name: "pais", label: "País", placeholder: "Ingresa el país" },
    {
      name: "provincia",
      label: "Provincia",
      placeholder: "Ingresa tu provincia o estado",
    },
    { name: "ciudad", label: "Localidad", placeholder: "Ingresa tu localidad" },
    {
      name: "direccion",
      label: "Dirección donde se realizará la actividad",
      placeholder: "Ingresa la dirección",
    },
  ];

  const {
    submitActivity,
    loading: submitLoading,
    error: submitError,
    success,
  } = usePostActivity();

  const addActivity = async (values) => {
    await submitActivity(values);
  };

  useEffect(() => {
    if (submitError) {
      showAlertMessage("Error al enviar la actividad", ALERT_TYPES.ERROR);
    } else if (success) {
      showAlertMessage("Actividad creada con éxito", ALERT_TYPES.SUCCESS);
    }
  }, [submitError, success]);

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
              name={"titulo"}
              placeholder={"Ingresa un titulo"}
            />
            <TextArea
              label={"Descripción"}
              name={"descripcion"}
              placeholder="Escribe una breve descripción sobre el voluntariado y las actividades a realizar"
            />
            <TextArea
              label={"Tareas a realizar"}
              name={"tareas"}
              placeholder="Incluye un listado de las actividades específicas que realizarán los voluntarios durante la/s jornada/s"
            />
            <RadioSelect
              label={"Categoría de voluntariado"}
              name={"categoria_id"}
            />
            <FileInput
              label={"Imagen de la actividad"}
              altLabel={"JPG o PNG"}
              name={"file"}
            />
            <div className="px-10 mb-2 divider">o</div>
            <InputForm
              label={"Mediante un link"}
              name={"imagen"}
              placeholder="Ingresa link de la imagen"
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
              name={"fecha_limite"}
              placeholder="Selecciona una fecha límite"
            />
            <InputDate
              label={"Fecha de inicio de actividad"}
              name={"fecha_inicio"}
              placeholder="Selecciona la fecha de inicio"
            />
            <InputDate
              label={"Fecha de cierre de actividad"}
              name={"fecha_fin"}
              placeholder="Selecciona la fecha de cierre"
            />
            <TextArea
              label={"Disponibilidad"}
              name={"disponibilidad"}
              placeholder="Indica los días y horarios en los que se realizarán las jornadas de la actividad, y/o la carga horaria que requieres de los voluntarios "
            />
            <div className="divider"></div>
            <TitleDoubleXL className={"py-4"}>
              Requisitos para los voluntarios
            </TitleDoubleXL>
            <CountInput
              label={"Cantidad de vacantes"}
              name={"cupo_maximo"}
              min={1}
              max={50}
            />
            <TextArea
              label={"Perfil buscado"}
              name={"perfil_buscado"}
              placeholder="Añade una descripción del perfil que buscas, ya sea la edad apuntada, intereses o aficiones, etc. "
            />
            <div className="form-control">
              <p className="text-sm">Habilidades necesarias</p>
              <div className="flex items-center justify-between w-full px-2 py-2 mx-auto border rounded-lg border-base-300 min-h-24">
                <span className="flex flex-wrap gap-2 mb-2">
                  {values.habilidades != "" ? (
                    values.habilidades.map((skillId) => (
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
              disabled={submitLoading}
              className={`w-full my-6 font-bold btn text-primary-content ${
                success ? "btn-secondary" : "btn-primary"
              } `}
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
      {showAlert && (
        <div
          className={`toast toast-top w-full toast-center bottom-20  transition-opacity ${
            !showAlert ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className={`alert ${ALERT_COLORS[alertType]} `}>
            <span>{alertMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ActivitiesFormHandle;
