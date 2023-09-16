import { type Color, scale } from "./consts";

export default ({
  color,
  theme = "light",
}: {
  color: Color;
  theme?: "light" | "dark";
}) => {
  if (color === "white" || color === "black") {
    const colors_vars = scale.map((i) => {
      return {
        [`--${color}-a${String(i)}`]:
          // @ts-ignore
          colors[`${color}A`][`${color}A${String(i)}`],
      };
    });
    return Object.assign({}, ...colors_vars);
  } else {
    const themed_color = theme === "dark" ? `${color}Dark` : color;

    const colors_vars = scale.map((i) => {
      return {
        [`--${color}-a${String(i)}`]:
          // @ts-ignore
          colors[`${themed_color}A`][`${color}A${String(i)}`],
        [`--${color}-${String(i)}`]:
          // @ts-ignore
          colors[`${themed_color}`][`${color}${String(i)}`],
      };
    });
    return Object.assign({}, ...colors_vars);
  }
};
