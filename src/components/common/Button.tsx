import React from "react";

type ButtonProps = {
  border: string;
  color: string;
  height: string;
  onClick?: () => void;
  radius: string;
  text: string;
  width: string;
  cursor: string;
  fontSize: string;
  fontColor: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: props.color,
        border: props.border,
        borderRadius: props.radius,
        height: props.height,
        width: props.width,
        cursor: props.cursor,
        fontSize: props.fontSize,
        color: props.fontColor,
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
