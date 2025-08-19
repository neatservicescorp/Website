"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type ImageSlideshowProps = {
  images: string[];
  interval?: number;
  className?: string;
  alt?: string;
};

export default function ImageSlideshow({
  images,
  interval = 6000,
  className = "",
  alt = "background_image",
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length === 0) {
    return <div className={`bg-gray-300 ${className}`} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((imageSrc, index) => (
        <Image
          key={`${imageSrc}-${index}`}
          src={imageSrc}
          alt={`${alt}_${index}`}
          width={2000}
          height={2000}
          className={`
            absolute inset-0 object-cover w-full h-full object-[center_20%]
            transition-opacity duration-2000 ease-in-out
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
          `}
          priority={index === 0} // Only prioritize first image for loading
        />
      ))}
    </div>
  );
}
