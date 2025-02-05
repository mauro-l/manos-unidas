function TitleDoubleXL({ className, children }) {
  return (
    <h3
      className={`text-2xl lg:text-4xl lg:leading-9 font-bold leading-6 text-neutral ${className}`}
    >
      {children}
    </h3>
  );
}

export default TitleDoubleXL;
