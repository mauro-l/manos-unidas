import { useFormik } from "formik";
import { volunteerRegisterSchema } from "../../schemas/auth/registerSchema.js";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function VolunteerRegisterForm() {
  const handleRegister = (values) => {
    console.log(values);
  };

  const { handleChange, errors, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: handleRegister,
    validationSchema: volunteerRegisterSchema,
    validateOnMount: false,
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <form className="space-y-1" onSubmit={handleSubmit}>
      <label
        className={`flex items-center gap-2 input input-bordered ${
          errors.name && "input-error"
        }`}
      >
        Nombre
        <input
          type="text"
          className="grow"
          placeholder="Daisy"
          name="name"
          onChange={handleChange}
        />
      </label>
      <small className="text-red-500">
        {" "}
        <span className={`${errors.name ? "opacitiy-100" : "opacity-0"}`}>
          ❌
        </span>{" "}
        {errors.name}
      </small>
      <label
        className={`flex items-center gap-2 input input-bordered ${
          errors.lastName && "input-error"
        }`}
      >
        Apellido
        <input
          type="text"
          className="grow"
          placeholder="UI"
          name="lastName"
          onChange={handleChange}
        />
      </label>
      <small className="text-red-500">
        {" "}
        <span className={`${errors.lastName ? "opacitiy-100" : "opacity-0"}`}>
          ❌
        </span>{" "}
        {errors.lastName}
      </small>
      <label
        className={`flex items-center gap-2 input input-bordered ${
          errors.email && "input-error"
        }`}
      >
        Email
        <input
          type="text"
          className="grow"
          placeholder="daisy@site.com"
          name="email"
          onChange={handleChange}
        />
      </label>
      <small className="text-red-500">
        {" "}
        <span className={`${errors.email ? "opacitiy-100" : "opacity-0"}`}>
          ❌
        </span>{" "}
        {errors.email}
      </small>
      <label
        className={`flex items-center gap-2 input input-bordered ${
          errors.password && "input-error"
        }`}
      >
        Contraseña
        <input
          type="password"
          className="grow"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
      </label>
      <small className="text-red-500">
        {" "}
        <span className={`${errors.password ? "opacitiy-100" : "opacity-0"}`}>
          ❌
        </span>{" "}
        {errors.password}
      </small>
      <label
        className={`flex items-center gap-2 input input-bordered ${
          errors.confirmPassword && "input-error"
        }`}
      >
        Repetir Contraseña
        <input
          type="password"
          className="grow"
          placeholder="password"
          name="confirmPassword"
          onChange={handleChange}
        />
      </label>
      <small className="text-red-500">
        {" "}
        <span
          className={`${errors.confirmPassword ? "opacitiy-100" : "opacity-0"}`}
        >
          ❌
        </span>{" "}
        {errors.confirmPassword}
      </small>
      <div>
        <button className="w-full mt-3 text-white btn btn-primary btn-sm min-h-10">
          Registrarme como voluntario
        </button>
      </div>
    </form>
  );
}

export default VolunteerRegisterForm;
