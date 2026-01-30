'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'A modern portfolio website showcasing projects and skills',
    tech: ['React', 'Tailwind'],
    color: 'from-primary/20 to-primary/5',
  },
  {
    title: 'Dashboard Application',
    description: 'An interactive dashboard with data visualization',
    tech: ['React', 'Redux Toolkit'],
    color: 'from-secondary/20 to-secondary/5',
  },
  {
    title: 'E-commerce UI',
    description: 'A complete e-commerce user interface with cart functionality',
    tech: ['React', 'Zustand'],
    color: 'from-primary/20 to-primary/5',
  },
  {
    title: 'Blog Application',
    description: 'A full-featured blog with dynamic content management',
    tech: ['Next.js', 'TypeScript'],
    color: 'from-secondary/20 to-secondary/5',
  },
  {
    title: 'Todo App',
    description: 'A productivity app with task management features',
    tech: ['React', 'Local Storage'],
    color: 'from-primary/20 to-primary/5',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather information with location search',
    tech: ['React', 'API Integration'],
    color: 'from-secondary/20 to-secondary/5',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 lg:pl-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in frontend development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/20" />
                <div className="w-16 h-16 bg-card/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <ExternalLink className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-primary/30 text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
