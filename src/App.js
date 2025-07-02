import React from 'react';
import './App.css';
import { GithubIcon, LinkedInIcon, WorkIcon } from './Icons.jsx';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


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
      <main className="pt-[100px] px-6 mh-450px sm:px-12 pb-12 min-h-screen bg-white text-[#3a5a65]">
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
      <div className="relative -mt-10 pt-5 w-full bg-[#ccebf6] text-[#3a5a65]">
        <h1 className="pl-8  text-3xl sm:text-5xl font-semibold tracking-tight mb-4 text-center sm:text-left pb-6" >
          experience
        </h1>
        <div className="flex-1">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#3a5a65', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #3a5a65' }}
              date="Jan 2025 - present"
              iconStyle={{ background: '#3a5a65', color: '#fff' }}
              icon={<WorkIcon className="size-10 sm:size-20" />}
            >
              <h3 className="vertical-timeline-element-title">Growth Product Manager</h3>
              <h4 className="vertical-timeline-element-subtitle">Candle</h4>
              {/* <p>
                Add Description
              </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jul 2024 - Jan 2025"
              iconStyle={{ background: '#3a5a65', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Software Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">Asana</h4>
              {/* <p>
                Add Description
              </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jan 2023 - Mar 2024"
              iconStyle={{ background: '#3a5a65', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Research Associate</h3>
              <h4 className="vertical-timeline-element-subtitle">Shinobi Therapeutics</h4>
              {/* <p>
                Add Description
              </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jun 2022 - Dec 2022"
              iconStyle={{ background: '#3a5a65', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Research Associate</h3>
              <h4 className="vertical-timeline-element-subtitle">Synthego</h4>
              {/* <p>
                Add Description
              </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#3a5a65', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #3a5a65' }}
              date="Aug 2018 - May 2022"
              iconStyle={{ background: '#3a5a65', color: '#fff' }}
              icon={<WorkIcon className="size-10 sm:size-20" />}
            >
              <h3 className="vertical-timeline-element-title">Molecular & Cell Biology B.A. <br /> Economics B.A. <br /> Data Science Minor </h3>
              <p>
                University of California, Berkeley '22
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="May 2021-June 2022"
              iconStyle={{ background: '#3a5a65', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Research Assistant</h3>
              <h4 className="vertical-timeline-element-subtitle">UC Berkeley Dept of Public Health, Harris Lab</h4>
              {/* <p>
                Add Description
              </p> */}
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Oct 2019-Jul 2021"
              iconStyle={{ background: '#3a5a65', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Research Assistant</h3>
              <h4 className="vertical-timeline-element-subtitle">UC Berkeley Dept of Molecular & Cell Biology, Weisblat Lab</h4>
              {/* <p>
                Add Description
              </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: '#3a5a65', color: '#fff' }}
              icon={<WorkIcon />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div >
  );
}

export default App;
