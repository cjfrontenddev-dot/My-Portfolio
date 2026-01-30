import { Badge } from '@/components/ui/badge';

const mainSkills = [
  { name: 'React', color: 'bg-primary text-primary-foreground' },
  { name: 'HTML', color: 'bg-secondary text-secondary-foreground' },
  { name: 'CSS', color: 'bg-primary text-primary-foreground' },
  { name: 'JavaScript', color: 'bg-secondary text-secondary-foreground' },
  { name: 'TypeScript', color: 'bg-primary text-primary-foreground' },
  { name: 'Next.js', color: 'bg-secondary text-secondary-foreground' },
];

const libraries = [
  'Tailwind CSS',
  'Bootstrap',
  'Material UI',
  'Redux Toolkit',
  'Zustand',
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 lg:pl-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Skills */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">
              Main Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {mainSkills.map((skill) => (
                <Badge
                  key={skill.name}
                  className={`${skill.color} px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-default`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Libraries & Frameworks */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">
              Libraries & Frameworks
            </h3>
            <div className="flex flex-wrap gap-3">
              {libraries.map((lib) => (
                <Badge
                  key={lib}
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium border-primary/50 text-foreground hover:bg-primary/10 hover:scale-105 transition-all cursor-default"
                >
                  {lib}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Bars */}
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-lg border border-border">
          <h3 className="text-xl font-semibold text-card-foreground mb-8">
            Proficiency Level
          </h3>
          <div className="space-y-6">
            {[
              { name: 'React / Next.js', level: 90 },
              { name: 'JavaScript / TypeScript', level: 85 },
              { name: 'HTML / CSS', level: 95 },
              { name: 'UI Libraries (Tailwind, MUI)', level: 88 },
              { name: 'State Management', level: 80 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-card-foreground font-medium">
                    {skill.name}
                  </span>
                  <span className="text-primary font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
