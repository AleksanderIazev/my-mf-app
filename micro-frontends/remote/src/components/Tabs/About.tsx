import React, { useEffect } from "react";

import { url } from "../../const/const";
import { useGetListDataQuery } from "../../api/listApi";
import { useGetStatisticsDataQuery } from "../../api/statisticsApi";
import { Review } from "../ReviewsComponent/Review";
import { StarsContainer } from "../StarsContainer/StarsContainer";

interface IAboutProps {
  viewedIds: string[];
  setViewedIds: any;
  likeDislikeIds: string[];
  setLikeDislikeIds: any;
  setCountNewReviews: React.Dispatch<React.SetStateAction<number | null>>;
}

export const About: React.FC<IAboutProps> = ({
  viewedIds,
  setViewedIds,
  likeDislikeIds,
  setLikeDislikeIds,
  setCountNewReviews,
}) => {
  const { data: listData, isLoading: listLoading } = useGetListDataQuery();
  const { data: statisticsData, isLoading: statisticsLoading } =
    useGetStatisticsDataQuery();
  const feedbacks = listData?.feedbacks || [];
  const numberNewEl = listData?.numberOfNewElements || 0;

  const uniqueViewedIds = Array.from(new Set(viewedIds));

  useEffect(() => {
    if (!listLoading && setCountNewReviews) {
      const newCount = numberNewEl - uniqueViewedIds.length;
      setCountNewReviews(Math.max(newCount, 0)); // Не допускаем отрицательных значений
    }
  }, [listLoading, numberNewEl, uniqueViewedIds, setCountNewReviews]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      // Отправка массива просмотренных id на сервер
      const uniqueIds = Array.from(new Set(viewedIds));
      const jsonData = JSON.stringify({
        viewedIds: uniqueIds,
        likeDislikeIds: likeDislikeIds,
      });

      navigator.sendBeacon(url, jsonData);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [likeDislikeIds, viewedIds]);

  if (listLoading || statisticsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}>
      <div
        style={{
          textAlign: "center",
          minWidth: "800px",
          display: "flex",
          flexDirection: "column",
        }}>
        {feedbacks.map((el: any) => (
          <Review
            key={el.id}
            likeDislikeIds={likeDislikeIds}
            setLikeDislikeIds={setLikeDislikeIds}
            review={el}
            onInView={(id: string) => {
              if (!viewedIds.includes(id)) {
                setViewedIds((prev: any) => [...prev, id]); // Добавляем id в массив
              }
            }}
          />
        ))}
      </div>
      {statisticsData && <StarsContainer statisticsData={statisticsData} />}
    </div>
  );
};
