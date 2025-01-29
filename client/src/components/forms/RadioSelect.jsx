import { useState } from "react";
import { options } from "../../utils/activityOptions.js";

function RadioSelect({ label, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium">{label}</label>
      )}

      {/* Dropdown Toggle */}
      <div
        className="relative"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
      >
        <div
          className="flex items-center justify-between cursor-pointer select select-bordered"
          onClick={(e) =>
            e.currentTarget.nextSibling.classList.toggle("hidden")
          }
        >
          <span>{selectedOption || "Seleccione una opción"}</span>
        </div>

        {/* Dropdown Options */}
        {isOpen && (
          <ul className="absolute left-0 right-0 z-10 p-2 mt-2 overflow-y-auto border rounded-lg shadow-lg border-base-300 bg-neutral-content max-h-60">
            {options.map((option) => (
              <li
                key={option.value}
                className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedOption(option.label)}
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
        )}
      </div>
    </div>
  );
}

export default RadioSelect;
