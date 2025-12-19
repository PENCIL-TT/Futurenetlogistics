import React from "react";
import { motion } from "framer-motion";
import { Plane, Ship, Package, Warehouse } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      step: "SERVICE - 1",
      title: "Air Freight",
      icon: <Plane className="w-8 h-8 text-yellow-500" />,
      description: "Express & deferred services, Airport-to-airport & door-to-door, Dangerous goods & temperature-sensitive cargo."
    },
    {
      step: "SERVICE - 2",
      title: "Sea Freight",
      icon: <Ship className="w-8 h-8 text-yellow-500" />,
      description: "FCL / LCL shipping, Breakbulk and Ro-Ro solutions, Global consolidation services."
    },
    {
      step: "SERVICE - 3",
      title: "Customs Clearance",
      icon: <Package className="w-8 h-8 text-yellow-500" />,
      description: "Import/export documentation, Free zone & mainland clearance, Compliance support."
    },
    {
      step: "SERVICE - 4",
      title: "Warehousing & Logistics",
      icon: <Warehouse className="w-8 h-8 text-yellow-500" />,
      description: "Bonded & non-bonded facilities, Inventory management, Value-added services."
    }
  ];

  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container with Dashed Border */}
              <div className="relative mb-8 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-dashed border-zinc-700 flex items-center justify-center transition-colors group-hover:border-yellow-500">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Dashed Arrow (Hidden on last item and mobile) */}
                {idx < services.length - 1 && (
                  <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2">
                    <span className="text-zinc-700 text-2xl">---&gt;</span>
                  </div>
                )}
              </div>

              {/* Service Details */}
              <span className="text-yellow-500 font-bold text-xs tracking-widest mb-3 uppercase">
                {service.step}
              </span>
              <h3 className="text-white text-xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
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
