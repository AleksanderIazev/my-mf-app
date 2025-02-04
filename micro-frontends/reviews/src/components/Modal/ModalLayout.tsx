import React from "react";
import { Route, Routes } from "react-router-dom";
import { ModalRating } from "./ModalRating";

export const ModalLayout = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Routes>
      <Route path="/about" element={<ModalRating setOpen={setOpen} />} />
      <Route path="/mine" element={<ModalRating setOpen={setOpen} />} />
      <Route path="/waiting" element={<ModalRating setOpen={setOpen} />} />
    </Routes>
  );
};
