import React from "react";
import styles from "./rating.module.scss";
import { useGetRatingDataQuery } from "../api/ratingApi";

import { Button } from "@mui/material";
import { Star } from "../icons/Star";
import { useNavigate } from "react-router-dom";

const cn = require("classnames");

export const RatingWidgetSidebar = ({
  isSidebarOpen,
}: {
  isSidebarOpen?: Boolean;
}) => {
  const { data, isLoading } = useGetRatingDataQuery();
  const navigate = useNavigate();
  const averageRating = data?.average;
  const reviewsCount = data?.reviewsCount;

  const handleOpenModal = () => {
    navigate("/about");
  };

  const handleOpenModalSMWidget = () => {
    if (isSidebarOpen) return;
    navigate("/about");
  };

  return (
    <>
      {isLoading ? (
        <div className={cn(styles.ratingSidebarBtn)} />
      ) : (
        <div
          className={cn(styles.ratingSidebar, {
            [styles.smWidgetSidebar]: !isSidebarOpen,
          })}>
          <div
            onClick={handleOpenModalSMWidget}
            className={cn(styles.ratingSidebarInfo, {
              [styles.smWidgetSidebarInfo]: !isSidebarOpen,
            })}>
            <Star />
            <span>{averageRating || 0}</span>
            <span
              className={cn(styles.ratingSidebarInfoCount, {
                [styles.smRatingSidebarInfoCount]: !isSidebarOpen,
              })}>{`(${reviewsCount || 0} отзывов)`}</span>
          </div>
          <Button
            className={cn(styles.ratingSidebarBtn, {
              [styles.smRatingSidebarBtn]: !isSidebarOpen,
            })}
            size="small"
            onClick={handleOpenModal}>
            Перейти
          </Button>
        </div>
      )}
    </>
  );
};
