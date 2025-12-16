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
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">

          {/* Image Section - LEFT TO RIGHT ANIMATION */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            className="relative group lg:-ml-16 lg:w-[110%] z-10"
          >
            <img
              src="/cargo-ship.png"
              alt="One Global Logistics Container Ship"
              className="w-full lg:w-[110%] max-w-none h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              style={{
                filter: "drop-shadow(0px 10px 30px rgba(0,0,0,0.15))"
              }}
            />
          </motion.div>

          {/* Text Section */}
          <div className="relative z-20">
            <div className="mb-8">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Drive Your Business <br />
                Forward with <span className="text-red-700">OGL</span>
              </h2>

              <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                One Global Logistics services W.L.L is a Qatar based global NVOCC (Non-vessel owned common carrier)
                operator providing LCL consolidation services worldwide. We have a well-experienced and
                established team with relevant expertise in dedicated trade lanes, supporting our customers
                with all their special requirements with complete dedication.
              </p>

              <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                Our commitment to honest, transparent business practice and pricing, backed by a network of
                experienced and trusted agents from around the world, makes us one of the fast-growing
                consolidators based in Qatar. We aim to provide secured end-to-end LCL services
                exclusively to Freight Forwarding & Logistics Companies.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 fill-red-50" />
                    <span className="font-body text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <button className="bg-red-700 text-white font-semibold py-3 px-10 rounded-full hover:bg-red-800 transition-colors duration-300 shadow-lg shadow-red-700/20">
                Read More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
