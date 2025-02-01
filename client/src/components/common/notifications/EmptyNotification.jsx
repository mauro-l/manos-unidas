function EmptyNotification() {
  return (
    <div className="w-full rounded-lg border border-base-400 border-dashed h-[45vh]">
      <div className="flex items-center justify-center w-full h-full px-6">
        <p className="text-2xl font-bold text-center">
          ¡No tienes ninguna notificación!
        </p>
      </div>
    </div>
  );
}

export default EmptyNotification;
