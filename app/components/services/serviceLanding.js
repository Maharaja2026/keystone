import React from "react";



const ServiceLanding = () => {
    return (
      <main className="w-full bg-[#FBFBFB]">
        <div className="relative top-16 md:top-0">
          {/* Video Section */}
          <video
            src="\services.mp4"
            autoPlay
            muted
            loop
            className="w-full h-[80vh] max-w-full object-cover object-top"
            aria-label="Promotional video showcasing pricing details"
          >
            {/* Fallback content for unsupported browsers */}
            <p>Your browser does not support the video tag.</p>
          </video>
  
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
  
          {/* Title */}
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 md:left-[30%] lg:left-1/4 -translate-y-1/2 text-white uppercase text-4xl sm:text-6xl md:text-8xl tracking-wide text-center">
          Our Services
          </h1>
        </div>
      </main>
    );
  };
  
  export default ServiceLanding;