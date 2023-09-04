"use client";
import React from "react";
import Dropdown from "./Dropdown";
import { DropdownwTitleProps } from "@/types/component";

const DropdownwTitle = ({
  toptitle,
  title,
  options,
  width,
  height,
  style,
  onChange,
}: DropdownwTitleProps) => {
  return (
    <main>
      <div className="mb-3 text-14 font-semibold md:text-16">{toptitle}</div>
      <Dropdown
        title={title}
        options={options}
        height={height}
        width={width}
        style={style}
        onChange={onChange}
      />
    </main>
  );
};

export default DropdownwTitle;
