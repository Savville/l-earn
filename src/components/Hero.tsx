
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Trophy, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white font-poppins">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl">
          <div className="w-96 h-96 rounded-full bg-[#D7E6FC]/30 blur-3xl absolute top-20 left-20 animate-pulse"></div>
          <div className="w-80 h-80 rounded-full bg-[#D7E6FC]/20 blur-3xl absolute bottom-20 right-20 animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Main heading */}
            <h1 className="font-inknut text-4xl md:text-[35px] leading-tight text-black mb-6 animate-fade-in">
              Learn, Apply, Innovate,{" "}
              <span className="text-[#2209FC]">Earn</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-black mb-8 leading-relaxed animate-fade-in">
              Join us today and get skills and right networks in your area of interest.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in">
              <Button 
                size="lg" 
                className="bg-[#2209FC] hover:bg-[#1a07d4] text-white px-8 py-3 text-lg rounded-md"
                asChild
              >
                <Link to="/auth">Join us now</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="lg:w-1/2 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Students collaborating on projects"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Bottom section - Features */}
        <div className="mt-16 bg-[#D7E6FC] rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 font-poppins">
              Find, apply and post roles in innovative projects
            </h2>
            <p className="text-gray-700 mb-6">example</p>
            
            {/* Project example card */}
            <div className="bg-white rounded-xl p-6 shadow-md max-w-2xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                alt="Project example"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-black mb-2">Pipeline Surveying and Designing for Kenyatta Market</h3>
              <p className="text-sm text-gray-600 mb-2">Sewerage tour</p>
              <p className="text-sm text-gray-600">by Sea Symmetry Company</p>
            </div>
          </div>

          {/* Feature icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-[#2209FC]" />
              </div>
              <p className="text-sm text-black font-medium">Connecting you to fellow students</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3">
                <Briefcase className="h-8 w-8 text-[#2209FC]" />
              </div>
              <p className="text-sm text-black font-medium">Connecting you to the industry</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3">
                <Trophy className="h-8 w-8 text-[#2209FC]" />
              </div>
              <p className="text-sm text-black font-medium">Integrating with the coursework</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="h-8 w-8 text-[#2209FC]" />
              </div>
              <p className="text-sm text-black font-medium">Learning while earning</p>
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 bg-[#D7E6FC] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-black mb-6">Get updates</h3>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Fill in email"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2209FC]"
            />
            <Button className="bg-[#2209FC] hover:bg-[#1a07d4] text-white px-6">
              Submit
            </Button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-black mb-8">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Melinda", text: "L-earn Platform will be a game changer for me." },
              { name: "Bill", text: "L-earn Platform will be a game changer for me." },
              { name: "Adriana", text: "L-earn Platform will be a game changer for me." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#D7E6FC] rounded-xl p-6">
                <div className="bg-[#2209FC] text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                  {testimonial.name}
                </div>
                <p className="text-black text-sm">{testimonial.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {[0, 1, 2].map((dot) => (
              <div key={dot} className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-[#2209FC]' : 'bg-gray-300'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
