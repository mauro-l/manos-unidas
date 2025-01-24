import { useField } from "formik";

function InputForm({ label, name, type = "text", ...props }) {
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
          className={`w-full input input-bordered ${
            meta.error ? "input-error" : " "
          }`}
          {...props}
        />
      </label>
      <small className="text-red-500">
        {" "}
        <span className={`${meta.error ? "opacitiy-100" : "opacity-0"}`}>
          ❌
        </span>{" "}
        {meta.error}
      </small>
    </>
  );
}

export default InputForm;
