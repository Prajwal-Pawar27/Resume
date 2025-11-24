import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: string;
}

export const GlassCard = ({ children, className, delay }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] opacity-0 animate-fade-in-up",
        className
      )}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};
