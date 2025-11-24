import { GlassCard } from "@/components/GlassCard";
import { FloatingBlob } from "@/components/FloatingBlob";
import { GraduationCap, Code, Folder, Award, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="min-h-screen relative overflow-hidden py-16 px-4">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] animate-gradient" />
      
      {/* Floating Blobs */}
      <FloatingBlob color="hsl(var(--lavender))" size="350px" duration="10s" top="5%" right="5%" />
      <FloatingBlob color="hsl(var(--sky-blue))" size="300px" duration="12s" delay="2s" bottom="10%" left="5%" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
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

        {/* Education Section */}
        <GlassCard delay="0.1s" className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-lavender/20">
              <GraduationCap className="h-6 w-6 text-lavender" />
            </div>
            <h2 className="text-3xl font-semibold">Education</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-lavender pl-4">
              <h3 className="text-xl font-semibold text-lavender">Computer Science and Engineering</h3>
              <p className="text-foreground/70">Bapuji Institute of Engineering and Technology • 2023 - 2027</p>
              <p className="mt-2 text-foreground/80">CGPA: 8.4/10.0</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="text-xl font-semibold text-emerald-500">Pre University Education</h3>
              <p className="text-foreground/70">Sir M V PU College • 2021 - 2023</p>
              <p className="mt-2 text-foreground/80"> Percentage: 89%</p>
            </div>
            <div className="border-l-2 border-skyBlue pl-4">
              <h3 className="text-xl font-semibold text-skyBlue">High School Education</h3>
              <p className="text-foreground/70">Chetana Olympiad School • 2018 - 2021</p>
              <p className="mt-2 text-foreground/80"> Percentage: 81%</p>
            </div>
          </div>
        </GlassCard>

        {/* Skills Section */}
        <GlassCard delay="0.2s" className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-skyBlue/20">
              <Code className="h-6 w-6 text-skyBlue" />
            </div>
            <h2 className="text-3xl font-semibold">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["React", "TypeScript", "Node.js", "Python", "Tailwind CSS", "C", "AWS", "MongoDB", "UI/UX Design", "Java"].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-lavender/20 to-skyBlue/20 border border-lavender/30 hover:scale-105 transition-transform duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </GlassCard>

        {/* Projects Section */}
        <GlassCard delay="0.3s" className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-softPink/20">
              <Folder className="h-6 w-6 text-softPink" />
            </div>
            <h2 className="text-3xl font-semibold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-background/30 hover:bg-background/40 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-softPink mb-2">Hernia Detection System </h3>
              <p className="text-foreground/70 mb-3">This project is a Medical Imaging Analysis system designed to efficiently detect hernia from X-ray images, particularly in scenarios with limited labeled data.
It leverages Self-Supervised Learning (SSL) with the SimSiam framework to train a deep learning model (ResNet18 backbone) on a large volume of unlabeled medical images, followed by fine-tuning on specific chest X-ray data.
A key feature is its Explainable AI (XAI) component, using Grad-CAM, which provides visual insights into why the model makes a particular prediction by highlighting relevant regions in the X-ray.
The system is delivered as a full-stack web application, with a FastAPI backend handling image processing, deep learning inference, and Grad-CAM generation, and a React frontend providing an intuitive user interface. Users can upload X-ray images and receive a direct status of "Hernia Detected" or "No Hernia Detected," making the diagnosis process streamlined and focused.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-softPink/20">React</span>
                <span className="text-xs px-2 py-1 rounded-full bg-softPink/20">Node.js</span>
                <span className="text-xs px-2 py-1 rounded-full bg-softPink/20">FastAPI</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-background/30 hover:bg-background/40 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-softTeal mb-2">Mysuru Unveiled</h3>
              <p className="text-foreground/70 mb-3">This project is a React.js web application, developed with Vite and styled using Tailwind CSS, that serves as a digital guide to the culture, heritage, and history of Mysuru. It features an initial QR scanner page that acts as the application's entry point, utilizing a cover.png background and presenting a QR code on a distinct white background that links to the main content. The application includes dedicated sections for History, Culture, and Heritage, each offering interactive content enriched with integrated audio players that feature a centralized control system to ensure a single active playback at any given time. With dynamic routing managed by React Router DOM, the application also incorporates visually enhanced hero images on its primary pages, featuring adjusted opacity and optimized text colors for improved readability, and is efficiently deployed on Vercel with specific configurations to ensure seamless client-side routing and proper asset delivery.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-softTeal/20">React.js</span>
                <span className="text-xs px-2 py-1 rounded-full bg-softTeal/20">TypeScript</span>
                <span className="text-xs px-2 py-1 rounded-full bg-softTeal/20">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Achievements Section */}
        <GlassCard delay="0.4s">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-softTeal/20">
              <Award className="h-6 w-6 text-softTeal" />
            </div>
            <h2 className="text-3xl font-semibold">Achievements</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
              <span className="text-softTeal text-xl">★</span>
              <span className="text-foreground/80">Developed a full-stack Hernia Detection System using self supervised learning and integrated it with a user-friendly web interface.</span>
            </li>
            <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
              <span className="text-softPink text-xl">★</span>
              <span className="text-foreground/80">Created and deployed the “Mysuru Unveiled” project — a live, production-ready web platform showcasing Mysuru’s culture, History and Heritage.</span>
            </li>
            <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
              <span className="text-lavender text-xl">★</span>
              <span className="text-foreground/80">Finalist in the IBM Hackathon, recognized for strong problem-solving, teamwork, and technical implementation.</span>
            </li>
            <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
              <span className="text-skyBlue text-xl">★</span>
              <span className="text-foreground/80">Participated in the MIT Hackathon; project gained recognition from company leadership for its impact.</span>
            </li>
          </ul>
        </GlassCard>
      </div>
    </div>
  );
};

export default Resume;
