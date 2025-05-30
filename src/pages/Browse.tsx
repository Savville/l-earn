import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Star, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "Technology", count: 245, color: "bg-blue-500" },
    { name: "Healthcare", count: 189, color: "bg-green-500" },
    { name: "Education", count: 156, color: "bg-purple-500" },
    { name: "Environment", count: 134, color: "bg-emerald-500" },
    { name: "Finance", count: 98, color: "bg-yellow-500" },
    { name: "Social Impact", count: 87, color: "bg-pink-500" }
  ];

  const featuredContent = [
    {
      id: 1,
      type: "Workshop",
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Sarah Chen",
      rating: 4.8,
      students: 1250,
      duration: "6 weeks",
      image: "https://images.unsplash.com/photo-1516110833967-0b5716ca75b1?auto=format&fit=crop&w=400&q=80",
      price: "Free"
    },
    {
      id: 2,
      type: "Research",
      title: "Climate Change Data Analysis",
      instructor: "Prof. Michael Torres",
      rating: 4.9,
      students: 890,
      duration: "4 months",
      image: "https://images.unsplash.com/photo-1569163139302-de47fe2c88ab?auto=format&fit=crop&w=400&q=80",
      price: "$299"
    },
    {
      id: 3,
      type: "Course",
      title: "Full-Stack Web Development",
      instructor: "Alex Johnson",
      rating: 4.7,
      students: 2100,
      duration: "12 weeks",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      price: "$199"
    }
  ];

  const trendingTopics = [
    { name: "Artificial Intelligence", growth: "+25%" },
    { name: "Blockchain", growth: "+18%" },
    { name: "Sustainable Tech", growth: "+32%" },
    { name: "Quantum Computing", growth: "+15%" },
    { name: "Biotechnology", growth: "+22%" }
  ];

  const recentlyAdded = [
    {
      id: 4,
      title: "IoT Security Protocols",
      type: "Workshop",
      addedDate: "2 days ago",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 5,
      title: "Data Visualization with D3.js",
      type: "Course",
      addedDate: "1 week ago",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 6,
      title: "Renewable Energy Systems",
      type: "Research",
      addedDate: "3 days ago",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=300&q=80"
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
              <Link to="/browse" className="text-[#2209FC] font-medium">Browse</Link>
              <Link to="/profiles" className="text-gray-600 hover:text-[#2209FC]">Profiles</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Discover Learning Opportunities</h1>
          <p className="text-xl text-gray-600 mb-8">Explore courses, workshops, research projects, and more</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search for courses, workshops, research..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-lg"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#2209FC] hover:bg-[#1a07d4]">
              Search
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-3`}></div>
                  <h3 className="font-semibold text-black mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} items</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="recent">Recently Added</TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredContent.map((item) => (
                <Card key={item.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-[#D7E6FC] text-[#2209FC] rounded-full text-xs font-medium">
                          {item.type}
                        </span>
                        <span className="text-lg font-bold text-[#2209FC]">{item.price}</span>
                      </div>
                      <h3 className="font-semibold text-black mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">by {item.instructor}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 mr-1" />
                          {item.rating}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {item.students}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {item.duration}
                        </div>
                      </div>
                      <Button className="w-full bg-[#2209FC] hover:bg-[#1a07d4] text-white">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trending" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingTopics.map((topic, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-black">{topic.name}</h3>
                      <span className="text-green-600 font-medium text-sm">{topic.growth}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#2209FC] h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Trending in your area</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentlyAdded.map((item) => (
                <Card key={item.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          {item.type}
                        </span>
                        <span className="text-xs text-gray-500">{item.addedDate}</span>
                      </div>
                      <h3 className="font-semibold text-black mb-4">{item.title}</h3>
                      <Button variant="outline" className="w-full border-[#2209FC] text-[#2209FC] hover:bg-[#D7E6FC]">
                        Explore
                      </Button>
                    </div>
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

export default Browse; 