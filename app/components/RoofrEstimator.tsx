"use client";

export default function RoofrEstimator() {
  return (
    <section className="flex flex-col items-center gap-8 w-full px-5 md:px-10 py-10">
      <div className="flex flex-col text-white text-center gap-2">
        <h2 className="font-exotc350 text-5xl lg:text-6xl">
          Get an Instant Estimate
        </h2>
        <p className="font-cocogoose text-medium text-white/80">
          See how much your project could cost — right now, no commitment needed
        </p>
      </div>
      <div className="w-full max-w-[1000px] rounded-[35px] overflow-hidden shadow-2xl">
        <div className="relative w-full" style={{ paddingBottom: "75%" }}>
          <iframe
            src="https://app.roofr.com/instant-estimator/8f483d33-580c-4dba-b0c1-f39134360c6c/NeatServicesInc"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            title="Roofr Instant Estimator - Get your free roofing and siding estimate"
            loading="lazy"
            allow="geolocation"
          />
        </div>
      </div>
    </section>
  );
}
