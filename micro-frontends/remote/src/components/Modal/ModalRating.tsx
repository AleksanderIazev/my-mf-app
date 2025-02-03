import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./modal.module.scss";
import { useCallback, useEffect, useState } from "react";
import { Tabs } from "./Tabs";
import { TAB_VALUE, url } from "../../const/const";
import { About } from "../Tabs/About";

const cn = require("classnames");

interface IModalRatingProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalRating: React.FC<IModalRatingProps> = ({ setOpen }) => {
  const [viewedIds, setViewedIds] = useState([]);
  const [likeDislikeIds, setLikeDislikeIds] = useState([]);

  const [countNewReviews, setCountNewReviews] = useState<null | number>(null);

  const navigate = useNavigate();
  const location = useLocation();

  //   const activeTab = location.pathname.replace("/", "") || TAB_VALUE.ABOUT;
  const currentTab = location.pathname.split("/")[1] || TAB_VALUE.ABOUT;

  //   if (!Object.values(TAB_VALUE).includes(activeTab)) {
  //     navigate(`/${TAB_VALUE.ABOUT}`);
  //   }

  const postData = () => {
    const uniqueIds = Array.from(new Set(viewedIds));
    const jsonData = JSON.stringify({
      viewedIds: uniqueIds,
      likeDislikeData: likeDislikeIds,
    });

    fetch(url, {
      method: "POST",
      body: jsonData,
    });
  };

  useEffect(() => {
    // Ваша логика при изменении вкладки
    // Получаем текущую вкладку из URL

    if (viewedIds.length || likeDislikeIds.length) {
      if (viewedIds.length || likeDislikeIds.length) postData();
      setViewedIds([]);
      setLikeDislikeIds([]);
    }

    // Дополнительная логика, если нужно
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Закрытие модального окна
  const handleClose = useCallback(() => {
    navigate("/");
    if (setOpen) {
      setOpen(false);
    }
  }, [navigate, setOpen]);

  return (
    <div className={cn(styles.modalBackground)}>
      <div className={cn(styles.modalContainer)}>
        <div className={cn(styles.modalHeader)}>
          <Tabs activeTab={currentTab} countNewReviews={countNewReviews} />

          <button onClick={handleClose}>X</button>
        </div>
        <div className={cn(styles.modalContent)} key={currentTab}>
          {currentTab === TAB_VALUE.ABOUT && (
            <About
              viewedIds={viewedIds}
              setViewedIds={setViewedIds}
              likeDislikeIds={likeDislikeIds}
              setLikeDislikeIds={setLikeDislikeIds}
              setCountNewReviews={setCountNewReviews}
            />
          )}
          {currentTab === TAB_VALUE.MINE && (
            <p
              style={{
                textAlign: "center",
                minWidth: "1140px",
              }}>
              Список моих отзывов
            </p>
          )}
          {currentTab === TAB_VALUE.WAITING && (
            <p
              style={{
                textAlign: "center",
                minWidth: "1140px",
              }}>
              Отзывы, которые ждут оценки
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
