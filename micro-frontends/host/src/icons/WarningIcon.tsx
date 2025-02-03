import React from "react";

export const WarningIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64">
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="none"
        stroke="#ff0000"
        stroke-width="4"
      />

      <line
        x1="20"
        y1="20"
        x2="44"
        y2="44"
        stroke="#ff0000"
        stroke-width="4"
        stroke-linecap="round"
      />
      <line
        x1="44"
        y1="20"
        x2="20"
        y2="44"
        stroke="#ff0000"
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>
  );
};
