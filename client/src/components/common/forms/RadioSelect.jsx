import { useState, useRef } from "react";
import { options } from "@/utils/activityOptions.js";

function RadioSelect({ label, name, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <div className="w-full">
      {label && <label className="block mb-2 text-sm">{label}</label>}

      <div
        className="relative"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
      >
        <div className="flex items-center justify-between cursor-pointer select select-bordered">
          <span>{value || "Seleccione una categoría"}</span>
        </div>

        {isOpen && (
          <ul
            ref={dropdownRef}
            className="absolute left-0 right-0 z-10 p-2 mt-2 overflow-y-auto border rounded-lg shadow-lg border-base-300 bg-neutral-content max-h-60"
          >
            {options.map((option) => (
              <li
                key={option.value}
                className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  onChange(option.value); // Actualiza Formik
                  setIsOpen(false);
                }}
              >
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  className="radio checked:bg-primary"
                  checked={value === option.value}
                  readOnly
                />
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* {isOpen && (
  <ul
    ref={dropdownRef} // 🔥 Agregamos la referencia aquí
    className="absolute left-0 right-0 z-10 p-2 mt-2 overflow-y-auto border rounded-lg shadow-lg border-base-300 bg-neutral-content max-h-60"
  >
    {options.map((option) => (
      <li
        key={option.value}
        className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
        onClick={() => {
          setSelectedOption(option.label);
          setIsOpen(false); // Cierra el dropdown al seleccionar
        }}
      >
        <input
          type="radio"
          name={name}
          value={option.value}
          className="radio checked:bg-primary"
          checked={selectedOption === option.label}
          onChange={() => setSelectedOption(option.label)}
        />
        {option.label}
      </li>
    ))}
  </ul>
)} */
export default RadioSelect;
