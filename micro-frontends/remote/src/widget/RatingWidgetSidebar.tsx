import React from "react";
import styles from "./rating.module.scss";
import { useGetRatingDataQuery } from "../api/ratingApi";

import { Button } from "@mui/material";
import { Star } from "../icons/Star";

const cn = require("classnames");

export const RatingWidgetSidebar = ({
  isSidebarOpen,
}: {
  isSidebarOpen?: Boolean;
}) => {
  const { data } = useGetRatingDataQuery();
  const averageRating = data?.average;
  const reviewsCount = data?.reviewsCount;

  return (
    <div
      className={cn(styles.ratingSidebar, {
        [styles.smWidgetSidebar]: !isSidebarOpen,
      })}>
      <div
        className={cn(styles.ratingSidebarInfo, {
          [styles.smWidgetSidebarInfo]: !isSidebarOpen,
        })}>
        <Star />
        <span>{averageRating || 0}</span>
        {isSidebarOpen && (
          <span className={cn(styles.ratingSidebarInfoCount)}>{`(${
            reviewsCount || 0
          } отзывов)`}</span>
        )}
      </div>
      {isSidebarOpen && (
        <Button size="small" onClick={() => console.log("Модальное окно")}>
          Перейти к отзывам
        </Button>
      )}
    </div>
  );
};
