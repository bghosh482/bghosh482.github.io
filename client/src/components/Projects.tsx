import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ShoppingCart, CheckSquare, Share2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Microservices",
      description:
        "Scalable microservices architecture for e-commerce platform built with Spring Boot, Spring Cloud, and MySQL. Features user management, product catalog, and order processing services.",
      icon: <ShoppingCart className="text-white text-4xl" />,
      gradient: "from-blue-500 to-purple-600",
      technologies: ["Java", "Spring Boot", "Spring Cloud", "MySQL"],
      githubUrl: "https://github.com/bubai-ghosh/ecommerce-microservices",
      demoUrl: "#",
    },
    {
      title: "Task Management REST API",
      description:
        "RESTful API for task management system with user authentication, CRUD operations, and role-based access control. Built with Spring Security and JWT tokens.",
      icon: <CheckSquare className="text-white text-4xl" />,
      gradient: "from-green-500 to-teal-600",
      technologies: ["Java", "Spring Boot", "Spring Security", "JWT"],
      githubUrl: "https://github.com/bubai-ghosh/task-management-api",
      demoUrl: "#",
    },
    {
      title: "Social Media Backend",
      description:
        "Backend system for social media application with features like user posts, comments, likes, and real-time notifications. Implements Redis caching for optimal performance.",
      icon: <Share2 className="text-white text-4xl" />,
      gradient: "from-pink-500 to-rose-600",
      technologies: ["Java", "Spring Boot", "Redis", "WebSocket"],
      githubUrl: "https://github.com/bubai-ghosh/social-media-backend",
      demoUrl: "#",
    },
  ];

  const techColors: Record<string, string> = {
    Java: "bg-blue-100 text-blue-800",
    "Spring Boot": "bg-green-100 text-green-800",
    "Spring Cloud": "bg-purple-100 text-purple-800",
    MySQL: "bg-orange-100 text-orange-800",
    "Spring Security": "bg-red-100 text-red-800",
    JWT: "bg-yellow-100 text-yellow-800",
    Redis: "bg-red-100 text-red-800",
    WebSocket: "bg-gray-100 text-gray-800",
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my backend development skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Project Icon */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-6 flex items-center justify-center`}>
                  {project.icon}
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className={`text-xs font-medium ${techColors[tech] || "bg-gray-100 text-gray-800"}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demoUrl}
                    className="flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
