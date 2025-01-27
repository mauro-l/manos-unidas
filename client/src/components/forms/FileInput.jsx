function FileInput({ label, altLabel, name }) {
  return (
    <label className="w-full form-control">
      <div className="label">
        <span className="label-text">{label}</span>
        <span className="label-text-alt text-[#374151]">{altLabel}</span>
      </div>
      <input
        type="file"
        className="w-full border-[#D1D5DB] file-input file-input-bordered file-input-accent"
        name={name}
      />
    </label>
  );
}

export default FileInput;
