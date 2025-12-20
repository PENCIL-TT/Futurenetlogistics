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
    { title: "LCL Services", icon: <Ship size={24} className="text-green-600" />, image: "https://images.unsplash.com/photo-1494412552103-4102ffbf0a9c?auto=format&fit=crop&q=80&w=500", desc: "Logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods." },
    { title: "FCL Services", icon: <Anchor size={24} className="text-green-600" />, image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=500", desc: "Logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods." },
    { title: "Air Freight", icon: <Plane size={24} className="text-green-600" />, image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=500", desc: "Logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods." },
    { title: "Project Cargo", icon: <Box size={24} className="text-green-600" />, image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=500", desc: "Logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods." },
    { title: "Warehousing", icon: <Warehouse size={24} className="text-green-600" />, image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=500", desc: "Logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods." },
    { title: "3PL Solutions", icon: <Layers size={24} className="text-green-600" />, image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=500", desc: "Logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods." },
    { title: "Road Freight", icon: <Truck size={24} className="text-green-600" />, image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=500", desc: "Logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods." },
  ];

  const ServiceItem = ({ title, icon, image, desc, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      }, { threshold: 0.1 });
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={ref}
        className={`relative bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-visible transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" 
          />
        </div>

        {/* Overlapping Icon Box - half-on/half-off image */}
        <div className="absolute top-[165px] sm:top-[195px] left-6 z-20">
          <div className="bg-white p-4 shadow-xl border border-gray-100 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Content Section */}
        <div className="pt-14 p-8">
          {/* Green Accent Line directly matching image style */}
          <div className="w-[100%] h-[3px] bg-green-600 mb-6" />
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
            {title}
          </h3>
          
          <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
            {desc}
          </p>

          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-green-600 transition-colors">
            Read More <ArrowRight size={14} className="text-green-600" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header matching the brand style */}
        <div className="mb-12 border-l-4 border-green-600 pl-5">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Our Services</h2>
          <p className="text-gray-500 text-sm mt-1">Efficient and reliable logistics solutions globally.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {allServices.map((service, i) => (
            <ServiceItem key={i} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
