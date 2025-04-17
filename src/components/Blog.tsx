
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Polygon's zkEVM and its Impact on Ethereum Scaling",
      excerpt: "An in-depth analysis of Polygon's zkEVM technology and how it's revolutionizing Ethereum scaling solutions.",
      image: "https://firebasestorage.googleapis.com/v0/b/nuhinbd.appspot.com/o/images%2Fblog%2Fblog1.jpg?alt=media&token=61af1e07-18fc-491e-a06d-83ceffc8c23a",
      date: "April 10, 2023",
      readTime: "8 min read",
      category: "Blockchain",
      link: "https://blog.example.com/zkevm-analysis"
    },
    {
      id: 2,
      title: "Building Secure Smart Contracts: Best Practices and Common Pitfalls",
      excerpt: "A comprehensive guide on developing secure smart contracts, highlighting best practices and common vulnerabilities to avoid.",
      image: "https://firebasestorage.googleapis.com/v0/b/nuhinbd.appspot.com/o/images%2Fblog%2Fblog2.jpg?alt=media&token=61af1e07-18fc-491e-a06d-83ceffc8c23a",
      date: "February 22, 2023",
      readTime: "12 min read",
      category: "Smart Contracts",
      link: "https://blog.example.com/secure-contracts"
    },
    {
      id: 3,
      title: "The Future of Cross-Chain Interoperability in Web3",
      excerpt: "Exploring the current landscape and future possibilities of cross-chain communication in the Web3 ecosystem.",
      image: "https://firebasestorage.googleapis.com/v0/b/nuhinbd.appspot.com/o/images%2Fblog%2Fblog3.jpg?alt=media&token=61af1e07-18fc-491e-a06d-83ceffc8c23a",
      date: "January 8, 2023",
      readTime: "10 min read",
      category: "Web3",
      link: "https://blog.example.com/cross-chain-future"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-polygon-secondary">
            My Blog Posts
          </h2>
          <div className="w-20 h-1 bg-polygon-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Technical insights, tutorials, and thoughts on blockchain technology, software development, and the future of Web3.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full animate-slide-in" style={{ animationDelay: `${post.id * 0.1}s` }}>
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-polygon-primary text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-polygon-secondary line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <Button 
                  variant="link" 
                  className="p-0 text-polygon-primary font-medium hover:text-polygon-primary/80 justify-start"
                  asChild
                >
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-polygon-primary text-polygon-primary hover:bg-polygon-primary hover:text-white"
            asChild
          >
            <a href="https://blog.example.com">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
