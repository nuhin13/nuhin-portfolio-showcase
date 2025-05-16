import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Smartphone, Globe } from "lucide-react";
import { projects } from "@/components/data/projectsData.ts";
import { categories, Project, ProjectCategory } from "@/components/type/project.ts";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>(ProjectCategory.ALL);

  const filteredProjects = activeFilter === ProjectCategory.ALL
      ? projects
      : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }: { project: Project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
          prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const goToPrevImage = () => {
      setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      );
    };

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
                  <span key={index}
                        className="bg-polygon-primary/10 text-polygon-primary text-xs px-3 py-1 rounded-full">
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
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="text-gray-600 hover:text-polygon-primary transition-colors"
                       aria-label="GitHub Repository">
                      <Github size={20}/>
                    </a>
                )}
                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                       className="text-gray-600 hover:text-polygon-primary transition-colors"
                       aria-label="Website">
                      <Globe size={20}/>
                    </a>
                )}
                {project.playStoreLink && (
                    <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer"
                       className="text-gray-600 hover:text-polygon-primary transition-colors"
                       aria-label="Play Store">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 3l14 9-14 9V3z" />
                      </svg>
                    </a>
                )}
                {project.appleStoreLink && (
                    <a href={project.appleStoreLink} target="_blank" rel="noopener noreferrer"
                       className="text-gray-600 hover:text-polygon-primary transition-colors"
                       aria-label="Apple App Store">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 1a8 8 0 0 1 8 8c0 7-7.5 11-8 13-0.5-2-8-6-8-13a8 8 0 0 1 8-8z" />
                      </svg>
                    </a>
                )}
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm"
                          className="text-polygon-primary border-polygon-primary hover:bg-polygon-primary hover:text-white">
                    Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle
                        className="text-2xl font-bold text-polygon-secondary">{project.title}</DialogTitle>
                    <DialogDescription className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, index) => (
                          <span key={index}
                                className="bg-polygon-primary/10 text-polygon-primary text-xs px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                      ))}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-4 relative">
                    <div className="w-full h-64 overflow-hidden rounded-lg">
                      <img
                          src={project.images[currentImageIndex]}
                          alt={`${project.title} - image ${currentImageIndex + 1}`}
                          className="w-full h-full object-contain"
                      />
                    </div>

                    {project.images.length > 1 && (
                        <>
                          <button
                              onClick={goToPrevImage}
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-colors"
                              aria-label="Previous image"
                          >
                            <ChevronLeft size={20}/>
                          </button>
                          <button
                              onClick={goToNextImage}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-colors"
                              aria-label="Next image"
                          >
                            <ChevronRight size={20}/>
                          </button>

                          <div className="flex justify-center mt-3 space-x-2">
                            {project.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-2 h-2 rounded-full ${
                                        currentImageIndex === index ? "bg-polygon-primary" : "bg-gray-300"
                                    }`}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                          </div>
                        </>
                    )}
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

                  <div className="flex flex-wrap items-center gap-4 mt-6">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-polygon-primary transition-colors"
                        >
                          <Github size={18} className="mr-2"/>
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
                          <Globe size={18} className="mr-2"/>
                          <span>Website</span>
                        </a>
                    )}
                    {project.playStoreLink && (
                        <a
                            href={project.playStoreLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-polygon-primary transition-colors"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M5 3l14 9-14 9V3z" />
                          </svg>
                          <span>Play Store</span>
                        </a>
                    )}
                    {project.appleStoreLink && (
                        <a
                            href={project.appleStoreLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-polygon-primary transition-colors"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M12 1a8 8 0 0 1 8 8c0 7-7.5 11-8 13-0.5-2-8-6-8-13a8 8 0 0 1 8-8z" />
                          </svg>
                          <span>App Store</span>
                        </a>
                    )}
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
              Explore my portfolio of blockchain and software development projects that showcase my technical
              skills and problem-solving abilities.
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
                <div key={project.id} className="animate-slide-in"
                     style={{animationDelay: `${project.id * 0.1}s`}}>
                  <ProjectCard project={project}/>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Projects;