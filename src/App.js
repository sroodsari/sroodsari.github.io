import React from 'react';
import Flower from './Flower.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="w-full fixed top-0 z-50 bg-[#f9f8eb] text-left py-6">
        <h1 className="text-base sm:text-xl text-stone-700 font-medium ml-[50px]">
          Susan Roodsari
        </h1>
      </div>
      <div className="app-container bg-pink-gradient text-xl justify-center flex min-h-screen items-center">
        <div className="relative flex flex-col justify-center items-center opacity-80 w-full md:max-w-none p-15 shadow-lg m-auto"
          style={{ backgroundColor: '#f9f8eb', width: '70%', height: '70%', maxWidth: '70%', maxHeight: '70%', minHeight: '70vh', minWidth: '70vw' }}>
          <div className="flex items-center mb-4">
            <Flower className="size-8 sm:size-15 mb-1" />
            <h1 className="sm:text-4xl text-2xl font-light text-stone-800 league-spartan text-center sm:text-left mx-4" style={{ color: '#3f2a14' }}>
              Welcome
            </h1>
            <Flower className="size-8 sm:size-15 mb-1" />
          </div>
          <p className="text-base sm:text-xl font-thin text-center league-spartan" style={{ color: '#3f2a14', maxWidth: '70%' }}>
            Hi! I'm Susan — a former biologist turned software engineer and product thinker. I previously worked on the Agentic AI team at Asana, where I helped design and ship AI-powered features. I'm now a growth product manager at <a href="https://www.trycandle.app/" target="_blank" rel="noopener noreferrer">Candle Couples</a>, a YC-backed startup, where I combine engineering intuition with user insight to build and scale meaningful experiences.
          </p>
          <div className="flex justify-center gap-4 mt-8 league-spartan">
            <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noopener noreferrer">
              <button className="bg-white font-base hover:font-medium opacity-80 rounded-full border-2 border-stone-600 text-stone-600 hover:border-stone-800 hover:text-stone-800 size-14 sm:size-16 flex items-center justify-center text-xs sm:text-sm">
                resume
              </button>
            </a>
            <a href="https://linkedin.com/in/sroodsari" target="_blank" rel="noopener noreferrer">
              <button className="bg-white font-base hover:font-medium opacity-80 rounded-full border-2 border-stone-600 text-stone-600 hover:border-stone-800 hover:text-stone-800 size-14 sm:size-16 flex items-center justify-center text-xs sm:text-sm">
                linkedin
              </button>
            </a>
            <a href="https://github.com/sroodsari" target="_blank" rel="noopener noreferrer">
              <button className="bg-white font-base hover:font-medium opacity-80 rounded-full border-2 border-stone-600 text-stone-600 hover:border-stone-800 hover:text-stone-800 size-14 sm:size-16 flex items-center justify-center text-xs sm:text-sm">
                github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
