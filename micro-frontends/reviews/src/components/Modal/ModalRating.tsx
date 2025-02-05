import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./modal.module.scss";
import { useEffect, useState } from "react";
import { Tabs } from "./Tabs";
import { TAB_VALUE, url } from "../../const/const";
import CloseIcon from "@mui/icons-material/Close";
import { About } from "../Tabs/About";

const cn = require("classnames");

interface IModalRatingProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// удалить после создания всех вкладок
const temporarySolutionStyleTabContent: React.CSSProperties = {
  textAlign: "center",
  minWidth: "1140px",
};

export const ModalRating: React.FC<IModalRatingProps> = ({ setOpen }) => {
  const [viewedIds, setViewedIds] = useState([]);
  const [likeDislikeIds, setLikeDislikeIds] = useState([]);

  const [countNewReviews, setCountNewReviews] = useState<null | number>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const currentTab = location.pathname.split("/")[1] || TAB_VALUE.ABOUT;

  const postData = () => {
    const uniqueIds = Array.from(new Set(viewedIds));
    const jsonData = JSON.stringify({
      viewedIds: uniqueIds,
      // likeDislikeData: likeDislikeIds,
      viewType: "about",
    });

    fetch(url, {
      method: "POST",
      body: jsonData,
    });
  };

  useEffect(() => {
    if (viewedIds.length || likeDislikeIds.length) {
      postData();
      setViewedIds([]);
      setLikeDislikeIds([]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Закрытие модального окна
  const handleClose = () => {
    postData();
    navigate("/");
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <div className={cn(styles.modalBackground)}>
      <div className={cn(styles.modalContainer)}>
        <div className={cn(styles.modalHeader)}>
          <Tabs activeTab={currentTab} countNewReviews={countNewReviews} />
          <button onClick={handleClose}>
            <CloseIcon />
          </button>
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
            <p style={temporarySolutionStyleTabContent}>Список моих отзывов</p>
          )}
          {currentTab === TAB_VALUE.WAITING && (
            <p style={temporarySolutionStyleTabContent}>
              Отзывы, которые ждут оценки
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
