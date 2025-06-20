import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              <span className="text-blue-400">Bubai</span> Ghosh
            </div>
            <p className="text-slate-400">Java Backend Developer</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/bubai-ghosh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 text-xl transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/bubai-ghosh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 text-xl transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:bubai.ghosh@email.com"
              className="text-slate-400 hover:text-blue-400 text-xl transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Bubai Ghosh. All rights reserved. Built with passion and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
