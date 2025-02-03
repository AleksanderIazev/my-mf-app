import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

interface ILikeDislikeProps {
  isLiked: boolean;
  isDisliked: boolean;
  handleLike: () => void;
  handleDislike: () => void;
}

export const LikeDislike: React.FC<ILikeDislikeProps> = ({
  isLiked,
  isDisliked,
  handleLike,
  handleDislike,
}) => {
  // Определяем текущее состояние для reviewId

  return (
    <div style={{ display: "flex" }}>
      <span
        onClick={handleLike}
        style={{
          cursor: "pointer",
          display: "inline-block",
        }}>
        {isLiked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
      </span>
      <span
        onClick={handleDislike}
        style={{
          cursor: "pointer",
          display: "inline-block",
          marginLeft: "10px",
        }}>
        {isDisliked ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}
      </span>
    </div>
  );
};
