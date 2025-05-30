
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    { 
      id: 1, 
      title: "Hedera Hashathon",
      description: "Submit Web3 application on Hedera",
      date: "24 - 30th March 2025",
      type: "current",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
    },
    { 
      id: 2, 
      title: "Cardano Workshop",
      description: "Submit Web3 application on Hedera",
      date: "24 - 30th March 2025",
      type: "current",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
    },
    { 
      id: 3, 
      title: "Pioneering the Future of Developers",
      description: "Submit Web3 application on Hedera",
      date: "24 - 30th March 2025",
      type: "current",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
    },
    { 
      id: 4, 
      title: "Artificial Intelligence",
      description: "Submit Web3 application on Hedera",
      date: "24 - 30th March 2025",
      type: "current",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const recommendedProjects = [
    { 
      id: 5, 
      title: "3D Modeling Project",
      description: "Submit Web3 application on Hedera",
      date: "24 - 30th March 2025",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=400&q=80"
    },
    { 
      id: 6, 
      title: "Architecture Design",
      description: "Submit Web3 application on Hedera",
      date: "24 - 30th March 2025",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=400&q=80"
    },
    { 
      id: 7, 
      title: "Research Lab",
      description: "Submit Web3 application on Hedera",
      date: "24 - 30th March 2025",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=400&q=80"
    },
    { 
      id: 8, 
      title: "Electronics Project",
      description: "Submit Web3 application on Hedera",
      date: "24 - 30th March 2025",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Mobile Header */}
      <div className="lg:hidden bg-[#2209FC] text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#2209FC] font-bold text-sm">Lé</span>
          </div>
          <span className="font-bold">L-earn</span>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block bg-white text-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#2209FC] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Lé</span>
              </div>
              <span className="font-bold">L-earn</span>
            </div>
            <div className="flex space-x-8">
              <Link to="/dashboard" className="text-[#2209FC] font-medium">Dashboard</Link>
              <Link to="/projects" className="text-gray-600 hover:text-[#D7E6FC]">Projects</Link>
              <Link to="/browse" className="text-gray-600 hover:text-[#D7E6FC]">Browse</Link>
              <Link to="/profiles" className="text-gray-600 hover:text-[#D7E6FC]">Profiles</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:flex lg:gap-8">
          {/* Welcome Section */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="flex items-center space-x-4 mb-6">
              <h1 className="text-2xl lg:text-3xl font-bold text-black">
                Welcome Alvin
              </h1>
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=100&q=80" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="space-y-4">
              <Card className="bg-[#D7E6FC] border-none">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-black text-lg">Current projects</h3>
                      <p className="text-sm text-gray-600">12 projects completed</p>
                    </div>
                    <div className="text-3xl font-bold text-black">4</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#D7E6FC] border-none">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-black text-lg">Current research</h3>
                      <p className="text-sm text-gray-600">4 research completed</p>
                    </div>
                    <div className="text-3xl font-bold text-black">2</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#D7E6FC] border-none">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-black text-lg">Current jobs</h3>
                      <p className="text-sm text-gray-600">3 projects completed</p>
                    </div>
                    <div className="text-3xl font-bold text-black">1</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Current Activities & Recommended */}
          <div className="lg:w-2/3">
            {/* Current Activities */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-black mb-6">Current activities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                {projects.map((project) => (
                  <Card key={project.id} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-semibold text-black mb-2 text-sm">{project.title}</h3>
                      <p className="text-xs text-gray-600 mb-2">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-[#2209FC]">{project.date}</span>
                        <ExternalLink className="h-4 w-4 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-right">
                <Button variant="outline" className="text-[#2209FC] border-[#2209FC]">
                  View more →
                </Button>
              </div>
            </div>

            {/* Recommended */}
            <div>
              <h2 className="text-xl font-bold text-black mb-6">Recommended</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                {recommendedProjects.map((project) => (
                  <Card key={project.id} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-semibold text-black mb-2 text-sm">{project.title}</h3>
                      <p className="text-xs text-gray-600 mb-2">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-[#2209FC]">{project.date}</span>
                        <ExternalLink className="h-4 w-4 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-right">
                <Button variant="outline" className="text-[#2209FC] border-[#2209FC]">
                  View more →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
