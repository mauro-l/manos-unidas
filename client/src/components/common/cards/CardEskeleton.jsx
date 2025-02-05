function CardEskeleton() {
  return (
    <div className="mx-auto border-2 card bg-base-100">
      <div className="flex flex-col gap-4 w-52">
        <div className="w-full h-32 skeleton"></div>
        <div className="h-4 skeleton w-28"></div>
        <div className="w-full h-4 skeleton"></div>
        <div className="w-full h-4 skeleton"></div>
      </div>
    </div>
  );
}

export default CardEskeleton;
