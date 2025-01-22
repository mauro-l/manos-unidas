import { useFormik } from "formik";
import { foundationRegisterSchema } from "../../schemas/auth/registerSchema.js";

const initialValues = {
  name: "",
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function FoundationRegisterForm() {
  const handleRegister = (values) => {
    console.log(values);
  };

  const { handleChange, errors, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: handleRegister,
    validationSchema: foundationRegisterSchema,
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
        <input
          type="text"
          className="grow"
          placeholder="Nombre de la fundación"
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
          errors.number && "input-error"
        }`}
      >
        <input
          type="text"
          className="grow"
          placeholder="Número de registro"
          name="number"
          onChange={handleChange}
        />
      </label>
      <small className="text-red-500">
        {" "}
        <span className={`${errors.number ? "opacitiy-100" : "opacity-0"}`}>
          ❌
        </span>{" "}
        {errors.number}
      </small>
      <label
        className={`flex items-center gap-2 input input-bordered ${
          errors.email && "input-error"
        }`}
      >
        <input
          type="text"
          className="grow"
          placeholder="Email"
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
        <input
          type="password"
          className="grow"
          placeholder="Contraseña"
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
        <input
          type="password"
          className="grow"
          placeholder="Repetir Contraseña"
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
        <button className="w-full mt-3 btn btn-neutral btn-sm min-h-10">
          Registrar fundación
        </button>
      </div>
    </form>
  );
}

export default FoundationRegisterForm;
