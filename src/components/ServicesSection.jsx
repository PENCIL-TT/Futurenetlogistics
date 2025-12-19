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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="
        bg-white rounded-3xl
        shadow-[0_12px_35px_rgba(0,0,0,0.08)]
        hover:shadow-[0_20px_45px_rgba(34,197,94,0.25)]
        transition-all duration-300
        px-10 py-12
        min-h-[360px]
        flex flex-col items-center text-center justify-between
      "
    >
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <Icon className="w-12 h-12 text-green-600" />
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-zinc-900 mb-4 uppercase tracking-wide">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base text-zinc-600 leading-relaxed">
        {description}
      </p>

      {/* Read More */}
      <button
        onClick={() => navigate(`/services/${slug}`)}
        className="
          mt-8 text-base font-semibold
          text-green-600 border-b-2 border-green-600
          hover:text-green-700 hover:border-green-700
          transition
        "
      >
        Read More
      </button>
    </motion.div>
  );

  return (
    <section className="bg-white py-28 px-4">
      <div className="container mx-auto">

        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1.5 bg-green-600 mx-auto rounded-full" />
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {row1.map((item, i) => (
            <Card key={i} {...item} index={i} />
          ))}
        </div>

        {/* Row 2 – Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
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
