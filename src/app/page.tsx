"use client";
import { useEffect } from "react";

import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Curve from "./components/Curve";

export default function Home() {
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Arrow") {
        event.preventDefault();
      }
    });
  }, []);

  return (
    <Curve>
      <main className="2xl:max-w-[1350px] lg:max-w-[1000px]   pt-48 mx-auto 2xl:pt-48 lg:pt-28 bg-[radial-gradient(circle_closest-corner_at_50%_0,#36363625,#0000)]">
        <Hero />
        <Featured />
      </main>
    </Curve>
  );
}
