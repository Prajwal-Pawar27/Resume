interface FloatingBlobProps {
  color: string;
  size: string;
  duration: string;
  delay?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export const FloatingBlob = ({ 
  color, 
  size, 
  duration, 
  delay = "0s",
  top,
  left,
  right,
  bottom 
}: FloatingBlobProps) => {
  return (
    <div
      className="absolute rounded-full blur-3xl opacity-30 animate-float"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        animationDuration: duration,
        animationDelay: delay,
        top,
        left,
        right,
        bottom,
      }}
    />
  );
};
