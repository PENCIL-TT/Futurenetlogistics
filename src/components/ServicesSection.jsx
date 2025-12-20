import React from "react";

// --- Stock Images & Content ---
const SERVICES_DATA = {
  row1: [
    {
      title: "Road Freight",
      img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
      description: "logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>,
    },
    {
      title: "Ocean Freight",
      img: "https://images.unsplash.com/photo-1494412574006-259124e39ecb?auto=format&fit=crop&q=80&w=800",
      description: "logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 1.4 0 2.1-.5 3.5-1 1.4-.5 2.1-1 3.5-1 1.4 0 2.1.5 3.5 1 1.4.5 2.1 1 3.5 1 1.4 0 2.1-.5 3.5-1 .6-.5 1.2-1 2.5-1"/><path d="M19.38 20.51a11.93 11.93 0 0 0-1.22-4.43l1.1-1.12a1 1 0 0 0 .16-1.21L16.2 8.32a1 1 0 0 0-1.3-.41l-3.3 1.5-3.3-1.5a1 1 0 0 0-1.3.41L3.78 13.75a1 1 0 0 0 .16 1.21l1.1 1.12a11.95 11.95 0 0 0-1.22 4.43"/></svg>,
    },
    {
      title: "Air Freight",
      img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800",
      description: "logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>,
    },
    {
      title: "Project Cargo",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      description: "logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>,
    },
  ],
  row2: [
    {
      title: "Warehousing",
      img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
      description: "logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/></svg>,
    },
    {
      title: "3 PL",
      img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800",
      description: "logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
    },
    {
      title: "Liquid Transport",
      img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=800",
      description: "logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
    },
  ],
};

const ServiceCard = ({ title, img, description, icon }) => (
  <div className="flex flex-col bg-white shadow-lg overflow-hidden h-full">
    {/* Image container with fixed aspect ratio */}
    <div className="relative h-56 w-full">
      <img src={img} alt={title} className="w-full h-full object-cover" />
    </div>

    {/* Content Section - Using relative positioning for the icon to float */}
    <div className="relative px-8 pb-10 flex-grow flex flex-col bg-white">
      {/* Icon Box: Absolute positioned to sit exactly on the image/content line */}
      <div className="absolute -top-7 left-6 z-10 bg-green-600 p-4 border-b-2 border-green-800 shadow-md">
        <div className="text-white">
          {icon}
        </div>
      </div>

      {/* Spacing div to prevent icon from overlapping text */}
      <div className="pt-12">
        <div className="w-12 h-1 bg-green-600 mb-6" />
        <h3 className="text-xl font-extrabold text-gray-900 mb-4 uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-[15px] text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Optional Wave Background Pattern from original image */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <svg width="80" height="60" viewBox="0 0 80 60"><path d="M0 60 Q 20 40 40 60 T 80 60" fill="none" stroke="gray" strokeWidth="1"/></svg>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header matches image style */}
        <div className="text-center mb-20">
          <p className="text-green-600 font-bold uppercase tracking-[0.3em] text-xs mb-3">
            Our Logistics Services! 🚚
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Offering Cost Efficient<br />
            <span className="relative inline-block mt-2">
              Transport Shipping!
              <span className="absolute bottom-1 left-0 w-full h-1 bg-green-600"></span>
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto italic text-sm">
            logistics company specializes in managing the transportation,<br /> 
            storage and distribution of goods.
          </p>
        </div>

        {/* First Row: 4 Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {SERVICES_DATA.row1.map((item, idx) => (
            <ServiceCard key={idx} {...item} />
          ))}
        </div>

        {/* Second Row: 3 Items Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:max-w-5xl">
            {SERVICES_DATA.row2.map((item, idx) => (
              <ServiceCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
