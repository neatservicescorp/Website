"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoogleReview } from "../api/reviews/handler";
import {
  addToast,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Spinner,
} from "@heroui/react";

type ReviewsProps = {
  textColor?: string;
};

function Slideshow({
  reviews,
  interval = 7000,
}: {
  reviews: GoogleReview[];
  interval?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeReview, setActiveReview] = useState<GoogleReview | null>(null);

  useEffect(() => {
    if (reviews.length <= 1 || modalOpen) return; // Stop interval when modal is open
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(timer);
  }, [reviews.length, interval, modalOpen]); // Add modalOpen to dependencies

  if (reviews.length === 0) {
    return <span>No reviews</span>;
  }

  return (
    <div className="relative overflow-hidden m-6 w-full">
      {reviews.map((review, index) => (
        <div
          key={index}
          className={`absolute flex flex-row h-full transition-opacity duration-2000 ease-in-out p-3 items-center gap-8 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={review.reviewer.profilePhotoUrl}
            alt={review.reviewer.displayName}
            width={800}
            height={800}
            className="w-36 h-36 rounded-full shadow-[0px_-1px_15px_-4px_rgba(0,_0,_0,_0.8)]"
          />
          <div className="flex flex-col font-cocogoose text-black justify-center items-start gap-1">
            <span className="font-bold text-lg xl:text-xl">
              {review.reviewer.displayName}
            </span>
            <span className="text-[#FBBC05] h-10 text-2xl font-semibold text-shadow-lg text-shadow-black/20">
              ★★★★★
            </span>
            <p className="text-left">
              {review.comment
                ? review.comment.length > 300
                  ? review.comment.slice(0, 300) + "..."
                  : review.comment
                : "No comment provided."}
            </p>
            {review.comment && review.comment.length > 300 && (
              <span
                className="absolute bottom-0 right-0 text-sm underline hover:cursor-pointer z-20"
                onClick={() => {
                  setActiveReview(review);
                  setModalOpen(true);
                }}
              >
                Read
              </span>
            )}
          </div>
        </div>
      ))}
      <Modal isOpen={modalOpen} onOpenChange={setModalOpen} backdrop="blur">
        <ModalContent className="max-h-[650px] overflow-y-auto">
          {activeReview && (
            <>
              <ModalHeader className="w-full justify-center">
                <div className="flex flex-col items-center text-center p-5 gap-1 font-cocogoose">
                  <Image
                    src={
                      activeReview.reviewer.profilePhotoUrl ||
                      "/images/google_reviews.png"
                    }
                    alt={activeReview.reviewer.displayName}
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-full shadow-[0px_-1px_15px_-4px_rgba(0,_0,_0,_0.8)] mb-2"
                  />
                  <span className="font-bold text-lg xl:text-xl text-black">
                    {activeReview.reviewer.displayName}
                  </span>
                  <p className="font-normal text-sm text-gray-400">
                    {new Date(activeReview.createTime).toLocaleDateString()}
                  </p>
                  <span className="text-[#FBBC05] h-6 text-2xl font-semibold text-shadow-lg text-shadow-black/20">
                    ★★★★★
                  </span>
                </div>
              </ModalHeader>
              <ModalBody className="pb-8 text-black font-cocogoose text-justify px-8">
                {activeReview.comment}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default function Reviews({ textColor = "white" }: ReviewsProps) {
  const [loading, isLoading] = useState<boolean>(true);
  const [reviews, setReviews] = useState<Array<GoogleReview>>([]);

  useEffect(() => {
    async function fetchReviews() {
      isLoading(true);
      try {
        const res = await fetch("/api/reviews", {
          cache: "force-cache",
          next: { revalidate: 10800 },
        });
        if (res.ok) {
          const data = await res.json();
          setReviews(data.data);
        } else throw new Error("Failed to fetch reviews");
      } catch (e) {
        addToast({
          color: "danger",
          title: "Error",
          description: "Failed to load reviews: " + (e as Error).message,
        });
      } finally {
        isLoading(false);
      }
    }
    fetchReviews();
  }, []);
  return (
    <div className="flex flex-col items-center text-center z-16 mb-10 gap-16 w-full px-5 lg:px-0">
      <div className={`flex flex-col text-${textColor}`}>
        <p className="font-cocogoose text-lg h-6">
          {"We don't say we're the best"}
        </p>
        <h4 className="font-exotc350 text-5xl">Our customers do</h4>
      </div>
      <div className="w-full h-[350px] overflow-hidden p-5">
        <div className="flex flex-row border-1 border-white rounded-[35px] h-full justify-between items-center p-8 gap-8">
          <Image
            src="/images/google_reviews.png"
            alt="google_reviews"
            width={328}
            height={236}
          />
          <div className="flex-1 flex flex-row bg-[#D7D7D7] rounded-[30px] h-full">
            {loading && <Spinner />}
            {reviews.length > 0 && !loading && <Slideshow reviews={reviews} />}
          </div>
        </div>
      </div>
    </div>
  );
}
