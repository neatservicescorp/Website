"use client";

import { useEffect } from "react";

export default function MainForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.systemic-digital.net/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-full bg-[#F0F0F0] max-w-[500px] lg:max-w-full rounded-[35px] overflow-hidden">
      <div className="font-cocogoose text-xl 2xl:text-2xl text-black pt-6 w-full text-center pb-1">
        <h2>Ready to get started?</h2>
      </div>
      <div className="px-4 pb-4">
        <iframe
          src="https://link.systemic-digital.net/widget/form/Dw3BQ1wxW9XI6Nt6aviD"
          style={{
            width: "100%",
            height: "654px",
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
      </div>
    </div>
  );
}