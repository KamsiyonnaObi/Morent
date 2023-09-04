import React, { CSSProperties } from "react";
import { InputProps } from "@/types/component";

const Input = ({
  type,
  placeholder,
  onChange,
  width,
  height,
  style,
  inputColor,
}: InputProps) => {
  const inputStyle: CSSProperties = {
    width: width || "100%",
    height: height || "2.5rem",
    ...style,
  };

  return (
    <input
      type={type}
      onClick={
        type === "Time"
          ? (e) => {
              e.currentTarget.showPicker();
            }
          : undefined
      }
      placeholder={placeholder}
      className={`block rounded-[10px] ${inputColor} px-4 py-2`}
      style={inputStyle}
      onChange={onChange}
    />
  );
};

export default Input;
