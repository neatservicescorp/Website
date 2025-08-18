"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ToastProvider
        placement="top-right"
        toastProps={{
          classNames: {
            base: "font-cocogoose",
            description: "text-black",
          },
        }}
      />
      {children}
    </HeroUIProvider>
  );
}
