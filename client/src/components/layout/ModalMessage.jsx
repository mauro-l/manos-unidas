import { Form, Formik } from "formik";
import InputForm from "../common/forms/InputForm.jsx";
import TextArea from "../common/forms/TextArea.jsx";
import { messageSchema } from "../../schemas/MessageSchema.js";
import { HiOutlineXMark } from "react-icons/hi2";

function ModalMessage({ isOpen, onClose }) {
  if (!isOpen) return null;

  const initialValues = {
    message: "",
    firm: "",
  };

  const sendMessage = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="fixed inset-0 top-0 flex items-center justify-center !mt-0 bg-opacity-50 bg-black/10">
        <div className="modal-box">
          <button
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            onClick={onClose}
          >
            <HiOutlineXMark />
          </button>
          <h3 className="text-3xl font-bold text-neutral leading-tree">
            Nuevo mensaje
          </h3>
          <p className="py-4">
            Puedes enviar un mensaje a todos los voluntarios inscritos en la
            actividad.
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={messageSchema}
            validateOnChange={true}
            validateOnBlur={true}
            validateOnMount={false}
            onSubmit={(values, { resetForm }) => {
              sendMessage(values);
              resetForm();
              onClose();
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <TextArea
                  label={"mensaje"}
                  name={"message"}
                  /* placeholder={
                  "Escribe el mensaje para los voluntarios inscritos, para dar un aviso, recordarles algo o al cambiar la fecha de inicio."
                } */
                />
                <InputForm label={"Firma"} name={"firm"} />
                <button
                  type="submit"
                  className="w-full font-semibold btn btn-primary text-primary-content"
                >
                  Enviar mensaje
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default ModalMessage;
