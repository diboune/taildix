import plugin from "tailwindcss/plugin";
import { radix_scales, type Color } from "./consts";
import getScale from "./getScale";
import getUtils from "./getUtils";

const base = (color: Color) => ({
  ":root, .light, .light-theme": getScale({ color }),
  ".dark, .dark-theme": getScale({ color, theme: "dark" }),
});

export default plugin.withOptions(
  // if no colors are passed, we're using all of the radix colors
  ({ colors }: { colors?: Color[] }) =>
    !colors
      ? ({ addBase }) => radix_scales.map((color) => addBase(base(color)))
      : ({ addBase }) => colors.map((color) => addBase(base(color))),

  ({ colors }) => ({
    theme: { extend: { colors: getUtils(colors) } },
  })
);
