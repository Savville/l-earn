import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Upload, CheckCircle2, Pencil } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const requiredFields = [
  "fullName", "email", "phoneNumber", "userId", "whatsapp", "linkedin", "aboutMe", "course", "institution"
];

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

  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [studentIdImage, setStudentIdImage] = useState<string | null>(null);
  const [studentIdUploaded, setStudentIdUploaded] = useState(false);
  const navigate = useNavigate();

  const fieldRefs = {
    fullName: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    phoneNumber: useRef<HTMLInputElement>(null),
    userId: useRef<HTMLInputElement>(null),
    whatsapp: useRef<HTMLInputElement>(null),
    linkedin: useRef<HTMLInputElement>(null),
    aboutMe: useRef<HTMLTextAreaElement>(null),
    course: useRef<HTMLInputElement>(null),
    institution: useRef<HTMLInputElement>(null),
    studentId: useRef<HTMLDivElement>(null),
  };

  const studentIdInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Helper to create a preview URL and clean up old ones
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(prev => {
        if (prev) URL.revokeObjectURL(prev);
        return url;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });
    if (!studentIdImage) {
      newErrors["studentId"] = "Student ID proof is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      navigate("/interests");
    } else {
      // Find the first field with an error and scroll to it
      const firstErrorField = Object.keys(errors).find((key) => errors[key]);
      if (firstErrorField && fieldRefs[firstErrorField]?.current) {
        fieldRefs[firstErrorField].current.scrollIntoView({ behavior: "smooth", block: "center" });
        // Optionally, focus the field if it's an input or textarea
        if (fieldRefs[firstErrorField].current instanceof HTMLInputElement ||
            fieldRefs[firstErrorField].current instanceof HTMLTextAreaElement) {
          fieldRefs[firstErrorField].current.focus();
        }
      }
    }
  };

  useEffect(() => {
    const firstErrorField = Object.keys(errors).find((key) => errors[key]);
    if (firstErrorField && fieldRefs[firstErrorField]?.current) {
      fieldRefs[firstErrorField].current.scrollIntoView({ behavior: "smooth", block: "center" });
      if (fieldRefs[firstErrorField].current instanceof HTMLInputElement ||
          fieldRefs[firstErrorField].current instanceof HTMLTextAreaElement) {
        fieldRefs[firstErrorField].current.focus();
      }
    }
  }, [errors]);

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Background Image Section - Desktop */}
      <div className="hidden lg:block relative h-48 bg-gradient-to-r from-blue-400 to-cyan-300">
        <img 
          src={bannerImage || "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1200&q=80"}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Camera Button and File Input for Banner */}
        <input
          type="file"
          accept="image/jpeg"
          style={{ display: "none" }}
          id="banner-upload"
          onChange={(e) => handleImageChange(e, setBannerImage)}
        />
        <button
          type="button"
          className="absolute bottom-2 right-2 w-7 h-7 rounded-full shadow-lg flex items-center justify-center bg-gray-100 hover:bg-white transition-colors duration-200 group"
          onClick={() => document.getElementById("banner-upload")?.click()}
          title="Change banner image"
        >
          <Camera className="h-4 w-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
        </button>
      </div>

      {/* Mobile Background */}
      <div className="lg:hidden relative h-32 bg-gradient-to-r from-blue-400 to-cyan-300">
        <img 
          src={bannerImage || "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80"}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Profile Image */}
        <div className="relative -mt-16 lg:-mt-48 mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-300">
              <img 
                src={profileImage || "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=200&q=80"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Camera Button and File Input */}
            <input
              type="file"
              accept="image/jpeg"
              style={{ display: "none" }}
              id="profile-upload"
              onChange={(e) => handleImageChange(e, setProfileImage)}
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 w-6 h-6 rounded-full shadow-lg flex items-center justify-center bg-gray-100 hover:bg-white transition-colors duration-200 group"
              onClick={() => document.getElementById("profile-upload")?.click()}
            >
              <Camera className="h-3.5 w-3.5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          

          {/* Right side - Form */}
          <div className="lg:col-span-3">
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
                  <div className="bg-[#D7E6FC] p-3 rounded relative">
                    {errors.fullName && (
                      <span className="absolute left-2 top-1 text-xs text-red-500">{errors.fullName}</span>
                    )}
                    <label className="text-sm font-medium text-gray-700">Full name</label>
                    <Input
                      ref={fieldRefs.fullName}
                      className="mt-1"
                      value={formData.fullName}
                      onChange={(e) => {
                        handleInputChange('fullName', e.target.value);
                        if (e.target.value) setErrors(prev => ({ ...prev, fullName: "" }));
                      }}
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.fullName}</span>
                    )}
                  </div>
                  <div className="bg-[#D7E6FC] p-3 rounded">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input
                      ref={fieldRefs.email}
                      className="mt-1"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>
                    )}
                  </div>
                  <div className="bg-[#D7E6FC] p-3 rounded">
                    <label className="text-sm font-medium text-gray-700">Phone number</label>
                    <Input
                      ref={fieldRefs.phoneNumber}
                      className="mt-1"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    />
                    {errors.phoneNumber && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.phoneNumber}</span>
                    )}
                  </div>
                  <div className="bg-[#D7E6FC] p-3 rounded">
                    <label className="text-sm font-medium text-gray-700">User ID</label>
                    <Input
                      ref={fieldRefs.userId}
                      className="mt-1"
                      value={formData.userId}
                      onChange={(e) => handleInputChange('userId', e.target.value)}
                    />
                    {errors.userId && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.userId}</span>
                    )}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-medium text-black mb-3">Add links to socials</h3>
                  <div className="bg-[#D7E6FC] p-3 rounded relative space-y-3">
                    {/* WhatsApp Field */}
                    {errors.whatsapp && (
                      <span className="absolute left-2 top-1 text-xs text-red-500">{errors.whatsapp}</span>
                    )}
                    <label className="text-sm font-medium text-gray-700">Whatsapp No :</label>
                    <Input
                      ref={fieldRefs.whatsapp}
                      className="mt-1"
                      value={formData.whatsapp}
                      onChange={(e) => {
                        handleInputChange('whatsapp', e.target.value);
                        if (e.target.value) setErrors(prev => ({ ...prev, whatsapp: "" }));
                      }}
                    />
                    {errors.whatsapp && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.whatsapp}</span>
                    )}
                    {/* LinkedIn Field */}
                    <label className="text-sm font-medium text-gray-700 mt-3">Linkedin :</label>
                    <Input
                      ref={fieldRefs.linkedin}
                      className="mt-1"
                      value={formData.linkedin}
                      onChange={(e) => handleInputChange('linkedin', e.target.value)}
                    />
                    {errors.linkedin && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.linkedin}</span>
                    )}
                  </div>
                  {/* Others Field remains outside the blue box */}
                  <div className="mt-3">
                    <label className="text-sm font-medium text-gray-700">Others:</label>
                    <Input 
                      className="mt-1"
                      value={formData.others}
                      onChange={(e) => handleInputChange('others', e.target.value)}
                    />
                  </div>
                </div>

                {/* About Me */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">About me</label>
                  <Textarea 
                    ref={fieldRefs.aboutMe}
                    className="w-full"
                    rows={3}
                    value={formData.aboutMe}
                    onChange={(e) => handleInputChange('aboutMe', e.target.value)}
                  />
                  {errors.aboutMe && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.aboutMe}</span>
                  )}
                </div>

                {/* Course */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
                  <Input 
                    ref={fieldRefs.course}
                    className=""
                    value={formData.course}
                    onChange={(e) => handleInputChange('course', e.target.value)}
                  />
                  {errors.course && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.course}</span>
                  )}
                </div>

                {/* Institution */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Institution</label>
                  <Input 
                    ref={fieldRefs.institution}
                    className=""
                    value={formData.institution}
                    onChange={(e) => handleInputChange('institution', e.target.value)}
                  />
                  {errors.institution && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.institution}</span>
                  )}
                </div>

                {/* Proof of Studentship */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Proof of Studentship</label>
                  <div className="relative border border-gray-300 rounded px-3 h-12 flex items-center bg-white">
                    <input
                      ref={studentIdInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      id="student-id-upload"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const url = URL.createObjectURL(file);
                          setStudentIdImage(url);
                          setStudentIdUploaded(true);
                          setErrors(prev => ({ ...prev, studentId: "" }));
                        }
                      }}
                    />
                    {!studentIdImage ? (
                      <>
                        <Upload className="h-5 w-5 text-gray-400 mr-2" />
                        <span
                          className="text-sm text-gray-500 cursor-pointer"
                          onClick={() => studentIdInputRef.current?.click()}
                        >
                          Add photo of School ID
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded bg-white border border-gray-200 overflow-hidden flex-shrink-0 mr-3 relative">
                          <img src={studentIdImage} alt="Student ID" className="object-cover w-full h-full" />
                        </div>
                        <div className="flex items-center justify-center h-full">
                          <CheckCircle2 className="text-green-500 mr-1" size={18} />
                          <span className="text-green-700 text-xs font-semibold">Uploaded successfully</span>
                        </div>
                        <button
                          type="button"
                          className="ml-auto p-1 rounded hover:bg-gray-200 transition-colors"
                          onClick={() => studentIdInputRef.current?.click()}
                          title="Edit ID"
                        >
                          <Pencil className="w-4 h-4 text-gray-500" />
                        </button>
                      </>
                    )}
                    {errors.studentId && (
                      <span className="block text-xs text-red-500 mt-1">{errors.studentId}</span>
                    )}
                  </div>
                  {/* Please upload statement bottom left */}
                  {!studentIdImage && (
                    <div className="flex justify-start">
                      <p className="text-xs text-yellow-600 mt-1">Please upload your student ID. You cannot proceed without it.</p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    className="flex-1 bg-[#2209FC] hover:bg-[#1a07d4] text-white py-3"
                    asChild
                    onClick={handleSave}
                  >
                    <span>Save profile</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-gray-300 text-gray-700"
                    onClick={() => navigate("/auth")}
                  >
                    Back
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
