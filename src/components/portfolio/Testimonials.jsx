"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "Senior Developer",
    content:
      "Vigneshwar is highly dedicated and shows strong frontend development skills with React. His attention to detail and commitment to writing clean code is impressive.",
    avatar: "JS",
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    content:
      "Working with Vigneshwar was a great experience. He consistently delivered high-quality UI components and was always eager to learn new technologies.",
    avatar: "SJ",
  },
  {
    name: "Mike Chen",
    role: "Tech Lead",
    content:
      "Vigneshwar has excellent problem-solving skills and a keen eye for design. His React applications are well-structured and performant.",
    avatar: "MC",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="py-20 px-4 lg:pl-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              <p className="text-lg md:text-xl text-card-foreground leading-relaxed mb-8 italic">
                {`"${testimonials[currentIndex].content}"`}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary/50 hover:bg-primary hover:text-primary-foreground bg-transparent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary/50 hover:bg-primary hover:text-primary-foreground bg-transparent"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
