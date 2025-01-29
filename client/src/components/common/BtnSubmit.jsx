function BtnSubmit({ className, children }) {
  return (
    <button
      type="submit"
      className={`w-full btn btn-primary text-primary-content ${className}`}
    >
      {children}
    </button>
  );
}

export default BtnSubmit;
