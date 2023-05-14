import PostEntry from "@/app/_components/post-entery";

export async function getAllPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
}
export async function getComments() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
  }

export default async function PostPage() {

  const [posts, comments]= await Promise.all([getAllPost(),getComments()])

  return (
    <>
       <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <div className="max-w-4xl mx-auto">
        {posts.map((post: { id: string; title: string }) => (
          <PostEntry key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
