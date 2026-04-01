import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
  title: 'Blog - Gizmos Answer Key',
  description: 'Learn how to use Gizmos Answer Key effectively for better learning outcomes.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-2xl font-bold text-blue-600 hover:text-blue-700 mb-2">
                  {post.title}
                </h2>
              </Link>
              
              <div className="text-sm text-gray-500 mb-4">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })} · {post.author}
              </div>
              
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              
              <Link 
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
