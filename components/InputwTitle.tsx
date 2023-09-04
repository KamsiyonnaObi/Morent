"use client";
import React from "react";
import Input from "./Input";
import { InputwTitleProps } from "@/types/component";

const InputwTitle = ({
  title,
  type,
  placeholder,
  onChange,
  width,
  height,
  style,
  inputColor,
}: InputwTitleProps) => {
  return (
    <div>
      <div className="mb-3 text-14 font-semibold md:text-16">{title}</div>
      <Input
        type={type}
        placeholder={placeholder}
        width={width}
        height={height}
        style={style}
        inputColor={inputColor}
        onChange={onChange}
      />
    </div>
  );
};

export default InputwTitle;
