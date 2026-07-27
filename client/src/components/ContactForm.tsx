import { useEffect, useRef } from "react";

export default function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Caseclimb form embed script
    const script = document.createElement("script");
    script.src = "https://services.caseclimb.com/js/form_embed.js";
    script.async = true;
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      // Clean up script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <iframe
        src="https://services.caseclimb.com/widget/form/InqNh0USv4LT6X10tfIs"
        style={{
          width: "100%",
          height: "541px",
          border: "none",
          borderRadius: "10px",
        }}
        id="inline-InqNh0USv4LT6X10tfIs"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Form (Lorona Mead, PLC)"
        data-height="541"
        data-layout-iframe-id="inline-InqNh0USv4LT6X10tfIs"
        data-form-id="InqNh0USv4LT6X10tfIs"
        title="Website Form (Lorona Mead, PLC)"
      />
    </div>
  );
}
