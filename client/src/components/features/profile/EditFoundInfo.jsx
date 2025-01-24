import { Form, Formik } from "formik";
import InputForm from "../../forms/InputForm.jsx";
import { foundEditInfoSchema } from "../../../schemas/profile/foundationProfile.js";

const initialValues = {
  name: "",
};

const submit = (ex) => {
  console.log(ex);
};

function EditFoundInfo() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={foundEditInfoSchema}
        onSubmit={submit}
      >
        <Form className="flex flex-col">
          <InputForm
            name="name"
            label="Nombre de la fundación"
            value="Sarasa"
            disabled
          />
          <InputForm
            name="number"
            label="Número de registro"
            value="45648979456"
            disabled
          />
          <InputForm
            name="email"
            type="email"
            label="Email"
            value="correo@example.com"
          />
          <InputForm
            name="password"
            label="Contraseña actual"
            placeholder="Ingrese la contraseña actual"
          />
          <InputForm
            name="newPassword"
            label="Contraseña nueva"
            placeholder="Ingresa la nueva contraseña"
          />
          <button type="submit" className="py-2 btn btn-neutral">
            ok
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default EditFoundInfo;
