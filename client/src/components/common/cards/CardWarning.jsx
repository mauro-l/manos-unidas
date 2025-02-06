function CardWarning({ className, children }) {
  return (
    <div
      className={`w-full p-6 -mt-5 text-warning-content bg-warning rounded-lg flex flex-col lg:flex-row lg:justify-between gap-4 ${className}}`}
    >
      {children}
    </div>
  );
}

export default CardWarning;
