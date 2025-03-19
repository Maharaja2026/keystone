import React from 'react';

const Business = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-5">
      <div className="flex max-w-5xl w-full overflow-hidden">
        <div className="flex-1 flex items-center justify-center min-h-[400px]">
          {/* Placeholder for your business image - replace with your image */}
          <div className="w-full h-full flex items-center justify-center text-gray-600 italic">
            <img
              src="\business.svg"
              alt="Business Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Your Partner in{' '}
              <span className="text-blue-600">HR, Manpower, and Visa</span>
              <span className="text-blue-600 block">Solutions.</span>
            </h1>
            <p className="text-gray-600 mb-4 text-base leading-relaxed">
              We simplify the complexities of workforce management and
              international mobility with tailored HR and visa services.
            </p>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Built on trust, expertise, and dedication, our team delivers
              reliable manpower and seamless visa support.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Read More
            </button>
          </div>
          <div className="flex justify-between mt-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-600">500+</h2>
              <p className="text-gray-600 text-sm">Satisfied Customers</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-600">10+</h2>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-600">40+</h2>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;