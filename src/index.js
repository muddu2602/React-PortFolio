import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';
const App = () => {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Projects />
            <Education />
            <Skills />
            <Contact />
        </main>
    );
}

ReactDOM.render(<App /> , document.querySelector('#root'));
