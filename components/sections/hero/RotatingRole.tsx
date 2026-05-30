"use client";

import { useEffect, useState } from "react";
import { HERO_ROLES } from "@/constants";

export default function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((value) => (value + 1) % HERO_ROLES.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="serif-italic text-accent">
      {HERO_ROLES[index]}
      <span className="cursor inline-block w-[2px] h-[0.9em] bg-accent ml-1 align-middle" />
    </span>
  );
}
