
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Briefcase className="w-6 h-6 text-blue-600" />
        Experience
      </h2>
      
      <div className="bg-white/50 rounded-xl p-6 border border-white/30">
        <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800">Data Scientist Intern</h3>
            <p className="text-lg text-blue-600 font-semibold">TATA Chemicals Ltd - TCL Mithapur</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>May 26, 2025 - June 24, 2025 (30 days)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Mithapur, Gujarat</span>
            </div>
          </div>
        </div>
        
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Performed Exploratory Data Analysis (EDA) on large and complex datasets using Python (Pandas, NumPy, Matplotlib, Seaborn)</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Identified key data trends, missing values, outliers, and patterns to drive actionable business insights</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Developed interactive visualizations and statistical summaries to communicate findings to the team</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Assisted in data cleaning, feature engineering, and preparing datasets for machine learning models</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Collaborated closely with senior data scientists and domain experts to understand business objectives</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
