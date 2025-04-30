import React from "react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "Native Android Development", percentage: 95 },
    { name: "Cross Platform Apps Development (Flutter)", percentage: 95 },
    { name: "Spring Boot (Java/Kotlin), TypeScript", percentage: 90 },
    { name: "Database", percentage: 85 },
    { name: "System Automation", percentage: 80 },
    { name: "System Design & DevOps", percentage: 80 },
  ];

  const backendSkills = [
    { name: "Spring Boot (Microservices)", level: "Expert" },
    { name: "gRPC, Kafka", level: "Expert" },
    { name: "Docker & Kubernetes", level: "Expert" },
    { name: "MySQL, Redis, MongoDb", level: "Advanced" },
    { name: "CI/CD & GitOps", level: "Expert" },
    { name: "AWS & Cloud Services", level: "Intermediate" },
  ];

  const mobileSkills = [
    { name: "Kotlin/ Java", level: "Expert" },
    { name: "Dart", level: "Expert" },
    { name: "Firebase Services", level: "Expert" },
    { name: "Clean Architecture", level: "Expert" },
    { name: "Jetpack Compose", level: "Advanced" },
    { name: "Complex UI design", level: "Advanced" },
    { name: "MVVM", level: "Expert" },
    { name: "Animations", level: "Intermediate" },
  ];

  const additionalSkills = [
    "Agile",
    "Team Leadership",
    "OCR & Liveness Detection",
    "Onx Model & Tensorflow Lite",
    "GraphQL",
    "TDD",
    "DDD",
    "Git",
    "DevOps Culture",
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
              A comprehensive overview of my technical capabilities across mobile and backend development, system design, and team leadership.
            </p>
          </div>

          {/* GRID 2x2: Technical | Mobile, Backend | Additional */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Technical Proficiency */}
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
                      <Progress value={skill.percentage} className="h-2 bg-gray-200" />
                    </div>
                ))}
              </div>
            </div>

            {/* Mobile Development */}
            <div className="animate-slide-in" style={{animationDelay: "0.2s"}}>
              <h3 className="text-2xl font-bold mb-8 text-polygon-secondary">
                Mobile Development
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mobileSkills.map((skill) => (
                    <div
                        key={skill.name}
                        className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      <h4 className="text-md font-semibold mb-1 text-polygon-secondary">
                        {skill.name}
                      </h4>
                      <div
                          className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-polygon-primary/10 text-polygon-primary">
                        {skill.level}
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="animate-slide-in">
              <h3 className="text-2xl font-bold mb-8 mt-4 text-polygon-secondary">
                Backend Systems
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {backendSkills.map((skill) => (
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
            </div>

            {/* Additional Skills */}
            <div className="animate-slide-in">
              <h3 className="text-2xl font-bold mb-6 mt-4 text-polygon-secondary">
                Additional Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {additionalSkills.map((skill) => (
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
      </section>
  );
};

export default Skills;
