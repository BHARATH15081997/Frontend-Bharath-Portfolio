
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';
import AnimatedBackground from '@/components/AnimatedBackground';

const Projects = () => {
  const projects = [
    {
      title: "Product Catalog with Admin Panel",
      description: "A comprehensive e-commerce product catalog with an admin dashboard for managing products, categories, and orders.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      technologies: ["React.js", "Bootstrap", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/bharath/product-catalog",
      liveUrl: "https://product-catalog.bharath.dev",
    },
    {
      title: "Weather Dashboard",
      description: "A real-time weather application that provides current and forecasted weather conditions for any location worldwide.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
      technologies: ["React.js", "Tailwind CSS", "Weather API"],
      githubUrl: "https://github.com/bharath/weather-app",
      liveUrl: "https://weather.bharath.dev",
    },
    {
      title: "Portfolio WordPress Theme",
      description: "A custom WordPress theme designed for creative professionals and agencies, featuring a modern and clean design.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
      technologies: ["WordPress", "PHP", "JavaScript", "CSS"],
      githubUrl: "https://github.com/bharath/portfolio-theme",
      liveUrl: "https://demo.bharath.dev/portfolio",
    },
  ];

  return (
    <>
      <AnimatedBackground />
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader 
            title="My Projects" 
            subtitle="A showcase of my recent work and projects"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
