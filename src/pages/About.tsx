
import { Code, Briefcase, GraduationCap } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SkillCard from '@/components/SkillCard';
import AnimatedBackground from '@/components/AnimatedBackground';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Skills",
      items: ["HTML", "CSS", "JavaScript", "React.js", "WordPress", "Bootstrap", "Tailwind CSS", "Git & GitHub"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Work Experience",
      items: ["3 years in Digital Marketing", "2 years as Frontend Developer", "Glib Ware Soft Solutions"]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      items: [
        "BE in Mechanical Engineering (Paavai College of Engineering, Namakkal)",
        "Diploma in Mechanical Engineering (Sri Ayyappa Polytechnic College)"
      ]
    }
  ];

  return (
    <>
      <AnimatedBackground />
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader 
            title="About Me" 
            subtitle="My background, skills and experience"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-portfolio-300 mb-4">Who Am I?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate Frontend Developer and WordPress Expert with 5 years of professional experience 
                  in creating modern, responsive web applications.
                </p>
                <p>
                  My journey began in Digital Marketing, where I spent 3 years understanding user behavior and creating 
                  engaging content. This experience gave me valuable insights into what makes digital products successful.
                </p>
                <p>
                  For the past 2 years, I've focused exclusively on Frontend Development, working with React.js, 
                  JavaScript, and WordPress to build intuitive user interfaces and seamless experiences.
                </p>
                <p>
                  I'm constantly learning and expanding my skills to stay at the forefront of web development technologies.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-6 backdrop-blur-sm card-hover animate-fade-in">
              <h2 className="text-2xl font-bold text-portfolio-300 mb-4">Personal Info</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium text-portfolio-400">Location</h3>
                  <p className="text-muted-foreground">Namakkal, Tamil Nadu</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-portfolio-400">Email</h3>
                  <p className="text-muted-foreground">contact@bharath.dev</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-portfolio-400">Specialty</h3>
                  <p className="text-muted-foreground">Frontend Development</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-portfolio-400">Experience</h3>
                  <p className="text-muted-foreground">5 Years</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-portfolio-400">Current CTC</h3>
                  <p className="text-muted-foreground">₹5,20,000</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-portfolio-400">Expected CTC</h3>
                  <p className="text-muted-foreground">₹7,50,000</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard 
                key={index}
                icon={skill.icon}
                title={skill.title}
                items={skill.items}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
