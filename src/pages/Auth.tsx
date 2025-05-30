import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, X } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    university: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login data:", loginData);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // TODO: Implement signup logic
    console.log("Signup data:", signupData);
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Header */}
        <div className="bg-[#2209FC] text-white p-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#2209FC] font-bold text-sm">Lé</span>
            </div>
            <span className="font-bold text-lg">L-earn</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-48">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
            alt="Student"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Content */}
        <div className="flex-1 p-6">
          <Tabs defaultValue="signup" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="signup" className="text-sm">Sign up</TabsTrigger>
              <TabsTrigger value="login" className="text-sm">Log in</TabsTrigger>
            </TabsList>

            {/* Sign Up Tab */}
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm text-black mb-1">Enter your name.</label>
                  <Input
                    placeholder="Enter your name"
                    value={signupData.firstName}
                    onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                    className="bg-gray-100 border-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-black mb-1">Enter your email.</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    className="bg-gray-100 border-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-black mb-1">Create password</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      className="bg-gray-100 border-none pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-black mb-1">Confirm password</label>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      value={signupData.confirmPassword}
                      onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                      className="bg-gray-100 border-none pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#2209FC] hover:bg-[#1a07d4] text-white py-3 mt-6"
                  asChild
                >
                  <Link to="/profile-setup">Complete</Link>
                </Button>

                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600 mb-4">OR</p>
                  <p className="text-sm text-gray-600 mb-4">Continue with</p>
                  
                  <div className="flex justify-center space-x-4">
                    <button className="flex-1 h-12 bg-gray-100 rounded-lg flex items-center justify-center min-w-[100px] max-w-[180px] px-0">
                      <span className="text-red-500 font-bold w-full text-center px-4">Google</span>
                    </button>
                    <button className="flex-1 h-12 bg-gray-100 rounded-lg flex items-center justify-center min-w-[100px] max-w-[180px] px-0">
                      <span className="text-blue-600 font-bold w-full text-center px-4">Facebook</span>
                    </button>
                    <button className="flex-1 h-12 bg-gray-100 rounded-lg flex items-center justify-center min-w-[100px] max-w-[180px] px-0">
                      <span className="text-black font-bold w-full text-center px-4">Apple</span>
                    </button>
                  </div>
                </div>

                <p className="text-xs text-gray-500 text-center mt-6">
                  By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.
                </p>
              </form>
            </TabsContent>

            {/* Login Tab */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm text-black mb-1">Enter your email.</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="bg-gray-100 border-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-black mb-1">Enter your password</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="bg-gray-100 border-none pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#2209FC] hover:bg-[#1a07d4] text-white py-3 mt-6"
                  asChild
                >
                  <Link to="/dashboard">Sign In</Link>
                </Button>

                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600 mb-4">OR</p>
                  <p className="text-sm text-gray-600 mb-4">Continue with</p>
                  
                  <div className="flex justify-center space-x-4">
                    <button className="flex-1 h-12 bg-gray-100 rounded-lg flex items-center justify-center min-w-[100px] max-w-[180px] px-0">
                      <span className="text-red-500 font-bold w-full text-center px-4">Google</span>
                    </button>
                    <button className="flex-1 h-12 bg-gray-100 rounded-lg flex items-center justify-center min-w-[100px] max-w-[180px] px-0">
                      <span className="text-blue-600 font-bold w-full text-center px-4">Facebook</span>
                    </button>
                    <button className="flex-1 h-12 bg-gray-100 rounded-lg flex items-center justify-center min-w-[100px] max-w-[180px] px-0">
                      <span className="text-black font-bold w-full text-center px-4">Apple</span>
                    </button>
                  </div>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left side - Image */}
        <div className="w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
            alt="Student"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Modal-style form */}
        <div className="w-1/2 flex items-center justify-center bg-white relative">
          <div className="w-full max-w-md p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[#2209FC] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">Lé</span>
                </div>
                <span className="font-bold text-xl">L-earn</span>
              </div>
              
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>

            <Tabs defaultValue="signup" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="signup">Sign up</TabsTrigger>
                <TabsTrigger value="login">Log in</TabsTrigger>
              </TabsList>

              {/* Sign Up Tab */}
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <label className="block text-sm text-black mb-2">Enter your name.</label>
                    <Input
                      placeholder="Enter your name"
                      value={signupData.firstName}
                      onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                      className="bg-gray-100 border-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-black mb-2">Enter your mail</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      className="bg-gray-100 border-none"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-black mb-2">Create password</label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={signupData.password}
                          onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                          className="bg-gray-100 border-none pr-10"
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-black mb-2">Confirm password</label>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm password"
                          value={signupData.confirmPassword}
                          onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                          className="bg-gray-100 border-none pr-10"
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#2209FC] hover:bg-[#1a07d4] text-white py-3 mt-6"
                    asChild
                  >
                    <Link to="/profile-setup">Complete</Link>
                  </Button>

                  <div className="text-center mt-6">
                    <p className="text-sm text-gray-600 mb-4">OR</p>
                    <p className="text-sm text-gray-600 mb-4">Continue with</p>
                    
                    <div className="flex justify-center space-x-4">
                      <button className="flex-1 h-12 bg-gray-100 rounded-lg flex items-center justify-center min-w-[100px] max-w-[180px] px-0">
                        <span className="text-red-500 font-bold w-full text-center px-4">Google</span>
                      </button>
                      <button className="flex-1 h-12 bg-gray-100 rounded-lg flex items-center justify-center min-w-[100px] max-w-[180px] px-0">
                        <span className="text-blue-600 font-bold w-full text-center px-4">Facebook</span>
                      </button>
                      <button className="flex-1 h-12 bg-gray-100 rounded-lg flex items-center justify-center min-w-[100px] max-w-[180px] px-0">
                        <span className="text-black font-bold w-full text-center px-4">Apple</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-6">
                    By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.
                  </p>
                </form>
              </TabsContent>

              {/* Login Tab */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm text-black mb-2">Enter your email.</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="bg-gray-100 border-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-black mb-2">Enter your password</label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className="bg-gray-100 border-none pr-10"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#2209FC] hover:bg-[#1a07d4] text-white py-3 mt-6"
                    asChild
                  >
                    <Link to="/dashboard">Sign In</Link>
                  </Button>

                  <div className="text-center mt-6">
                    <p className="text-sm text-gray-600 mb-4">OR</p>
                    <p className="text-sm text-gray-600 mb-4">Continue with</p>
                    
                    <div className="flex justify-center space-x-4">
                      <button className="flex-1 h-12 bg-gray-100 rounded-lg flex items-center justify-center min-w-[100px] max-w-[180px] px-0">
                        <span className="text-red-500 font-bold w-full text-center px-4">Google</span>
                      </button>
                      <button className="flex-1 h-12 bg-gray-100 rounded-lg flex items-center justify-center min-w-[100px] max-w-[180px] px-0">
                        <span className="text-blue-600 font-bold w-full text-center px-4">Facebook</span>
                      </button>
                      <button className="flex-1 h-12 bg-gray-100 rounded-lg flex items-center justify-center min-w-[100px] max-w-[180px] px-0">
                        <span className="text-black font-bold w-full text-center px-4">Apple</span>
                      </button>
                    </div>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
