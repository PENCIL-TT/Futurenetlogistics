import React from 'react';

const CoreValues = () => {
  // Data for Features (transformed to list format with descriptions)
  const features = [
    { title: "Integrated multi logistics platforms", description: "Flexible and efficient platforms for seamless operations.", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Live end to end supply chain visibility", description: "Real-time tracking and monitoring across the entire chain.", iconPath: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
    { title: "Customized portals to customer communications", description: "Tailored interfaces for effective client interaction.", iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { title: "Tools to automate customer communications", description: "Automated systems for timely and accurate updates.", iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
    { title: "Real time business intelligence reporting", description: "Instant insights and analytics for informed decision-making.", iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  ];

  const values = [
    { title: "Strive for excellence", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "Adapt & learn industry practices", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { title: "Open & honest communications", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
    { title: "Embrace innovation", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  ];

  return (
    <section className="py-24 bg-white font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section - Left Aligned with Blue Accent */}
        <div className="mb-20 border-l-4 border-blue-500 pl-6">
          <span className="block text-blue-500 font-bold tracking-wider text-sm mb-4 uppercase">
            Digital Logistics Solutions
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            OGL - Digital Logistics
          </h2>
          
          <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
            It's our solution-based logistics services coupled with the best technology that makes us standout. We believe in providing the right services using the right tools at the right time.
          </p>
        </div>

        {/* Feature List - Styled like the new reference image */}
        <div className="flex flex-col divide-y divide-gray-200 mb-32">
          {features.map((feature, index) => (
            <div key={index} className="py-8 flex flex-col md:flex-row items-center justify-between group hover:bg-gray-50 transition-colors duration-300">
              <div className="flex items-center w-full md:w-1/3 mb-4 md:mb-0">
                <div className="w-12 h-12 text-blue-500 mr-6 flex-shrink-0">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.iconPath} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-gray-500 text-lg leading-relaxed w-full md:w-1/2 mb-4 md:mb-0 px-4">
                {feature.description}
              </p>
              
              <div className="flex-shrink-0 text-gray-400 group-hover:text-blue-500 transition-colors">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="mb-12">
           <span className="text-blue-500 font-bold tracking-wider text-sm uppercase mb-3 block">Our DNA</span>
           <h3 className="text-3xl font-bold text-gray-900 mb-8">Core Values</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="group bg-white p-10 rounded-[2rem] border border-gray-100 hover:bg-blue-500 transition-all duration-300 cursor-default shadow-sm hover:shadow-2xl">
              <div className="w-14 h-14 mb-6 text-gray-900 group-hover:text-white transition-colors duration-300">
                 <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={val.icon} />
                 </svg>
              </div>
              <h4 className="text-gray-900 text-lg font-bold group-hover:text-white transition-colors duration-300">
                {val.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center mt-24 border-t border-gray-200 pt-12">
          <p className="text-gray-600 text-lg font-medium">
            Become our next partner. <a href="#" className="text-blue-500 hover:text-blue-600 font-bold ml-1 inline-flex items-center gap-1 group">
              Let's Talk
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
