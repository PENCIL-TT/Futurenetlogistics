import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    'Global NVOCC Operator',
    'LCL Consolidation Experts',
    'Transparent Pricing',
    'Dedicated Trade Lanes',
    'Secured End-to-End Services',
    'Trusted Agent Network',
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* IMAGE – FULL BLEED LEFT (NO WHITE SPACE) */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full h-full"
        >
          <img
            src="/cargo-ship.png"
            alt="One Global Logistics Container Ship"
            className="w-full h-auto object-cover"
            style={{
              filter: "drop-shadow(0px 10px 30px rgba(0,0,0,0.15))"
            }}
          />
        </motion.div>

        {/* TEXT – CONTAINED RIGHT */}
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Drive Your Business <br />
            Forward with <span className="text-red-700">OGL</span>
          </h2>

          <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            One Global Logistics services W.L.L is a Qatar based global NVOCC
            operator providing LCL consolidation services worldwide. We have a
            well-experienced and established team with relevant expertise in
            dedicated trade lanes.
          </p>

          <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            Our commitment to honest, transparent business practice and pricing,
            backed by a trusted agent network, makes us one of the fast-growing
            consolidators based in Qatar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
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
