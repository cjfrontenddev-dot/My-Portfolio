import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, FileCode2 } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: [
      "React, Vanilla JS",
      "Component-based architecture",
      "State management",
    ],
  },
  {
    icon: Palette,
    title: "UI Development",
    items: ["Responsive design", "Tailwind CSS, Bootstrap, Material UI"],
  },
  {
    icon: FileCode2,
    title: "Modern JavaScript",
    items: [
      "JavaScript (ES6+)",
      "Clean and maintainable code",
      "Best practices",
    ],
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 lg:pl-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* About Content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm Vigneshwar, a passionate frontend developer with strong hands-on
            experience in React, modern JavaScript, and frontend technologies. I
            enjoy building clean UI, responsive layouts, and scalable
            component-based applications.
          </p>
        </div>

        {/* What I Do */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-10">
            What I Do
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group bg-card hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h4 className="text-xl font-semibold text-card-foreground mb-3">
                      {service.title}
                    </h4>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="text-muted-foreground text-sm flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
