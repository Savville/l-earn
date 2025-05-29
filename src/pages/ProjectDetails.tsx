
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProjectDetails = () => {
  const [showApplication, setShowApplication] = useState(false);
  
  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Header */}
      <div className="bg-[#2209FC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#2209FC] font-bold text-sm">Lé</span>
              </div>
              <span className="font-bold">L-earn</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-[#D7E6FC]">Home</Link>
              <Link to="/projects" className="hover:text-[#D7E6FC]">Projects</Link>
              <Link to="/browse" className="hover:text-[#D7E6FC]">Browse</Link>
              <Link to="/profiles" className="hover:text-[#D7E6FC]">Profiles</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Project Info */}
          <div>
            {/* Project Card */}
            <Card className="bg-gradient-to-br from-purple-900 to-blue-900 text-white border-none mb-6">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-purple-900 font-bold">H</span>
                  </div>
                  <div>
                    <span className="text-sm opacity-90">Hedera</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm opacity-90">nairobi</span>
                      <span className="text-sm opacity-90">securities</span>
                      <span className="text-sm opacity-90">exchange</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-lg opacity-90 mb-2">$7,000+ PRIZE POOL</div>
                  <h1 className="text-3xl font-bold mb-4">Hedera Hashathon</h1>
                  <div className="text-lg">24-30 MARCH | NAIROBI, KENYA</div>
                </div>

                <div className="text-center">
                  <div className="text-sm opacity-75">hedera.com/events</div>
                </div>
              </CardContent>
            </Card>

            {/* Project Description */}
            <div className="mb-6">
              <p className="text-gray-700 mb-4">An innovation challenges through the Hedera Technologies</p>
              <p className="text-gray-700 mb-6">by Hedera Kenya</p>

              <Card className="bg-[#2209FC] text-white border-none">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">To Students in:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>• Computer Science Students</li>
                    <li>• Software Engineering Students</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-3">Fields in:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Cryptography", "Web developing", "Frontend developing", "Artificial Intelligence", "Backend developing"].map((field) => (
                      <span key={field} className="bg-white text-[#2209FC] px-3 py-1 rounded-full text-sm">
                        {field}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side - Application Form or Project Details */}
          <div>
            {!showApplication ? (
              <Card className="bg-[#D7E6FC] border-none">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold text-black mb-6">Project Details</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <span className="font-medium text-black">Location: </span>
                      <span className="text-gray-700">One month</span>
                    </div>
                    <div>
                      <span className="font-medium text-black">Period: </span>
                      <span className="text-gray-700">1 month</span>
                    </div>
                    <div>
                      <span className="font-medium text-black">Maximum teams: </span>
                      <span className="text-gray-700">6 teams</span>
                    </div>
                    <div>
                      <span className="font-medium text-black">Stipends: </span>
                      <span className="text-gray-700">KES 30,000 grant for product development</span>
                    </div>
                    <div>
                      <span className="font-medium text-black">Instructors: </span>
                      <span className="text-gray-700">James Wainaina, Charles Njoroge</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-medium text-black mb-3">Procedure</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Build the application frontend and backend and integrate with Hedera DLT.
                    </p>
                    
                    <h4 className="font-medium text-black mb-2">Tools offered</h4>
                    <p className="text-gray-700 text-sm mb-4">1. Hedera SDK</p>
                    
                    <h4 className="font-medium text-black mb-2">Qualification criteria</h4>
                    <ol className="text-gray-700 text-sm space-y-1">
                      <li>1. The team must complete the project fully bothfrontend and backend.</li>
                      <li>2. The team must integrate with Hedera</li>
                      <li>3. The project must aim to solve challenges in the society.</li>
                    </ol>
                  </div>

                  <Button 
                    className="w-full bg-[#2209FC] hover:bg-[#1a07d4] text-white py-3 rounded-full text-lg"
                    onClick={() => setShowApplication(true)}
                  >
                    Go to apply →
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-[#D7E6FC] border-none">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <button 
                      onClick={() => setShowApplication(false)}
                      className="mr-3 text-gray-600 hover:text-gray-800"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <h2 className="text-xl font-bold text-black">Enter Details</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Fill in name
                      </label>
                      <Input 
                        className="w-full bg-white border-gray-300"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Project title
                      </label>
                      <Input 
                        className="w-full bg-white border-gray-300"
                        placeholder="Enter project title"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Project description
                      </label>
                      <Textarea 
                        className="w-full bg-white border-gray-300 h-32"
                        placeholder="Describe your project"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Deliverables
                      </label>
                      <Textarea 
                        className="w-full bg-white border-gray-300 h-32"
                        placeholder="List your deliverables"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Teammates UID
                      </label>
                      <Input 
                        className="w-full bg-white border-gray-300"
                        placeholder="Enter teammate UIDs"
                      />
                    </div>

                    <Button 
                      className="w-full bg-[#2209FC] hover:bg-[#1a07d4] text-white py-3 rounded-full text-lg"
                    >
                      submit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
