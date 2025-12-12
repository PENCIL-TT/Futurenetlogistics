import containerShip from '@/assets/container-ship.jpg';
import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  return (
    <section id="vision" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${containerShip})` }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Vision Card */}
          <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl border border-white/20 shadow-2xl animate-slide-in-left hover:scale-[1.03] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent/90 rounded-xl flex items-center justify-center shadow-md">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white drop-shadow">
                OUR VISION
              </h3>
            </div>
            <p className="font-body text-white/90 leading-relaxed text-lg">
              OGC aims to be the leading global logistics provider in freight forwarding services across the globe and beyond by offering well-structured logistics solutions.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-accent/90 backdrop-blur-xl p-10 rounded-2xl border border-white/20 shadow-2xl animate-slide-in-right hover:scale-[1.03] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-md">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white drop-shadow">
                OUR MISSION
              </h3>
            </div>
            <p className="font-body text-white/90 leading-relaxed text-lg">
              To be the preferred logistics partner in PLC, LLC, Air Cargo, and Ship Management Solutions. We are committed to delivering excellence in every shipment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
