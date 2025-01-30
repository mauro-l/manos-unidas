import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import Banner from "@/components/layout/Banner.jsx";
import InputForm from "@/components/common/forms/InputForm.jsx";
import FileInput from "@/components/common/forms/FileInput.jsx";
import axios from "axios";
import { foundEditInfoSchema } from "@/schemas/profile/foundationProfile.js";
import BtnBack from "@/components/common/buttons/BtnBack.jsx";

function EditInfoFnd(id) {
  const [valuesDB, setValuesDB] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFoundation = async (id) => {
      try {
        setLoading(true);
        const response = await axios.get("/data/listado-fundaciones-db.json");
        const foundation = response.data.find(
          (item) => item.fundacion_id === id
        );
        if (foundation) {
          setValuesDB({
            name: foundation.nombre || "",
            number: foundation.nro_registro || "",
            email: foundation.email || "",
            country: foundation.ubicacion?.pais || "",
            state: foundation.ubicacion?.provincia || "",
            city: foundation.ubicacion?.ciudad || "",
            address: foundation.ubicacion?.direccion || "",
            // Agregamos un campo para controlar qué campos están deshabilitados
            disabledFields: {
              name: !!foundation?.nombre,
              number: !!foundation?.nro_registro,
              email: !!foundation?.email,
              country: !!foundation.ubicacion?.pais,
              state: !!foundation.ubicacion?.provincia,
              city: !!foundation.ubicacion?.ciudad,
              address: !!foundation.ubicacion?.direccion,
            },
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getFoundation("FND003");
  }, [id]);

  function getInitialValues() {
    return {
      name: valuesDB?.name || "",
      number: valuesDB?.number || "",
      email: valuesDB?.email || "",
      password: "",
      newPassword: "",
      country: valuesDB?.country || "",
      state: valuesDB?.state || "",
      city: valuesDB?.city || "",
      address: valuesDB?.address || "",
    };
  }

  // Función para determinar si un campo debe estar deshabilitado
  function isFieldDisabled(fieldName) {
    return valuesDB?.disabledFields?.[fieldName] || false;
  }

  const submit = (ex) => {
    console.log(ex);
  };
  return (
    <div>
      <Banner>
        <BtnBack>Volver al perfil</BtnBack>
        <h3>Completa o edita la informacion</h3>
      </Banner>
      <div className="p-4">
        <h3 className="py-6 text-2xl font-semibold">Información básica</h3>
        <div>
          {loading ? (
            <div className="flex items-center justify-center w-full mx-auto">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          ) : (
            <Formik
              initialValues={getInitialValues()}
              validationSchema={foundEditInfoSchema}
              onSubmit={submit}
              validateOnChange={true}
              validateOnBlur={true}
              validateOnMount={false}
              enableReinitialize={true}
            >
              <Form className="flex flex-col">
                <InputForm
                  name="name"
                  label="Nombre de la fundación"
                  disabled={isFieldDisabled("name")}
                />
                <InputForm
                  name="number"
                  label="Número de registro"
                  disabled={isFieldDisabled("number")}
                />
                <InputForm name="email" type="email" label="Email" />
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
                <FileInput
                  label="Carga el logo o una imagen de tu fundación"
                  altLabel="JPG o PNG"
                  name={"fileInput"}
                />
                <div className="divider text-[#9CA3AF]">Ubicación</div>
                <InputForm
                  name="country"
                  label={"País de la fundación"}
                  placeholder="Ingrese tu país"
                  disabled={isFieldDisabled("country")}
                />
                <InputForm
                  name="state"
                  label={"Provincia / Estado"}
                  placeholder="Ingresa tu provincia - estado"
                  disabled={isFieldDisabled("state")}
                />
                <InputForm
                  name="city"
                  label={"Ciudad"}
                  placeholder="Ingresa tu localidad"
                  disabled={isFieldDisabled("city")}
                />
                <InputForm
                  name="address"
                  label={"Dirección del establecimiento"}
                  placeholder="Ingresa la dirección de la sede"
                  disabled={isFieldDisabled("address")}
                />
                <button type="submit" className="py-2 my-6 btn btn-neutral">
                  Guardar información
                </button>
              </Form>
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditInfoFnd;
