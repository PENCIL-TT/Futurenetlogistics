import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Plane,
  Anchor,
  Package,
  Warehouse,
  Truck,
  Droplet,
} from "lucide-react";

const ServicesSection = () => {
  const navigate = useNavigate();

  const row1 = [
    {
      title: "LCL Services",
      slug: "lcl-services",
      icon: Anchor,
      description:
        "Cost-effective consolidation solutions for small shipments with global reach.",
    },
    {
      title: "FCL Services",
      slug: "fcl-services",
      icon: Anchor,
      description:
        "Dedicated containers ensuring secure and reliable full-load transportation.",
    },
    {
      title: "Air Freight",
      slug: "air-freight",
      icon: Plane,
      description:
        "Fast airport-to-airport and door-to-door air cargo services worldwide.",
    },
    {
      title: "Project Cargo",
      slug: "project-cargo",
      icon: Package,
      description:
        "Special handling for oversized, heavy-lift, and complex cargo movements.",
    },
  ];

  const row2 = [
    {
      title: "Warehousing",
      slug: "warehousing",
      icon: Warehouse,
      description:
        "Bonded and non-bonded storage facilities with inventory management.",
    },
    {
      title: "3 PL",
      slug: "3pl",
      icon: Truck,
      description:
        "End-to-end third-party logistics solutions for supply chain efficiency.",
    },
    {
      title: "Liquid Transportation",
      slug: "liquid-transportation",
      icon: Droplet,
      description:
        "Safe and compliant bulk liquid transport across domestic and global routes.",
    },
  ];

  const Card = ({ title, slug, icon: Icon, description, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center"
    >
      <div className="flex justify-center mb-5">
        <Icon className="w-10 h-10 text-green-500" />
      </div>

      <h3 className="text-base font-bold text-zinc-900 mb-3 uppercase">
        {title}
      </h3>

      <p className="text-sm text-zinc-600 leading-relaxed mb-4">
        {description}
      </p>

      <button
        onClick={() => navigate(`/services/${slug}`)}
        className="text-green-600 text-sm font-semibold border-b border-green-500 hover:text-green-700"
      >
        Read More
      </button>
    </motion.div>
  );

  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {row1.map((item, i) => (
            <Card key={i} {...item} index={i} />
          ))}
        </div>

        {/* Row 2 - centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
            {row2.map((item, i) => (
              <Card key={i} {...item} index={i + 4} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
