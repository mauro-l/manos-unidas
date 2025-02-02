import { useField } from "formik";

function InputForm({ label, name, type = "text", disabled, ...props }) {
  const [field, meta] = useField(name);
  return (
    <>
      <label className="w-full form-control">
        {label && (
          <div className="label">
            <span className="label-text">{label}</span>
          </div>
        )}
        <input
          {...field}
          type={type}
          disabled={disabled}
          className={`w-full input ${
            disabled ? "border-danger-content border" : ""
          } input-bordered ${meta.touched && meta.error ? "input-error" : " "}`}
          {...props}
        />
        <div className="label">
          <small className="text-danger-content label-text-alt">
            {meta.touched && meta.error}
          </small>
        </div>
      </label>
    </>
  );
}

export default InputForm;
