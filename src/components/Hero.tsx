
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Trophy, Briefcase } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl">
          <div className="w-96 h-96 rounded-full bg-[#D7E6FC]/30 blur-3xl absolute top-20 left-20 animate-pulse"></div>
          <div className="w-80 h-80 rounded-full bg-[#D7E6FC]/20 blur-3xl absolute bottom-20 right-20 animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-8 animate-fade-in">
            Connect. Learn.{" "}
            <span className="text-[#2209FC]">
              Excel.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto animate-fade-in">
            Bridge the gap between academic learning and real-world experience. 
            Join projects, research opportunities, and internships tailored to your interests.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-[#2209FC] hover:bg-[#1a07d4] text-white px-8 py-3 text-lg"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#2209FC] text-[#2209FC] hover:bg-[#D7E6FC] px-8 py-3 text-lg"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#D7E6FC] rounded-2xl p-6 border border-gray-200 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mx-auto mb-4">
                <Users className="h-6 w-6 text-[#2209FC]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">10,000+</h3>
              <p className="text-black">Active Students</p>
            </div>

            <div className="bg-[#D7E6FC] rounded-2xl p-6 border border-gray-200 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-[#2209FC]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">500+</h3>
              <p className="text-black">Active Projects</p>
            </div>

            <div className="bg-[#D7E6FC] rounded-2xl p-6 border border-gray-200 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mx-auto mb-4">
                <Trophy className="h-6 w-6 text-[#2209FC]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">95%</h3>
              <p className="text-black">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
