import React from "react";

type ReviewsProps = {
  textColor?: string;
  border?: boolean;
};

export default function Reviews({
  textColor = "white",
  border = true,
}: ReviewsProps) {
  return (
    <div className="flex flex-col items-center text-center z-16 mb-10 gap-16 w-full">
      <div className={`flex flex-col text-${textColor}`}>
        <p className="font-cocogoose text-lg h-6">
          {"We don't say we're the best"}
        </p>
        <h4 className="font-exotc350 text-5xl">Our customers do</h4>
      </div>
      <div
        className={`w-full min-h-[400px] rounded-[35px] ${
          border ? `border-${textColor} border-1` : ""
        }`}
      ></div>
    </div>
  );
}
