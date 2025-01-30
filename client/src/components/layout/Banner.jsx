function Banner({ color, children }) {
  return (
    <div
      className={`px-4 pt-20 pb-24 text-3xl font-bold text-neutral-content leading-tree bg-base-content ${
        !color ? "bg-base-content" : color
      }`}
    >
      {children}
    </div>
  );
}

export default Banner;
