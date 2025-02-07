import BtnBack from "@/components/common/buttons/BtnBack.jsx";
import Banner from "@/components/layout/Banner.jsx";
import { Form, Formik } from "formik";
import TextArea from "../../../components/common/forms/TextArea.jsx";
import TitleDoubleXL from "../../../components/common/headers/TitleDoubleXL.jsx";
import SelectInput from "../../../components/common/forms/SelectInput.jsx";
import Footer from "../../../components/layout/Footer.jsx";

function EditProfileVol() {
  return (
    <div>
      <Banner>
        <BtnBack>Volver al perfil</BtnBack>
        <h3>Completa o edita tus datos personales</h3>
      </Banner>
      <div className="px-4 py-10" id="sobremi">
        <Formik>
          <Form >
            <div  className="flex flex-col gap-4"  >
              <TitleDoubleXL >Sobre mi</TitleDoubleXL>
              <TextArea
                name="aboutme"
                placeholder="Cuéntanos un poco sobre ti..."
              />
            </div>
            <div className="divider"></div>

            <div className="flex flex-col gap-4" id="experiencia">
              <TitleDoubleXL>Experiencia laboral</TitleDoubleXL>
              <TextArea
                name="experience"
                placeholder="Agrega cualquier experiencia laboral que creas conveniente"
              />
            </div>
            <div className="divider"></div>
            <div className="flex flex-col gap-4" id="estudios">
              <TitleDoubleXL>Estudios</TitleDoubleXL>
              <TextArea
                name="estudies"
                placeholder="Ingresa tu historia académica, cursos y/o estudios universitarios"
              />
            </div>
            <div className="divider"></div>
            <div className="flex flex-col gap-4" id="habilidades">
              <TitleDoubleXL>Habilidades</TitleDoubleXL>
              <SelectInput
                name="habilities"
                disabledOpt="Añade las habilidades en las que destacas"
              />
            </div>
            <div className="divider"></div>
            <button className="w-full text-primary-content btn btn-primary">
              Actualizar mi perfil
            </button>
          </Form>
        </Formik>
      </div>
      <Footer/>
    </div>
  );
}

export default EditProfileVol;
