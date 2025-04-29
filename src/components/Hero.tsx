import React from "react";
import {Button} from "@/components/ui/button";
import {ArrowRight, Code, Github, Linkedin} from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24 px-4 md:px-0">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                <div className="md:col-span-7 space-y-6 animate-fade-in">
                    <p className="text-polygon-primary font-medium">Hello, I'm</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-polygon-secondary">
                        Nazmus Saadat
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-700">
                        Lead Software Engineer at{" "}
                        <span className="text-polygon-primary font-semibold">
              Polygon Technology Limited
            </span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl">
                        Experienced in Business & Technology Collaboration,
                        System Design,
                        Decentralized applications,
                        Mobile apps development and Most Importantly a <b> <i>Problem Solver</i></b>.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button
                            className="bg-polygon-primary hover:bg-polygon-primary/90 text-white"
                            asChild
                        >
                            <a href="#projects">
                                View Projects <ArrowRight className="ml-2 h-4 w-4"/>
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            className="border-polygon-primary text-polygon-primary hover:bg-polygon-primary hover:text-white"
                            asChild
                        >
                            <a href="#contact">Contact Me</a>
                        </Button>
                    </div>
                    <div className="flex space-x-4 pt-4">
                        <a
                            href="https://github.com/nuhin13"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-polygon-primary transition-colors"
                        >
                            <Github size={24}/>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nuhin13/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-polygon-primary transition-colors"
                        >
                            <Linkedin size={24}/>
                        </a>
                        <a
                            href="https://leetcode.com/u/nuhin13/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-polygon-primary transition-colors"
                        >
                            <Code size={24}/>
                        </a>
                    </div>
                </div>
                <div className="md:col-span-5 animate-fade-in">
                    <div className="relative">
                        <div
                            className="absolute -inset-1 bg-gradient-to-r from-polygon-primary to-polygon-accent rounded-full blur opacity-30"></div>
                        <div
                            className="relative h-72 w-72 md:h-96 md:w-96 mx-auto overflow-hidden rounded-full border-4 border-white shadow-xl">
                            <img
                                src="https://avatars.githubusercontent.com/u/10963861?v=4"
                                alt="Nazmus Saadat"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
