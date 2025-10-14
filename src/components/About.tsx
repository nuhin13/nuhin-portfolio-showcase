import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Code, Cpu, Globe} from "lucide-react";
import { skills } from "./data/skillsData";

const About = () => {
    // Custom briefcase icon component for Technical Leadership
    const BriefcaseIcon = () => (
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
    );

    // Function to render the appropriate icon
    const renderIcon = (icon: any) => {
        if (icon === "briefcase") {
            return <BriefcaseIcon />;
        }
        
        // For Lucide icons
        const IconComponent = icon;
        return <IconComponent className="h-6 w-6 text-polygon-primary" />;
    };

    return (
        <section id="about" className="py-20 bg-gray-50 px-4 md:px-0">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-polygon-secondary">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-polygon-primary mx-auto mb-8"></div>
                    <p className="max-w-3xl mx-auto text-gray-600">
                        Get to know me better, my professional journey, and what drives me in the world of Software
                        Engineer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-5 animate-slide-in">
                        <h3 className="text-2xl font-bold mb-6 text-polygon-secondary">
                            My Story
                        </h3>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                I started my journey in tech as a <strong>CSE graduate</strong> from <strong>Khulna
                                University</strong>,
                                stepping into the industry as a <strong>Junior Native Android
                                Developer</strong> at <strong>Sheba
                                Platform Limited</strong> (later <strong>Sheba Fintech Limited</strong>). Over the
                                next <strong>5+
                                years</strong>, I grew into a <strong>mid-level</strong> and eventually <strong>senior
                                mobile
                                engineer</strong>, expanding my skill set with <strong>Flutter</strong> and taking
                                on <strong>team
                                leadership responsibilities</strong>.
                            </p>

                            <p>
                                In pursuit of new challenges, I joined <strong>Polygon Tech</strong> as a <strong>Senior
                                Software
                                Engineer</strong>, where I led the <strong>mobile development team</strong> and worked
                                across <strong>Android</strong>, <strong>Flutter</strong>, <strong>React Native</strong>,
                                and
                                even <strong>iOS Native</strong> platforms. This hands-on experience gave me the
                                confidence to tackle
                                any <strong>mobile app challenge</strong> head-on.
                            </p>

                            <p>
                                With over <strong>6 years</strong> of mobile development and leadership behind me, I
                                shifted focus
                                to <strong>backend development</strong>, diving into <strong>Spring
                                Boot</strong> with <strong>Java</strong> and <strong>Kotlin</strong>. I led a
                                cross-functional team
                                of <strong>20+ engineers</strong>, delivering <strong>full-stack
                                systems</strong> and <strong>scalable
                                solutions</strong>.
                            </p>

                            <p>
                                Today, I serve as a <strong>Lead Software Engineer</strong>, managing multiple teams,
                                overseeing <strong>system architecture</strong>, mentoring developers, and
                                driving <strong>DevOps</strong> and <strong>LLM-driven innovations</strong>. My journey
                                reflects
                                continuous learning, technical evolution, and a passion for building <strong>high-impact
                                systems</strong> and strong engineering teams.
                            </p>

                        </div>
                    </div>

                    <div className="md:col-span-7 animate-slide-in">
                        <h3 className="text-2xl font-bold mb-6 text-polygon-secondary">
                            What I Do
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {skills.map((skill) => (
                                <Card key={skill.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="bg-polygon-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                                            {renderIcon(skill.icon)}
                                        </div>
                                        <h4 className="text-xl font-semibold mb-2 text-polygon-secondary">
                                            {skill.title}
                                        </h4>
                                        <p className="text-gray-600">
                                            {skill.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;