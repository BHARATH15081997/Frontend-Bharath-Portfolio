
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import AnimatedBackground from '@/components/AnimatedBackground';

const NotFound = () => {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-7xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-2xl font-medium text-white mb-6">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Button to="/" variant="gradient" size="lg" className="flex items-center mx-auto">
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
