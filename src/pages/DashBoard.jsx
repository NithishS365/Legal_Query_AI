import React from 'react';
import Logo from "../assets/logo.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";
import img6 from "../assets/img6.svg";
import img7 from "../assets/img7.svg";
import { useEffect, useRef } from "react";

import img8 from "../assets/legal-services.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";

import { useNavigate } from 'react-router-dom';



export const DashBoard = () => {

  const navigate = useNavigate();

const partners = [
  "Indian Kanoon", "Vakilsearch", "MyAdvo", "LegalKart", "Judis", "LiveLaw",
  "Nyaaya", "LexisNexis", "Westlaw", "Clio", "Casetext", "Rocket Lawyer",
  "LegalZoom", "DoNotPay", "LawDepot", "Everlaw", "DocuSign"
];

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    let scroll1 = 0;
    let scroll2 = 0;

    const animateScroll = () => {
      if (row1Ref.current && row2Ref.current) {
        scroll1 += 0.5;  // left to right
        scroll2 -= 0.5;  // right to left

        const maxScroll = row1Ref.current.scrollWidth;

        row1Ref.current.scrollLeft = scroll1 % maxScroll;
        row2Ref.current.scrollLeft = (maxScroll + (scroll2 % maxScroll)) % maxScroll;
      }

      requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  }, []);

  return (
    <main className="bg-[#0a1a0f] text-white">
      {/* Top Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-[#0a1a0f] p-10 flex flex-col md:flex-row w-full max-w-6xl rounded-xl shadow-xl">
          {/* Left */}
          <div className="flex-1 flex flex-col justify-center pr-6">
            <div className="mb-8 flex items-center space-x-4">
              <img src={Logo} alt="Legal Query AI Logo" className="h-16 w-auto" />
              <h1 className="text-2xl font-semibold">Legal Query AI</h1>
            </div>
            <h1 className="text-4xl font-bold leading-tight mb-4">
Your Smart AI Assistant for All Legal Essentials
            </h1>
            <p className="text-lg text-gray-300">
Get instant, structured legal support for daily-life scenarios with our intelligent chatbot. Whether it’s filing an e-FIR, understanding your rights, or getting expert advice.            </p>
          </div>

          {/* Right (Form) */}
          <div className="flex-1 bg-white text-black p-8 rounded-xl shadow-md mt-10 md:mt-0 md:ml-10">
            <h2 className="text-2xl font-bold mb-1">
Intelligent Legal Assistance Made Simple
            </h2>
            <p className="text-sm text-gray-600 mb-6">

An intelligent, scenario-based assistant that provides accurate, structured responses to legal queries in simple language.   </p>
            <button
            onClick={()=>navigate("/chat")}
              className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
            >
              Ask
            </button>
          </div>
        </div>
      </section>

{/* Strength Section */}
<section className="bg-white text-black py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <span className="px-4 py-1 bg-green-100 text-green-700 font-semibold text-sm rounded-full">
      STRENGTHS
    </span>
    <h2 className="text-4xl font-bold mt-4">Your Smart Legal Companion — Simplifying Justice for Everyone
</h2>
    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
Your trusted AI-powered legal companion simplifying everyday legal needs with smart, structured assistance    </p>
  </div>

  <div className="max-w-6xl mx-auto space-y-20">

    {/* Section 1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Track Progress</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Stay on top of your goals with a seamless task tracker. With Legal Query AI’s project tracking tools,
          you can oversee individual tasks and large-scale projects effortlessly.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Visual progress dashboards</li>
          <li>Customizable reporting</li>
          <li>Automated progress updates</li>
        </ul>
      </div>
      <div className="flex justify-center">
        <img
          src={img1}
          alt="Task Distribution"
          className="w-full max-w-md h-92 object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>

    {/* Section 2 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1 flex justify-center">
        <img
          src={img2}
          alt="Team Collaboration"
          className="w-full max-w-md h-92 object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="order-1 md:order-2">
        <h3 className="text-2xl font-semibold mb-4">Improve Team Collaboration</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Enhance teamwork with shared visibility. Assign, track, and review tasks across departments in real-time.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Real-time updates for all members</li>
          <li>Cross-department visibility</li>
          <li>Collaborative task editing</li>
        </ul>
      </div>
    </div>

    {/* Section 3 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Reduce Manual Work</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Streamline your workflows with automation. Let Legal Query AI handle repetitive tasks while your team focuses on what matters.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Task auto-assignment</li>
          <li>Smart notifications</li>
          <li>Workflow templates</li>
        </ul>
      </div>
      <div className="flex justify-center">
        <img
          src={img3}
          alt="Automation"
          className="w-full max-w-md h-92 object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>

  </div>
</section>
<section className="bg-[#0c1c11] text-white py-20 px-6 md:px-16 border-b-1 border-gray-400">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <span className="px-4 py-1 bg-green-200 text-green-800 text-sm font-semibold rounded-full">
      FEATURES
    </span>
    <h1 className="text-4xl font-bold mt-4">Simplify the clutter</h1>
    <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
      Clean workspace to effortlessly organize and prioritize your tasks
    </p>
  </div>
<div className="space-y-12 my-12 px-4">
  {/* Row 1 */}
  <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
    {/* Card 1 - Flex 2 */}
    <div className="flex-[2] bg-[#d3e8da] text-black p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300 flex items-center justify-between gap-6">
      <div className="max-w-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Cross-Platform Sync</h1>
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          Stay perfectly in sync. Your tasks, updates, and progress are instantly
          mirrored between mobile app and web dashboard.
        </p>
      </div>
      <img src={img4} alt="Cross-Platform Sync" className="w-48 md:w-60 h-auto" />
    </div>

    {/* Card 2 - Flex 1 */}
    <div className="flex-[1.5] bg-[#d3e8da] text-black p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300 flex items-center justify-between gap-6">
      <div className="max-w-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Dependent Task</h1>
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          Trigger tasks in a sequence by notifying users automatically,
          initiating the next action in the chain.
        </p>
      </div>
      <img src={img5} alt="Dependent Task" className="w-40 md:w-52 h-auto" />
    </div>
  </div>

  {/* Row 2 (reverse ratio) */}
  <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
    {/* Card 1 - Flex 1 */}
    <div className="flex-[2] bg-[#d3e8da] text-black p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300 flex items-center justify-between gap-6">
      <div className="max-w-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Cross-Platform Sync</h1>
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          Stay perfectly in sync. Your tasks, updates, and progress are instantly
          mirrored between mobile app and web dashboard.
        </p>
      </div>
      <img src={img6} alt="Cross-Platform Sync" className="w-40 md:w-52 h-auto" />
    </div>

    {/* Card 2 - Flex 2 */}
    <div className="flex-[2] bg-[#d3e8da] text-black p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300 flex items-center justify-between gap-6">
      <div className="max-w-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Dependent Task</h1>
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          Trigger tasks in a sequence by notifying users automatically,
          initiating the next action in the chain.
        </p>
      </div>
      <img src={img7} alt="Dependent Task" className="w-48 md:w-60 h-auto" />
    </div>
  </div>
</div>


</section>
<section className="bg-[#0d1b14] py-16">
  <h1 className="text-white text-center text-4xl md:text-6xl font-bold mb-36">
    Legal Collaborative Partners
  </h1>

  {/* Setup logos array */}
  {(() => {
    const logos = [img8, img9, img10, img11, img12];

    return (
      <>
        {/* Row 1: Left to Right */}
        <div
          ref={row1Ref}
          className="flex gap-6 overflow-hidden whitespace-nowrap px-4 mb-10"
        >
          {partners.map((name, i) => (
            <div
              key={`row1-${i}`}
              className="flex-shrink-0 flex items-center gap-4 px-6 py-3 bg-white text-black rounded-full shadow-md text-lg md:text-xl font-semibold min-w-max"
            >
              <img
                src={logos[i % logos.length]}
                alt={name}
                className="w-8 h-8 object-contain rounded-full"
              />
              {name}
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left */}
        <div
          ref={row2Ref}
          className="flex gap-6 overflow-hidden whitespace-nowrap px-4"
        >
          {[...partners].reverse().map((name, i) => (
            <div
              key={`row2-${i}`}
              className="flex-shrink-0 flex items-center gap-4 px-6 py-3 bg-white text-black rounded-full shadow-md text-lg md:text-xl font-semibold min-w-max"
            >
              <img
                src={logos[i % logos.length]}
                alt={name}
                className="w-8 h-8 object-contain rounded-full"
              />
              {name}
            </div>
          ))}
        </div>
      </>
    );
  })()}
</section>



        </main>
  );
};
