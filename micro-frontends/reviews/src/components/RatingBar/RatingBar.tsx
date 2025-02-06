import React from "react";
import { Button } from "@mui/material";
import { Star } from "../../icons/Star";
import { WIDGET_TEXT } from "../../const/const";
import { IRatingData } from "../../models/models";
import styles from "./ratingBar.module.scss";

const cn = require("classnames");

interface IRatingBarProps {
  data?: IRatingData;
  handleOpen?: () => void;
  isSideBar?: boolean;
}

export const RatingBar: React.FC<IRatingBarProps> = ({
  data,
  handleOpen,
  isSideBar = false,
}) => {
  const averageRating = data?.average;
  const reviewsCount = data?.reviewsCount;
  const showNotification =
    data?.notificationInfo?.aboutNew ||
    data?.notificationInfo?.mineNew ||
    data?.notificationInfo?.waitingNew;

  return (
    <div className={cn(styles.ratingInfoWrapper)}>
      <div
        className={cn(styles.ratingInfo, {
          [styles.showCircle]: showNotification,
        })}>
        <Star />
        <span>{averageRating || 0}</span>
        <span className={cn(styles.ratingInfoCount)}>
          {WIDGET_TEXT.COUNT_REVIEWS(reviewsCount)}
        </span>
      </div>
      {!isSideBar && (
        <Button size="small" onClick={handleOpen}>
          Перейти к отзывам
        </Button>
      )}
    </div>
  );
};
