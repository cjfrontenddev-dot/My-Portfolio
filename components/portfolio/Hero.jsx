"use client";

import { Button } from "@/components/ui/button";
import { Code2, Palette, Sparkles, Zap, Layers, Globe } from "lucide-react";

export function Hero() {
  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16 lg:pt-0 lg:pl-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-2 text-lg">Hii There!</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              I'm <span className="text-primary">Vigneshwar</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Frontend Developer | React Developer
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I'm a passionate frontend developer focused on building modern,
              responsive, and high-performance web applications using React and
              Next.js.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
                onClick={() => handleScroll("#portfolio")}
              >
                View Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8"
                onClick={() => handleScroll("#contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image with Decorative Icons */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <div className="relative">
              {/* Decorative circle behind profile */}
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-2xl" />

              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl bg-white">
                <img
                  src="/images/profile.png"
                  alt="Vigneshwar - Frontend Developer"
                  className="absolute w-full h-auto"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(0.85)",
                    minWidth: "100%",
                    minHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Floating Decorative Icons */}
              <div
                className="absolute -top-4 -left-4 w-12 h-12 bg-card rounded-xl shadow-lg flex items-center justify-center animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div
                className="absolute top-8 -right-6 w-10 h-10 bg-primary rounded-lg shadow-lg flex items-center justify-center animate-bounce"
                style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
              >
                <Palette className="w-5 h-5 text-primary-foreground" />
              </div>
              <div
                className="absolute -bottom-2 -left-8 w-10 h-10 bg-secondary rounded-lg shadow-lg flex items-center justify-center animate-bounce"
                style={{ animationDuration: "2.8s", animationDelay: "0.3s" }}
              >
                <Sparkles className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div
                className="absolute bottom-12 -right-10 w-12 h-12 bg-card rounded-xl shadow-lg flex items-center justify-center animate-bounce"
                style={{ animationDuration: "3.2s", animationDelay: "0.7s" }}
              >
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div
                className="absolute top-1/2 -left-12 w-8 h-8 bg-primary/80 rounded-md shadow-lg flex items-center justify-center animate-bounce"
                style={{ animationDuration: "2.7s", animationDelay: "0.2s" }}
              >
                <Layers className="w-4 h-4 text-primary-foreground" />
              </div>
              <div
                className="absolute -top-8 right-1/4 w-8 h-8 bg-secondary/80 rounded-md shadow-lg flex items-center justify-center animate-bounce"
                style={{ animationDuration: "3.1s", animationDelay: "0.4s" }}
              >
                <Globe className="w-4 h-4 text-secondary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
