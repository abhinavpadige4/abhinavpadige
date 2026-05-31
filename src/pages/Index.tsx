import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Leadership from '@/components/Leadership';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MacWindow from '@/components/MacWindow';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <MacWindow title={title} bodyClassName="p-0">
      {children}
    </MacWindow>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Section title="skills.app">
          <Skills />
        </Section>
        <Section title="experience.app">
          <Experience />
        </Section>
        <Section title="projects.app">
          <Projects />
        </Section>
        <Section title="leadership.app">
          <Leadership />
        </Section>
        <Section title="education.app">
          <Education />
        </Section>
        <Section title="contact.app">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
