import { Code, Database, Lightbulb, MessageSquare, Users, Zap, Layout, Server, Wrench, Library } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skillGroups = [
    { title: 'Languages', icon: Code, skills: ['Python', 'JavaScript', 'SQL'] },
    { title: 'Frontend', icon: Layout, skills: ['HTML', 'CSS', 'React.js'] },
    { title: 'Backend', icon: Server, skills: ['Flask'] },
    { title: 'Databases', icon: Database, skills: ['MySQL', 'SQLite'] },
    { title: 'Tools', icon: Wrench, skills: ['Git', 'GitHub', 'Streamlit', 'VS Code', 'Jupyter Notebook'] },
    { title: 'Libraries', icon: Library, skills: ['NumPy', 'Pandas', 'Matplotlib', 'TensorFlow', 'OpenCV'] },
  ];

  const softSkills = [
    { name: 'Analytical Thinking', icon: Lightbulb },
    { name: 'Problem Solving', icon: Zap },
    { name: 'Adaptability', icon: Users },
    { name: 'Effective Communication', icon: MessageSquare },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-orange-primary">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a B.Tech graduate in Computer Science and Engineering from St. Johns College of
            Engineering & Technology (JNTUA), passionate about Python full-stack development and
            building AI-driven applications that turn complex problems into elegant solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Education & Soft Skills */}
          <div className="space-y-8 fade-in fade-in-delay-1">
            <Card className="p-6 bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-orange-primary rounded-full mr-3"></span>
                  Education
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-700">
                      Bachelor of Technology (Completed)
                    </h4>
                    <p className="text-orange-primary font-medium">
                      Computer Science & Engineering
                    </p>
                    <p className="text-gray-600">
                      St. Johns College of Engineering & Technology (JNTUA)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-sky-primary rounded-full mr-3"></span>
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="p-2 bg-sky-primary/10 rounded-lg">
                        <skill.icon className="w-5 h-5 text-sky-primary" />
                      </div>
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Skills */}
          <div className="fade-in fade-in-delay-2">
            <Card className="p-6 bg-white border-0 shadow-lg h-full">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-orange-primary rounded-full mr-3"></span>
                  Technical Skills
                </h3>
                <div className="space-y-5">
                  {skillGroups.map((group, idx) => (
                    <div key={idx}>
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-orange-primary/10 rounded-lg mr-3">
                          <group.icon className="w-5 h-5 text-orange-primary" />
                        </div>
                        <h4 className="font-semibold text-gray-800">{group.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2 pl-1">
                        {group.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 bg-orange-primary/10 text-orange-primary text-sm font-medium rounded-full hover:bg-orange-primary hover:text-white transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
