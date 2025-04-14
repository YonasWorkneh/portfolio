import React from 'react'

export default function Overview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div>
          <h1 className="text-white text-xl font-tenor mb-2">My Role</h1>
          <p>
            <span className="text-white font-tenor">Lead Frontend &mdash;</span>
            <span className="text-sm text-white/40">
              {" "}
              visual design and implementation.
            </span>
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-white text-xl font-tenor mb-2">Team</h1>
          <p className=" text-white/40 font-tenor text-md">
            Temesgen Getye, SWE
          </p>
          <p className=" text-white/40 font-tenor text-md">
            Biniyam Feyissa, SWE
          </p>
          <p className=" text-white/40 font-tenor text-md">
            Surafel Fantu, Mobile Designer
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-white text-xl font-tenor mb-2">
            Timeline & status
          </h1>
          <p className=" text-white/40 font-tenor text-md">
            3 months, Launched in August 2024
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-tenor text-white text-xl">Overview</h1>
        <p className="text-white/40 font-tenor py-4">
          Black Cube is a modern, sleek law firm website built with React, GSAP,
          and Three.js, offering a dynamic and immersive user experience. The
          design features a dark, minimalist aesthetic with smooth animations
          and 3D elements that enhance engagement. It highlights the firm&apos;s
          expertise in corporate law, litigation, and intellectual property,
          with detailed attorney profiles and client testimonials for
          credibility. A streamlined consultation booking system and legal
          insights section make it user-friendly and informative. Optimized for
          performance and security, the site is deployed on a fast, scalable
          cloud platform, ensuring a seamless experience across devices.
        </p>
      </div>
    </div>
  );
}
