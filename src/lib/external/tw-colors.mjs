import tty from "tty";

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default")
    ? x["default"]
    : x;
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

let isColorSupported =
  !("NO_COLOR" in process.env || process.argv.includes("--no-color")) &&
  ("FORCE_COLOR" in process.env ||
    process.argv.includes("--color") ||
    process.platform === "win32" ||
    (tty.isatty(1) && process.env.TERM !== "dumb") ||
    "CI" in process.env);

let formatter =
  (open, close, replace = open) =>
  (input) => {
    let string = "" + input;
    let index = string.indexOf(close, open.length);
    return ~index
      ? open + replaceClose(string, close, replace, index) + close
      : open + string + close;
  };

let replaceClose = (string, close, replace, index) => {
  let start = string.substring(0, index) + replace;
  let end = string.substring(index + close.length);
  let nextIndex = end.indexOf(close);
  return ~nextIndex
    ? start + replaceClose(end, close, replace, nextIndex)
    : start + end;
};

let createColors = (enabled = isColorSupported) => ({
  isColorSupported: enabled,
  reset: enabled ? (s) => `\x1b[0m${s}\x1b[0m` : String,
  bold: enabled ? formatter("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m") : String,
  dim: enabled ? formatter("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m") : String,
  italic: enabled ? formatter("\x1b[3m", "\x1b[23m") : String,
  underline: enabled ? formatter("\x1b[4m", "\x1b[24m") : String,
  inverse: enabled ? formatter("\x1b[7m", "\x1b[27m") : String,
  hidden: enabled ? formatter("\x1b[8m", "\x1b[28m") : String,
  strikethrough: enabled ? formatter("\x1b[9m", "\x1b[29m") : String,
  black: enabled ? formatter("\x1b[30m", "\x1b[39m") : String,
  red: enabled ? formatter("\x1b[31m", "\x1b[39m") : String,
  green: enabled ? formatter("\x1b[32m", "\x1b[39m") : String,
  yellow: enabled ? formatter("\x1b[33m", "\x1b[39m") : String,
  blue: enabled ? formatter("\x1b[34m", "\x1b[39m") : String,
  magenta: enabled ? formatter("\x1b[35m", "\x1b[39m") : String,
  cyan: enabled ? formatter("\x1b[36m", "\x1b[39m") : String,
  white: enabled ? formatter("\x1b[37m", "\x1b[39m") : String,
  gray: enabled ? formatter("\x1b[90m", "\x1b[39m") : String,
  bgBlack: enabled ? formatter("\x1b[40m", "\x1b[49m") : String,
  bgRed: enabled ? formatter("\x1b[41m", "\x1b[49m") : String,
  bgGreen: enabled ? formatter("\x1b[42m", "\x1b[49m") : String,
  bgYellow: enabled ? formatter("\x1b[43m", "\x1b[49m") : String,
  bgBlue: enabled ? formatter("\x1b[44m", "\x1b[49m") : String,
  bgMagenta: enabled ? formatter("\x1b[45m", "\x1b[49m") : String,
  bgCyan: enabled ? formatter("\x1b[46m", "\x1b[49m") : String,
  bgWhite: enabled ? formatter("\x1b[47m", "\x1b[49m") : String,
});

var picocolors = createColors();
var createColors_1 = createColors;
picocolors.createColors = createColors_1;

var require$$0 = picocolors;

var log_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true,
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name],
      });
  }
  _export(exports, {
    dim: () => dim,
    default: () => _default,
  });
  const _picocolors = /*#__PURE__*/ _interopRequireDefault(require$$0);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule
      ? obj
      : {
          default: obj,
        };
  }
  let alreadyShown = new Set();
  function log(type, messages, key) {
    if (typeof process !== "undefined" && process.env.JEST_WORKER_ID) return;
    if (key && alreadyShown.has(key)) return;
    if (key) alreadyShown.add(key);
    console.warn("");
    messages.forEach((message) => console.warn(type, "-", message));
  }
  function dim(input) {
    return _picocolors.default.dim(input);
  }
  const _default = {
    info(key, messages) {
      log(
        _picocolors.default.bold(_picocolors.default.cyan("info")),
        ...(Array.isArray(key) ? [key] : [messages, key])
      );
    },
    warn(key, messages) {
      log(
        _picocolors.default.bold(_picocolors.default.yellow("warn")),
        ...(Array.isArray(key) ? [key] : [messages, key])
      );
    },
    risk(key, messages) {
      log(
        _picocolors.default.bold(_picocolors.default.magenta("risk")),
        ...(Array.isArray(key) ? [key] : [messages, key])
      );
    },
  };
});

unwrapExports(log_1);

var colors$1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true,
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: () => _default,
  });
  const _log = /*#__PURE__*/ _interopRequireDefault(log_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule
      ? obj
      : {
          default: obj,
        };
  }
  function warn({ version, from, to }) {
    _log.default.warn(`${from}-color-renamed`, [
      `As of Tailwind CSS ${version}, \`${from}\` has been renamed to \`${to}\`.`,
      "Update your configuration file to silence this warning.",
    ]);
  }
  const _default = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
    stone: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
    },
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
    },
    get lightBlue() {
      return this.sky;
    },
    get warmGray() {
      return this.stone;
    },
    get trueGray() {
      return this.neutral;
    },
    get coolGray() {
      return this.gray;
    },
    get blueGray() {
      return this.slate;
    },
  };
});

unwrapExports(colors$1);

var colors_1 = createCommonjsModule(function (module) {
  module.exports = (
    colors$1.__esModule ? colors$1 : { default: colors$1 }
  ).default;
});

var colors = unwrapExports(colors_1);

export { colors as default };
