function EmptyDashed({ children }) {
  return (
    <div
      className={`w-full rounded-lg border border-base-400 border-dashed h-[45vh]`}
    >
      <div className="flex flex-col items-center justify-center w-full h-full gap-6 px-6 text-2xl font-bold leading-6 text-center rounded-lg bg-base-100">
        {children}
      </div>
    </div>
  );
}

export default EmptyDashed;
