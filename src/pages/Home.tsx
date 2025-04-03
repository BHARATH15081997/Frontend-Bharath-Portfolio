
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import AnimatedBackground from '@/components/AnimatedBackground';

const Home = () => {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen flex flex-col justify-center pt-16">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <h2 className="text-xl md:text-2xl font-medium text-portfolio-400 mb-2">
                  Hi There! 👋
                </h2>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                I'M <span className="text-gradient">BHARATH</span>
              </h1>
              
              <div>
                <h3 className="text-xl md:text-2xl font-medium text-muted-foreground">
                  Frontend Developer | WordPress Expert
                </h3>
              </div>
              
              <p className="text-muted-foreground max-w-lg">
                I build responsive, user-friendly web applications with modern technologies.
                With 5 years of experience in digital marketing and frontend development,
                I create engaging digital experiences that drive results.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  to="/projects"
                  variant="gradient"
                  size="lg"
                  className="group"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button
                  href="/resume.pdf"
                  variant="outline"
                  size="lg"
                  target="_blank"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md animate-float">
              <img 
                src="/lovable-uploads/fecaab39-cfcf-4c96-8a69-2617c5017c51.png" 
                alt="Developer illustration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
