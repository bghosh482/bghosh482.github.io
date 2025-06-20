import { SiOpenjdk, SiSpring, SiMysql, SiAmazonwebservices, SiDocker, SiKubernetes, SiRedis, SiGit, SiApachemaven, SiLinux } from "react-icons/si";
import { Database, Network, Microchip, Shield, Leaf, TestTube, FileCode, Bot, Coffee } from "lucide-react";

export default function Skills() {
  const backendSkills = [
    { name: "Java", icon: <Coffee className="text-4xl text-orange-600" /> },
    { name: "Spring Boot", icon: <Leaf className="text-4xl text-green-600" /> },
    { name: "Hibernate", icon: <Database className="text-4xl text-purple-600" /> },
    { name: "REST APIs", icon: <Network className="text-4xl text-blue-600" /> },
    { name: "Microservices", icon: <Microchip className="text-4xl text-indigo-600" /> },
    { name: "Spring Security", icon: <Shield className="text-4xl text-red-600" /> },
  ];

  const databaseCloudSkills = [
    { name: "MySQL", icon: <SiMysql className="text-4xl text-blue-700" /> },
    { name: "AWS", icon: <SiAmazonwebservices className="text-4xl text-orange-500" /> },
    { name: "Docker", icon: <SiDocker className="text-4xl text-blue-500" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-4xl text-indigo-600" /> },
    { name: "Redis", icon: <SiRedis className="text-4xl text-red-600" /> },
  ];

  const toolsSkills = [
    { name: "Git", icon: <SiGit className="text-4xl text-gray-700" /> },
    { name: "Maven", icon: <SiApachemaven className="text-4xl text-red-600" /> },
    { name: "JUnit", icon: <TestTube className="text-4xl text-blue-600" /> },
    { name: "JSON", icon: <FileCode className="text-4xl text-green-600" /> },
    { name: "Automation Testing", icon: <Bot className="text-4xl text-purple-600" /> },
    { name: "Linux", icon: <SiLinux className="text-4xl text-orange-600" /> },
  ];

  const SkillCard = ({ skill }: { skill: { name: string; icon: React.ReactNode } }) => (
    <div className="skill-card group bg-slate-50 p-6 rounded-xl text-center hover:bg-blue-50 hover:shadow-lg transition-all duration-300">
      <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>
      <p className="font-medium text-slate-700">{skill.name}</p>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Technologies and tools I use to build robust and scalable backend systems.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Backend Technologies */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Backend & Programming</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {backendSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Database & Cloud */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Database & Cloud</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {databaseCloudSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Development Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {toolsSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Problem Solving Stats */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Problem Solving</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-slate-600">Masai School DSA Problems</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                <p className="text-slate-600">LeetCode Problems</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                <p className="text-slate-600">GeeksforGeeks Problems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
