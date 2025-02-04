function MiniCardSkt() {
  return (
    <article className="w-full p-4 space-y-4 border rounded-lg border-base-300">
      <div className="flex flex-col gap-4">
        <div className="h-4 skeleton w-28"></div>
        <div className="w-full h-4 skeleton"></div>
      </div>
    </article>
  );
}

export default MiniCardSkt;
