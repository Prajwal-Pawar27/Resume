import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FloatingBlob } from "@/components/FloatingBlob";
import { FileText, User } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] animate-gradient" />
      
      {/* Floating Blobs */}
      <FloatingBlob color="hsl(var(--lavender))" size="400px" duration="8s" top="10%" left="5%" />
      <FloatingBlob color="hsl(var(--sky-blue))" size="350px" duration="10s" delay="1s" top="60%" right="10%" />
      <FloatingBlob color="hsl(var(--soft-pink))" size="300px" duration="12s" delay="2s" bottom="10%" left="20%" />
      <FloatingBlob color="hsl(var(--soft-teal))" size="250px" duration="9s" delay="3s" top="40%" right="30%" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-lavender via-skyBlue to-softPink p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Intro Text */}
        <div className="space-y-4 mb-12 animate-fade-in-up stagger-1">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Discover my journey, skills, and achievements through an artistic lens
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up stagger-2">
          <Link to="/resume">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-lavender to-skyBlue hover:from-lavender/90 hover:to-skyBlue/90 text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Resume
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </Link>
          <Link to="/bio-data">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-softPink to-softTeal hover:from-softPink/90 hover:to-softTeal/90 text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <User className="mr-2 h-5 w-5" />
              View Bio-Data
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
