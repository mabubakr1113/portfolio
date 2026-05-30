"use client";

import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import AboutCopy from "@/components/sections/about/AboutCopy";
import AboutHighlights from "@/components/sections/about/AboutHighlights";
import PortraitFrame from "@/components/sections/about/PortraitFrame";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 md:py-40"
      style={{ zIndex: 2 }}
    >
      <div className="page-rail">
        <SectionHeader
          number="01"
          kicker="A short biography"
          title={
            <>
              Not a developer.{" "}
              <span className="serif-italic font-light">An architect</span> with{" "}
              <span className="text-accent">opinions</span>.
            </>
          }
        />

        <div className="grid grid-cols-12 gap-x-4 gap-y-12">
          <PortraitFrame />
          <AboutCopy />
          <AboutHighlights inView={inView} />
        </div>
      </div>
    </section>
  );
}
