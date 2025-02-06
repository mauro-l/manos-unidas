import { useRef } from "react";
import { Formik, Form } from "formik";
import { loginSchema } from "../../schemas/auth/loginSchema.js";
import useAuth from "../../hooks/useAuth.js";
import InputForm from "../common/forms/InputForm.jsx";
import ButtonLink from "../common/buttons/ButtonLink.jsx";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/index.routes.js";

const Login = ({ isOpen, onClose }) => {
  const { login, loading, user } = useAuth();
  const navigate = useNavigate();

  const formikRef = useRef();
  const modalRef = useRef();

  const initialValues = {
    email: "",
    password: "",
  };

  // Manejador para cerrar el modal al hacer clic fuera
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    if (formikRef.current) {
      formikRef.current.resetForm();
    }
    onClose();
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { email, password } = values;
      await login(email, password);
      if (user?.role === "fundacion") {
        navigate(ROUTES.FOUNDATION.PUBLICACIONES);
      } else {
        navigate(ROUTES.VOLUNTEER.EXPLORAR);
      }
      handleCloseModal();
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      alert(`Error en el login: ${error}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black bg-opacity-50"
        onClick={handleClickOutside}
      >
        <div
          ref={modalRef}
          className="w-full max-w-md p-6 space-y-4 bg-white rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-3xl font-bold text-neutral">Iniciar sesión</h2>
          <p className="text-neutral">
            Ingresa a tu cuenta con tu dirección de correo electrónico
          </p>

          <Formik
            innerRef={formikRef}
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <InputForm
                  name={"email"}
                  autoComplete="off"
                  placeholder="Email"
                />
                <InputForm
                  type="password"
                  name={"password"}
                  placeholder="Contraseña"
                />

                <ButtonLink path={"#"}>Olvidé mi contraseña</ButtonLink>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-bold btn btn-primary text-primary-content"
                >
                  {loading ? (
                    <span className="loading loading-ring loading-md"></span>
                  ) : (
                    "Entrar"
                  )}
                </button>

                <div className="text-center text-neutral">
                  ¿Aún no tienes cuenta? ¡Creala a continuación!
                </div>

                <div className="divider"></div>

                <div className="items-center justify-center mx-auto space-y-2 text-center">
                  <h4 className="text-sm">
                    ¿Aún no tienes cuenta? ¡Creala a continuación!
                  </h4>
                  <div className="flex justify-center w-full gap-2">
                    <Link
                      to={ROUTES.AUTH.REGISTER_VOLUNTEER}
                      role="button"
                      className="w-1/2 btn btn-outline btn-xs"
                    >
                      Quiero ser voluntario
                    </Link>
                    <Link
                      to={ROUTES.AUTH.REGISTER_FOUNDATION}
                      role="button"
                      className="w-1/2 btn btn-outline btn-xs"
                    >
                      Soy una fundacion
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
