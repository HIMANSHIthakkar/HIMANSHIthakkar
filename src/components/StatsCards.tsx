
import { Code, Award, Briefcase, GraduationCap } from "lucide-react";

export const StatsCards = () => {
  const stats = [
    {
      icon: Code,
      label: "Programming Languages",
      value: "6+",
      subtext: "C, C++, Java, JavaScript, SQL, Python",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      label: "Current CPI",
      value: "8.57",
      subtext: "Information Technology, DDU",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Briefcase,
      label: "Internship",
      value: "30 days",
      subtext: "Data Scientist at TATA Chemicals",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      label: "Diploma SPI",
      value: "10",
      subtext: "Computer Engineering",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
            <stat.icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
          <div className="text-sm font-medium text-gray-600 mb-2">{stat.label}</div>
          <div className="text-xs text-gray-500">{stat.subtext}</div>
        </div>
      ))}
    </div>
  );
};
