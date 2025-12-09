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
        <div className="absolute inset-0 bg-navy-dark/85" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div className="bg-primary p-8 md:p-10 rounded-xl animate-slide-in-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                OUR VISION
              </h3>
            </div>
            <p className="font-body text-primary-foreground/90 leading-relaxed">
              OGC aims to be the leading global logistics provider in freight forwarding services across the globe and beyond by offering well-structured logistics solutions.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-accent p-8 md:p-10 rounded-xl animate-slide-in-right">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-accent-foreground">
                OUR MISSION
              </h3>
            </div>
            <p className="font-body text-accent-foreground/90 leading-relaxed">
              To be the preferred logistics partner by PLC, LLC, Air Cargo, Ship Management Solutions. We are committed to delivering excellence in every shipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
