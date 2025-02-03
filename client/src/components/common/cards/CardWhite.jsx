function CardWhite({ className, children }) {
  return (
    <div
      className={`w-full p-6 mb-4 -mt-5 rounded-lg bg-base-100 ${className}`}
    >
      {children}
    </div>
  );
}

export default CardWhite;
