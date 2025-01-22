function Banner({ children }) {
  return (
    <div>
      <div className="px-4 pt-20 pb-24 text-3xl font-semibold text-white bg-black">
        {children}
      </div>
    </div>
  );
}

export default Banner;
