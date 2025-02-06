export const TAB_VALUE = {
  ABOUT: "about",
  MINE: "mine",
  WAITING: "waiting",
};

export const url = "http://localhost:5000/api/beacon";

export const WIDGET_TEXT = {
  COUNT_REVIEWS: (reviewsCount?: number) => `(${reviewsCount || 0} отзывов)`,
};
