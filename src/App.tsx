import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading ? (
        <Loader />
      ) : (
        <div className="app">
          <Navbar />
          <main className="content">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;