import { HiOutlinePencil } from "react-icons/hi2";
import { Link } from "react-router-dom";

function ButtonEdit({ href, children }) {
  return (
    <Link
      to={href}
      role="button"
      className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-bold bg-white border-black btn btn-sm"
    >
      <HiOutlinePencil className="text-lg" />
      {children}
    </Link>
  );
}

export default ButtonEdit;
