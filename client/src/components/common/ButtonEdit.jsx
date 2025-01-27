import { HiOutlinePencil } from "react-icons/hi2";
import { Link } from "react-router-dom";

function ButtonEdit({ href, children }) {
  return (
    <Link to={href} role="button" className="bg-white border-black btn btn-sm">
      <HiOutlinePencil />
      {children}
    </Link>
  );
}

export default ButtonEdit;
