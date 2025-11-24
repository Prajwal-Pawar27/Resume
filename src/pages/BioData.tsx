import { GlassCard } from "@/components/GlassCard";
import { FloatingBlob } from "@/components/FloatingBlob";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BioData = () => {
  return (
    <div className="min-h-screen relative overflow-hidden py-16 px-4">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] animate-gradient" />
      
      {/* Floating Blobs */}
      <FloatingBlob color="hsl(var(--soft-pink))" size="350px" duration="11s" top="10%" left="10%" />
      <FloatingBlob color="hsl(var(--soft-teal))" size="300px" duration="9s" delay="1s" bottom="15%" right="10%" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <Link to="/" className="inline-block mb-4">
          <Button 
            variant="outline" 
            className="glass bg-white text-black border-2 border-white hover:bg-white/90 rounded-full"
          >
            <Home className="mr-2 w-4 h-4 text-black" />
            Back to Home
          </Button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] mb-4">
            Resume
          </h1>
          <p className="text-xl text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">My professional journey and expertise</p>
        </div>

        {/* Bio Data Table */}
        <GlassCard delay="0.1s">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-border/20">
                <tr className="hover:bg-white/5 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-lavender">Full Name</td>
                  <td className="py-4 px-6 text-foreground/80">Prajwal.V.Pawar</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-skyBlue">Date of Birth</td>
                  <td className="py-4 px-6 text-foreground/80">February 27, 2005</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-softPink">Gender</td>
                  <td className="py-4 px-6 text-foreground/80">Male</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-softTeal">Nationality</td>
                  <td className="py-4 px-6 text-foreground/80">Indian</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-lavender">Email</td>
                  <td className="py-4 px-6 text-foreground/80">vprajwalpawar@gmail.com</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-skyBlue">Phone</td>
                  <td className="py-4 px-6 text-foreground/80">+91 63608 24262</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-softPink">Address</td>
                  <td className="py-4 px-6 text-foreground/80">Durga Nivasa, K.T.J Nagar, 3rd main, 11th cross, 577002, Davangere, Karnataka, India</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-softTeal">LinkedIn</td>
                  <td className="py-4 px-6">
                    <a
                      href="https://www.linkedin.com/in/prajwal-pawar-668373308/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-softTeal transition-colors"
                    >
                      https://www.linkedin.com/in/prajwal-pawar-668373308/
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-lavender">GitHub</td>
                  <td className="py-4 px-6 text-foreground/80">https://github.com/Prajwal-Pawar27</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-skyBlue">Languages</td>
                  <td className="py-4 px-6 text-foreground/80">Kannada (Native), English (Fluent), Hindi (Intermediate)</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-softPink">Hobbies</td>
                  <td className="py-4 px-6 text-foreground/80">Hiking, Studying psychology and philosophy, Following global geopolitics and international affairs, Reading Sci-Fi</td>
                </tr>
              
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Additional Information */}
        <GlassCard delay="0.2s" className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-softPink to-softTeal bg-clip-text text-transparent">
            Professional Summary
          </h2>
          <p className="text-foreground/80 leading-relaxed">
          Aspiring Software Developer with strong foundations in Java, Web Development, Database Management Systems, and Data Structures. Experienced in building full-stack applications, including a Hernia Detection System using Self-Supervised Learning (SSL) with FastAPI and React, and the Mysuru Unveiled live deployment project. Demonstrated problem-solving skills through participation in multiple hackathons, including being a finalist in an IBM hackathon. Passionate about technology, learning, and creating efficient software solutions. Actively explores psychology, philosophy, and geopolitics, bringing a thoughtful and analytical approach to teamwork and innovation. 
          </p>
        </GlassCard>
      </div>
    </div>
  );
};

export default BioData;
