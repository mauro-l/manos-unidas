function Banner({ color = "bg-base-content", children }) {
  return (
    <div
      className={`px-4 pt-20 pb-24 text-3xl lg:text-6xl font-bold lg:font-semibold text-neutral-content leading-tree bg-base-content ${color}`}
    >
      <div className="container lg:mx-auto">{children}</div>
    </div>
  );
}

export default Banner;
