import React from "react";
import { TMineElementPartial } from "../../models/models";
import { Rating } from "@mui/material";
import styles from "./mineReview.module.scss";

const cn = require("classnames");

export const MineReview = ({
  mineReview,
}: {
  mineReview: TMineElementPartial;
}) => {
  const { name, text, assessment } = mineReview;
  return (
    <div
      style={{
        width: "450px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderBottom: "1px solid #000",
        marginBottom: "40px",
      }}>
      <div className={cn(styles.headerMineReview)}>
        <p>{name}</p>
        <Rating name="read-only" value={assessment} readOnly />
      </div>
      <p>{text}</p>
    </div>
  );
};
