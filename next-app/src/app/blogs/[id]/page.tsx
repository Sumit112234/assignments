import Link from 'next/link';
import { ArrowLeft, User, Calendar, BookOpen } from 'lucide-react';

type Props = {
  params: { id: string };
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Author = {
  id: number;
  name: string;
  email: string;
  username: string;
};

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 } 
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  
  return res.json();
}

async function getAuthor(userId: number): Promise<Author> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    next: { revalidate: 3600 } 
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch author');
  }
  
  return res.json();
}

export default async function BlogDetailPage({ params }: Props) {
    // console.log(params)
    let para = await params;
  const post = await getPost(para.id);

  const author = await getAuthor(post.userId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-purple-600 font-semibold mb-8 hover:text-purple-700 hover:gap-3 transition-all duration-300 group"
        >
          <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Blogs
        </Link>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
          <div className="h-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
          
          <div className="p-8 md:p-12 space-y-8">
            {/* Author Info */}
            <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <User size={28} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-lg">{author.name}</p>
                <p className="text-sm text-gray-500">@{author.username}</p>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-8 text-gray-500 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <BookOpen size={20} className="text-purple-500" />
                <span className="text-sm font-medium">5 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-purple-500" />
                <span className="text-sm font-medium">Dec 5, 2025</span>
              </div>
            </div>

            {/* Body Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-purple-600 first-letter:mr-2 first-letter:float-left">
                {post.body}
              </p>
            </div>

            {/* Author Card */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6">About the Author</h3>
              <div className="flex items-start gap-4 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 hover:border-purple-200 transition-colors duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <User size={40} className="text-white" />
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-gray-800 text-xl">{author.name}</p>
                  <p className="text-purple-600 font-medium">{author.email}</p>
                  <p className="text-gray-600 leading-relaxed">
                    Writer and creative thinker sharing insights on life, technology, and everything in between.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}