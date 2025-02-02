import { useField } from "formik";

function TextArea({ label, name, placeholder = "", ...props }) {
  const [field, meta] = useField(name);

  return (
    <>
      <label className="w-full form-control">
        {label && (
          <div className="label">
            <span className="label-text">{label}</span>
          </div>
        )}
        <textarea
          {...field}
          className={`textarea textarea-bordered textarea-md leading-5 ${
            meta.touched && meta.error ? "textarea-error" : " "
          } `}
          placeholder={placeholder}
          {...props}
        ></textarea>

        <div className="label">
          <small className="text-danger-content label-text-alt">
            {meta.touched && meta.error}
          </small>
          <span className="label-text-alt text-neutral">
            {field.value ? field.value.length : "0"}/255
          </span>
        </div>
      </label>
    </>
  );
}

export default TextArea;
