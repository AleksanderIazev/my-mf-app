import styles from "./ratingBar.module.scss";
import { Button } from "@mui/material";
import React from "react";
import { Star } from "../../icons/Star";

const cn = require("classnames");

interface IRatingBarProps {
  averageRating?: number;
  reviewsCount?: number;
  handleOpen?: () => void;
  isSideBar?: boolean;
}

export const RatingBar: React.FC<IRatingBarProps> = ({
  averageRating,
  reviewsCount,
  handleOpen,
  isSideBar = false,
}) => {
  return (
    <div className={cn(styles.ratingInfoWrapper)}>
      <div className={cn(styles.ratingInfo)}>
        <Star />
        <span>{averageRating || 0}</span>
        <span className={cn(styles.ratingInfoCount)}>{`(${
          reviewsCount || 0
        } отзывов)`}</span>
      </div>
      {!isSideBar && (
        <Button size="small" onClick={handleOpen}>
          Перейти к отзывам
        </Button>
      )}
    </div>
  );
};
