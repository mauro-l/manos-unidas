import { Form, Formik } from "formik";
import InputForm from "../../forms/InputForm.jsx";
import TitleDoubleXL from "../../common/TitleDoubleXL.jsx";

function EditFoundProfile() {
  return (
    <div>
      <Formik>
        <Form>
          <InputForm
            name="description"
            label="Sobre la fundación"
            placeholder="Escribe una breve descripción sobre la fundación, su historia, su propósito..."
            type="textarea"
          />
          <InputForm
            name="activityArea"
            label="Sobre la fundación"
            placeholder="Seleccionar"
          />

          <div>
            <TitleDoubleXL>Datos de contacto</TitleDoubleXL>
            <p>
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
          <InputForm
            name="donationLink"
            label="Link para donaciones"
            placeholder="Ingresa el enlace para recibir donaciones"
          />
        </Form>
      </Formik>
    </div>
  );
}

export default EditFoundProfile;
