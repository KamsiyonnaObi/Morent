import { ButtonProps } from "@/types/component";
import React from "react";

const Button = ({
  text,
  onClick,
  buttonColor,
  textColor,
  hPadding,
  hMargin,
  width,
  height,
  extraStyles,
  name,
}: ButtonProps) => {
  return (
    <button
      name={name}
      className={`${buttonColor} ${textColor} ${hPadding} ${hMargin} ${width} ${height} ${extraStyles}`}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
