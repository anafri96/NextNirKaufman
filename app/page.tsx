import Image from "next/image";

export default function Home() {
  console.log("ana");

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-4">Blog Post Title</h2>
      <p className="text-gray-700 mb-4">
        Ana Next Courses
      </p>
      <p className="text-gray-700 mb-4">
        #Nir Kaufman
      </p>
    </div>
  );
}
