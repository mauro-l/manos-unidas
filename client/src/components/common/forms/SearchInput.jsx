import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function SearchInput() {
  return (
    <label className="flex items-center w-full gap-2 input input-bordered">
      <input
        type="text"
        className="grow"
        placeholder="Buscar palabras claves u organizaciones..."
      />
      <HiOutlineMagnifyingGlass />
    </label>
  );
}

export default SearchInput;
