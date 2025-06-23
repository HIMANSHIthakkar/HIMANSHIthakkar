
import { Code, Database, Cloud, Brain } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "JavaScript", "SQL", "Python"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Database,
      title: "Frameworks & Tools",
      skills: ["React.js", "Node.js", "Spring Boot", "Spring Security"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Cloud,
      title: "Technical Expertise",
      skills: ["Data Structures", "OOP", "Database Management", "RESTful APIs"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Brain,
      title: "Emerging Technologies",
      skills: ["Machine Learning", "Docker", "Gen-AI", "WebSocket"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Code className="w-6 h-6 text-blue-600" />
        Technical Skills
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white/50 rounded-xl p-6 border border-white/30">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                <category.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
