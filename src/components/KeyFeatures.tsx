import React from "react";
import { motion } from "framer-motion";
import { Plane, Ship, Package, Warehouse } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Air Freight",
      icon: <Plane className="w-8 h-8 text-green-500" />,
      description:
        "Express & deferred services, Airport-to-airport & door-to-door, Dangerous goods cargo.",
    },
    {
      title: "Sea Freight",
      icon: <Ship className="w-8 h-8 text-green-500" />,
      description:
        "FCL / LCL shipping, Breakbulk and Ro-Ro solutions, Global consolidation services.",
    },
    {
      title: "Customs Clearance",
      icon: <Package className="w-8 h-8 text-green-500" />,
      description:
        "Import/export documentation, Free zone & mainland clearance, Compliance support.",
    },
    {
      title: "Warehousing & Logistics",
      icon: <Warehouse className="w-8 h-8 text-green-500" />,
      description:
        "Bonded & non-bonded facilities, Inventory management, Value-added services.",
    },
  ];

  return (
    <section className="bg-black py-24 px-4">
      <div className="container mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Core <span className="text-green-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div className="mb-8">
                <div className="w-32 h-32 rounded-full border border-dashed border-zinc-800 flex items-center justify-center transition-all duration-500 group-hover:border-green-500/50">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold mb-4 group-hover:text-green-500 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-[240px]">
                {service.description}
              </p>

              {/* Read More */}
              <button className="text-green-500 text-sm font-semibold uppercase tracking-wide border-b border-green-500/40 hover:border-green-500 transition-all">
                Read More
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
