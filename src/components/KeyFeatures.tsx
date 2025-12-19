import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Plane, Ship, Truck, Warehouse, Package, Boxes, ClipboardList, CreditCard } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

// --- WORK PROCESS COMPONENT (Based on your Image) ---
const WorkProcess = () => {
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
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/gp.jpg" 
          className="w-full h-full object-cover opacity-15 grayscale"
          alt="background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <p className="text-yellow-500 font-bold tracking-[0.2em] text-xs mb-3">WORK PROCESS</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Easy 3 Working Step</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="relative mb-8">
                {/* Dashed outer ring */}
                <div className="w-28 h-28 rounded-full border border-dashed border-gray-600 flex items-center justify-center group-hover:border-yellow-500 transition-colors">
                  {/* White circle for icon */}
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl">
                    {item.icon}
                  </div>
                </div>
              </div>
              <span className="text-yellow-500 font-bold text-xs tracking-tighter mb-2">{item.step}</span>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- REDESIGNED SERVICE CARD ---
const ServiceCard = ({ icon, title, points, image }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100"
  >
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative h-64 md:h-auto overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors" />
      </div>
      <div className="p-8 flex flex-col justify-center">
        <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center text-yellow-600 mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-brand-navy mb-4">{title}</h3>
        <ul className="space-y-3">
          {points.map((pt: string, i: number) => (
            <li key={i} className="flex items-start text-gray-600 text-sm">
              <span className="mr-2 text-yellow-500 mt-1">●</span> {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Air Freight",
      image: "/aircargo2.png",
      points: ["Express & deferred services", "Airport-to-airport & door-to-door", "Dangerous goods & temperature-sensitive cargo"],
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "Sea Freight",
      image: "/oceanf.png",
      points: ["FCL / LCL shipping", "Breakbulk and Ro-Ro solutions", "Global consolidation services"],
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Customs Clearance",
      image: "/lovable-uploads/cc.jpg",
      points: ["Import/export documentation", "Free zone & mainland clearance", "Compliance support"],
    },
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: "Warehousing & Logistics",
      image: "/warhouseh1.png",
      points: ["Bonded & non-bonded facilities", "Inventory management", "Value-added services"],
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: "Project Logistics",
      image: "/h4.png",
      points: ["Planning & Coordination: Scope assessment", "Operations: Cargo handling & execution", "Compliance: HSE standards & post-delivery"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow pt-16">
        <WorkProcess />
        
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Comprehensive Solutions</h2>
              <div className="w-20 h-1.5 bg-yellow-500" />
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {services.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
