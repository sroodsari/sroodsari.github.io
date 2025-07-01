import React from 'react';
import Flower from './Flower.js';
import './App.css';
import { GithubIcon, LinkedInIcon } from './Icons.jsx';

function App() {
  return (
    <div className="font-runde">
      <div className="w-full fixed top-0 z-50 bg-[#ffffff] text-left py-4 flex justify-between items-center px-[50px] font-runde">
        <h1 className="text-base sm:text-xl text-stone-500 font-light">
          About Me
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
      <div className="app-container flex flex-col justify-left items-center bg-pink-gradient text-xl  min-h-screen ">
        <div className="flex justify-items-start mb-4 absolute top-[100px] left-[50px]">
          <Flower className="size-15 sm:size-15 mb-1" />
          <h1 className="sm:text-5xl text-2xl font-semibold tracking-tight text-stone-800 text-center sm:text-left mx-4" style={{ color: '#3f2a14' }}>
            Hi, I'm Susan!
          </h1>
          <Flower className="size-15 sm:size-15 mb-1" />
        </div>
        <p className="text-base sm:text-xl font-thin tracking-tight text-left" style={{ color: '#3f2a14', maxWidth: '70%' }}>
          I'm a former biologist turned software engineer and product thinker. <br /><br />
          I previously worked on the Agentic AI team at Asana, where I helped design and ship AI-powered features. <br /><br />
          I'm now a growth product manager at <a href="https://www.trycandle.app/" target="_blank" rel="noopener noreferrer">Candle Couples</a>, a YC-backed startup, where I combine engineering intuition with user insight to build and scale meaningful experiences.<br /><br />
          Here's my <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noopener noreferrer">resume</a> and you can reach me at sroodsari@berkeley.edu if you want to chat :)
        </p>
      </div>
    </div>
  );
}

export default App;
