import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Vision */}
          <div className="bg-green-50 p-10 rounded-2xl shadow-lg border border-green-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                OUR VISION
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed text-base">
              FUTURE NET, to be the leading global logistics solution provider
              thru our most advanced systems combined with well experienced
              logistics professionals.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-green-500 p-10 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                OUR MISSION
              </h3>
            </div>

            <p className="text-white/90 leading-relaxed text-base">
              FUTURE NET, to be customers first choice for following services :
              Customised logistics solutions with integrated processes with
              clients thru our most advanced WMS & distribution module with
              e-commerce capability. FCL, LCL, Air Freight & Freight Management,
              Liquid Transportation solutions Projects & Break Bulk.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
