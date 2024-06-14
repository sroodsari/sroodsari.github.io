
import React, { useState } from 'react';
import Projects from './Projects';
// import TulipsField from './TulipFields.js';

function App() {
  const [showProjects, setShowProjects] = useState(false);

  // Function to toggle the visibility of the Projects section
  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (

    <div className="bg-pink-gradient text-xl justify-center flex min-h-screen items-center">
      <div className="flex flex-col justify-center items-center opacity-80 w-full md:max-w-none p-15 shadow-lg m-auto" style={{ backgroundColor: '#f9f8eb', width: '70%', height: '70%', maxWidth: '70%', maxHeight: '70%', minHeight: '70vh', minWidth: '70vw' }}>
        <h1 className="text-4xl font-light p-10 text-stone-800 league-spartan" style={{ color: '#3f2a14' }}>
          Susan Roodsari
        </h1>
        <p className="text-md font-thin text-center league-spartan" style={{ color: '#3f2a14', maxWidth: '70%' }}>
          Hi! I'm Susan, a former biologist and current aspiring software engineer looking for new opportunities.
        </p>

        {/* The button to switch to the Projects view */}
        <div className="flex justify-center gap-4 mt-12 league-spartan">
          {/* Your other buttons here */}
          <a href={`${process.env.PUBLIC_URL}/susan_roodsari_mar_2024_resume.pdf`} target="_blank" rel="noopener noreferrer">
            <button class="bg-white font-base hover:font-medium opacity-80 rounded-full border-2 border-stone-600 text-stone-600 hover:border-stone-800 hover:text-stone-800 w-[4rem] h-[4rem] flex items-center justify-center text-sm">
              resume
            </button>
          </a>
          <a href="https://linkedin.com/in/sroodsari" target="_blank" rel="noopener noreferrer">
            <button class="bg-white font-base hover:font-medium opacity-80 rounded-full border-2 border-stone-600 text-stone-600 hover:border-stone-800 hover:text-stone-800 w-[4rem] h-[4rem] flex items-center justify-center text-sm">
              linkedin
            </button>
          </a>
          <a href="https://github.com/sroodsari" target="_blank" rel="noopener noreferrer">
            <button class="bg-white font-base hover:font-medium opacity-80 rounded-full border-2 border-stone-600 text-stone-600 hover:border-stone-800 hover:text-stone-800 w-[4rem] h-[4rem] flex items-center justify-center text-sm">
              github
            </button>
          </a>
          {/* Button to toggle Projects view */}
          {/* <button onClick={toggleProjects} style={{ backgroundColor: 'white', opacity: '0.8', borderRadius: '50%', border: '2px solid #3f2a14', color: '#3f2a14', width: '55px', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px' }}>
            projects
          </button> */}

        </div>

      </div>
      <div>
        {/* Conditional rendering for Projects dropdown */}
        {showProjects && (
          <div className="mt-4 w-full overflow-auto" style={{ maxHeight: '200px', borderColor: '#f3f3f3', borderWidth: '1px', borderStyle: 'solid', borderRadius: '8px' }}>
            <Projects />
          </div>
        )}

      </div>

    </div>
  );
}

export default App;