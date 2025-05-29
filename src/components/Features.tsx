
import { Search, Bell, Trophy, Users, FileText, Calendar } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Matching",
      description: "AI-powered recommendations based on your interests, skills, and academic background.",
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Stay updated with application status, deadlines, and progress milestones.",
    },
    {
      icon: Trophy,
      title: "Achievement Tracking",
      description: "Earn certificates, badges, and build your professional portfolio.",
    },
    {
      icon: Users,
      title: "Collaborative Projects",
      description: "Work with peers across different universities and disciplines.",
    },
    {
      icon: FileText,
      title: "Progress Management",
      description: "Track your weekly submissions and receive feedback from mentors.",
    },
    {
      icon: Calendar,
      title: "Deadline Management",
      description: "Never miss an important deadline with our integrated calendar system.",
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Everything you need to{" "}
            <span className="text-[#2209FC]">
              succeed
            </span>
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Powerful features designed to connect students with meaningful opportunities 
            and help them build successful careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={index}
                className="group bg-[#D7E6FC] rounded-2xl p-8 border border-gray-200 hover:border-[#2209FC] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 bg-white hover:bg-[#2209FC] transition-colors duration-200 group">
                  <Icon className="h-6 w-6 text-[#2209FC] group-hover:text-white transition-colors duration-200" />
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-black leading-relaxed">
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
