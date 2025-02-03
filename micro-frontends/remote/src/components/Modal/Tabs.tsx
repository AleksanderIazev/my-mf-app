import React from "react";

import styles from "./modal.module.scss";

import { TAB_VALUE } from "../../const/const";
import { NavLink } from "react-router-dom";
import { useGetRatingDataQuery } from "../../api/ratingApi";

const cn = require("classnames");

interface ITabsProps {
  activeTab: string;
  countNewReviews?: number | null;
}

export const Tabs: React.FC<ITabsProps> = ({ activeTab, countNewReviews }) => {
  const { data } = useGetRatingDataQuery();

  const showNotificationAbout =
    data?.notificationInfo?.aboutNew &&
    ((countNewReviews != null && countNewReviews > 0) ||
      countNewReviews === null);

  return (
    <div className={cn(styles.modalTabs)}>
      <NavLink
        className={cn(styles.tabButton, {
          [styles.active]: activeTab === TAB_VALUE.ABOUT,
          [styles.notification]: showNotificationAbout,
        })}
        to="/about">
        <span>О моей компании</span>
      </NavLink>

      <NavLink
        className={cn(styles.tabButton, {
          [styles.active]: activeTab === TAB_VALUE.MINE,
          [styles.notification]: data?.notificationInfo?.mineNew,
        })}
        to="/mine">
        Мои отзывы
      </NavLink>

      <NavLink
        className={cn(styles.tabButton, {
          [styles.active]: activeTab === TAB_VALUE.WAITING,
          [styles.notification]: data?.notificationInfo?.waitingNew,
        })}
        to="/waiting">
        Ждут оценки
      </NavLink>
    </div>
  );
};
