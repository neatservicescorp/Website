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
} from "@heroui/react";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
};

export default function MainForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const [opted, isOpted] = useState(false);

  const handleSubmit = async () => {
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
      service: "",
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
      className="w-full h-full bg-[#F0F0F0] lg:max-h-[550px] 2xl:max-h-[560px]"
    >
      <CardHeader className="pb-1">
        <div className="font-cocogoose text-xl 2xl:text-2xl text-black pt-6 w-full text-center">
          <h3>Ready to get started?</h3>
        </div>
      </CardHeader>
      <CardBody className="px-8">
        <div className="flex flex-col gap-4 font-cocogoose">
          <Input
            size="lg"
            label="Name*"
            classNames={{
              inputWrapper: ["h-[50px]", "2xl:h-[55px]", "bg-[#D9D4D4]"],
              label: "text-sm 2xl:text-base",
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
              inputWrapper: ["h-[50px]", "2xl:h-[55px]", "bg-[#D9D4D4]"],
              label: "text-sm 2xl:text-base",
            }}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <Input
            size="lg"
            label="Email*"
            classNames={{
              inputWrapper: ["h-[50px]", "2xl:h-[55px]", "bg-[#D9D4D4]"],
              label: "text-sm 2xl:text-base",
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
          <Select
            label="Service"
            classNames={{
              label: "text-sm 2xl:text-base",
              trigger: "bg-[#D9D4D4]",
              listbox: "text-black font-cocogoose",
            }}
            selectedKeys={formData.service ? [formData.service] : []}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
          >
            <SelectItem key="Roofing">Roofing</SelectItem>
            <SelectItem key="Siding">Siding</SelectItem>
            <SelectItem key="Kitchen">Kitchen</SelectItem>
            <SelectItem key="Bathroom">Bathroom</SelectItem>
          </Select>
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
              By submitting this form, you agree to receive text messages from
              Neat Services. Standard message and data rates may apply. Reply
              STOP to unsubscribe or HELP for assistance. We respect your
              privacy and do not share your information.
            </p>
          </div>
          <Button
            className="bg-[#F64631] text-white w-full max-w-[40%] self-end text-[15px] h-12"
            isDisabled={
              !opted ||
              !formData.name ||
              !formData.phone ||
              !formData.email ||
              !formData.service
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
