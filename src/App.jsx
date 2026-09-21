import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
          <p>
            I am a passionate software engineering student with a strong foundation in modern web technologies. 
            I love building beautiful, performant, and accessible user interfaces. When I'm not coding, 
            I enjoy learning about system architecture, reading tech blogs, and experimenting with new frameworks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default App;
