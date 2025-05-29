
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";

const InterestSelection = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    "Web Development",
    "Mobile Development", 
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Cybersecurity",
    "Cloud Computing",
    "DevOps",
    "UI/UX Design",
    "Backend Development",
    "Frontend Development",
    "Full Stack Development",
    "Blockchain",
    "IoT (Internet of Things)",
    "Robotics",
    "Game Development",
    "Research",
    "Project Management",
    "Digital Marketing",
    "Business Analytics"
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

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
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="bg-white shadow-lg border-none">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl md:text-3xl font-bold text-black mb-4">
              Select Your Areas of Interest
            </CardTitle>
            <p className="text-gray-600 text-lg">
              Choose the fields you're passionate about to get personalized project recommendations
            </p>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Interest Selection Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {interests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
                    selectedInterests.includes(interest)
                      ? 'bg-[#2209FC] text-white border-[#2209FC]'
                      : 'bg-white text-black border-gray-300 hover:border-[#2209FC] hover:text-[#2209FC]'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>

            {/* Selected Interests Summary */}
            {selectedInterests.length > 0 && (
              <div className="bg-[#D7E6FC] rounded-lg p-4">
                <h3 className="font-semibold text-black mb-2">
                  Selected Interests ({selectedInterests.length}):
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedInterests.map((interest) => (
                    <span
                      key={interest}
                      className="bg-[#2209FC] text-white px-3 py-1 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                className="flex-1 bg-[#2209FC] hover:bg-[#1a07d4] text-white py-3"
                disabled={selectedInterests.length === 0}
                asChild
              >
                <Link to="/dashboard">
                  Continue to Dashboard
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-gray-300 text-gray-700"
                asChild
              >
                <Link to="/dashboard">
                  Skip for now
                </Link>
              </Button>
            </div>

            <p className="text-sm text-gray-500 text-center">
              You can always update your interests later in your profile settings
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InterestSelection;
