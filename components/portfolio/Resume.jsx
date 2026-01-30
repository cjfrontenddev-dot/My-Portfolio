import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor\'s Degree / Diploma',
    institution: 'College Name',
    period: '2020 - 2024',
    description:
      'Studied Computer Science with focus on web technologies and software development.',
  },
];

const experience = [
  {
    role: 'Frontend Developer',
    company: 'Self Learning & Projects',
    period: '2023 - Present',
    points: [
      'Built React and Next.js applications',
      'Used Redux Toolkit and Zustand for state management',
      'Designed UI with Tailwind CSS and Material UI',
    ],
  },
];

export function Resume() {
  return (
    <section id="resume" className="py-20 px-4 lg:pl-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Education
              </h3>
            </div>
            <div className="relative pl-8 border-l-2 border-primary/30">
              {education.map((edu, index) => (
                <div key={index} className="relative mb-8 last:mb-0">
                  <div className="absolute -left-[25px] w-4 h-4 bg-primary rounded-full" />
                  <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                        {edu.period}
                      </span>
                      <h4 className="text-lg font-semibold text-card-foreground mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Experience
              </h3>
            </div>
            <div className="relative pl-8 border-l-2 border-secondary/30">
              {experience.map((exp, index) => (
                <div key={index} className="relative mb-8 last:mb-0">
                  <div className="absolute -left-[25px] w-4 h-4 bg-secondary rounded-full" />
                  <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary-foreground text-sm font-medium rounded-full mb-3">
                        {exp.period}
                      </span>
                      <h4 className="text-lg font-semibold text-card-foreground mb-1">
                        {exp.role}
                      </h4>
                      <p className="text-primary font-medium mb-3">
                        {exp.company}
                      </p>
                      <ul className="space-y-2">
                        {exp.points.map((point, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground text-sm flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
