export const boxSizingOptions = ["content-box", "border-box"];
export const borderStyleOptions = [
  "none",
  "hidden",
  "dotted",
  "dashed",
  "solid",
  "double",
  "groove",
  "ridge",
  "inset",
  "outset",
];

export const fontWeightOptions = [
  "normal",
  "bold",
  "lighter",
  "bolder",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

export const fontStyleOptions = ["normal", "italic", "oblique"];

export const textAlignOptions = [
  "start",
  "end",
  "left",
  "center",
  "right",
  "justify",
  "justify-all",
  "match-parent",
];

export const alignItemsOptions = [
  "start",
  "end",
  "center",
  "flex-start",
  "flex-end",
  "self-start",
  "self-end",
  "baseline",
  "first baseline",
  "last baseline",
  "stretch",
];

export const directionOptions = ["ltr", "rtl"];

export const cursorOptions = [
  "auto",
  "default",
  "none",
  "context-menu",
  "help",
  "pointer",
  "progress",
  "wait",
  "cell",
  "crosshair",
  "text",
  "vertical-text",
  "alias",
  "copy",
  "move",
  "no-drop",
  "not-allowed",
  "grab",
  "grabbing",
  "all-scroll",
  "col-resize",
  "row-resize",
  "n-resize",
  "s-resize",
  "e-resize",
  "w-resize",
  "ne-resize",
  "nw-resize",
  "se-resize",
  "sw-resize",
  "ew-resize",
  "ns-resize",
  "nesw-resize",
  "nwse-resize",
  "zoom-in",
  "zoom-out",
];

export const fontFamilyOptions = [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui",
  "ui-serif",
  "ui-sans-serif",
  "ui-monospace",
  "ui-rounded",
  "emoji",
  "math",
  "fangsong",
];

export const textDecorationStyleOptions = [
  "solid",
  "double",
  "dotted",
  "dashed",
  "wavy",
];

export const textDecorationLineOptions = [
  "none",
  "underline",
  "overline",
  "line-through",
  "blink",
  "underline overline",
  "overline underline line-through",
];

export type TElementAttrs = {
  boxSizing?: string;
  width?: number;
  height?: number;
  borderStyle?: string;
  fontWeight?: string;
  fontStyle?: string;
  textAlign?: string;
  alignItems?: string;
  cursor?: string;
  [key: string]: any;
};
