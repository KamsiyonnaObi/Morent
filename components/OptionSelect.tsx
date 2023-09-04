"use client";
import React, { useState } from "react";
import Image from "next/image";
import { OptionSelectProps } from "@/types/component";

const OptionSelect = ({ title }: OptionSelectProps) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div className="flex items-center">
      <Image
        src={selected ? "Mark.svg" : "Layer.svg"}
        alt="Car"
        width={16}
        height={16}
        onClick={toggleSelected}
      />
      <p className="ml-3 font-semibold">{title}</p>
    </div>
  );
};

export default OptionSelect;
