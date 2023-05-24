import { CurrentUserContext } from "../../context/UserContext";
import { useContext } from "react";

type AvatarProps = {
  altText?: string;
  size: string;
};

const Avatar = ({ altText, size }: AvatarProps) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <img
      src={
        currentUser?.avatar_url
          ? currentUser.avatar_url
          : "https://w7.pngwing.com/pngs/722/101/png-transparent-computer-icons-user-profile-circle-abstract-miscellaneous-rim-account.png"
      }
      alt={altText}
      width={size}
      height={size}
      style={{ borderRadius: "50%", objectFit: "cover" }}
    />
  );
};

export default Avatar;
