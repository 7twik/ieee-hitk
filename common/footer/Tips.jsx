"use client";
import React from "react";
import { AnimatedTooltip } from "./3d-pin";
const people = [
  {
    id: 1,
    name: "Sattwik Das",
    designation: "Backend Dev",
    li:"https://www.linkedin.com/in/sattwik-das-90aa75249/",
    in:"https://www.instagram.com/7twik/",
    tw:"https://twitter.com/07twik",
    image:
      "https://res.cloudinary.com/dcyfkgtgv/image/upload/v1712517015/closepicbetter_pvlscd.png",
  }
  
];
const people2=[
  {
    id: 1,
    name: "Arnab Chakraborty",
    designation: "Frontend Dev",
    li:"https://www.linkedin.com/in/arnab-chakraborty-737492230",
    in:"https://www.instagram.com/arnab_chakraborty_black_jack",
    tw:"https://twitter.com/ArnabCh82095943?t=JE8eauXYuvyWjnPc8jIHEA&s=08",
    image:
      "https://res.cloudinary.com/dcyfkgtgv/image/upload/v1712515177/Screenshot_2024-04-08_000657_zt17xs.png",
  },

]
 
export function AnimatedTooltipS() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 devb151">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export function AnimatedTooltipA() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 devb151">
      <AnimatedTooltip items={people2} />
    </div>
  );
}