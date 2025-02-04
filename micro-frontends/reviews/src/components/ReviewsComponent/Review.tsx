import React from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { LikeDislike } from "../LikeDislike/LikeDislike";

interface IReviewProps {
  review: any;
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
  const [showSpan, setShowSpan] = useState(!review.isViewed);
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (inView && !review.isViewed) {
      onInView(review.id); // Передаем id родительскому компоненту

      timer = setTimeout(() => {
        setShowSpan(false);
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [inView, review, onInView]);

  const currentItem = likeDislikeIds?.find(
    (item: { id: any }) => item.id === review.id
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
    <div
      style={{
        borderBottom: "1px solid black",
        height: "200px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "600px",
      }}>
      <p>
        {review.text}
        {showSpan && !review.isViewed && (
          <span
            ref={ref}
            style={{
              border: "1px solid orange",
              backgroundColor: "orange",
              borderRadius: "20px",
              fontSize: "12px",
              padding: "2px 10px",
              marginLeft: "10px",
            }}>
            Новый
          </span>
        )}
      </p>
      <LikeDislike
        isLiked={isLiked}
        isDisliked={isDisliked}
        handleLike={handleLike}
        handleDislike={handleDislike}
      />
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
