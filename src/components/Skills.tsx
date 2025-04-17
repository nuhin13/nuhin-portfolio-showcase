
import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const Skills = () => {
  const technicalSkills = [
    { name: "Blockchain Development", percentage: 95 },
    { name: "Solidity", percentage: 90 },
    { name: "JavaScript/TypeScript", percentage: 95 },
    { name: "React & React Native", percentage: 90 },
    { name: "Node.js", percentage: 85 },
    { name: "Smart Contract Security", percentage: 85 },
  ];

  const blockchainSkills = [
    { name: "Ethereum", level: "Expert" },
    { name: "Polygon", level: "Expert" },
    { name: "Solana", level: "Advanced" },
    { name: "Binance Smart Chain", level: "Advanced" },
    { name: "IPFS", level: "Advanced" },
    { name: "The Graph", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-polygon-secondary">
            My Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-polygon-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            A comprehensive overview of my technical skills and areas of expertise in blockchain technology and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold mb-8 text-polygon-secondary">
              Technical Proficiency
            </h3>
            <div className="space-y-8">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-polygon-primary font-medium">{skill.percentage}%</span>
                  </div>
                  <Progress 
                    value={skill.percentage} 
                    className="h-2 bg-gray-200" 
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-8 text-polygon-secondary">
              Blockchain Ecosystems
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blockchainSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold mb-2 text-polygon-secondary">
                    {skill.name}
                  </h4>
                  <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-polygon-primary/10 text-polygon-primary">
                    {skill.level}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-polygon-secondary">
                Additional Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Docker", "Kubernetes", "AWS", "CI/CD", "GraphQL", "RESTful APIs", "MongoDB", "PostgreSQL", "TDD", "Git", "Agile", "Team Leadership"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
