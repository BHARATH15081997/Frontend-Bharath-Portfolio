
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
      {/* Deep space background with gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-portfolio-950/40 to-background"></div>
      
      {/* Star layers */}
      <div className="stars stars-small"></div>
      <div className="stars stars-medium opacity-70"></div>
      <div className="stars stars-large opacity-50"></div>
      
      {/* Purple gradient orbs */}
      <div className="absolute top-[15%] left-[5%] w-[20vw] h-[20vw] rounded-full bg-portfolio-900/30 blur-[100px]"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[25vw] h-[25vw] rounded-full bg-portfolio-800/20 blur-[120px]"></div>
    </div>
  );
};

export default AnimatedBackground;
