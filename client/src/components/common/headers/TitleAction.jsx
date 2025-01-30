import ButtonEdit from "../buttons/ButtonEdit.jsx";

function TitleAction({ href, children }) {
  return (
    <div className="flex items-center justify-between mt-4">
      <h3 className="text-xl font-bold">{children}</h3>
      <ButtonEdit href={href}>Editar</ButtonEdit>
    </div>
  );
}

export default TitleAction;
