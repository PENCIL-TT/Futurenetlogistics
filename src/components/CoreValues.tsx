import React from 'react';

const CoreValues = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">OGL - Digital Logistics</h2>
          <p className="text-gray-700 mb-6 max-w-2xl">
            It's our solution-based logistics services couple with the best technology that makes us standout. We belive in providing the right services using the right tools at the right time.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Integrated multi logistics platforms</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Live end to end supply chain visibility</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Customized portals to customer communications</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Tools to automate customer communications</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Real time business intelligence and reporting</span>
            </li>
          </ul>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16">
          {/* Top Left */}
          <div className="flex flex-col items-center justify-center p-8 border-2 border-gray-200 rounded-lg bg-white">
            <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-white"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">Strive for exellence</h3>
          </div>

          {/* Top Right */}
          <div className="flex flex-col items-center justify-center p-8 border-2 border-gray-200 rounded-lg bg-white">
            <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-white"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">Adapt, learn & assimilate the best industry practices</h3>
          </div>

          {/* Bottom Left */}
          <div className="flex flex-col items-center justify-center p-8 border-2 border-gray-200 rounded-lg bg-white">
            <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-white"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">Open & honest relationship with communications</h3>
          </div>

          {/* Bottom Right */}
          <div className="flex flex-col items-center justify-center p-8 border-2 border-gray-200 rounded-lg bg-white">
            <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-white"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">Embrace innovation</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
