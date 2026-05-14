"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import Script from "next/script";

export default function MainForm() {
  return (
    <Card
      classNames={{ base: "rounded-[35px]" }}
      className="w-full h-full bg-[#F0F0F0] max-w-[500px] lg:max-w-full lg:max-h-[550px] 2xl:max-h-[560px]"
    >
      <CardHeader className="pb-1">
        <div className="font-cocogoose text-xl 2xl:text-2xl text-black pt-6 w-full text-center">
          <h2>Ready to get started?</h2>
        </div>
      </CardHeader>
      <CardBody className="px-4 overflow-hidden">
        <iframe
          src="https://link.systemic-digital.net/widget/form/Dw3BQ1wxW9XI6Nt6aviD"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "500px",
            border: "none",
            borderRadius: "10px",
          }}
          id="inline-Dw3BQ1wxW9XI6Nt6aviD"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-activation-type="alwaysActivated"
          data-deactivation-type="neverDeactivate"
          data-form-name="Website Form"
          data-height="654"
          data-layout-iframe-id="inline-Dw3BQ1wxW9XI6Nt6aviD"
          data-form-id="Dw3BQ1wxW9XI6Nt6aviD"
          title="Website Form"
        />
        <Script
          src="https://link.systemic-digital.net/js/form_embed.js"
          strategy="lazyOnload"
        />
      </CardBody>
    </Card>
  );
}