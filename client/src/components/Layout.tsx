import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCallButton from "./FloatingCallButton";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
