export const ProductsSkeleton = () => {
  return (
    <div className="size-full p-4 border-2 border-solid border-slate-600 rounded-xl">
      <h3 className="bg-gray-300 rounded mb-5 h-8 w-44"></h3>
      <div className="flex flex-wrap gap-1 mb-4 animate-pulse">
        <div className="bg-gray-300 rounded h-8 w-24"></div>
      </div>
    </div>
  );
};