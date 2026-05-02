const SkeletonCard = () => {
  return (
    <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 animate-pulse">
      <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
      <div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
      <div className="h-3 w-2/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
    </div>
  );
};

export default SkeletonCard;