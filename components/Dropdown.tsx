import React, { CSSProperties } from "react";
import { DropdownProps } from "@/types/component";

const Dropdown = ({
  title,
  options,
  width,
  height,
  style,
  onChange,
}: DropdownProps) => {
  const inputStyle: CSSProperties = {
    width: width || "100%",
    height: height || "2.5rem",
    ...style,
  };
  return (
    <select
      className="block w-full rounded-[10px] bg-white-200 px-4 py-2 text-gray-400"
      onChange={onChange}
      style={inputStyle}
      defaultValue=""
    >
      <option value="" disabled hidden>
        {title}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
