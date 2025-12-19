import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    'International Freight Forwarder',
    'Sea, Air & Road Freight',
    'Worldwide Door-to-Door Delivery',
    'Custom Clearance & Warehousing',
    'LCL Consolidation Services',
    'Global Partner Network (WCA)',
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* IMAGE – FULL BLEED LEFT */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full h-full"
        >
          <img
            src="/cargo-ship.png"
            alt="Future Net Logistics Cargo Ship"
            className="w-full h-auto object-cover"
            style={{
              filter: "drop-shadow(0px 10px 30px rgba(0,0,0,0.15))"
            }}
          />
        </motion.div>

        {/* TEXT – RIGHT SIDE */}
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            About <span className="text-red-700">Future Net Logistics</span>
          </h2>

          <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            Future Net Logistics LLC is an international freight forwarder and logistics provider
            with headquarters in Dubai and branch offices in Jebel Ali and Abu Dhabi (UAE).
            We offer premium logistics services to businesses worldwide, providing a wide
            range of international and domestic transportation and logistics solutions.
            Our personal service and expert knowledge of freight forwarding is unrivaled.
          </p>

          <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            We provide seamless integration of transportation modes including sea freight,
            air freight, and road freight, along with diversified logistics services such as
            warehousing and material handling. Future Net Logistics is well equipped to handle
            worldwide door-to-door delivery, custom clearance, dangerous or perishable goods,
            and break bulk or project cargo.
          </p>

          <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            Our simple organizational structure enables effective communication and high
            customer satisfaction. We operate our own warehouse facility inside JAFZA and
            provide total logistics solutions to many customers. Our extensive global network
            of trusted partners, combined with local expertise, allows us to serve shipments
            to and from any part of the world.
          </p>

          <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            Future Net Logistics is a proud member of the World Cargo Alliance (WCA), the
            world’s largest logistics network. UAE operations began in 2018, offering direct
            import LCL consolidation services from major ports across China, South East Asia,
            Europe, USA, and the Indian subcontinent with the shortest transit times.
          </p>

          <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            With strong global partnerships, Future Net Logistics consistently delivers the
            best possible market rates while maintaining excellent service standards for
            customers worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 fill-red-50" />
                <span className="font-body text-gray-700 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
