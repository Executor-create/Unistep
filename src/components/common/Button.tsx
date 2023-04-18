type ButtonProps = {
  border: string;
  color: string;
  cursor: string;
  fontFamily?: string;
  fontSize?: string;
  fontColor?: string;
  height: string;
  margin?: string;
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
  fontFamily,
  fontSize,
  fontColor,
  height,
  margin,
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
        margin: margin,
        width: width,
        cursor: cursor,
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: fontColor,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
