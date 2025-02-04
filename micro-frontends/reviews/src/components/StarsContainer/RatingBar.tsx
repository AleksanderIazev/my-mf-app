import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export const RatingBar = ({
  valueStar,
  count,
}: {
  valueStar?: number;
  count?: number;
}) => {
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        marginBottom: "6px",
      }}>
      <Rating name="read-only" value={valueStar} readOnly />
      <Box sx={{ ml: 14 }}>{count}</Box>
    </Box>
  );
};
