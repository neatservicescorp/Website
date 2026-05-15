"use client";
import Image from "next/image";
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
      <div className="w-full overflow-hidden">
        <div className="flex flex-row border-1 border-white rounded-[35px] justify-between items-center p-4 md:p-6 lg:p-8 gap-8">
          <Image
            src="/images/google_reviews.png"
            alt="google_reviews"
            width={328}
            height={236}
            className="hidden lg:block"
          />
          <div className="flex-1">
            <iframe
              className="lc_reviews_widget"
              src="https://reputationhub.site/reputation/widgets/review_widget/mhUrdsAMJ0tSxrpg6Kt0"
              frameBorder={0}
              scrolling="no"
              style={{ minWidth: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}