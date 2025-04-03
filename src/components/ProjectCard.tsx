
import { Github, ExternalLink } from 'lucide-react';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <div className="bg-secondary/40 backdrop-blur-sm rounded-lg overflow-hidden card-hover">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-portfolio-300">{title}</h3>
        
        <p className="text-muted-foreground mt-2 text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-portfolio-900/40 text-portfolio-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3 mt-6">
          {githubUrl && (
            <Button 
              href={githubUrl} 
              variant="outline" 
              size="sm"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1"
            >
              <Github className="w-4 h-4 mr-1" />
              <span>Github</span>
            </Button>
          )}
          
          {liveUrl && (
            <Button 
              href={liveUrl} 
              variant="gradient" 
              size="sm"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              <span>Live Demo</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
