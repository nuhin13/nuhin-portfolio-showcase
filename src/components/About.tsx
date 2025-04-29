
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Cpu, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-polygon-secondary">
            About Me
          </h2>
          <div className="w-20 h-1 bg-polygon-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Get to know me better, my professional journey, and what drives me in the world of Software Engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 animate-slide-in">
            <h3 className="text-2xl font-bold mb-6 text-polygon-secondary">
              My Story
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                As a Lead Software Engineer at Polygon Technology, I bring over 8 years of software development experience with a deep focus on blockchain technology, Web3, and decentralized applications. My journey in the tech space has been driven by a passion for innovation and creating solutions that push the boundaries of what's possible.
              </p>
              <p>
                I have a Master's degree in Computer Science and Engineering from KU (Khulna University), where I specialized in distributed systems. This academic foundation, combined with my hands-on experience, has allowed me to develop a unique perspective on building robust and scalable applications.
              </p>
              <p>
                Outside of work, I enjoy contributing to open-source projects and writing technical articles to share knowledge with the developer community. I'm passionate about mentoring junior developers and helping to build the next generation of blockchain engineers.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 animate-slide-in">
            <h3 className="text-2xl font-bold mb-6 text-polygon-secondary">
              What I Do
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-polygon-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-polygon-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-polygon-secondary">
                    Blockchain Development
                  </h4>
                  <p className="text-gray-600">
                    Smart contracts, DApps, and Web3 integration for next-gen applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-polygon-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-polygon-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-polygon-secondary">
                    Full-Stack Engineering
                  </h4>
                  <p className="text-gray-600">
                    End-to-end application development with modern frameworks and technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-polygon-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Cpu className="h-6 w-6 text-polygon-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-polygon-secondary">
                    System Architecture
                  </h4>
                  <p className="text-gray-600">
                    Designing scalable and efficient systems for complex applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-polygon-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="h-6 w-6 text-polygon-primary"
                    >
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      <line x1="6" y1="1" x2="6" y2="4"></line>
                      <line x1="10" y1="1" x2="10" y2="4"></line>
                      <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-polygon-secondary">
                    Team Leadership
                  </h4>
                  <p className="text-gray-600">
                    Leading engineering teams to deliver high-quality products on time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
