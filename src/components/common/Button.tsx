type ButtonProps = {
  border: string;
  color: string;
  cursor: string;
  fontSize?: string;
  fontColor?: string;
  height: string;
  onClick?: () => void;
  radius?: string;
  text: string;
  type?: "submit" | "reset";
  width: string;
};

const Button = ({
  border,
  color,
  cursor,
  fontSize,
  fontColor,
  height,
  onClick,
  radius,
  text,
  type,
  width,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{
        border: border,
        backgroundColor: color,
        borderRadius: radius,
        height: height,
        width: width,
        cursor: cursor,
        fontSize: fontSize,
        color: fontColor,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
