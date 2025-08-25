import React from "react";

type ReviewsProps = {
  textColor?: string;
};

export default function Reviews({ textColor = "white" }: ReviewsProps) {
  return (
    <div className="flex flex-col items-center text-center z-16 mb-10 gap-16 w-full">
      <div className={`flex flex-col text-${textColor}`}>
        <p className="font-cocogoose text-lg h-6">
          {"We don't say we're the best"}
        </p>
        <h4 className="font-exotc350 text-5xl">Our customers do</h4>
      </div>
      <div className={`w-full h-[440px] overflow-hidden p-0`}>
        <div
          className="elfsight-app-16d86d15-99ee-4731-90dc-b72eebc8ded7 p-0"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
}
