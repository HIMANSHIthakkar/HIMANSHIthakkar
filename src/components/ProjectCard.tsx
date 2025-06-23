
interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {project.features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
