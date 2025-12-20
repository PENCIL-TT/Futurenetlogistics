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
  Layers,
  Headphones
} from "lucide-react";

const ServicesSection = () => {
  const allServices = [
    { title: "LCL Services", slug: "lcl", icon: <Ship size={18} />, image: "https://images.unsplash.com/photo-1571141380277-5248b0f1d95a?auto=format&fit=crop&q=80&w=400", desc: "Cost-effective small shipment consolidation." },
    { title: "FCL Services", slug: "fcl", icon: <Anchor size={18} />, image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400", desc: "Secure full-load container transport." },
    { title: "Air Freight", slug: "air", icon: <Plane size={18} />, image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400", desc: "Fast global airport-to-door delivery." },
    { title: "Project Cargo", slug: "project", icon: <Box size={18} />, image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=400", desc: "Expertise in oversized/heavy cargo." },
    { title: "Warehousing", slug: "warehouse", icon: <Warehouse size={18} />, image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=400", desc: "Bonded storage & inventory management." },
    { title: "3PL Solutions", slug: "3pl", icon: <Layers size={18} />, image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=400", desc: "End-to-end supply chain efficiency." },
    { title: "Liquid Transport", slug: "liquid", icon: <Droplet size={18} />, image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=400", desc: "Compliant bulk liquid logistics." },
  ];

  const ServiceItem = ({ title, slug, icon, image, desc, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setTimeout(() => setIsVisible(true), index * 50);
      }, { threshold: 0.1 });
      if (ref.current) observer.observe(ref.current);
      return () => { if (ref.current) observer.unobserve(ref.current); };
    }, [index]);

    return (
      <div
        ref={ref}
        className={`group relative bg-white rounded-xl overflow-hidden border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-md ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="relative aspect-square sm:aspect-video lg:aspect-square overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          <div className="absolute top-2 left-2 w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center shadow-md">
            {icon}
          </div>
        </div>

        <div className="p-3 flex flex-col flex-grow">
          <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors leading-tight">{title}</h3>
          <p className="text-[12px] text-gray-500 leading-snug line-clamp-2 mb-2 flex-grow">{desc}</p>
          <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-green-600 group-hover:gap-2 transition-all">
            More <ArrowRight size={12} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Core Services</h2>
            <p className="text-xs text-gray-400">Efficient Global Logistics</p>
          </div>
          <div className="h-10 w-10 border border-green-100 rounded-full flex items-center justify-center text-green-600">
            <Truck size={20} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allServices.map((service, i) => (
            <ServiceItem key={i} {...service} index={i} />
          ))}
          
          {/* Compact CTA Slot */}
          <div className="bg-gray-900 rounded-xl p-4 flex flex-col justify-center items-center text-center text-white group cursor-pointer hover:bg-green-600 transition-colors">
            <Headphones size={20} className="mb-2 text-green-500 group-hover:text-white" />
            <p className="text-[12px] font-bold uppercase tracking-tighter">Support 24/7</p>
            <p className="text-[10px] text-gray-400 group-hover:text-green-50 mt-1">Get Expert Help</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
