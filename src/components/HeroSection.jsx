import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = () => {
  return (
    <section className="pt-28 bg-gradient-to-b from-[#0B3D91] to-[#0f4d9a] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-10">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Empowering Citizens, Improving Governance
          </h2>
          <p className="mb-6 text-lg text-gray-100">
            Use CivicEye to report issues like potholes, streetlight outages,
            and more. Help build a transparent, responsive city.
          </p>
          <div className="space-x-4 flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
            <a
              href="#report"
              className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold w-[200px] text-center hover:bg-yellow-300"
            >
              Report Now
            </a>
            <a
              href="#dashboard"
              className="border border-white px-6 py-2 rounded-md font-semibold w-[200px] text-center hover:bg-white hover:text-[#0B3D91]"
            >
              View Dashboard
            </a>
          </div>
        </div>

        {/* Right: Carousel */}
        <div className="w-full md:w-1/2">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            interval={2000}
            className="rounded-lg shadow-lg"
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                alt="Civic work"
              />
              <p className="legend">Report local infrastructure issues</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581094651185-2745072f223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                alt="Water issues"
              />
              <p className="legend">Ensure clean water and sanitation</p>
            </div>
            z
            <div>
              <img
                src="https://images.unsplash.com/photo-1581094651185-2745072f223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                alt="Water issues"
              />
              <p className="legend">Ensure clean water and sanitation</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581094651185-2745072f223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                alt="Water issues"
              />
              <p className="legend">Ensure clean water and sanitation</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581094651185-2745072f223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                alt="Water issues"
              />
              <p className="legend">Ensure clean water and sanitation</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                alt="Streetlights"
              />
              <p className="legend">Fix streetlight outages easily</p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
