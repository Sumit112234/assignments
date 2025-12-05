
import Link from 'next/link';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return res.json();
}

export default async function BlogsPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Blog Explorer
          </h1>
          <p className="text-gray-600 text-xl">Discover amazing stories and insights</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
            >
              <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300 min-h-[3.5rem]">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3 min-h-[4.5rem]">
                  {post.body.substring(0, 30)}...
                </p>
                <Link
                  href={`/blogs/${post.id}`}
                  className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 hover:gap-4 transition-all duration-300 group/link"
                >
                  Read More
                  <span className="transform group-hover/link:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}