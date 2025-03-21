import React from 'react';

const OurServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Caring is the new marketing</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            The Naxcent blog is the best place to read about the latest membership insights, 
            trends, and more. See who's joining the community, read about how our community 
            are increasing their membership income and lots more!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto px-8">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Image */}
            <img
              className="w-full h-64 object-cover"
              src="/services1.jpg"
              alt="Safeguarding with OneRen"
            />
            {/* Text Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Creating Streamlined Safeguarding Processes with OneRen
              </h3>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                Readmore
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              className="w-full h-64 object-cover"
              src="services2.jpg"
              alt="Safeguarding responsibilities"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                What are your safeguarding responsibilities and how can you manage them?
              </h3>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                Readmore
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              className="w-full h-64 object-cover"
              src="services3.jpg"
              alt="Membership Model with Triathlon Australia"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Revamping the Membership Model with Triathlon Australia
              </h3>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                Readmore
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;