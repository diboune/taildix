import { Color, radix_scales, scale } from "./consts";

export default (colors?: Color[]) => {
  const utils: Record<string, Record<string, string>> = {};

  if (!colors) {
    for (const color of radix_scales) {
      utils[color] = Object.fromEntries(
        scale
          .map((id) => {
            return color === "black" || color === "white"
              ? [[`a${id}`, `var(--${color}-a${id})`]]
              : [
                  [id, `var(--${color}-${id})`],
                  [`a${id}`, `var(--${color}-a${id})`],
                ];
          })
          .flat()
      );
    }
    return utils;
  } else {
    for (const color of colors) {
      utils[color] = Object.fromEntries(
        Array.from({ length: 12 }, (_, i) => {
          let id = i + 1;
          if (color === "black" || color === "white") {
            return [[`a${id}`, `var(--${color}-a${id})`]];
          } else {
            return [
              [id, `var(--${color}-${id})`],
              [`a${id}`, `var(--${color}-a${id})`],
            ];
          }
        }).flat()
      );
    }
  }

  return utils;
};
