import React from "react";
import ArtistButton from "./artist";
import TrackButton from "./track";

interface IProfileCardProps {
  type: string;
  item: any;
  onClick?: (prop: any) => void;
}

function ProfileCard({ type, item, onClick, ...props }: IProfileCardProps) {
  return type === "artist" ? (
    <ArtistButton item={item} onClick={onClick} {...props} />
  ) : (
    <TrackButton item={item} onClick={onClick} {...props} />
  );
}

export default ProfileCard;
