import React from 'react';
import Logo from "../assets/logo.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";
import img6 from "../assets/img6.svg";
import img7 from "../assets/img7.svg";
import { useEffect, useRef,useState} from "react";
import img8 from "../assets/legal-services.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/templates.svg"
import img14 from "../assets/court.jpeg";
import vid from "../assets/Artificial.mp4"
import { useNavigate } from 'react-router-dom';
import { Plus } from "lucide-react";
import { X } from 'lucide-react';

import {
  PhoneCall,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  Facebook
} from "lucide-react";




export const DashBoard = () => {

  const navigate = useNavigate();

const partners = [
  "Indian Kanoon", "Vakilsearch", "MyAdvo", "LegalKart", "Judis", "LiveLaw",
  "Nyaaya", "LexisNexis", "Westlaw", "Clio", "Casetext", "Rocket Lawyer",
  "LegalZoom", "DoNotPay", "LawDepot", "Everlaw", "DocuSign"
];

const faqs = [
  {
    question: 'Does the platform work smoothly across devices?',
    answer:
      'Yes, it’s fully responsive and optimized for both mobile and desktop use.',
  },
  {
    question: 'Can I search lawyers by category?',
    answer:
      'Yes, you can filter lawyers by civil, criminal, or family law easily.',
  },
  {
    question: 'Does the platform offer personalized support?',
    answer:
      'Yes, it remembers your search history and improves responses over time.',
  },
];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

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
        <div className="bg-[#0a1a0f] p-5 flex flex-col md:flex-row w-full max-w-6xl rounded-xl shadow-xl">
          {/* Left */}
          <div className="flex-1 flex flex-col justify-center pr-6">
            <div className="mb-8 flex items-center space-x-4">
              <img src={Logo} alt="Legal Query AI Logo" className="h-20 w-auto" />
              <h1 className="text-3xl font-semibold">Legal Query AI</h1>
            </div>
            <h1 className="text-6xl font-bold leading-tight mb-4">
Your Smart <br/> AI Assistant for <br/> All Legal Essentials
            </h1>
            <p className="text-lg text-gray-300">
Get instant, structured legal support for daily-life scenarios with our intelligent chatbot. Whether it’s filing an e-FIR, understanding your rights, or getting expert advice.            </p>
          </div>

          {/* Right (Form) */}
          {/* Right (Form with Video) */}
<div className="flex-1 bg-white h-fit text-black p-8 rounded-xl shadow-md mt-5 md:mt-0 md:ml-10 flex flex-col justify-between">
  <div>
    <h2 className="text-2xl font-bold mb-1">
      Intelligent Legal Assistance Made Simple
    </h2>
    <p className="text-sm text-gray-600 mb-6">
      An intelligent, scenario-based assistant that provides accurate, structured responses to legal queries in simple language.
    </p>

    {/* Video Element */}
    <div className="mb-6">
      <video
        className="w-full rounded-md h-80 "
        muted autoPlay loop>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>

  {/* Ask Button */}
  <button
    onClick={() => navigate("/chat")}
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
    <h2 className="text-4xl font-bold mt-8">Your Smart Legal Companion — Simplifying Justice for Everyone
</h2>
    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
Your trusted AI-powered legal companion simplifying everyday legal needs with smart, structured assistance    </p>
  </div>

  <div className="max-w-6xl mx-auto space-y-20">

    {/* Section 1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  {/* Left Column */}
  <div>
    <h3 className="text-2xl font-semibold mb-4">E-FIR REGISTRATION</h3>
    <p className="text-gray-700 mb-4 leading-relaxed">
      E-FIR lets you file complaints online through verified state portals, accessible anytime from anywhere, ensuring faster registration 
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>Click to Register </li>
      <li>Navigate to Official Portal </li>
      <li>
File Your Complaint</li>
    </ul>

    {/* Register Button */}
    <div className="mt-6">
      <a
        href="https://eservices.tnpolice.gov.in/CCTNSNICSDC/ComplaintRegistrationPage?0"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
      >
        Register Now
      </a>
    </div>
  </div>

  {/* Right Column */}
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
  {/* Left Image */}
  <div className="order-2 md:order-1 flex justify-center">
    <img
      src={img2}
      alt="Team Collaboration"
      className="w-full max-w-md h-92 object-cover rounded-xl shadow-lg"
    />
  </div>

  {/* Right Text */}
  <div className="order-1 md:order-2">
    <h3 className="text-2xl font-semibold mb-4">Instant FIR Generator</h3>
    <p className="text-gray-700 mb-4 leading-relaxed">
      Quickly turn real-life incidents into legally structured complaints or FIR drafts. Just fill a simple form detailing what happened, when, where, & who was involved.
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>Fill the Smart Form</li>
      <li>Complaint / FIR is Generated</li>
      <li>Download as PDF</li>
    </ul>

    {/* Fill Form Button */}
    <div className="mt-6">
      <button
        onClick={()=>navigate("/fir")}  // Change this to your actual route or external link
        className="inline-block bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
      >
        Fill Form
      </button>
    </div>
  </div>
</div>


{/* Section 3 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  {/* Left Text */}
  <div>
    <h3 className="text-2xl font-semibold mb-4">Get Legal Consultation</h3>
    <p className="text-gray-700 mb-4 leading-relaxed">
      Click the "Hire Lawyer" button to access a smart search page where you can easily find legal professionals based on your specific needs.
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>Click "Hire Lawyer"</li>
      <li>Apply Filters</li>
      <li>Browse Lawyer Profiles</li>
    </ul>

    {/* Hire Lawyer Button */}
    <div className="mt-6">
      <button
        onClick={()=>navigate("/hire-lawyer")}  // Replace with your actual route or external link
        className="inline-block bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
      >
        Hire Lawyer
      </button>
    </div>
  </div>

  {/* Right Image */}
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
<section className="bg-[#0c1c11] text-white py-20 px-6 md:px-16 ">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <span className="px-4 py-1 bg-green-200 text-green-800 text-sm font-semibold rounded-full">
      FEATURES
    </span>
    <h1 className="text-4xl font-bold mt-4">Packed with Power</h1>
    <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
Designed for Real Legal Needs.    </p>
  </div>
<div className="space-y-12 my-12 px-4">
  {/* Row 1 */}
  <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
    {/* Card 1 - Flex 2 */}
    <div className="flex-[2] bg-[#d3e8da] text-black p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300 flex items-center justify-between gap-6">
      <div className="max-w-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Multilanguage Support</h1>
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
           The platform provides multilingual support, allowing users to access and fill the FIR form in regional languages (like Hindi, Tamil, etc.) to ensure better accessibility for non-English speakers.

        </p>
      </div>
      <img src={img4} alt="Cross-Platform Sync" className="w-48 md:w-60 h-auto" />
    </div>

    {/* Card 2 - Flex 1 */}
    <div className="flex-[1.5] bg-[#d3e8da] text-black p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300 flex items-center justify-between gap-6">
      <div className="max-w-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Voice Recoganiser
</h1>
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
           Voice-to-text input lets users speak their complaint details, making the process easier for those with limited typing skills or disabilities.

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
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Mobile-Friendly App</h1>
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
           The interface is fully responsive and optimized for mobile devices, ensuring seamless FIR filing on-the-go with smooth navigation and faster form submission.

        </p>
      </div>
      <img src={img6} alt="Cross-Platform Sync" className="w-40 md:w-52 h-auto" />
    </div>

    {/* Card 2 - Flex 2 */}
    <div className="flex-[2] bg-[#d3e8da] text-black p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300 flex items-center justify-between gap-6">
      <div className="max-w-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Maintain Chatbot History</h1>
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          The system stores previous chatbot interactions, allowing users and administrators to refer back to past queries, follow-ups, or suggestions made by the AI assistant.

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
<section className="flex flex-col md:flex-row bg-white min-h-screen">
      <div className="flex-1 flex flex-col justify-center px-10 py-20">
        <span className="inline-block bg-green-100 w-28 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-6">
          TEMPLATES
        </span>
        <h1 className="text-5xl font-bold mb-6  text-green-800  leading-tight">
         1500+ Verified Legal Documents for reference
        </h1>
        <p className="text-gray-600 text-lg max-w-md">
One platform to search, reference, and validate legal documents relevant to your case — instantly and effortlessly.        </p>

         <a
          href="https://indiankanoon.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black w-32 mt-16 text-white px-6 py-2 rounded-lg text-sm font-semibold shadow hover:bg-gray-800 transition"
        >
          Search
        </a>
      </div>

      <div className="flex-1 flex items-center justify-center px-10 py-20 bg-white relative overflow-hidden">
        <img
          src={img13}
          alt="Templates Preview"
          className="max-w-full h-auto object-contain"
          style={{ transform: "scale(1.2)", marginRight: "-100px" }}
        />
      </div>
    </section>

      {/* Document  */}

<section className="relative w-full">
  {/* Background Image */}
  <img
    className="w-full h-[500px] object-cover"
    src={img14}
    alt="Document Analysis Background"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
      ClauseWise

    </h1>
    <p className="text-lg md:text-xl font-semibold text-gray-200 max-w-2xl mb-6 drop-shadow-md">
An IBM powered Document Analyser    </p>
    <p className="text-lg md:text-xl  text-gray-200 max-w-2xl mb-6 drop-shadow-md">
Upload your legal document (PDF) here to quickly generate a summary and interact with a smart assistant.  </p>
    <button
      className="px-8 py-3 bg-green-800 text-white rounded-full shadow-lg text-lg font-semibold hover:bg-green-700 transition"
      onClick={() => navigate('/document-analyse')}
    >
      Analyse Document
    </button>
  </div>
</section>

<section className="flex flex-col md:flex-row bg-white min-h-screen px-10 py-20 items-center">
      <div className="flex-1 mb-10 md:mb-0">
        <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-6">
          FAQS
        </span>
        <h2 className="text-4xl md:text-5xl text-green-950 font-bold leading-tight mb-4">
          Have a question?<br />Here are some solutions
        </h2>
        <p className="text-gray-600 text-lg">
          For more queries, feel free to reach us.
        </p>
      </div>

      <div className="flex-1 space-y-4 w-full">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`border border-green-200 rounded-xl px-6 py-4 transition ${
              openIndex === idx ? 'shadow-md bg-green-50' : 'hover:shadow-md'
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(idx)}
            >
              <p className="text-lg font-medium text-gray-900">{faq.question}</p>
              {openIndex === idx ? (
                <X className="text-gray-500 w-6 h-6" />
              ) : (
                <Plus className="text-gray-500 w-6 h-6" />
              )}
            </div>
            {openIndex === idx && (
              <p className="text-gray-700 mt-4 text-base">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
     <footer className="bg-[#0B1B10] text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 border-b border-[#1c3123] pb-8">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="w-14 h-14" />
          <div>
            <h2 className="text-xl font-bold tracking-wide">Legal Query AI</h2>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="font-medium mb-2">Connect with us:</p>
          <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4" />
              <span>+91 63589 16474</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:gettasks@petpooja.com" className="underline">
                gettasks@legalqueryai.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 text-sm max-w-xs">
          <MapPin className="w-4 h-4 mt-1" />
          <p>
            Sri Eshwar College Of Engineering, Coimbatore, 641202
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-6 py-6">
        {[Linkedin, Instagram, Youtube, Facebook].map((Icon, idx) => (
          <div
            key={idx}
            className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#0B1B10] transition"
          >
            <Icon className="w-5 h-5" />
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-white">
        COPYRIGHT © 2025 – Syntax Squad Pvt. Ltd., India • Privacy • Compliance • Terms • EULA • Cancellation & Refund • Escalation Matrix
      </p>
    </footer>



        </main>
  );
};
