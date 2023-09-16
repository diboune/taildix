var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/tailwindcss/lib/util/createPlugin.js
var require_createPlugin = __commonJS((exports) => {
  var createPlugin = function(plugin, config) {
    return {
      handler: plugin,
      config
    };
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
      return _default;
    }
  });
  createPlugin.withOptions = function(pluginFunction, configFunction = () => ({})) {
    const optionsFunction = function(options) {
      return {
        __options: options,
        handler: pluginFunction(options),
        config: configFunction(options)
      };
    };
    optionsFunction.__isOptionsFunction = true;
    optionsFunction.__pluginFunction = pluginFunction;
    optionsFunction.__configFunction = configFunction;
    return optionsFunction;
  };
  var _default = createPlugin;
});

// node_modules/tailwindcss/lib/public/create-plugin.js
var require_create_plugin = __commonJS((exports) => {
  var _interop_require_default = function(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
      return _default;
    }
  });
  var _createPlugin = _interop_require_default(require_createPlugin());
  var _default = _createPlugin.default;
});

// node_modules/tailwindcss/plugin.js
var require_plugin = __commonJS((exports, module) => {
  var createPlugin = require_create_plugin();
  module.exports = (createPlugin.__esModule ? createPlugin : { default: createPlugin }).default;
});

// src/index.ts
var plugin = __toESM(require_plugin(), 1);

// src/consts.ts
var gray_scales = [
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand"
];
var brand_scales = [
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
  "sky"
];
var radix_scales = [
  ...gray_scales,
  ...brand_scales,
  "white",
  "black"
];
var scale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// src/getScale.ts
var getScale_default = ({
  color,
  theme = "light"
}) => {
  if (color === "white" || color === "black") {
    const colors_vars = scale.map((i) => {
      return {
        [`--${color}-a${String(i)}`]: colors[`${color}A`][`${color}A${String(i)}`]
      };
    });
    return Object.assign({}, ...colors_vars);
  } else {
    const themed_color = theme === "dark" ? `${color}Dark` : color;
    const colors_vars = scale.map((i) => {
      return {
        [`--${color}-a${String(i)}`]: colors[`${themed_color}A`][`${color}A${String(i)}`],
        [`--${color}-${String(i)}`]: colors[`${themed_color}`][`${color}${String(i)}`]
      };
    });
    return Object.assign({}, ...colors_vars);
  }
};

// src/getUtils.ts
var getUtils_default = (colors2) => {
  const utils = {};
  if (!colors2) {
    for (const color of radix_scales) {
      utils[color] = Object.fromEntries(scale.map((id) => {
        return color === "black" || color === "white" ? [[`a${id}`, `var(--${color}-a${id})`]] : [
          [id, `var(--${color}-${id})`],
          [`a${id}`, `var(--${color}-a${id})`]
        ];
      }).flat());
    }
    return utils;
  } else {
    for (const color of colors2) {
      utils[color] = Object.fromEntries(Array.from({ length: 12 }, (_, i) => {
        let id = i + 1;
        if (color === "black" || color === "white") {
          return [[`a${id}`, `var(--${color}-a${id})`]];
        } else {
          return [
            [id, `var(--${color}-${id})`],
            [`a${id}`, `var(--${color}-a${id})`]
          ];
        }
      }).flat());
    }
  }
  return utils;
};

// src/index.ts
var base = (color) => ({
  ":root, .light, .light-theme": getScale_default({ color }),
  ".dark, .dark-theme": getScale_default({ color, theme: "dark" })
});
var src_default = plugin.default.withOptions(({ colors: colors2 }) => !colors2 ? ({ addBase }) => radix_scales.map((color) => addBase(base(color))) : ({ addBase }) => colors2.map((color) => addBase(base(color))), ({ colors: colors2 }) => ({
  theme: { extend: { colors: getUtils_default(colors2) } }
}));
export {
  src_default as default
};
