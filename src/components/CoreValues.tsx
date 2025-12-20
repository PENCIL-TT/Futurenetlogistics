import React from "react";

const CoreValues = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT TEXT */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tight">
              Excellent Solution For Your Business
            </h3>

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
      </div>
    </section>
  );
};

export default CoreValues;
