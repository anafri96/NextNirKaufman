export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-blue-500"></div>
        <p className="text-gray-700 mt-4">Loading...</p>
      </div>
    </div>
  );
}
