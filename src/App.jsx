import { ThemeProvider } from "@/lib/ThemeContext";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Resume } from "@/components/portfolio/Resume";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
