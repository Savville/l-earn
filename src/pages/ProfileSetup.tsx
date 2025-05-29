
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProfileSetup = () => {
  const [formData, setFormData] = useState({
    fullName: "Alvin Savville",
    email: "ochiwilliamotieno@gmail.com",
    phoneNumber: "0710731021",
    userId: "1000001",
    whatsapp: "0710731021",
    linkedin: "https://www.linkedin.com/in/williams-otieno-miee-maces-b358ab33b/",
    others: "",
    aboutMe: "Civil Engineering Student, Interested in Technology, Designer of Aesthetic pages and Structural Engineer.",
    course: "Civil Engineering",
    institution: "Kenyatta University"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Background Image Section - Desktop */}
      <div className="hidden lg:block relative h-48 bg-gradient-to-r from-blue-400 to-cyan-300">
        <img 
          src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1200&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Background */}
      <div className="lg:hidden relative h-32 bg-gradient-to-r from-blue-400 to-cyan-300">
        <img 
          src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Profile Image */}
        <div className="relative -mt-16 lg:-mt-24 mb-8 flex justify-center lg:justify-start">
          <div className="relative">
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=200&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <Camera className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Desktop image */}
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
              alt="Student"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-lg border-none">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-bold text-black">Profile</CardTitle>
                <button className="text-[#2209FC]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#D7E6FC] p-3 rounded">
                    <label className="text-sm font-medium text-gray-700">Full name</label>
                    <div className="text-black font-medium">{formData.fullName}</div>
                  </div>
                  <div className="bg-[#D7E6FC] p-3 rounded">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <div className="text-black font-medium">{formData.email}</div>
                  </div>
                  <div className="bg-[#D7E6FC] p-3 rounded">
                    <label className="text-sm font-medium text-gray-700">Phone number</label>
                    <div className="text-black font-medium">{formData.phoneNumber}</div>
                  </div>
                  <div className="bg-[#D7E6FC] p-3 rounded">
                    <label className="text-sm font-medium text-gray-700">User ID</label>
                    <div className="text-black font-medium">{formData.userId}</div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-medium text-black mb-3">Add links to socials</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span className="text-sm font-medium">Whatsapp No :</span>
                      <span className="text-sm">{formData.whatsapp}</span>
                      <div className="w-2 h-2 bg-blue-500 rounded ml-auto"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                      <span className="text-sm font-medium">Linkedin :</span>
                      <span className="text-sm flex-1 truncate">{formData.linkedin}</span>
                      <div className="w-2 h-2 bg-blue-500 rounded"></div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Others:</label>
                      <Input 
                        className="mt-1"
                        value={formData.others}
                        onChange={(e) => handleInputChange('others', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* About Me */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">About me</label>
                  <Textarea 
                    className="w-full"
                    rows={3}
                    value={formData.aboutMe}
                    onChange={(e) => handleInputChange('aboutMe', e.target.value)}
                  />
                </div>

                {/* Course */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
                  <Input 
                    className="bg-[#D7E6FC] border-none"
                    value={formData.course}
                    onChange={(e) => handleInputChange('course', e.target.value)}
                  />
                </div>

                {/* Institution */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Institution</label>
                  <Input 
                    className="bg-[#D7E6FC] border-none"
                    value={formData.institution}
                    onChange={(e) => handleInputChange('institution', e.target.value)}
                  />
                </div>

                {/* Proof of Studentship */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Proof of Studentship</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Add photo of School ID</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    className="flex-1 bg-[#2209FC] hover:bg-[#1a07d4] text-white py-3"
                    asChild
                  >
                    <Link to="/interests">Save profile</Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-gray-300 text-gray-700"
                  >
                    Skip
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
