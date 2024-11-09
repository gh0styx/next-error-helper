import React from "react";

import RandomButton from "@/components/randomButtons";

const page = () => {
  const buttonLabels = [
    "Error Js not found",
    "Button not found",
    "Tailwind not found",
    "404 #tkgow",
    "ogkwp ",
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {buttonLabels.map((label, index) => (
        <RandomButton key={index} label={label} />
      ))}
    </div>
  );
};

export default page;
