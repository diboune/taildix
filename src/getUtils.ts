import { Color, scale } from "./consts";

export default (colors: Color[]) => {
  const utils: Record<string, Record<string, string>> = {};

  for (const color of colors) {
    utils[color] = Object.fromEntries(
      scale
        .map((id) => {
          if (color === "black" || color === "white") {
            return [[`a${id}`, `var(--${color}-a${id})`]];
          } else {
            return [
              [id, `var(--${color}-${id})`],
              [`a${id}`, `var(--${color}-a${id})`],
            ];
          }
        })
        .flat()
    );
  }

  return utils;
};
