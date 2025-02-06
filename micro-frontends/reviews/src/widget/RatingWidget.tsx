import React, { useEffect, useState } from "react";
import { useGetRatingDataQuery } from "../api/ratingApi";
import { ModalRating } from "../components/Modal/ModalRating";
import { RatingBar } from "../components/RatingBar/RatingBar";
import styles from "./rating.module.scss";
import { ModalLayout } from "../components/Modal/ModalLayout";

const cn = require("classnames");

interface IRatingWidgetProps {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RatingWidget: React.FC<IRatingWidgetProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data, isLoading, refetch } = useGetRatingDataQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleOpen = () => setOpen(true);

  return (
    <>
      {isLoading ? (
        <div className={cn(styles.skeletonRating)} />
      ) : (
        <div className={cn(styles.ratingCard)}>
          <RatingBar handleOpen={handleOpen} data={data} />
        </div>
      )}
      {open && <ModalRating setOpen={setOpen} />}
      <ModalLayout setOpen={setOpen} />
    </>
  );
};
