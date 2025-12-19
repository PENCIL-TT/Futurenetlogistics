import React from "react";
import { motion } from "framer-motion";
import { Plane, Ship, Package, Warehouse } from "lucide-react";

// Specific Golden-Yellow color from your reference
const BRAND_GOLD = "#d4a017"; 

const CurvedArrow = () => (
  <div className="hidden lg:block absolute -right-12 top-2 w-20 h-10 z-0">
    <svg
      width="80"
      height="40"
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: BRAND_GOLD, opacity: 0.6 }}
    >
      <path
        d="M5 35C25 5 55 5 75 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />
      <path
        d="M68 12L76 16L72 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      step: "SERVICE - 1",
      title: "Air Freight",
      icon: <Plane className="w-8 h-8" style={{ color: BRAND_GOLD }} />,
      description: "Express & deferred services, Airport-to-airport & door-to-door, Dangerous goods & temperature-sensitive cargo."
    },
    {
      step: "SERVICE - 2",
      title: "Sea Freight",
      icon: <Ship className="w-8 h-8" style={{ color: BRAND_GOLD }} />,
      description: "FCL / LCL shipping, Breakbulk and Ro-Ro solutions, Global consolidation services."
    },
    {
      step: "SERVICE - 3",
      title: "Customs Clearance",
      icon: <Package className="w-8 h-8" style={{ color: BRAND_GOLD }} />,
      description: "Import/export documentation, Free zone & mainland clearance, Compliance support."
    },
    {
      step: "SERVICE - 4",
      title: "Warehousing & Logistics",
      icon: <Warehouse className="w-8 h-8" style={{ color: BRAND_GOLD }} />,
      description: "Bonded & non-bonded facilities, Inventory management, Value-added services."
    }
  ];

  return (
    <section className="bg-black py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group relative"
            >
              {/* Icon Container */}
              <div className="relative mb-8">
                <div 
                  className="w-32 h-32 rounded-full border border-dashed flex items-center justify-center transition-all duration-500 group-hover:border-opacity-100"
                  style={{ borderColor: `${BRAND_GOLD}66` }} // 66 for 40% opacity
                >
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl">
                    {service.icon}
                  </div>
                </div>

                {/* Dashed Curved Arrow */}
                {idx < services.length - 1 && <CurvedArrow />}
              </div>

              {/* Service Info */}
              <span 
                className="font-bold text-[11px] tracking-[0.2em] mb-3 uppercase"
                style={{ color: BRAND_GOLD }}
              >
                {service.step}
              </span>
              <h3 className="text-white text-xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
