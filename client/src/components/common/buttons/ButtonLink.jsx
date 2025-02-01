import { Link } from "react-router-dom";

function ButtonLink({ path, children }) {
  return (
    <Link to={path} role="button" className="font-bold link text-primary">
      {children}
    </Link>
  );
}

export default ButtonLink;
