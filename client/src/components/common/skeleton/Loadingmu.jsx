import favicon from "/Hand-In-Hand.ico";

function LoadingMU() {
  return (
    <div className="flex items-center justify-center gap-2 py-32 text-xl font-bold text-primary animate-pulse">
      <img src={favicon} alt="favicon" />
      Cargando...
    </div>
  );
}

export default LoadingMU;
