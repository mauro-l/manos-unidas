import { Form, Formik } from "formik";
import InputForm from "../../forms/InputForm.jsx";
import TitleDoubleXL from "../../common/TitleDoubleXL.jsx";
import TextArea from "../../forms/TextArea.jsx";
import RadioSelect from "../../forms/RadioSelect.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { foundEditProfileSchema } from "../../../schemas/profile/foundationProfile.js";
import BtnSubmit from "../../common/BtnSubmit.jsx";

function EditFoundProfile() {
  const [valuesDB, setValuesDB] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFoundation = async (id) => {
      try {
        setLoading(true);
        const response = await axios.get("/data/listado-fundaciones-db.json");
        console.log(response);
        const foundation = response.data.find(
          (item) => item.fundacion_id === id
        );
        if (foundation) {
          setValuesDB(foundation);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getFoundation("FND003");
  }, []);

  const getInitialValues = () => {
    return {
      description: valuesDB?.descripcion || "", // Si valuesDB.name existe, úsalo; si no, usa ""
      activityArea: valuesDB?.area_principal || "",
      contactEmail: valuesDB?.email_contacto || "",
      phone: valuesDB?.telefono || "",
      website: valuesDB?.web || "",
      donationLink: valuesDB?.link_donacion || "",
    };
  };

  const submit = (ex) => {
    console.log(ex);
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center w-full mx-auto">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <Formik
          initialValues={getInitialValues()}
          validationSchema={foundEditProfileSchema}
          onSubmit={submit}
          validateOnChange={true}
          validateOnBlur={true}
          validateOnMount={false}
          enableReinitialize={true}
        >
          <Form>
            <TitleDoubleXL className={"mb-4"}>Sobre la fundación</TitleDoubleXL>
            <TextArea
              name="description"
              placeholder="Escribe una breve descripción sobre la fundación, su historia, su propósito..."
            ></TextArea>

            <div className="mt-2 mb-6 divider"></div>

            <TitleDoubleXL className={"mb-4"}>
              Área de actividades
            </TitleDoubleXL>
            <RadioSelect name="activityArea" />

            <div className="my-6 divider"></div>

            <div className="space-y-4">
              <TitleDoubleXL className={"mb-4"}>
                Datos de contacto
              </TitleDoubleXL>
              <p className="text-sm font-normal text-neutral">
                Añade la información de contacto para que los voluntarios puedan
                comunicarse con la fundación para obtener más información o
                resolver dudas.
              </p>
              <InputForm
                name="contactEmail"
                label="Email de contacto"
                placeholder="Ingresa un correo electrónico de contacto"
              />
              <InputForm
                name="phone"
                label="Teléfono"
                placeholder="Ingresa un número telefónico de contacto"
              />
              <InputForm
                name="website"
                label="Web"
                placeholder="Añade la web de la fundación"
              />
            </div>

            <div className="my-6 divider"></div>

            <div className="space-y-4">
              <TitleDoubleXL className={"mb-4"}>
                Datos para donaciones
              </TitleDoubleXL>
              <p className="text-sm font-normal text-neutral">
                Puedes añadir un enlace a la plataforma de tu preferencia para
                recibir donaciones de voluntarios. El enlace aparecerá en el
                perfil tu fundación.
              </p>
              <InputForm
                name="donationLink"
                label="Link para donaciones"
                placeholder="Ingresa el enlace para recibir donaciones"
              />
            </div>
            <div className="my-6 divider"></div>
            <BtnSubmit>Actualizar el perfil</BtnSubmit>
          </Form>
        </Formik>
      )}
    </div>
  );
}

export default EditFoundProfile;
