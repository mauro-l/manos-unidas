import { useField } from "formik";

function InputForm({ label, name, type = "text", disabled, ...props }) {
  const [field, meta] = useField(name);
  return (
    <>
      <label className="w-full form-control">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input
          {...field}
          type={type}
          disabled={disabled}
          className={`w-full input ${
            disabled ? "border-red-500 border text-yellow-400" : ""
          } input-bordered ${meta.touched && meta.error ? "input-error" : " "}`}
          {...props}
        />
      </label>
      <small className="text-red-500">
        {" "}
        <span
          className={`${
            meta.touched && meta.error ? "opacitiy-100" : "opacity-0"
          }`}
        >
          ❌
        </span>{" "}
        {meta.touched && meta.error}
      </small>
    </>
  );
}

export default InputForm;
