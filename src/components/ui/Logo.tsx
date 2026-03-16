import { useState } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  textClassName?: string;
}

const Logo = ({ className, textClassName }: LogoProps) => {
  const [imageError, setImageError] = useState(false);
  
  // The user provided Google Drive link ID: 1rc_UZZ6o7oTJr5pTsHn5R1qaFBbC0rO9
  // We try to use the direct download link format
  const logoUrl = "https://lh3.googleusercontent.com/d/1rc_UZZ6o7oTJr5pTsHn5R1qaFBbC0rO9";

  if (!imageError) {
    return (
      <div className={cn("relative overflow-hidden flex items-center justify-center bg-white rounded-full", className)}>
        <img 
          src={logoUrl} 
          alt="TEK Foundation Logo" 
          className="w-full h-full object-contain"
          onError={() => setImageError(true)}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Fallback text logo
  return (
    <div className={cn("flex items-center justify-center bg-white shadow-sm rounded-full", className)}>
      <span className={cn("font-heading font-bold text-forest", textClassName || "text-lg")}>TF</span>
    </div>
  );
};

export default Logo;
