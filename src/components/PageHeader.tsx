
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-2">{title}</h1>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
      <div className="h-1 w-20 bg-gradient-to-r from-portfolio-400 to-portfolio-700 rounded-full mt-4 mb-6"></div>
    </div>
  );
};

export default PageHeader;
