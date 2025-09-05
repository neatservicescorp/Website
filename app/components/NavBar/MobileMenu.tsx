"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import Image from "next/image";
import { sections } from "./sections";
import { useRouter } from "next/navigation";

export default function MobileMenu() {
  const router = useRouter();
  return (
    <div className="lg:hidden">
      <Dropdown className="dark" size="lg">
        <DropdownTrigger>
          <Image src="/icons/menu.svg" alt="menu_icon" width={40} height={40} />
        </DropdownTrigger>
        <DropdownMenu className="text-white">
          {sections.map((section) => (
            <DropdownItem
              key={section.title}
              onPress={() => router.push(section.redirect)}
            >
              {section.title}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
