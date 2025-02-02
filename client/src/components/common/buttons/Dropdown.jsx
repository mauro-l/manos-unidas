import { HiOutlineEllipsisVertical } from "react-icons/hi2";

function Dropdown({ icon: Icon = HiOutlineEllipsisVertical, options = [] }) {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="p-0 btn-xs btn-ghost">
        <Icon className="text-xl" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] p-0 px-2 shadow"
      >
        {options.map(({ label, icon: OptionIcon, onClick, hidden }, index) => (
          <li key={index} className={hidden ? "hidden" : ""}>
            <button
              onClick={onClick}
              className="inline-flex p-0 text-sm font-normal text-nowrap flex-nowrap btn btn-ghost text-neutral"
            >
              {OptionIcon && <OptionIcon className="text-lg text-secondary" />}
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
