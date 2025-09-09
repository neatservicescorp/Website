"use client";

import {
  addToast,
  Button,
  Divider,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";

export default function Messages() {
  const [contactData, setContactData] = useState({
    email: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isEmailValid = (email: string) => {
    if (!email) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    const request = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(contactData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (request.ok) {
      setContactData({ email: "", message: "" });
      addToast({
        title: "We received your message!",
        description: "Our team will answer you in just a moment",
        color: "success",
        shouldShowTimeoutProgress: true,
        timeout: 6000,
        size: "lg",
      });
    } else {
      addToast({
        title: "Something went wrong",
        description: "Please try again later",
        color: "danger",
        shouldShowTimeoutProgress: true,
        timeout: 6000,
        size: "lg",
      });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Popover placement="top-end">
        <PopoverTrigger>
          <div className="w-18 h-18 md:w-24 md:h-24 rounded-full bg-white p-4 flex items-center justify-center hover:cursor-pointer">
            <Image
              src="/icons/message.svg"
              alt="message_icon"
              width={150}
              height={150}
              className="translate-x-0.5 translate-y-1"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[350px]">
          <div className="w-full max-w-[500px] p-3">
            <form
              onSubmit={handleChatSubmit}
              className="flex flex-col gap-5 font-cocogoose text-black"
            >
              <p className="font-black text-lg">Chat with us now!</p>
              <Divider />
              <Input
                value={contactData.email}
                name="email"
                isInvalid={!isEmailValid(contactData.email)}
                onChange={handleFormChange}
                label="Email address"
                classNames={{ input: "text-base" }}
              />
              <Textarea
                value={contactData.message}
                name="message"
                onChange={handleFormChange}
                label="Message"
                maxRows={5}
                classNames={{ input: "text-base" }}
              />
              <p className="text-sm">
                {
                  "Our team actively monitors messages to ensure you receive a timely reply"
                }
              </p>
              <Button
                type="submit"
                className="bg-red-neat text-white font-black"
                isDisabled={
                  contactData.email === "" ||
                  contactData.message === "" ||
                  !isEmailValid(contactData.email)
                }
              >
                Contact
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
