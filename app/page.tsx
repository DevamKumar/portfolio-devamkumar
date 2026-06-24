import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Projects } from "@/components/sections/projects";
import { Publications } from "@/components/sections/publications";
import { Blogs } from "@/components/sections/blogs";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Chatbot } from "@/components/chatbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Publications />
        <Blogs />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
