import React, { useEffect } from "react";
import { useGetMineListDataQuery } from "../../api/mineApi";
import { MineReview } from "../ReviewsComponent/MineReview";

export const Mine = () => {
  const { data, refetch } = useGetMineListDataQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "flexStart",
        minWidth: "800px",
        display: "flex",
        flexDirection: "column",
      }}>
      {data?.mineList?.map((el) => (
        <MineReview mineReview={el} key={el.id} />
      ))}
    </div>
  );
};
