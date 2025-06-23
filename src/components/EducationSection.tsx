
import { GraduationCap, Award } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Information Technology",
      institution: "Dharamsinh Desai University",
      location: "Nadiad, Gujarat, India",
      period: "2023 - 2026",
      achievement: "8.57 CPI (Completed 6th Semester)",
      status: "pursuing"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Amrutlala Veerpal Parekh Technical Institute",
      location: "Rajkot, Gujarat, India",
      period: "2020 - 2023",
      achievement: "10 SPI",
      status: "completed"
    },
    {
      degree: "Secondary School Certificate",
      institution: "TATA Chem. Dayanand Anglo Vedic School",
      location: "Mithapur, Gujarat, India",
      period: "2019 - 2020",
      achievement: "86%",
      status: "completed"
    }
  ];

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <GraduationCap className="w-6 h-6 text-blue-600" />
        Education
      </h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white/50 rounded-xl p-6 border border-white/30">
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                <p className="text-blue-600 font-semibold">{edu.institution}</p>
                <p className="text-gray-600 text-sm">{edu.location}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-sm text-gray-600">{edu.period}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  edu.status === 'pursuing' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {edu.status === 'pursuing' ? 'In Progress' : 'Completed'}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-700">
              <Award className="w-4 h-4 text-orange-500" />
              <span className="font-semibold">Achievement:</span>
              <span>{edu.achievement}</span>
            </div>
            
            {index === 1 && (
              <div className="mt-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-sm text-orange-800 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Felicitated at A.V.Parekh Technical Institute for scoring 10 SPI in Academics-2023
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
