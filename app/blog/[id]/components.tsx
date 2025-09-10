import MainForm from "@/app/components/MainForm";
import { Divider } from "@heroui/react";
import React from "react";

export type BlogEntry = {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  previewTexts: string[];
  Component: React.FC;
};

export const BlogEntriesData: Record<string, BlogEntry> = {
  "why-september-is-best-time-08-2025": {
    title: "Why September Is the Best Time to Prep Your Roof for Fall",
    author: "Neat Services Corp",
    date: "August 23, 2025",
    imageUrl: "/images/blog_1.jpg",
    previewTexts: [
      "As summer winds down and the days grow shorter, September offers a golden opportunity to give your roof some much-needed attention before the harsher weather arrives. This window of mild, dry conditions is ideal for a thorough roof inspection, without the extreme heat or ice that can complicate repair work.",
      "Begin with a careful ground-level assessment using binoculars to check for curled or missing shingles, granule loss, or signs of wear around vulnerable areas like chimneys, vents, and gutters. These are often the first places where damage occurs, and catching issues now can help you avoid emergency leaks when storms hit.",
    ],
    Component: InitialBlogEntry,
  },
};

export default function InitialBlogEntry() {
  return (
    <div className="flex flex-col font-cocogoose gap-8 text-sm md:text-base lg:text-lg text-justify">
      <p>
        As summer winds down and the days grow shorter, September offers a
        golden opportunity to give your roof some much-needed attention before
        harsher weather arrives. The combination of mild temperatures, lower
        humidity, and fewer storms makes this month the ideal time to prepare
        your home for fall and winter. A proactive inspection and a few
        maintenance steps now can save you from costly surprises later in the
        year.
      </p>
      <div className="flex flex-col lg:gap-3">
        <h3 className="font-cocogoose text-xl lg:text-3xl font-bold text-left">
          Take Advantage of Ideal Weather Conditions
        </h3>
        <Divider className="my-2" />
        <p>
          Unlike the sweltering heat of July or the icy chill of December,
          September provides moderate conditions that make roof work safer and
          more effective. Materials like shingles, flashing, and sealants adhere
          better when temperatures are steady, and roofers can move more easily
          without the risk of overheating or slipping on frost. Even if you’re
          doing some preliminary checks yourself, cooler weather ensures the
          process is far more manageable.
        </p>
      </div>
      <div className="flex flex-col lg:gap-3">
        <h3 className="font-cocogoose text-xl lg:text-3xl font-bold text-left">
          Start with a Ground-Level Inspection{" "}
        </h3>
        <Divider className="my-2" />
        <p>
          Before climbing any ladders, grab a pair of binoculars and perform a
          careful visual inspection from the ground. Look for common warning
          signs such as:
        </p>
        <ul className="ml-2 list-disc list-inside flex flex-col gap-1">
          <li>Curled, cracked, or missing shingles</li>
          <li>Granule loss that leaves dark or bald patches</li>
          <li>Sagging areas that may indicate underlying structural issues</li>
          <li>Loose flashing around chimneys, vents, or skylights</li>
        </ul>
        <p>
          These areas are often the first to show wear and can quickly escalate
          into leaks if left untreated. By catching early damage now, you avoid
          scrambling for emergency repairs when fall storms arrive.
        </p>
      </div>
      <div className="flex flex-col lg:gap-3">
        <h3 className="font-cocogoose text-xl lg:text-3xl font-bold text-left">
          Clean Out Gutters and Downspouts
        </h3>
        <Divider className="my-2" />
        <p>
          Over the summer, leaves, twigs, and debris can quietly pile up in your
          gutters. Left unchecked, clogs cause water to back up under the roof’s
          edge, which may lead to rotting fascia boards, mold growth, or even
          foundation problems. September is the perfect time to clear everything
          out before leaves begin falling in earnest. A simple cleaning can
          extend the life of your roof and ensure water flows safely away from
          your home.
        </p>
      </div>
      <div className="flex flex-col lg:gap-3">
        <h3 className="font-cocogoose text-xl lg:text-3xl font-bold text-left">
          Check Attic Ventilation and Insulation
        </h3>
        <Divider className="my-2" />
        <p>
          Roof prep isn’t only about the exterior. Head into your attic to check
          that ventilation pathways aren’t blocked and insulation is intact.
          Poor airflow can cause moisture to accumulate, weakening your roof
          from the inside out. Adequate insulation also helps regulate your
          home’s temperature, keeping energy bills in check during the colder
          months ahead.
        </p>
      </div>
      <div className="flex flex-col lg:gap-3">
        <h3 className="font-cocogoose text-xl lg:text-3xl font-bold text-left">
          Why Choose Neat Services for Your Roofing Needs{" "}
        </h3>
        <Divider className="my-2" />
        <p>
          If your inspection uncovers problems, or if you simply want peace of
          mind, Neat Services is here to help. With certifications from top
          manufacturers like GAF and CertainTeed, our team brings expertise and
          reliability to every project. Whether you need minor repairs, full
          roof replacements, or seasonal maintenance, we ensure your home is
          protected through fall, winter, and beyond. Serving neighborhoods
          across Queens, Yonkers, Brooklyn, and the Bronx, Neat Services
          specializes in combining durable materials with precise workmanship.
          That means you can trust us not just to fix today’s issues, but to
          safeguard your home for years to come.
        </p>
      </div>
      <div className="w-full flex justify-center pt-5 py-10">
        <div className="max-w-[650px] w-full">
          <MainForm />
        </div>
      </div>
    </div>
  );
}
