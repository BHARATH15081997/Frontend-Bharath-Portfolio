
import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, items }) => {
  return (
    <div className="bg-secondary/40 backdrop-blur-sm rounded-lg p-6 card-hover">
      <div className="text-portfolio-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-portfolio-300 mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 mr-2 rounded-full bg-portfolio-500"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
