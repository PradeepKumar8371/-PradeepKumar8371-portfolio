import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './fonts/fonts.css';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Header />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact/>
    </div>
  );
}
export default App;

