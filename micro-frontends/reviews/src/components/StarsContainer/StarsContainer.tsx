import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { RatingBar } from "./RatingBar";
import { IStatisticsData } from "../../models/models";

interface IStarsContainerProps {
  statisticsData?: IStatisticsData;
}

export const StarsContainer: React.FC<IStarsContainerProps> = ({
  statisticsData,
}) => {
  const assessments = statisticsData?.assessments;

  return (
    <Card sx={{ minWidth: 275 }} style={{ marginLeft: "20px" }}>
      <CardContent>
        {assessments?.map((el, idx) => (
          <RatingBar count={el.count} valueStar={el.assessment} key={idx} />
        ))}
      </CardContent>
    </Card>
  );
};
