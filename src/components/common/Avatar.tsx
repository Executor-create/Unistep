import { Link } from "react-router-dom";

type AvatarProps = {
  altText?: string;
  imageUrl?: string;
  size: string;
};

const Avatar = ({ altText, imageUrl, size }: AvatarProps) => {
  return (
    <Link style={{ height: size }} to="/profile">
      <img
        src={imageUrl}
        alt={altText}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </Link>
  );
};

export default Avatar;
