import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Philosophy } from '../components/Philosophy';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
