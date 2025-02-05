import React from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { LikeDislike } from "../LikeDislike/LikeDislike";
import styles from "./review.module.scss";
import { IPartialReview } from "../../models/models";
import { Rating } from "@mui/material";
import { formattedDate } from "../../utils/utils";

const cn = require("classnames");

interface IReviewProps {
  review: IPartialReview;
  onInView: any;
  likeDislikeIds: any;
  setLikeDislikeIds: any;
}

export const Review: React.FC<IReviewProps> = ({
  review,
  onInView,
  likeDislikeIds,
  setLikeDislikeIds,
}) => {
  // можно будет потом вернуть если надо будет
  const [, setShowSpan] = useState(!review.isViewed);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (inView && !review.isViewed) {
      onInView(review.id); // Передаем id родительскому компоненту

      timer = setTimeout(() => {
        setShowSpan(false);
      }, 800);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [inView, review, onInView]);

  const currentItem = likeDislikeIds?.find(
    (item: { id: string }) => item.id === review.id
  );

  const isLiked = currentItem?.like;
  const isDisliked = currentItem?.dislike;

  const handleLike = () => {
    setLikeDislikeIds((prev: any[]) => {
      const existingItem = prev.find((item) => item.id === review.id);
      if (existingItem) {
        // Обновляем существующий объект
        return prev.map((item) =>
          item.id === review.id
            ? { ...item, like: !item.like, dislike: false }
            : item
        );
      } else {
        // Добавляем новый объект
        return [...prev, { id: review.id, like: true, dislike: false }];
      }
    });
  };

  const handleDislike = () => {
    setLikeDislikeIds((prev: any[]) => {
      const existingItem = prev.find(
        (item: { id: any }) => item.id === review.id
      );
      if (existingItem) {
        // Обновляем существующий объект
        return prev.map((item: { id: any; dislike: any }) =>
          item.id === review.id
            ? { ...item, dislike: !item.dislike, like: false }
            : item
        );
      } else {
        // Добавляем новый объект
        return [...prev, { id: review.id, like: false, dislike: true }];
      }
    });
  };
  return (
    <div className={cn(styles.reviewContainer)} ref={ref}>
      <div className={cn(styles.reviewStarsRow)}>
        <Rating name="read-only" value={review.assessment} readOnly />
        <span>
          {review.publicationDateTime &&
            formattedDate(review.publicationDateTime)}
        </span>
      </div>
      <p>
        {review.text}
        {!review.isViewed && (
          <span className={cn(styles.notificationTag)}>Новый</span>
        )}
      </p>
      <div>
        <LikeDislike
          isLiked={isLiked}
          isDisliked={isDisliked}
          handleLike={handleLike}
          handleDislike={handleDislike}
        />
      </div>
    </div>
  );
};

// Объяснение:
// Поиск существующего объекта.

// Сначала мы проверяем, есть ли в массиве объект с текущим review.id.
// Если объект найден, мы обновляем его свойства.
// Обновление like или dislike.

// Если нажимаем на "лайк", то:
// Переключаем like на противоположное значение.
// Устанавливаем dislike в false (так как нельзя одновременно поставить и лайк, и дизлайк).
// Аналогично для "дизлайка".
// Добавление нового объекта.

// Если объекта с данным review.id нет, создаём новый и добавляем его в массив с соответствующими значениями.
// Сохранение записи.

// Даже если пользователь снимает лайк или дизлайк, объект остаётся в массиве.
