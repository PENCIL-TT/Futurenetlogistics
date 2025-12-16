import React from 'react';

const CoreValues = () => {
  // Data for the top section bullet points
  const bulletPoints = [
    "Integrated multi logistics platforms",
    "Live end to end supply chain visibility",
    "Customized portals to customer communications",
    "Tools to automate customer communications",
    "Real time business intelligence and reporting"
  ];

  const values = [
    'Strive for excellence',
    'Adapt, learn & assimilate the best industry practices',
    'Open & honest relationship with communications',
    'Embrace innovation',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* --- TOP SECTION: Text & Map Image (Unchanged) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800">OGL - Digital Logistics</h3>
            <p className="text-gray-600 leading-relaxed">
              It's our solution-based logistics services couple with the best
              technology that makes us standout. We believe in providing the
              right services using the right tools at the right time.
            </p>
            <ul className="space-y-3 mt-4">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Map Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" 
              alt="Global Logistics Network" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* --- BOTTOM SECTION: Grid of 4 Cards (Image removed) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((title, index) => (
             <ValueCard key={index} title={title} />
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Custom Icon Component (Unchanged) ---
const CompanyLogoIcon = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke="#1e3a8a" strokeWidth="6" />
    <path 
      d="M65 35 L45 35 L35 50 L45 65 L65 65" 
      stroke="#e11d48" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M65 35 L70 42" stroke="#e11d48" strokeWidth="8" strokeLinecap="round" />
     <path d="M65 65 L70 58" stroke="#e11d48" strokeWidth="8" strokeLinecap="round" />
  </svg>
);

// --- Reusable Card Component ---
const ValueCard = ({ title }: { title: string }) => (
  <div className="bg-white border-2 border-gray-100 rounded-xl p-8 flex flex-col items-center text-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 py-12 min-h-[250px]">
    <div className="mb-6">
      <CompanyLogoIcon />
    </div>
    <h3 className="font-bold text-gray-800 text-lg leading-tight px-4">
      {title}
    </h3>
  </div>
);

export default CoreValues;
