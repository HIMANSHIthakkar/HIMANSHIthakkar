
import { Github, MapPin, Mail, Star, GitFork, Users } from "lucide-react";

export const ProfileHeader = () => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            HT
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
        </div>
        
        {/* Profile Info */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-gray-800">Himanshi Thakkar</h1>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Full-Stack Developer
            </span>
          </div>
          
          <p className="text-xl text-gray-600 mb-4">
            Information Technology Student | React.js & Spring Boot Developer
          </p>
          
          <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Gujarat, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Available for hire</span>
            </div>
          </div>
          
          {/* GitHub Stats */}
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <Users className="w-4 h-4" />
              <span className="font-semibold">50+</span>
              <span>connections</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Star className="w-4 h-4" />
              <span className="font-semibold">25+</span>
              <span>stars</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <GitFork className="w-4 h-4" />
              <span className="font-semibold">15+</span>
              <span>repositories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
