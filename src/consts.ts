const gray_scales = [
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
] as const;
const brand_scales = [
  "tomato",
  "red",
  "ruby",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "iris",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "jade",
  "green",
  "grass",
  "bronze",
  "gold",
  "brown",
  "orange",
  "amber",
  "yellow",
  "lime",
  "mint",
  "sky",
] as const;

export const radix_scales = [
  ...gray_scales,
  ...brand_scales,
  "white",
  "black",
] as const;

export const scale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

export type Color = (typeof radix_scales)[number];
