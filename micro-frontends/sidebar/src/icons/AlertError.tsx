import React from "react";

export const AlertError = () => {
  return (
    <svg
      width="55"
      height="55"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 55">
      <circle
        cx="27.5"
        cy="27.5"
        r="25"
        fill="none"
        stroke="#ff0000"
        stroke-width="3"
      />

      <line
        x1="17"
        y1="17"
        x2="38"
        y2="38"
        stroke="#ff0000"
        stroke-width="3"
        stroke-linecap="round"
      />
      <line
        x1="38"
        y1="17"
        x2="17"
        y2="38"
        stroke="#ff0000"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};
