"use client";

export default function PostError() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">404 Error</h2>
          <p className="text-gray-700">
            Oops! The page you are looking for could not be found.
          </p>
        </div>
      </div>
    </>
  );
}
