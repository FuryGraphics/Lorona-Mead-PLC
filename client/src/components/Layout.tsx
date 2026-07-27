import { type ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCallButton from "./FloatingCallButton";

export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Load LeadConnector chat widget
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
    script.setAttribute("data-widget-id", "6a649ee5c4dda61f3fa2befb");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script and widget elements on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Remove any widget elements that may have been injected
      const widgetElements = document.querySelectorAll('[data-widget-id="6a649ee5c4dda61f3fa2befb"]');
      widgetElements.forEach((el) => el.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
