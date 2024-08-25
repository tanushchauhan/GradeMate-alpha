"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container -mb-16">
        <SectionTitle
          title="What about pricing?"
          paragraph="Currently all our features are completely free to use by all our users!"
          center
          width="665px"
        />
      </div>
    </section>
  );
};

export default Pricing;
