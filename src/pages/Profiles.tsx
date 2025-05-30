import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, MapPin, Star, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Profiles = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const topMentors = [
    {
      id: 1,
      name: "Dr. Emily Rodriguez",
      title: "AI Research Scientist",
      company: "Tech Innovations Lab",
      location: "San Francisco, CA",
      rating: 4.9,
      students: 850,
      expertise: ["Machine Learning", "Neural Networks", "Python"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b522?auto=format&fit=crop&w=300&q=80",
      experience: "8 years"
    },
    {
      id: 2,
      name: "Prof. James Wilson",
      title: "Blockchain Expert",
      company: "University of Technology",
      location: "Boston, MA",
      rating: 4.8,
      students: 1200,
      expertise: ["Blockchain", "Cryptocurrency", "Smart Contracts"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      experience: "12 years"
    },
    {
      id: 3,
      name: "Sarah Kim",
      title: "UX Design Lead",
      company: "Creative Studio",
      location: "New York, NY",
      rating: 4.9,
      students: 650,
      expertise: ["UI/UX Design", "Product Design", "User Research"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      experience: "6 years"
    }
  ];

  const featuredStudents = [
    {
      id: 4,
      name: "Alex Chen",
      university: "MIT",
      course: "Computer Science",
      year: "3rd Year",
      projects: 12,
      achievements: ["Hackathon Winner", "Research Assistant"],
      interests: ["AI", "Robotics", "Mobile Development"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      location: "Cambridge, MA"
    },
    {
      id: 5,
      name: "Maria Santos",
      university: "Stanford University",
      course: "Bioengineering",
      year: "2nd Year",
      projects: 8,
      achievements: ["Dean's List", "Innovation Award"],
      interests: ["Biotechnology", "Medical Devices", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      location: "Palo Alto, CA"
    },
    {
      id: 6,
      name: "David Park",
      university: "Carnegie Mellon",
      course: "Software Engineering",
      year: "4th Year",
      projects: 15,
      achievements: ["Open Source Contributor", "Internship at Google"],
      interests: ["Full Stack", "Cloud Computing", "DevOps"],
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=300&q=80",
      location: "Pittsburgh, PA"
    }
  ];

  const collaborators = [
    {
      id: 7,
      name: "Lisa Johnson",
      role: "Data Scientist",
      currentProject: "Climate Analysis Dashboard",
      skills: ["Python", "R", "Machine Learning"],
      availability: "Available",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 8,
      name: "Michael Brown",
      role: "Frontend Developer",
      currentProject: "E-learning Platform",
      skills: ["React", "TypeScript", "UI Design"],
      availability: "Busy",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 9,
      name: "Ana Rodriguez",
      role: "Research Assistant",
      currentProject: "IoT Security Study",
      skills: ["IoT", "Cybersecurity", "Research"],
      availability: "Available",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#2209FC] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Lé</span>
              </div>
              <span className="font-bold text-[#2209FC]">L-earn</span>
            </div>
            <div className="flex space-x-8">
              <Link to="/dashboard" className="text-gray-600 hover:text-[#2209FC]">Dashboard</Link>
              <Link to="/projects" className="text-gray-600 hover:text-[#2209FC]">Projects</Link>
              <Link to="/browse" className="text-gray-600 hover:text-[#2209FC]">Browse</Link>
              <Link to="/profiles" className="text-[#2209FC] font-medium">Profiles</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Connect with the Community</h1>
          <p className="text-xl text-gray-600 mb-8">Find mentors, collaborate with peers, and build your network</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search for people, skills, or interests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-lg"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#2209FC] hover:bg-[#1a07d4]">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Profile Tabs */}
        <Tabs defaultValue="mentors" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mentors">Top Mentors</TabsTrigger>
            <TabsTrigger value="students">Featured Students</TabsTrigger>
            <TabsTrigger value="collaborators">Collaborators</TabsTrigger>
          </TabsList>

          <TabsContent value="mentors" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topMentors.map((mentor) => (
                <Card key={mentor.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-black">{mentor.name}</h3>
                        <p className="text-sm text-gray-600">{mentor.title}</p>
                        <p className="text-xs text-gray-500">{mentor.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {mentor.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {mentor.experience}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 mr-1" />
                        {mentor.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {mentor.students} students
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {mentor.expertise.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-[#D7E6FC] text-[#2209FC] rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <Button className="w-full bg-[#2209FC] hover:bg-[#1a07d4] text-white">
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredStudents.map((student) => (
                <Card key={student.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-black">{student.name}</h3>
                        <p className="text-sm text-gray-600">{student.course}</p>
                        <p className="text-xs text-gray-500">{student.university}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {student.location}
                      </div>
                    </div>

                    <Button className="w-full bg-[#2209FC] hover:bg-[#1a07d4] text-white">
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="collaborators" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collaborators.map((collaborator) => (
                <Card key={collaborator.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={collaborator.image}
                        alt={collaborator.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-black">{collaborator.name}</h3>
                        <p className="text-sm text-gray-600">{collaborator.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {collaborator.currentProject}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {collaborator.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-[#D7E6FC] text-[#2209FC] rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <Button className="w-full bg-[#2209FC] hover:bg-[#1a07d4] text-white">
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profiles; 