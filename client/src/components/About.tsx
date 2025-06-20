import { Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A dedicated software engineer passionate about building robust backend systems and solving complex problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Info */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-slate-600 leading-relaxed">
                I'm a passionate Java Backend Developer with over a year of professional experience at Boeing India.
                My journey in software development began at Masai School, where I built a strong foundation in
                Data Structures and Algorithms, solving over 500+ problems.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I specialize in building scalable backend systems using Java, Spring Boot, and modern cloud technologies.
                Currently expanding my expertise in microservices architecture, AWS, Docker, and Kubernetes to build
                next-generation distributed systems.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-slate-600">DSA Problems</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">1+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-slate-600">Major Projects</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Experience & Education</h3>

            {/* Experience Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              {/* Boeing Experience */}
              <div className="relative flex items-start space-x-4 pb-8">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Briefcase className="text-white w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Software Developer</h4>
                  <p className="text-blue-600 font-medium">Boeing India</p>
                  <p className="text-sm text-slate-500">2023 - Present</p>
                  <p className="text-slate-600 mt-2">
                    Developing backend systems and REST APIs for aerospace applications using Java, Spring Boot, and Hibernate.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="relative flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-white w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Full Stack Web Development</h4>
                  <p className="text-cyan-500 font-medium">Masai School</p>
                  <p className="text-sm text-slate-500">2022 - 2023</p>
                  <p className="text-slate-600 mt-2">
                    Intensive coding bootcamp focused on Java, Spring Boot, data structures, and full-stack development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
