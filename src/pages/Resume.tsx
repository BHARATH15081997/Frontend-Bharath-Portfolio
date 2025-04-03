
import { Download, Calendar, MapPin, Building } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/Button';
import AnimatedBackground from '@/components/AnimatedBackground';

const Resume = () => {
  return (
    <>
      <AnimatedBackground />
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-start mb-8 flex-col md:flex-row gap-4">
            <PageHeader 
              title="Resume" 
              subtitle="My work experience and education"
            />
            
            <Button
              href="/resume.pdf"
              variant="gradient"
              size="md"
              className="flex items-center"
              target="_blank"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-secondary/40 backdrop-blur-sm rounded-lg p-6 card-hover animate-fade-in">
                <h2 className="text-xl font-bold text-portfolio-300 mb-4">Personal Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-portfolio-400">Name</h3>
                    <p className="text-muted-foreground">Bharath</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-portfolio-400">Location</h3>
                    <p className="text-muted-foreground">Namakkal, Tamil Nadu</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-portfolio-400">Email</h3>
                    <p className="text-muted-foreground">contact@bharath.dev</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-portfolio-400">Phone</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h2 className="text-xl font-bold text-portfolio-300 mb-4">CTC Details</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-portfolio-400">Current</h3>
                      <p className="text-muted-foreground">₹5,20,000</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-portfolio-400">Expected</h3>
                      <p className="text-muted-foreground">₹7,50,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-8">
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-gradient mb-6">Work Experience</h2>
                
                <div className="relative border-l border-portfolio-700/30 pl-6 ml-3 space-y-10">
                  <div className="relative">
                    <div className="absolute -left-[30px] h-6 w-6 rounded-full bg-portfolio-800 border-2 border-portfolio-500 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-portfolio-400"></div>
                    </div>
                    
                    <div className="bg-secondary/40 backdrop-blur-sm rounded-lg p-6 card-hover">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h3 className="text-xl font-bold text-portfolio-300">Frontend Developer</h3>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>2021 - Present</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground text-sm mb-4">
                        <Building className="w-4 h-4 mr-1" />
                        <span>Glib Ware Soft Solutions</span>
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>Namakkal, Tamil Nadu</span>
                      </div>
                      
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 mt-1.5 mr-2 rounded-full bg-portfolio-500"></span>
                          <span>Developed responsive web applications using React.js and modern frontend tools</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 mt-1.5 mr-2 rounded-full bg-portfolio-500"></span>
                          <span>Collaborated with UX/UI designers to implement pixel-perfect designs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 mt-1.5 mr-2 rounded-full bg-portfolio-500"></span>
                          <span>Optimized web performance and implemented best practices for SEO</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[30px] h-6 w-6 rounded-full bg-portfolio-800 border-2 border-portfolio-500 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-portfolio-400"></div>
                    </div>
                    
                    <div className="bg-secondary/40 backdrop-blur-sm rounded-lg p-6 card-hover">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h3 className="text-xl font-bold text-portfolio-300">Digital Marketing Specialist</h3>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>2018 - 2021</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground text-sm mb-4">
                        <Building className="w-4 h-4 mr-1" />
                        <span>Glib Ware Soft Solutions</span>
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>Namakkal, Tamil Nadu</span>
                      </div>
                      
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 mt-1.5 mr-2 rounded-full bg-portfolio-500"></span>
                          <span>Managed digital marketing campaigns across multiple platforms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 mt-1.5 mr-2 rounded-full bg-portfolio-500"></span>
                          <span>Created and optimized content for website and social media</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 mt-1.5 mr-2 rounded-full bg-portfolio-500"></span>
                          <span>Analyzed campaign performance and implemented data-driven strategies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-gradient mb-6">Education</h2>
                
                <div className="relative border-l border-portfolio-700/30 pl-6 ml-3 space-y-10">
                  <div className="relative">
                    <div className="absolute -left-[30px] h-6 w-6 rounded-full bg-portfolio-800 border-2 border-portfolio-500 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-portfolio-400"></div>
                    </div>
                    
                    <div className="bg-secondary/40 backdrop-blur-sm rounded-lg p-6 card-hover">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h3 className="text-xl font-bold text-portfolio-300">BE in Mechanical Engineering</h3>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>2014 - 2018</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground text-sm mb-4">
                        <Building className="w-4 h-4 mr-1" />
                        <span>Paavai College of Engineering</span>
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>Namakkal</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[30px] h-6 w-6 rounded-full bg-portfolio-800 border-2 border-portfolio-500 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-portfolio-400"></div>
                    </div>
                    
                    <div className="bg-secondary/40 backdrop-blur-sm rounded-lg p-6 card-hover">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h3 className="text-xl font-bold text-portfolio-300">Diploma in Mechanical Engineering</h3>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>2011 - 2014</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground text-sm mb-4">
                        <Building className="w-4 h-4 mr-1" />
                        <span>Sri Ayyappa Polytechnic College</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
