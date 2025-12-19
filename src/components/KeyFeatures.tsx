import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, CreditCard, Truck, ShieldCheck, Globe, Clock } from "lucide-react";
// Added .tsx extension to help Vercel resolve the path mismatch
import { Header } from "./layout/Header.tsx"; 

const KeyFeatures = () => {
  const steps = [
    {
      step: "STEP - 1",
      title: "Enter Product Details",
      icon: <ClipboardList className="w-8 h-8 text-yellow-500" />,
      description: "Once you place your order via mail or fax our field staff will collect the documents and consignments from."
    },
    {
      step: "STEP - 2",
      title: "Pay Your Service Tag",
      icon: <CreditCard className="w-8 h-8 text-yellow-500" />,
      description: "Once you place your order via mail or fax our field staff will collect the documents and consignments from."
    },
    {
      step: "STEP - 3",
      title: "Ready To Go Your Goods",
      icon: <Truck className="w-8 h-8 text-yellow-500" />,
      description: "Once you place your order via mail or fax our field staff will collect the documents and consignments from."
    }
  ];

  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Background with industrial overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/gp.jpg" 
          className="w-full h-full object-cover opacity-10 grayscale"
          alt="industrial background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-yellow-500 font-bold tracking-[0.3em] text-xs uppercase block mb-4">
            WORK PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Easy 3 Working Step
          </h2>
        </div>

        {/* The 3-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {steps.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-8">
                {/* Outer Dashed Ring */}
                <div className="w-28 h-28 rounded-full border border-dashed border-zinc-700 flex items-center justify-center group-hover:border-yellow-500 transition-all duration-500">
                  {/* Inner White Circle */}
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    {item.icon}
                  </div>
                </div>
                {/* Connector Arrow (Visible on Desktop) */}
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-16 transform -translate-y-1/2">
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-yellow-500/30">
                      <path d="M1 10H38M38 10L30 2M38 10L30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
                    </svg>
                  </div>
                )}
              </div>
              <span className="text-yellow-500 font-bold text-xs mb-2 tracking-widest">{item.step}</span>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-zinc-800">
          <div className="flex items-center gap-4 p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <ShieldCheck className="w-10 h-10 text-yellow-500 flex-shrink-0" />
            <div>
              <h4 className="text-white font-bold">Secure Shipping</h4>
              <p className="text-zinc-500 text-xs">Fully insured and tracked</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <Globe className="w-10 h-10 text-yellow-500 flex-shrink-0" />
            <div>
              <h4 className="text-white font-bold">Global Reach</h4>
              <p className="text-zinc-500 text-xs">Over 150+ countries</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <Clock className="w-10 h-10 text-yellow-500 flex-shrink-0" />
            <div>
              <h4 className="text-white font-bold">24/7 Support</h4>
              <p className="text-zinc-500 text-xs">Real-time logistics help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
