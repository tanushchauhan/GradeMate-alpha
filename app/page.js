import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

export const metadata = {
  title: "GradeMate",
  description: "Check your Home Access Account Grades Easily",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */} {/* Disabling video for now */}
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
