import { useField } from "formik";

function SelectInput({ label, name, disabledOpt, options = [], ...props }) {
  const [field, meta] = useField(name);
  return (
    <>
      <label className="w-full max-w-xs form-control">
        {label && (
          <div className="label">
            <span className="label-text">{label}</span>
          </div>
        )}
        <select
          {...field}
          className={`select select-bordered ${
            meta.touched && meta.error ? "select-error" : " "
          } `}
          {...props}
        >
          <option disabled selected>
            {disabledOpt}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="label">
          <small className="text-red-500 label-text">
            {meta.touched && meta.error}
          </small>
        </div>
      </label>
    </>
  );
}

export default SelectInput;
