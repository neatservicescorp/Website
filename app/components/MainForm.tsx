"use client";

import {
  addToast,
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  reason: string; // HoneyPot field
  email: string;
  message: string;
};

export default function MainForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    reason: "",
    email: "",
    message: "",
  });
  const [renderedAt] = useState(() => Date.now());

  const [opted, isOpted] = useState(false);

  const handleSubmit = async () => {
    if (Date.now() - renderedAt < 2500) {
      return;
    }
    if (formData.reason.length > 0) {
      return;
    }
    await fetch("/api/email", {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify(formData),
    });

    isOpted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      reason: "",
      message: "",
    });

    addToast({
      title: "We received your message!",
      description: "We'll get back to you as soon as possible.",
      color: "success",
      shouldShowTimeoutProgress: true,
      timeout: 6000,
      size: "lg",
    });
  };

  return (
    <Card
      classNames={{ base: "rounded-[35px]" }}
      className="w-full bg-[#F0F0F0] max-w-[500px] lg:max-w-full "
    >
      <CardHeader className="pb-1">
        <div className="font-cocogoose text-xl 2xl:text-2xl text-black pt-6 w-full text-center">
          <h2>Ready to get started?</h2>
        </div>
      </CardHeader>
      <CardBody className="px-8 overflow-y-hidden">
        <div className="flex flex-col gap-4 font-cocogoose pb-4">
          <Input
            size="lg"
            label="Full Name*"
            classNames={{
              inputWrapper: ["h-[50px]", "2xl:h-[55px]", "bg-[#D9D4D4] py-0.5"],
              label: "text-sm 2xl:text-base text-gray-800",
            }}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            size="lg"
            label="Phone*"
            isInvalid={
              formData.phone.length > 0 &&
              /^\+?[1-9]\d{1,14}$/.test(formData.phone) === false
            }
            classNames={{
              inputWrapper: ["h-[50px]", "2xl:h-[55px]", "bg-[#D9D4D4] py-0.5"],
              label: "text-sm 2xl:text-base text-gray-800",
            }}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <Input
            size="lg"
            label="Email"
            classNames={{
              inputWrapper: ["h-[50px]", "2xl:h-[55px]", "bg-[#D9D4D4] py-0.5"],
              label: "text-sm 2xl:text-base text-gray-800",
            }}
            isInvalid={
              formData.email.length > 0 &&
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) === false
            }
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {/* Honeypot input field for spam prevention */}
          <Input
            size="lg"
            label="Reason"
            value={formData.reason}
            onChange={(e) =>
              setFormData({ ...formData, reason: e.target.value })
            }
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <label className="text-sm 2xl:text-base text-gray-800">
            Short message about your needs*
          </label>
          <Textarea
            size="lg"
            value={formData.message}
            aria-label="Short message about your needs"
            classNames={{
              inputWrapper: "bg-[#D9D4D4]",
            }}
            maxRows={3}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <div className="flex flex-col gap-2">
            <Checkbox
              classNames={{
                label: "text-black text-sm xl:text-base",
                wrapper: "w-9 h-9 bg-[#D9D4D4] rounded-none",
                icon: "w-6 h-6",
              }}
              className="py-3"
              radius="none"
              isSelected={opted}
              onChange={(e) => isOpted(e.target.checked)}
            >
              I agree to the following terms
            </Checkbox>
            <p className="text-black text-[9px] xl:text-[10px]">
              By submitting this form, you agree to receive communications from
              Neat Services. By providing my phone number, I agree to receive
              text messages from the business.
            </p>
          </div>
          <Button
            className="bg-[#F64631] text-white w-full max-w-[40%] self-end text-[15px] h-12"
            isDisabled={
              !opted || !formData.name || !formData.phone || !formData.message
            }
            onPress={handleSubmit}
          >
            Get In Touch
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
