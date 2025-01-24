import ButtonEdit from "./ButtonEdit.jsx";

function TitleAction({ children }) {
  return (
    <div className="flex items-center justify-between mt-4">
      <h3 className="text-xl font-bold">{children}</h3>
      <ButtonEdit>Editar</ButtonEdit>
    </div>
  );
}

export default TitleAction;
