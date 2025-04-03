
import { Calendar } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Optimizing React.js Applications for Better Performance",
      excerpt: "Learn how to improve your React application's performance with these practical tips and techniques.",
      date: "April 1, 2025",
      category: "React.js",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Building Custom WordPress Themes: A Comprehensive Guide",
      excerpt: "Discover the process of creating custom WordPress themes from scratch and best practices to follow.",
      date: "March 25, 2025",
      category: "WordPress",
      image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2071&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Getting Started with Tailwind CSS: Tips and Tricks",
      excerpt: "An introduction to Tailwind CSS and how to leverage its utility-first approach for rapid UI development.",
      date: "March 15, 2025",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=2032&auto=format&fit=crop"
    },
  ];

  return (
    <>
      <AnimatedBackground />
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader 
            title="Blog" 
            subtitle="Thoughts, tutorials, and insights on web development"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="bg-secondary/40 backdrop-blur-sm rounded-lg overflow-hidden card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-portfolio-700/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold text-portfolio-300 hover:text-portfolio-400 transition-colors mb-3">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-flex items-center text-portfolio-400 hover:text-portfolio-300 mt-4 text-sm font-medium transition-colors"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
