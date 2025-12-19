import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  return (
    <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Vision Card */}
          <div className="bg-blue-50 p-10 rounded-2xl border border-blue-100 shadow-xl hover:scale-[1.03] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center shadow-md">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                OUR VISION
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              FUTURE NET, to be the leading global logistics solution provider thru our most advanced systems combined with well experienced logistics professionals.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-blue-500 p-10 rounded-2xl shadow-xl hover:scale-[1.03] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center shadow-md">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                OUR MISSION
              </h3>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              FUTURE NET, to be customers first choice for following services : Customised logistics solutions with integrated processes with clients thru our most advanced WMS & distribution module with e-commerce capability. FCL, LCL, Air Freight & Freight Management, Liquid Transportation solutions Projects & Break Bulk.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
