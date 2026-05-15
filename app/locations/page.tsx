import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../lib/theme";

const boroughs = [
  {
    id: "queens",
    name: "Queens",
    locations: [
      { name: "Richmond Hill", zip: "11418", note: "Main Office" },
      { name: "South Ozone Park", zip: "11420" },
      { name: "Howard Beach", zip: "11414" },
      { name: "Bellerose", zip: "11426" },
      { name: "Jamaica", zip: "11433" },
      { name: "Woodside", zip: "11377" },
      { name: "Rockaway Park", zip: "11694" },
      { name: "Astoria", zip: "11102" },
      { name: "Forest Hills", zip: "11375" },
      { name: "Flushing", zip: "11355" },
      { name: "Bayside", zip: "11361" },
    ],
  },
  {
    id: "brooklyn",
    name: "Brooklyn",
    locations: [
      { name: "Williamsburg", zip: "11211" },
      { name: "Greenpoint", zip: "11222" },
      { name: "Park Slope", zip: "11215" },
      { name: "Bay Ridge", zip: "11209" },
    ],
  },
  {
    id: "bronx",
    name: "Bronx",
    locations: [
      { name: "Riverdale", zip: "10471" },
      { name: "Throggs Neck", zip: "10465" },
    ],
  },
  {
    id: "staten-island",
    name: "Staten Island",
    locations: [{ name: "New Dorp", zip: "10306" }],
  },
  {
    id: "nassau",
    name: "Nassau County",
    locations: [
      { name: "Garden City", zip: "11530" },
      { name: "Mineola", zip: "11501" },
      { name: "Hempstead", zip: "11550" },
      { name: "Valley Stream", zip: "11580" },
      { name: "Long Beach", zip: "11561" },
      { name: "Floral Park", zip: "11001" },
    ],
  },
  {
    id: "westchester",
    name: "Westchester County",
    locations: [{ name: "Yonkers", zip: "10701" }],
  },
];

export default function LocationsPage() {
  const initialTheme = getThemeFromPath("/locations");
  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="min-h-screen pt-[5.5rem] lg:pt-[7.5rem]">
        {/* Hero */}
        <section className="relative bg-black text-white py-20 px-5 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-[#1a1a1a]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="font-cocogoose text-sm text-red-400 uppercase tracking-widest mb-3">
              Service Areas
            </p>
            <h1 className="font-exotc350 text-5xl md:text-6xl text-white mb-5">
              Where We Work
            </h1>
            <p className="font-cocogoose text-white/70 text-base max-w-xl mx-auto">
              Roofing, siding, windows & more — serving 24+ cities across NYC,
              Long Island & Westchester within 30 miles of our Queens HQ.
            </p>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="bg-[#1a1a1a] py-16 px-5">
          <div className="max-w-[1200px] mx-auto space-y-14">
            {boroughs.map((borough) => (
              <div key={borough.id} id={borough.id}>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="font-exotc350 text-3xl text-white">{borough.name}</h2>
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="font-cocogoose text-xs text-white/40">
                    {borough.locations.length} {borough.locations.length === 1 ? "city" : "cities"}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {borough.locations.map((loc) => (
                    <div
                      key={loc.zip}
                      className="relative bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-red-500/40 hover:bg-white/8 transition-all"
                    >
                      {loc.note && (
                        <span className="absolute -top-2 right-4 bg-[#F64631] text-white text-[10px] font-cocogoose uppercase px-2.5 py-0.5 rounded-full">
                          {loc.note}
                        </span>
                      )}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 text-[#F64631]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-cocogoose text-white font-bold text-base">{loc.name}</h3>
                          <p className="font-cocogoose text-white/40 text-xs">ZIP {loc.zip}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F64631] py-14 px-5 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-exotc350 text-4xl text-white mb-3">Don&apos;t see your ZIP?</h2>
            <p className="font-cocogoose text-white/80 mb-7">
              We sometimes serve neighboring areas — call us and we&apos;ll let you know.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#F64631] font-cocogoose font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Get a Free Estimate
            </a>
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}
