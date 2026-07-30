
import type { Metadata } from "next";
import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../lib/theme";
import FinancingOpts from "../components/FinancingOpts";
import FinanceFAQ from "../components/FinanceFAQ";
import { FAQStructuredData } from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Financing | Wells Fargo Home Improvement Financing - Neat Services Corp",
  description:
    "Finance your roofing, siding, windows & exterior remodeling project with Neat Services Inc. Affordable monthly payments through Wells Fargo for qualified homeowners across Queens, Brooklyn, Long Island & the NYC metro area.",
  keywords:
    "roof financing Queens NY, home improvement financing NYC, Wells Fargo home improvement financing, roof replacement financing Long Island, siding financing Brooklyn, window financing Nassau County, roof loan New York, exterior remodeling financing, roofing contractor financing",
  openGraph: {
    title: "Wells Fargo Home Improvement Financing - Neat Services Corp",
    description:
      "Affordable monthly payments for roofing, siding, windows & exterior remodeling. Serving Queens, Brooklyn, Long Island, Westchester & the NYC metro area.",
    url: "https://neatservicescorp.com/finance",
    type: "website",
    siteName: "Neat Services Corp",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wells Fargo Home Improvement Financing - Neat Services Corp",
    description:
      "Affordable monthly payments for roofing, siding, windows & exterior remodeling in NYC.",
  },
  alternates: {
    canonical: "https://neatservicescorp.com/finance",
  },
};

const MOMNT_URL =
  "https://app.momnt.com/widgets/?merchantId=9b9d9012-bfd8-45e9-8c43-f9d99bf664a1&widget=ConsumerLoanApplicationWizard";

const eligibleProjects = [
  "Roof Replacement",
  "Flat Roofing Systems",
  "Asphalt Shingle Roofing",
  "James Hardie & Vinyl Siding",
  "Replacement Windows",
  "Entry Doors",
  "Skylights",
  "Gutters, Soffits & Fascia",
  "Exterior Remodeling",
];

const whyFinance = [
  "Affordable monthly payments",
  "Complete your project now instead of waiting",
  "Protect your home from additional damage",
  "Increase your home's value",
  "Improve energy efficiency",
  "Simple application process",
];

const areasServed = [
  "Queens",
  "Brooklyn",
  "Nassau County",
  "Westchester County",
  "Long Island",
  "Bronx",
  "Yonkers",
  "White Plains",
  "New Rochelle",
  "Howard Beach",
  "Bayside",
  "Whitestone",
  "Forest Hills",
  "Garden City",
  "Massapequa",
  "Levittown",
  "Hempstead",
];

const faqs = [
  {
    question: "Can I finance a roof replacement?",
    answer:
      "Yes. Qualified homeowners can finance roofing and exterior remodeling projects through financing offered by Wells Fargo.",
  },
  {
    question: "How long does the application take?",
    answer: "Most applications take only a few minutes to complete.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes. We provide free estimates before you decide to move forward.",
  },
];

export default function FinancePage() {
  const initialTheme = getThemeFromPath("/finance");

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <FAQStructuredData faqs={faqs} />
      <main
        id="main-content"
        className="min-h-screen pt-[5.5rem] lg:pt-[7.5rem]"
      >
        {/* Hero */}
        <section className="relative bg-black text-white py-20 px-5 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-[#1a1a1a]" />
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-5">
            <p className="font-cocogoose text-sm text-red-neat uppercase tracking-widest">
              Wells Fargo Home Improvement Financing
            </p>
            <h1 className="font-exotc350 text-5xl md:text-6xl">
              Finance Your Next Home Improvement Project
            </h1>
            <p className="font-cocogoose text-white/70 text-base max-w-xl">
              Neat Services Inc. proudly offers financing through Wells Fargo
              to help homeowners complete roofing, siding, window, and
              exterior remodeling projects with affordable monthly payments —
              no need to pay the full cost upfront.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href={MOMNT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-neat text-white font-cocogoose font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
                aria-label="Apply for Wells Fargo financing - opens in new window"
              >
                Apply for Financing
              </a>
              <a
                href="/contact"
                className="bg-white text-black font-cocogoose font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Get a Free Estimate
              </a>
            </div>
          </div>
        </section>

        {/* Eligible projects */}
        <section className="bg-white py-16 px-5">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-exotc350 text-4xl md:text-5xl text-black">
                Projects Eligible for Financing
              </h2>
              <p className="font-cocogoose text-gray-500 mt-2">
                From a single repair to a complete exterior renovation
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {eligibleProjects.map((project) => (
                <div
                  key={project}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-red-neat/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-red-neat/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-red-neat"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="font-cocogoose text-sm font-semibold text-black">
                    {project}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why finance + application widget */}
        <section className="relative flex justify-center py-16 px-5">
          <div className="absolute inset-0 bg-gradient-to-b from-[#333333] to-[#1a1a1a]" />
          <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center gap-12">
            <div className="text-center">
              <h2 className="font-exotc350 text-4xl md:text-5xl text-white">
                Why Finance Your Project?
              </h2>
              <p className="font-cocogoose text-white/60 mt-2">
                Don&apos;t delay your dream upgrade
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {whyFinance.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <div className="w-8 h-8 rounded-full bg-red-neat flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="font-cocogoose text-sm text-white">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
            <FinancingOpts />
          </div>
        </section>

        {/* Areas served */}
        <section className="bg-white py-16 px-5">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="font-exotc350 text-4xl md:text-5xl text-black">
              Areas We Serve
            </h2>
            <p className="font-cocogoose text-gray-500 mt-2 mb-8">
              Financing available for qualified homeowners across the NYC
              metro area
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {areasServed.map((area) => (
                <span
                  key={area}
                  className="font-cocogoose text-sm text-black bg-gray-50 border border-gray-200 rounded-full px-5 py-2"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="bg-[#F5F5F5] py-16 px-5">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-exotc350 text-4xl md:text-5xl text-black">
                Frequently Asked Questions
              </h2>
              <p className="font-cocogoose text-gray-500 mt-2">
                Your financing questions, answered
              </p>
            </div>
            <FinanceFAQ faqs={faqs} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-red-neat py-16 px-5 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-exotc350 text-4xl text-white mb-3">
              Ready to start your home improvement project?
            </h2>
            <p className="font-cocogoose text-white/80 mb-7">
              Contact Neat Services Inc. today to schedule your free estimate
              and learn more about Wells Fargo financing options available
              for qualified homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-red-neat font-cocogoose font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Get a Free Estimate
              </a>
              <a
                href={MOMNT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white font-cocogoose font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
                aria-label="Apply for Wells Fargo financing - opens in new window"
              >
                Apply for Financing
              </a>
            </div>
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}
