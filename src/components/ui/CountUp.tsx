import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'motion/react';

interface CountUpProps {
  to: number;
  from?: number;
  className?: string;
}

const CountUp = ({ 
  to, 
  from = 0, 
  className = '' 
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 200,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return <span ref={ref} className={className}>{from}</span>;
};

export default CountUp;
