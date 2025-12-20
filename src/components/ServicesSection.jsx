import React, { useState, useEffect, useRef } from "react";
import { 
  Anchor, 
  Plane, 
  Box, 
  Warehouse, 
  Truck, 
  Droplet, 
  ArrowRight, 
  Ship 
} from "lucide-react";

const ServicesSection = () => {
  const row1 = [
    {
      title: "LCL Services",
      slug: "lcl-services",
      icon: <Ship size={24} />,
      image: "https://images.unsplash.com/photo-1571141380277-5248b0f1d95a?auto=format&fit=crop&q=80&w=800",
      description: "Cost-effective consolidation solutions for small shipments with global reach.",
    },
    {
      title: "FCL Services",
      slug: "fcl-services",
      icon: <Anchor size={24} />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      description: "Dedicated containers ensuring secure and reliable full-load transportation.",
    },
    {
      title: "Air Freight",
      slug: "air-freight",
      icon: <Plane size={24} />,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
      description: "Fast airport-to-airport and door-to-door air cargo services worldwide.",
    },
    {
      title: "Project Cargo",
      slug: "project-cargo",
      icon: <Box size={24} />,
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800",
      description: "Special handling for oversized, heavy-lift, and complex cargo movements.",
    },
  ];

  const row2 = [
    {
      title: "Warehousing",
      slug: "warehousing",
      icon: <Warehouse size={24} />,
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800",
      description: "Bonded and non-bonded storage facilities with inventory management.",
    },
    {
      title: "3 PL",
      slug: "3pl",
      icon: <Truck size={24} />,
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
      description: "End-to-end third-party logistics solutions for supply chain efficiency.",
    },
    {
      title: "Liquid Transportation",
      slug: "liquid-transportation",
      icon: <Droplet size={24} />,
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800",
      description: "Safe and compliant bulk liquid transport across domestic and global routes.",
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
        className={`group relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-2 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{ boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)' }}
      >
        {/* Top Image Section */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 scale-110 group-hover:scale-100"
          />
          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Floating Icon Box */}
          <div className="absolute top-6 left-6 z-20">
            <div className="relative flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-2xl shadow-lg transition-all duration-500 group-hover:bg-white group-hover:text-green-600 group-hover:rotate-[360deg]">
              <div className="absolute inset-0 bg-green-400/20 rounded-2xl animate-pulse group-hover:hidden"></div>
              {icon}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 pt-6 relative bg-white">
          <div className="flex items-center gap-2 mb-3">
             <span className="h-px w-8 bg-green-600 transition-all duration-500 group-hover:w-12"></span>
             <p className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">Logistics</p>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-green-600">
            {title}
          </h3>
          
          <p className="text-gray-500 leading-relaxed mb-8 text-sm lg:text-base line-clamp-3">
            {description}
          </p>

          <button
            onClick={() => alert(`Maps to /services/${slug}`)}
            className="group/btn flex items-center gap-3 text-gray-900 font-bold text-sm uppercase tracking-wider hover:text-green-600 transition-colors"
          >
            Explore Service
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 group-hover/btn:border-green-600 group-hover/btn:bg-green-600 group-hover/btn:text-white transition-all duration-300">
              <ArrowRight size={14} />
            </div>
          </button>
        </div>

        {/* Bottom Decorative Shimmer */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      </div>
    );
  };

  return (
    <section className="bg-slate-50 py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -ml-48 -mb-48 opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Global <span className="text-green-600 italic">Expertise</span>, 
              <br />Local Precision.
            </h2>
            <p className="text-gray-500 text-lg max-w-lg">
              We provide comprehensive logistics and supply chain solutions tailored to your unique business requirements.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 border-t-2 border-r-2 border-green-200 rounded-tr-[3rem]"></div>
          </div>
        </div>

        {/* Grid Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {row1.map((service, i) => (
            <ServiceItem key={i} {...service} index={i} />
          ))}
        </div>

        {/* Grid Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:max-w-5xl lg:mx-auto">
          {row2.map((service, i) => (
            <ServiceItem key={i} {...service} index={i + 4} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
