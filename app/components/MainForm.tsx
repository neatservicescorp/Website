"use client";

import Script from "next/script";

export default function MainForm() {
  return (
    <div className="w-full h-full max-w-[500px] lg:max-w-full lg:max-h-[550px] 2xl:max-h-[560px] min-h-[654px]">
      <iframe
        src="https://link.systemic-digital.net/widget/form/Dw3BQ1wxW9XI6Nt6aviD"
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "10px", minHeight: "654px" }}
        id="inline-Dw3BQ1wxW9XI6Nt6aviD"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Form"
        data-height="654"
        data-layout-iframe-id="inline-Dw3BQ1wxW9XI6Nt6aviD"
        data-form-id="Dw3BQ1wxW9XI6Nt6aviD"
        title="Website Form"
      />
      <Script src="https://link.systemic-digital.net/js/form_embed.js" />
    </div>
  );
}
