import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  const posts = [
    {
      title: "Building an AI-Powered Code Generator with Python and Groq",
      excerpt: "This project leverages Groq’s LLM API to generate Python code based on natural language prompts.",
      date: "February 05, 2025",
      image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*vxs7FE_aN_AO5k6iwO3uKQ.png",
      category: "Technology",
      url:"https://medium.com/@we4tech10/building-an-ai-powered-code-generator-with-python-and-groq-572edb49a6b1"
    },
    {
      title: "Building Intelligent RAG Systems: A Comprehensive Guide",
      excerpt: "This guide will walk you through creating a robust RAG system from scratch, focusing on practical implementation and best practices.",
      date: "February 05, 2025",
      image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*MhPqObewSGbyDmKdif3RrQ.png",
      category: "Machine Learning",
      url:"https://medium.com/@we4tech10/building-intelligent-rag-systems-a-comprehensive-guide-1c8b40c81034"
    },
    {
      title: "The Mathematics Behind Transformer Architecture",
      excerpt: "At their core, transformers are sequence-to-sequence models that use self-attention mechanisms to process input data in parallel. ",
      date: "February 05, 2025",
      image: "https://media.licdn.com/dms/image/v2/D4E12AQH_CSgcqxRWtg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1738740589027?e=1744243200&v=beta&t=4sLmWg2Xqw3LrPSnYnhq7UP75s5YlNZ7XKAgVRL8pSA",
      category: "AI Mathematics",
      url:"https://www.linkedin.com/pulse/mathematics-behind-transformer-architecture-deep-dive-we4tech-ai-dqbme"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <ParallaxSection bgImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7">
        <div className="min-h-[60vh] flex items-center justify-center text-center px-4 bg-gradient-to-t from-background/80 to-transparent">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient animate-fade-in">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Insights and updates from the world of AI
            </p>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <article 
                key={index}
                className="group bg-background/80 backdrop-blur-sm rounded-xl border border-muted/20 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-primary/10 overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={`Illustration for ${post.title}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-medium">{post.category}</span>
                    <time className="text-muted-foreground">{post.date}</time>
                  </div>
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <Button 
                  variant="link" 
                  className="px-0 group-hover:underline"
                  onClick={() => window.open(post.url, '_blank', 'noopener,noreferrer')}
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-6 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Stay Updated with AI Trends
          </h2>
          <p className="text-xl text-muted-foreground">
            Subscribe to our newsletter for the latest insights in artificial intelligence
          </p>
          <Button 
            size="lg" 
            className="text-lg hover:scale-105 transition-transform"
            onClick={() => navigate('/contact')}
            aria-label="Subscribe to newsletter"
          >
            Subscribe Now
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Button>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .text-gradient {
          background: linear-gradient(45deg, #4F46E5 0%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default Blog;