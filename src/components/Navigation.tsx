
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-black">
                L-earn
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-black hover:text-[#2209FC] transition-colors duration-200">
                About
              </a>
              <a href="#features" className="text-black hover:text-[#2209FC] transition-colors duration-200">
                Features
              </a>
              <a href="#contact" className="text-black hover:text-[#2209FC] transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <Button variant="outline" className="border-[#2209FC] text-[#2209FC] hover:bg-[#D7E6FC]" asChild>
              <Link to="/auth">Log In</Link>
            </Button>
            <Button className="bg-[#2209FC] hover:bg-[#1a07d4] text-white" asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-[#2209FC] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#about" className="block px-3 py-2 text-black hover:text-[#2209FC]">
                About
              </a>
              <a href="#features" className="block px-3 py-2 text-black hover:text-[#2209FC]">
                Features
              </a>
              <a href="#contact" className="block px-3 py-2 text-black hover:text-[#2209FC]">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-[#2209FC] text-[#2209FC] hover:bg-[#D7E6FC]" asChild>
                  <Link to="/auth">Log In</Link>
                </Button>
                <Button className="bg-[#2209FC] hover:bg-[#1a07d4] text-white" asChild>
                  <Link to="/auth">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
