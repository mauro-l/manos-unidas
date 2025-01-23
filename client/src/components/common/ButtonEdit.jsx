import { HiOutlinePencil } from "react-icons/hi2";

function ButtonEdit({ children }) {
  return (
    <button className="bg-white border-black btn btn-sm">
      <HiOutlinePencil />
      {children}
    </button>
  );
}

export default ButtonEdit;
