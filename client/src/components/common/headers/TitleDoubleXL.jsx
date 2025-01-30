function TitleDoubleXL({ className, children }) {
  return (
    <h3 className={`text-2xl font-bold leading-6 text-neutral ${className}`}>
      {children}
    </h3>
  );
}

export default TitleDoubleXL;
