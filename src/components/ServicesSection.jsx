import React, { useState, useEffect, useRef } from "react";

// --- SVG Components (Keep your existing SVG definitions here) ---
const Plane = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
);
const Anchor = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>
);
const Package = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
);
const Warehouse = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/><rect width="12" height="12" x="6" y="10"/></svg>
);
const Truck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
);
const Droplet = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
);

const ServicesSection = () => {
  const row1 = [
    { title: "LCL Services", slug: "lcl-services", icon: Anchor, img: "https://images.unsplash.com/photo-1494412574006-259124e39ecb?auto=format&fit=crop&q=80&w=800", description: "Cost-effective consolidation solutions." },
    { title: "FCL Services", slug: "fcl-services", icon: Anchor, img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800", description: "Dedicated full-load containers." },
    { title: "Air Freight", slug: "air-freight", icon: Plane, img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800", description: "Fast airport-to-airport cargo." },
    { title: "Project Cargo", slug: "project-cargo", icon: Package, img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800", description: "Handling for oversized cargo." },
  ];

  const row2 = [
    { title: "Warehousing", slug: "warehousing", icon: Warehouse, img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800", description: "Secure inventory management." },
    { title: "3 PL", slug: "3pl", icon: Truck, img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800", description: "Third-party logistics solutions." },
    { title: "Liquid Transport", slug: "liquid-transportation", icon: Droplet, img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=800", description: "Safe bulk liquid transport." },
  ];

  const ServiceCard = ({ title, icon: Icon, img, description, index }) => {
    return (
      <div className="relative group overflow-hidden bg-white shadow-lg h-96 flex flex-col">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/40" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 p-6 mt-auto bg-white/95 translate-y-24 group-hover:translate-y-0 transition-transform duration-500">
          {/* Icon Box - Positioned to peek over the white card */}
          <div className="absolute -top-10 left-6 bg-green-600 p-4 shadow-xl">
            <div className="text-white">
              <Icon />
            </div>
          </div>

          <div className="pt-2">
            <div className="w-12 h-1 bg-green-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {description}
            </p>
            <button className="text-sm font-bold text-green-600 uppercase tracking-widest hover:text-green-800 flex items-center gap-2">
              Explore More <span>→</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section from your Image */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-2 block">
            Our Logistics Services
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Offering <span className="text-green-600 border-b-4 border-green-600">Cost Efficient</span><br /> Transport Shipping!
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 italic">
            Logistics company specializes in managing the transportation, storage and distribution of goods.
          </p>
        </div>

        {/* Row 1 - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {row1.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>

        {/* Row 2 - 3 Columns Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-3/4">
            {row2.map((service, i) => (
              <ServiceCard key={i} {...service} index={i + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
