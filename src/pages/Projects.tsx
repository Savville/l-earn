import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Search, Filter, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const myProjects = [
    {
      id: 1,
      title: "AI-Powered Smart Home System",
      description: "Developing an intelligent home automation system using machine learning",
      status: "In Progress",
      progress: 75,
      deadline: "March 15, 2025",
      team: 4,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Sustainable Energy Dashboard",
      description: "Creating a comprehensive dashboard for renewable energy monitoring",
      status: "Planning",
      progress: 25,
      deadline: "April 20, 2025",
      team: 3,
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Blockchain Voting Platform",
      description: "Secure and transparent voting system using blockchain technology",
      status: "Completed",
      progress: 100,
      deadline: "February 28, 2025",
      team: 5,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const availableProjects = [
    {
      id: 4,
      title: "Medical Data Analysis Tool",
      description: "Analyze patient data to identify health trends and patterns",
      difficulty: "Advanced",
      duration: "3 months",
      skills: ["Python", "Data Science", "Healthcare"],
      participants: 12,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      title: "Mobile Learning App",
      description: "Educational app for interactive learning experiences",
      difficulty: "Intermediate",
      duration: "2 months",
      skills: ["React Native", "UI/UX", "Education"],
      participants: 8,
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      title: "Environmental Monitoring IoT",
      description: "IoT sensors for real-time environmental data collection",
      difficulty: "Advanced",
      duration: "4 months",
      skills: ["IoT", "Arduino", "Data Analysis"],
      participants: 15,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80"
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
              <Link to="/projects" className="text-[#2209FC] font-medium">Projects</Link>
              <Link to="/browse" className="text-gray-600 hover:text-[#2209FC]">Browse</Link>
              <Link to="/profiles" className="text-gray-600 hover:text-[#2209FC]">Profiles</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-black mb-2">Projects</h1>
            <p className="text-gray-600">Manage your projects and discover new opportunities</p>
          </div>
          <Button className="bg-[#2209FC] hover:bg-[#1a07d4] text-white mt-4 md:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="border-gray-300">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="my-projects" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="my-projects">My Projects</TabsTrigger>
            <TabsTrigger value="available">Available Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="my-projects" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myProjects.map((project) => (
                <Card key={project.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-sm text-gray-500">{project.progress}%</span>
                    </div>
                    <h3 className="font-semibold text-black mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                      <span>Due: {project.deadline}</span>
                      <span>{project.team} members</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className="bg-[#2209FC] h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <Button className="w-full bg-[#2209FC] hover:bg-[#1a07d4] text-white">
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="available" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableProjects.map((project) => (
                <Card key={project.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.difficulty === 'Advanced' ? 'bg-red-100 text-red-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {project.difficulty}
                      </span>
                      <span className="text-sm text-gray-500">{project.duration}</span>
                    </div>
                    <h3 className="font-semibold text-black mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-[#D7E6FC] text-[#2209FC] rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                      <span>{project.participants} participants</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                    <Button variant="outline" className="w-full border-[#2209FC] text-[#2209FC] hover:bg-[#D7E6FC]">
                      Join Project
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

export default Projects; 