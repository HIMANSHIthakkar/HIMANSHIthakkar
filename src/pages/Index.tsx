
import { Github, MapPin, Mail, Calendar, Code, Award, Briefcase, GraduationCap } from "lucide-react";
import { ProfileHeader } from "../components/ProfileHeader";
import { StatsCards } from "../components/StatsCards";
import { ProjectCard } from "../components/ProjectCard";
import { SkillsSection } from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { EducationSection } from "../components/EducationSection";

const Index = () => {
  const projects = [
    {
      title: "Real-time Chat Application",
      description: "Built a real-time chat app with React.js, Spring Boot, and MongoDB. Used WebSocket for instant messaging and Tailwind CSS for a responsive UI.",
      technologies: ["React.js", "Spring Boot", "MongoDB", "WebSocket", "Tailwind CSS"],
      features: ["Real-time messaging", "RESTful APIs", "Responsive design"]
    },
    {
      title: "Job Portal Platform",
      description: "Developed a comprehensive job portal using React.js, Node.js, Express.js, and MongoDB with role-based access for employers and job seekers.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      features: ["Role-based access", "Real-time applications", "Advanced filtering", "Notifications"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <ProfileHeader />
        
        <div className="mt-8 space-y-8">
          <StatsCards />
          
          {/* About Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Code className="w-6 h-6 text-blue-600" />
              About Me
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Passionate Full-Stack Developer pursuing Bachelor's in Information Technology with hands-on experience 
              in modern web technologies. I specialize in creating scalable applications using React.js, Spring Boot, 
              and MongoDB. Currently maintaining an excellent academic record with 8.57 CPI while building real-world projects 
              and gaining practical experience through internships.
            </p>
          </div>

          {/* Projects Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Github className="w-6 h-6 text-blue-600" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          <SkillsSection />
          <ExperienceSection />
          <EducationSection />

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Mail className="w-6 h-6" />
              Let's Connect
            </h2>
            <p className="text-blue-100 mb-6">
              I'm always interested in discussing new opportunities and connecting with fellow developers.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <MapPin className="w-4 h-4" />
                <span>Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Calendar className="w-4 h-4" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
