const Skeleton = ({ height = "h-6", width = "w-full", className = "" }) => (
  <div className={`animate-pulse bg-gray-700 rounded ${height} ${width} ${className}`} />
);

export default Skeleton;
