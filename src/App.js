import React from 'react';
import Flower from './Flower.js';
import './App.css';
import { GithubIcon, LinkedInIcon } from './Icons.jsx';

function App() {
  return (
    <div className="font-runde">
      <div className="w-full fixed top-0 z-50 bg-[#ffffff] text-left py-4 flex justify-between items-center px-[50px] font-runde">
        <h1 className="text-base sm:text-xl text-stone-500 font-light">
          Susan Roodsari
        </h1>
        <div className="flex gap-6">
          <a href="https://github.com/sroodsari" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="size-8 opacity-100 hover:opacity-70" />
          </a>
          <a href="https://linkedin.com/in/sroodsari" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="size-8 opacity-100 hover:opacity-70" />
          </a>
        </div>
      </div>
      <div className="app-container relative flex flex-col justify-center items-center bg-pink-gradient text-xl  min-h-screen ">
        <div className="flex items-center mb-4">
          <Flower className="size-8 sm:size-15 mb-1" />
          <h1 className="sm:text-4xl text-2xl font-semibold tracking-tight text-stone-800 text-center sm:text-left mx-4" style={{ color: '#3f2a14' }}>
            Welcome
          </h1>
          <Flower className="size-8 sm:size-15 mb-1" />
        </div>
        <p className="text-base sm:text-xl font-thin tracking-tight text-center" style={{ color: '#3f2a14', maxWidth: '70%' }}>
          Hi! I'm Susan — a former biologist turned software engineer and product thinker. I previously worked on the Agentic AI team at Asana, where I helped design and ship AI-powered features. I'm now a growth product manager at <a href="https://www.trycandle.app/" target="_blank" rel="noopener noreferrer">Candle Couples</a>, a YC-backed startup, where I combine engineering intuition with user insight to build and scale meaningful experiences.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noopener noreferrer">
            <button className="bg-white font-base hover:font-medium opacity-80 rounded border-2 border-stone-600 text-stone-600 hover:border-stone-800 hover:text-stone-800 px-4 py-3 sm:px-4 sm:py-2 flex items-center justify-center text-xs sm:text-sm">
              resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
