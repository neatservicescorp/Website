"use client";
import { useEffect } from "react";

type ReviewsProps = {
  textColor?: string;
};

export default function Reviews({ textColor = "white" }: ReviewsProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://reputationhub.site/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center z-16 mb-10 gap-16 w-full px-5 lg:px-0">
      <div className={`flex flex-col text-${textColor}`}>
        <p className="font-cocogoose text-lg h-6">
          {"We don't say we're the best"}
        </p>
        <h3 className="font-exotc350 text-5xl">Our customers do</h3>
      </div>
      <div className="w-full">
        <iframe
          className="lc_reviews_widget"
          src="https://reputationhub.site/reputation/widgets/review_widget/mhUrdsAMJ0tSxrpg6Kt0"
          frameBorder={0}
          scrolling="no"
          style={{ minWidth: "100%", width: "100%", height: "800px" }}
        />
      </div>
    </div>
  );
}