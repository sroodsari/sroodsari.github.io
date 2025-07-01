import React from 'react';
import './App.css';
import { GithubIcon, LinkedInIcon } from './Icons.jsx';

function App() {
  return (
    <div className="font-runde">
      {/* Sticky header */}
      <header className="fixed top-0 z-50 w-full bg-[#ccebf6] text-left py-4 px-6 sm:px-12 flex justify-end">
        <div className="flex gap-4 sm:gap-6">
          <a href="https://github.com/sroodsari" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="size-6 sm:size-8 hover:opacity-70" />
          </a>
          <a href="https://linkedin.com/in/sroodsari" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="size-6 sm:size-8 hover:opacity-70" />
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-[100px] px-6 sm:px-12 pb-12 min-h-screen bg-white text-[#2e2e2e]">
        <div className="max-w-5xl mx-auto flex flex-col-reverse sm:flex-row items-center sm:items-start gap-8">
          {/* Text content */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-4 text-center sm:text-left pb-6" >
              hi, i'm susan!
            </h1>
            <p className="text-base sm:text-xl font-thin tracking-tight leading-relaxed">
              I'm a former biologist turned software engineer and product thinker. <br /><br />
              I previously worked on the Agentic AI team at Asana, where I helped design and ship AI-powered features. <br /><br />
              I'm now a growth product manager at <a className="underline" href="https://www.trycandle.app/" target="_blank" rel="noopener noreferrer">Candle</a>, a YC-backed startup, where I combine engineering intuition with user insight to build and scale meaningful experiences. <br /><br />
              Here's my <a className="underline" href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noopener noreferrer">resume</a> and you can reach me at <a className="underline" href="mailto:sroodsari@berkeley.edu">sroodsari@berkeley.edu</a> if you want to chat :)
            </p>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0 self-auto sm:self-end">
            <img
              src={`${process.env.PUBLIC_URL}/suzAvatar.png`}
              alt="Susan"
              className="w-52 h-52 sm:w-80 sm:h-80 rounded-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
