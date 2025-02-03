import { useField } from "formik";
import { useRef } from "react";

function FileInput({ label, altLabel, name }) {
  const [field, meta, helpers] = useField(name);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    helpers.setValue(file || "");
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <label className="w-full my-2 form-control">
      <div className="label">
        <span className="label-text">{label}</span>
        <span className="label-text-alt text-base-400">{altLabel}</span>
      </div>
      <div className="flex items-center gap-2 -mt-1 bg-white border rounded-lg border-base-300">
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        <button
          type="button"
          onClick={handleClick}
          className="px-4 py-2 text-white rounded-l-lg bg-secondary hover:bg-green-600"
        >
          Explorar
        </button>
        <span className="text-sm text-base-400">
          {field.value
            ? field.value.name
            : "No se ha seleccionado ningún archivo"}
        </span>
      </div>
      {meta.touched && meta.error && (
        <span className="mt-1 text-sm text-danger-content">{meta.error}</span>
      )}
    </label>
  );
}

export default FileInput;
