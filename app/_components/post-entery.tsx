import Link from "next/link";

export default function PostEntry({
  post,
}: {
  post: { id: string; title: string };
}) {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-700">ID: {post.id}</p>
        <Link href={`/posts/${post.id}`}> View Details</Link>
      </div>
    </div>
  );
}
