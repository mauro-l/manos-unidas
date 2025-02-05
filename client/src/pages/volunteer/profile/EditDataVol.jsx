import { Form, Formik } from "formik";
import BtnBack from "../../../components/common/buttons/BtnBack.jsx";
import InputForm from "../../../components/common/forms/InputForm.jsx";
import TitleDoubleXL from "../../../components/common/headers/TitleDoubleXL.jsx";
import Banner from "../../../components/layout/Banner.jsx";
import SelectInput from "../../../components/common/forms/SelectInput.jsx";
import FileInput from "../../../components/common/forms/FileInput.jsx";

function EditDataVol() {
  const options = [
    { value: "masc", label: "Masculino" },
    { value: "fem", label: "Femenino" },
    { value: "other", label: "Otro" },
  ];
  return (
    <div>
      <Banner>
        <BtnBack>Volver al perfil</BtnBack>
        <h3>Completa o edita tus datos personales</h3>
      </Banner>
      <div className="px-4 py-10 lg:max-w-[800px] lg:mx-auto">
        <TitleDoubleXL>Datos personales</TitleDoubleXL>
        <Formik>
          <Form>
            <InputForm name="name" label="Nombre" />
            <InputForm name="lastName" label="Apellido" />
            <InputForm type="email" name="email" label="Email" />
            <InputForm
              type="password"
              name="password"
              label="Contraseña actual"
            />
            <InputForm
              type="password"
              name="newPassword"
              label="Contraseña nueva"
            />
            <SelectInput
              label="Género"
              name="genre"
              disabledOpt="Seleccionar"
              options={options}
            />
            <FileInput
              label="Carga tu foto de perfil"
              altLabel="JPG o PNG"
              name="avatar"
            />
            <div className="divider">Ubicacion</div>
            <InputForm label="Pais de residencia" name="country" />
            <InputForm label="Provincia" name="province" />
            <InputForm label="Ciudad" name="city" />
            <button className="w-full mt-6 btn btn-primary text-primary-content">
              Guardar datos personales
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default EditDataVol;
