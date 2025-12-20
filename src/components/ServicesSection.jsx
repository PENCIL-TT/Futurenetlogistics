import React, { useState, useEffect, useRef } from "react";

// Icons Components
const Plane = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
  </svg>
);

const Anchor = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3"/>
    <line x1="12" y1="22" x2="12" y2="8"/>
    <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
  </svg>
);

const Package = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7.5 4.27 9 5.15"/>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
    <path d="m3.3 7 8.7 5 8.7-5"/>
    <path d="M12 22V12"/>
  </svg>
);

const Warehouse = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/>
    <path d="M6 18h12"/>
    <path d="M6 14h12"/>
    <rect width="12" height="12" x="6" y="10"/>
  </svg>
);

const Truck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
    <path d="M15 18H9"/>
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
    <circle cx="17" cy="18" r="2"/>
    <circle cx="7" cy="18" r="2"/>
  </svg>
);

const Droplet = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
);

const ServicesSection = () => {
  const row1 = [
    {
      title: "LCL Services",
      slug: "lcl-services",
      icon: Anchor,
      image: "https://images.unsplash.com/photo-1571141380277-5248b0f1d95a?auto=format&fit=crop&q=80&w=800",
      description: "Cost-effective consolidation solutions for small shipments with global reach.",
    },
    {
      title: "FCL Services",
      slug: "fcl-services",
      icon: Anchor,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      description: "Dedicated containers ensuring secure and reliable full-load transportation.",
    },
    {
      title: "Air Freight",
      slug: "air-freight",
      icon: Plane,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
      description: "Fast airport-to-airport and door-to-door air cargo services worldwide.",
    },
    {
      title: "Project Cargo",
      slug: "project-cargo",
      icon: Package,
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800",
      description: "Special handling for oversized, heavy-lift, and complex cargo movements.",
    },
  ];

  const row2 = [
    {
      title: "Warehousing",
      slug: "warehousing",
      icon: Warehouse,
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800",
      description: "Bonded and non-bonded storage facilities with inventory management.",
    },
    {
      title: "3 PL",
      slug: "3pl",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
      description: "End-to-end third-party logistics solutions for supply chain efficiency.",
    },
    {
      title: "Liquid Transportation",
      slug: "liquid-transportation",
      icon: Droplet,
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800",
      description: "Safe and compliant bulk liquid transport across domestic and global routes.",
    },
  ];

  const ServiceItem = ({ title, slug, icon: Icon, image, description, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 100);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => { if (ref.current) observer.unobserve(ref.current); };
    }, [index]);

    return (
      <div
        ref={ref}
        className={`bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group transition-all duration-700 hover:shadow-2xl ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Icon Overlay */}
          <div className="absolute bottom-4 left-6">
            <div className="bg-green-600 p-3 rounded-xl text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
              <Icon />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide group-hover:text-green-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
          <button
            onClick={() => alert(`Maps to /services/${slug}`)}
            className="text-base font-semibold text-green-600 hover:text-green-700 transition-all duration-300 inline-flex items-center gap-2 group/btn"
          >
            Read More
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Specialist Services
          </h2>
          <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full" />
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {row1.map((service, i) => (
            <ServiceItem key={i} {...service} index={i} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
            {row2.map((service, i) => (
              <ServiceItem key={i} {...service} index={i + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
