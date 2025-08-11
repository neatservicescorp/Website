"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";

export default function MainForm() {
  return (
    <Card
      classNames={{ base: "rounded-[35px]" }}
      className="w-full h-full bg-[#F0F0F0] max-h-[560px]"
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
              inputWrapper: ["h-[50px]", "xl:h-[55px]", "bg-[#D9D4D4]"],
              label: "text-sm xl:text-base",
            }}
          />
          <Input
            size="lg"
            label="Phone*"
            classNames={{
              inputWrapper: ["h-[50px]", "xl:h-[55px]", "bg-[#D9D4D4]"],
              label: "text-sm xl:text-base",
            }}
          />
          <Input
            size="lg"
            label="Email*"
            classNames={{
              inputWrapper: ["h-[50px]", "xl:h-[55px]", "bg-[#D9D4D4]"],
              label: "text-sm xl:text-base",
            }}
          />
          <Select
            label="Service"
            classNames={{
              label: "text-sm xl:text-base",
              trigger: "bg-[#D9D4D4]",

              listbox: "text-black font-cocogoose",
            }}
          >
            <SelectItem>Roofing</SelectItem>
            <SelectItem>Kitchen</SelectItem>
            <SelectItem>Siding</SelectItem>
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
          <Button className="bg-[#F64631] text-white w-full max-w-[30%] self-end text-[15px] h-12">
            Submit
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
