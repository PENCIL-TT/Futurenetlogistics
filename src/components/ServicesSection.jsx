import React, { useState, useEffect, useRef } from "react";
import { 
  Anchor, 
  Plane, 
  Box, 
  Warehouse, 
  Truck, 
  Droplet, 
  ArrowRight, 
  Ship,
  Layers
} from "lucide-react";

const ServicesSection = () => {
  const allServices = [
    {
      title: "LCL Services",
      slug: "lcl-services",
      icon: <Ship size={22} />,
      image: "https://images.unsplash.com/photo-1571141380277-5248b0f1d95a?auto=format&fit=crop&q=80&w=600",
      description: "Cost-effective consolidation solutions for small shipments with global reach.",
    },
    {
      title: "FCL Services",
      slug: "fcl-services",
      icon: <Anchor size={22} />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
      description: "Dedicated containers ensuring secure and reliable full-load transportation.",
    },
    {
      title: "Air Freight",
      slug: "air-freight",
      icon: <Plane size={22} />,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600",
      description: "Fast airport-to-airport and door-to-door air cargo services worldwide.",
    },
    {
      title: "Project Cargo",
      slug: "project-cargo",
      icon: <Box size={22} />,
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=600",
      description: "Special handling for oversized, heavy-lift, and complex movements.",
    },
    {
      title: "Warehousing",
      slug: "warehousing",
      icon: <Warehouse size={22} />,
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=600",
      description: "Bonded and non-bonded storage facilities with inventory management.",
    },
    {
      title: "3 PL",
      slug: "3pl",
      icon: <Layers size={22} />,
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600",
      description: "End-to-end third-party logistics solutions for supply chain efficiency.",
    },
    {
      title: "Liquid Transport",
      slug: "liquid-transportation",
      icon: <Droplet size={22} />,
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=600",
      description: "Safe and compliant bulk liquid transport across global routes.",
    },
  ];

  const ServiceItem = ({ title, slug, icon, image, description, index }) => {
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
        className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Fixed Aspect Ratio Image Area */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
          
          {/* Floating Icon */}
          <div className="absolute top-4 left-4">
            <div className="w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-[360deg]">
              {icon}
            </div>
          </div>
        </div>

        {/* Content Area - Flex Grow ensures same height */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
            {description}
          </p>
          
          <button
            onClick={() => alert(`Navigating to /services/${slug}`)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-600 group-hover:gap-3 transition-all"
          >
            Details <ArrowRight size={14} />
          </button>
        </div>

        {/* Hover Line */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-600 transition-all duration-500 group-hover:w-full" />
      </div>
    );
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-widest uppercase text-sm">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            Comprehensive Logistics Solutions
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
        </div>

        {/* Responsive Grid for 7 items */}
        {/* On Desktop (xl): 4 columns | On Laptop (lg): 3 columns | On Tablet (md): 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allServices.map((service, i) => (
            <ServiceItem key={i} {...service} index={i} />
          ))}
          
          {/* Decorative CTA card for the 8th slot (Optional) */}
          <div className="hidden xl:flex bg-green-600 rounded-2xl p-8 flex-col justify-center items-center text-center text-white">
            <h4 className="text-xl font-bold mb-4">Need a Custom Solution?</h4>
            <p className="text-green-50 text-sm mb-6">Contact our experts for tailored logistics planning.</p>
            <button className="bg-white text-green-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
