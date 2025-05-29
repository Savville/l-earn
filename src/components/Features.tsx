
import { Search, Bell, Trophy, Users, FileText, Calendar } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Matching",
      description: "AI-powered recommendations based on your interests, skills, and academic background.",
      color: "blue"
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Stay updated with application status, deadlines, and progress milestones.",
      color: "purple"
    },
    {
      icon: Trophy,
      title: "Achievement Tracking",
      description: "Earn certificates, badges, and build your professional portfolio.",
      color: "green"
    },
    {
      icon: Users,
      title: "Collaborative Projects",
      description: "Work with peers across different universities and disciplines.",
      color: "orange"
    },
    {
      icon: FileText,
      title: "Progress Management",
      description: "Track your weekly submissions and receive feedback from mentors.",
      color: "pink"
    },
    {
      icon: Calendar,
      title: "Deadline Management",
      description: "Never miss an important deadline with our integrated calendar system.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; hover: string } } = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", hover: "hover:bg-blue-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", hover: "hover:bg-purple-200" },
      green: { bg: "bg-green-100", text: "text-green-600", hover: "hover:bg-green-200" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", hover: "hover:bg-orange-200" },
      pink: { bg: "bg-pink-100", text: "text-pink-600", hover: "hover:bg-pink-200" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-600", hover: "hover:bg-indigo-200" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="features" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to connect students with meaningful opportunities 
            and help them build successful careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            const Icon = feature.icon;
            
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${colors.bg} ${colors.hover} transition-colors duration-200`}>
                  <Icon className={`h-6 w-6 ${colors.text}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
