import React, { FC } from "react";
interface ProfileButtonProps {
  image: string;
}
const ProfileButton: FC<ProfileButtonProps> = ({ image }) => {
  return (
    <button className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden">
      <img src={image} alt="avatar" />
    </button>
  );
};

export default ProfileButton;
