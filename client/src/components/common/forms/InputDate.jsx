import { useField, useFormikContext } from "formik";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { HiCalendarDays } from "react-icons/hi2";

// Registramos el idioma español
registerLocale("es", es);

function DatePickerInput({
  label,
  name,
  placeholder = "Selecciona una fecha límite",
}) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <div className="w-full mb-5">
      {label && (
        <label className="block mb-2 text-sm text-neutral">{label}</label>
      )}
      <div className="relative">
        <DatePicker
          {...field}
          selected={field.value}
          onChange={(date) => setFieldValue(name, date)}
          locale="es"
          dateFormat="dd/MM/yyyy"
          placeholderText={placeholder}
          className="w-full px-4 py-3 pl-4 pr-10 text-white border rounded-lg border-base-300 bg-base-100 focus:ring-2 focus:ring-base-400 focus:border-base-400"
          autoComplete="off"
          wrapperClassName="w-full"
          calendarClassName="bg-gray-800 border-gray-700 text-white"
          dayClassName={(date) => "text-white hover:bg-gray-700"}
        />
        <HiCalendarDays className="absolute w-5 h-5 transform -translate-y-1/2 text-neutral-focus right-3 top-1/2" />
      </div>
      {meta.touched && meta.error && (
        <div className="mt-1 text-sm text-danger-content">{meta.error}</div>
      )}
    </div>
  );
}

export default DatePickerInput;
