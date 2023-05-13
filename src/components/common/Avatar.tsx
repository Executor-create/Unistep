type AvatarProps = {
  altText?: string;
  imageUrl?: string;
  size: string;
};

const Avatar = ({ altText, imageUrl, size }: AvatarProps) => {
  return (
    <img
      src={imageUrl}
      alt={altText}
      width={size}
      height={size}
      style={{ borderRadius: "50%", objectFit: "cover" }}
    />
  );
};

export default Avatar;
