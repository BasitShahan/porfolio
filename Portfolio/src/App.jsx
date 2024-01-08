import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from './components/Contact';

import Home from './components/Home';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TypeWrite from './components/TypeWrite';
import MySkill from './components/MySkill';
import Features from './components/Features';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Education from './components/Education';
import Skill from './components/Skill';


export default function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <hr style={{color:'rgb(86,91,98)'}} />
      <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/myskill" element={<MySkill />} />
      <Route path="/herosection" element={<HeroSection />} />
      <Route path="/typewrite" element={<TypeWrite />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/features" element={<Features/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/footer" element={<Footer />} />

      <Route path="/education" element={<Education/>} />

      <Route path="/skill" element={<Skill/>} />
      
      
      
      
      </Routes>
    </BrowserRouter>
    </>
  )
}
