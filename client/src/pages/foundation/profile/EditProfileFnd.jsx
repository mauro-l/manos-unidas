import { Form, Formik } from "formik";
import TitleDoubleXL from "@/components/common/headers/TitleDoubleXL.jsx";
import InputForm from "@/components/common/forms/InputForm.jsx";
import RadioSelect from "@/components/common/forms/RadioSelect.jsx";
import TextArea from "@/components/common/forms/TextArea.jsx";
import { foundEditProfileSchema } from "@/schemas/profile/foundationProfile.js";
import axios from "axios";
import { useEffect, useState } from "react";
import BtnBack from "@/components/common/buttons/BtnBack.jsx";
import Banner from "@/components/layout/Banner.jsx";
import Footer from "../../../components/layout/Footer.jsx";

function EditProfileFnd() {
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
    <>
      <Banner>
        <BtnBack>Volver al perfil</BtnBack>
        <h2 className="text-3xl font-semibold leading-tree text-balance">
          Completa o edita el perfil de tu fundacíon
        </h2>
      </Banner>
      <div className="px-4 py-10">
        <div id="sobrefundacion">
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
                <TitleDoubleXL className={"mb-4"}>
                  Sobre la fundación
                </TitleDoubleXL>
                <TextArea
                  name="description"
                  placeholder="Escribe una breve descripción sobre la fundación, su historia, su propósito..."
                ></TextArea>

                <div className="mt-2 mb-6 divider"></div>
            <div className="space-y-4" id="actividades" >
                <TitleDoubleXL className={"mb-4"}>
                  Área de actividades
                </TitleDoubleXL>
                <RadioSelect name="activityArea" />
                </div>
                <div className="my-6 divider"></div>

                <div className="space-y-4" id="contactos">
                  <TitleDoubleXL className={"mb-4"}>
                    Datos de contacto
                  </TitleDoubleXL>
                  <p className="text-sm font-normal text-neutral">
                    Añade la información de contacto para que los voluntarios
                    puedan comunicarse con la fundación para obtener más
                    información o resolver dudas.
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

                <div className="space-y-4" id="donaciones">
                  <TitleDoubleXL className={"mb-4"}>
                    Datos para donaciones
                  </TitleDoubleXL>
                  <p className="text-sm font-normal text-neutral">
                    Puedes añadir un enlace a la plataforma de tu preferencia
                    para recibir donaciones de voluntarios. El enlace aparecerá
                    en el perfil tu fundación.
                  </p>
                  <InputForm
                    name="donationLink"
                    label="Link para donaciones"
                    placeholder="Ingresa el enlace para recibir donaciones"
                  />
                </div>
                <div className="my-6 divider"></div>
                <button className="w-full btn btn-primary text-primary-content">
                  Actualizar el perfil
                </button>
              </Form>
            </Formik>
          )}
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default EditProfileFnd;
