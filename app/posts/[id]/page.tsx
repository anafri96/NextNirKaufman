import styles from "./post.module.css"

export async function getPostById(postId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (!res.ok) {
    throw new Error("Somethimg wrong");
  }

  return await res.json();
}

export default async function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getPostById(id);
//   console.log(post, "anan");
  return (
    <>
       <div>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <p className={styles.red}>ANA</p>
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-700">ID: {post.id}</p>
      </div>
    </div>
    </>
  );
}
