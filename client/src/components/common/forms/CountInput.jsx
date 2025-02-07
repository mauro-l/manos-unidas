import { useField } from "formik";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

function CountInput({
  label,
  name,
  disabled = false,
  min = 0,
  max = Infinity,
  ...props
}) {
  const [field, meta, helpers] = useField(name);

  const incrementCount = () => {
    if (!disabled) {
      const currentValue =
        field.value === "" || field.value === null || field.value === undefined
          ? 0
          : Number(field.value);

      if (currentValue < max) {
        helpers.setValue(currentValue + 1);
      }
    }
  };

  const decrementCount = () => {
    if (!disabled) {
      const currentValue =
        field.value === "" || field.value === null || field.value === undefined
          ? 0
          : Number(field.value);

      if (currentValue > min) {
        helpers.setValue(currentValue - 1);
      }
    }
  };

  return (
    <>
      <label className="w-full form-control">
        {label && (
          <div className="label">
            <span className="label-text">{label}</span>
          </div>
        )}
        <div className="relative flex w-full">
          <button
            type="button"
            onClick={decrementCount}
            disabled={disabled}
            className="absolute z-30 w-12 top-4 left-5 text-neutral-focus"
          >
            <HiMiniMinus />
          </button>
          <input
            {...field}
            type="number"
            disabled={disabled}
            readOnly
            className={`w-full px-12 bg-white input text-center ${
              disabled ? "border-danger-content border" : ""
            } input-bordered ${
              meta.touched && meta.error ? "input-error" : ""
            }`}
            {...props}
          />
          <button
            type="button"
            onClick={incrementCount}
            disabled={disabled}
            className="absolute z-30 w-12 -right-4 top-4 text-neutral-focus"
          >
            <HiMiniPlus />
          </button>
        </div>
        <div className="label">
          <small className="text-danger-content label-text-alt">
            {meta.touched && meta.error}
          </small>
        </div>
      </label>
    </>
  );
}

export default CountInput;
