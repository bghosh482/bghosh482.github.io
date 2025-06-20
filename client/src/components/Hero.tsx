import { useTypingEffect } from "@/hooks/useTypingEffect";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const typingText = useTypingEffect({
    texts: [
      "Java Backend Developer",
      "Spring Boot Expert",
      "Microservices Architect",
      "Problem Solver",
    ],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
  });

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              Hi, I'm <span className="text-blue-600">Bubai</span>
            </h1>
            <div className="text-2xl md:text-3xl text-slate-600 font-medium h-12 flex items-center justify-center">
              <span className="typing-cursor">{typingText}</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-300">
            Passionate software developer with 1+ years of experience at Boeing India.
            Specialized in building scalable backend systems with Java, Spring Boot, and cloud technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-600">
            <Button
              onClick={() => scrollToSection("#projects")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </Button>
          </div>

          <div className="mt-12 flex justify-center space-x-6 animate-fade-in-up animate-delay-900">
            <a
              href="https://github.com/bubai-ghosh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 text-2xl transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/bubai-ghosh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 text-2xl transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:bubai.ghosh@email.com"
              className="text-slate-600 hover:text-blue-600 text-2xl transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
