
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Github, ExternalLink, X } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "blockchain", name: "Blockchain" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile" },
  ];

  const projects = [
    {
      id: 1,
      title: "Polygon Bridge Explorer",
      description: "A comprehensive explorer for monitoring and analyzing transactions across the Polygon bridge.",
      category: "blockchain",
      image: "https://firebasestorage.googleapis.com/v0/b/nuhinbd.appspot.com/o/images%2Fprojects%2Fproject1.jpg?alt=media&token=61af1e07-18fc-491e-a06d-83ceffc8c23a",
      tags: ["React", "Ethereum", "Polygon", "The Graph"],
      link: "https://example.com/project1",
      github: "https://github.com/nuhin13/project1",
      fullDescription: "Led the development of a user-friendly bridge explorer to improve transparency and user experience for cross-chain transactions between Ethereum and Polygon. The application provides real-time monitoring, detailed transaction history, and analytics that help users understand and resolve issues with their bridge transactions.",
      contribution: [
        "Architected the overall application structure following best practices",
        "Implemented real-time transaction monitoring using The Graph and Polygon APIs",
        "Built a robust error reporting system to help users troubleshoot failed transactions",
        "Optimized performance to handle large transaction volumes with minimal latency",
        "Led a team of 3 developers and coordinated with the design team for UI implementation"
      ]
    },
    {
      id: 2,
      title: "DeFi Dashboard",
      description: "A unified dashboard for managing DeFi investments across multiple protocols and blockchains.",
      category: "blockchain",
      image: "https://firebasestorage.googleapis.com/v0/b/nuhinbd.appspot.com/o/images%2Fprojects%2Fproject2.jpg?alt=media&token=61af1e07-18fc-491e-a06d-83ceffc8c23a",
      tags: ["React", "Web3.js", "DeFi", "Multiple Chains"],
      link: "https://example.com/project2",
      github: "https://github.com/nuhin13/project2",
      fullDescription: "Created a comprehensive DeFi dashboard that aggregates data from multiple protocols across different blockchains, providing users with a unified view of their investments, yields, and opportunities. The platform supports portfolio tracking, yield farming analytics, and smart notifications for important events.",
      contribution: [
        "Designed and implemented cross-chain data aggregation system",
        "Developed yield optimization algorithms to suggest best investment strategies",
        "Integrated with 15+ DeFi protocols across 5 different blockchains",
        "Created a responsive UI that works seamlessly on both desktop and mobile",
        "Implemented robust security measures to protect user data and wallet connections"
      ]
    },
    {
      id: 3,
      title: "NFT Marketplace",
      description: "A feature-rich NFT marketplace supporting multiple collections and creator royalties.",
      category: "blockchain",
      image: "https://firebasestorage.googleapis.com/v0/b/nuhinbd.appspot.com/o/images%2Fprojects%2Fproject3.jpg?alt=media&token=61af1e07-18fc-491e-a06d-83ceffc8c23a",
      tags: ["Next.js", "Solidity", "IPFS", "ERC-721"],
      link: "https://example.com/project3",
      github: "https://github.com/nuhin13/project3",
      fullDescription: "Built a complete NFT marketplace that allows users to mint, buy, sell, and auction digital collectibles. The platform features creator royalties, collection verification, and advanced discovery tools to help users find rare items across different collections.",
      contribution: [
        "Developed smart contracts for NFT minting, marketplace functionality, and auctions",
        "Created a gas-efficient royalty distribution system for creators",
        "Built a metadata management system using IPFS for decentralized storage",
        "Implemented search and discovery features with advanced filtering options",
        "Designed and implemented the bidding and auction system"
      ]
    },
    {
      id: 4,
      title: "HealthChain App",
      description: "A mobile application for secure medical record management using blockchain technology.",
      category: "mobile",
      image: "https://firebasestorage.googleapis.com/v0/b/nuhinbd.appspot.com/o/images%2Fprojects%2Fproject4.jpg?alt=media&token=61af1e07-18fc-491e-a06d-83ceffc8c23a",
      tags: ["React Native", "Blockchain", "Healthcare", "Privacy"],
      link: "https://example.com/project4",
      github: "https://github.com/nuhin13/project4",
      fullDescription: "Developed a mobile application that leverages blockchain technology to secure and manage medical records. The app gives patients full control over their health data, allowing them to selectively share information with healthcare providers while maintaining a comprehensive and immutable record of their medical history.",
      contribution: [
        "Led the architecture design focusing on privacy and security",
        "Developed the core React Native application with offline capabilities",
        "Implemented a permission system for granular data access control",
        "Created a blockchain-based audit trail for all data access events",
        "Worked with healthcare professionals to ensure the app met industry standards"
      ]
    },
    {
      id: 5,
      title: "Supply Chain Tracking System",
      description: "An end-to-end supply chain tracking platform using blockchain for transparency and authenticity.",
      category: "web",
      image: "https://firebasestorage.googleapis.com/v0/b/nuhinbd.appspot.com/o/images%2Fprojects%2Fproject5.jpg?alt=media&token=61af1e07-18fc-491e-a06d-83ceffc8c23a",
      tags: ["Angular", "Hyperledger Fabric", "IoT", "Supply Chain"],
      link: "https://example.com/project5",
      github: "https://github.com/nuhin13/project5",
      fullDescription: "Created a supply chain tracking system that uses blockchain technology to ensure transparency and authenticity throughout the entire supply chain. The platform integrates with IoT devices for automated tracking and provides stakeholders with real-time visibility into product movement, condition, and authenticity verification.",
      contribution: [
        "Designed the blockchain architecture using Hyperledger Fabric",
        "Developed smart contracts for chain-of-custody validation",
        "Created integration APIs for IoT devices and existing ERP systems",
        "Built analytics dashboards for supply chain optimization",
        "Implemented QR-based product authentication for end consumers"
      ]
    },
    {
      id: 6,
      title: "Crypto Portfolio Tracker",
      description: "A web application for tracking and analyzing cryptocurrency investments and performance.",
      category: "web",
      image: "https://firebasestorage.googleapis.com/v0/b/nuhinbd.appspot.com/o/images%2Fprojects%2Fproject6.jpg?alt=media&token=61af1e07-18fc-491e-a06d-83ceffc8c23a",
      tags: ["Vue.js", "Chart.js", "Crypto APIs", "Real-time Data"],
      link: "https://example.com/project6",
      github: "https://github.com/nuhin13/project6",
      fullDescription: "Developed a comprehensive cryptocurrency portfolio tracker that helps users monitor their investments across multiple exchanges and wallets. The application provides detailed analytics, performance metrics, and tax reporting tools to give users a complete picture of their crypto portfolio.",
      contribution: [
        "Built the frontend using Vue.js with real-time price updates",
        "Implemented portfolio performance analytics with customizable metrics",
        "Integrated with multiple exchanges via APIs for automatic sync",
        "Created a tax reporting module to help users with crypto taxes",
        "Designed and implemented the data visualization dashboards"
      ]
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }) => {
    return (
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="bg-polygon-primary/10 text-polygon-primary text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2 text-polygon-secondary line-clamp-1">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex justify-between items-center mt-auto pt-4">
            <div className="flex space-x-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-polygon-primary transition-colors">
                  <Github size={20} />
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-polygon-primary transition-colors">
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="text-polygon-primary border-polygon-primary hover:bg-polygon-primary hover:text-white">
                  Details
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-polygon-secondary">{project.title}</DialogTitle>
                  <DialogDescription className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-polygon-primary/10 text-polygon-primary text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-4">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-2">Project Overview</h4>
                  <p className="text-gray-700">{project.fullDescription}</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-2">My Contribution</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.contribution.map((item, index) => (
                      <li key={index} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="flex space-x-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-gray-700 hover:text-polygon-primary transition-colors"
                      >
                        <Github size={18} className="mr-2" />
                        <span>GitHub Repo</span>
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-gray-700 hover:text-polygon-primary transition-colors"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-polygon-secondary">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-polygon-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore my portfolio of blockchain and software development projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={activeFilter === category.id 
                ? "bg-polygon-primary hover:bg-polygon-primary/90" 
                : "border-polygon-primary text-polygon-primary hover:bg-polygon-primary hover:text-white"
              }
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="animate-slide-in" style={{ animationDelay: `${project.id * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
