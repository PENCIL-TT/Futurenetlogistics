import React from "react";
import {
  Award,
  BookOpenCheck,
  Handshake,
  Lightbulb,
} from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      title: "Strive for excellence",
      icon: Award,
    },
    {
      title: "Adapt, learn & assimilate the best industry practices",
      icon: BookOpenCheck,
    },
    {
      title: "Open & honest relationship with communications",
      icon: Handshake,
    },
    {
      title: "Embrace innovation",
      icon: Lightbulb,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">

          {/* LEFT TEXT */}
          <div className="space-y-8">

            {/* NEW HEADING */}
            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tight">
              Excellent Solution For Your Business
            </h3>

            {/* NEW DESCRIPTION */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              We believe in establishing strong partnerships and close working
              relationships with our customers to produce a comprehensive total
              supply chain management service. We continuously provide
              cost-effective transportation and logistics solutions to our
              broad and varied customer base. Through our customer portal and
              partner portal, we are able to provide integrated processes with
              our clients systems which ensures total visibility and
              transparency.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/port.jpg"
              alt="Global Logistics Network"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <ValueCard
              key={index}
              title={item.title}
              Icon={item.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

const ValueCard = ({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ElementType;
}) => (
  <div
    className="group bg-white border border-gray-100 rounded-2xl p-10
               flex flex-col items-center text-center min-h-[260px]
               shadow-sm hover:shadow-xl hover:-translate-y-2
               transition-all duration-300"
  >
    <div
      className="mb-6 w-16 h-16 rounded-full border-2 border-blue-900
                 flex items-center justify-center
                 group-hover:bg-blue-900 transition-colors duration-300"
    >
      <Icon
        size={28}
        className="text-rose-600 group-hover:text-white transition-colors duration-300"
      />
    </div>

    <h3 className="text-[#0f2454] font-extrabold text-[20px] leading-[1.3] text-center max-w-[230px]">
      {title}
    </h3>
  </div>
);

export default CoreValues;
