function FileInput({ label, altLabel, name }) {
  return (
    <label className="w-full form-control">
      <div className="label">
        <span className="label-text">{label}</span>
        <span className="label-text-alt">{altLabel}</span>
      </div>
      <input
        type="file"
        className="w-full border-base-300 file-input file-input-bordered file-input-secondary"
        name={name}
      />
    </label>
  );
}

export default FileInput;
