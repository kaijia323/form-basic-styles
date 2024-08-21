import type { FormItemProps } from "element-plus/es";
import type { FormComponents } from "./formComponents";
import { ExtractPublicPropTypes } from "vue";
import {
  borderStyleOptions,
  fontWeightOptions,
  fontStyleOptions,
  textAlignOptions,
  boxSizingOptions,
  alignItemsOptions,
  directionOptions,
  cursorOptions,
  fontFamilyOptions,
  textDecorationLineOptions,
  textDecorationStyleOptions,
} from "./data";

// export type FormItemSlot = {
//   type: FormComponents[keyof FormComponents];
//   props: ExtractPublicPropTypes<FormComponents[keyof FormComponents]>;
//   slots: FormItemSlot[];
// };

// export type FormConfig = {
//   formItemProps: FormItemProps;
//   slots: FormItemSlot[];
// };

// export const useFormConfig = (config: FormConfig) => {
//   console.log(config);
// };

export type TOptionItem = {
  label: string;
  value: any;
};

export type TFormItem = {
  comType: string;
  prop: string;
  label: string;
  width?: string;
  min?: number;
  defaultValue?: string;
  option?: any[];
  hasSlot?: boolean;
  show?: string;
};

export const mapFormConfig: Record<string, TFormItem> = {
  boxSizing: {
    comType: "RadioGroup",
    prop: "boxSizing",
    label: "盒子模型",
    option: boxSizingOptions,
  },
  alignItems: {
    comType: "Select",
    prop: "alignItems",
    label: "对齐方式",
    option: alignItemsOptions,
    width: "50%",
  },
  alignSelf: {
    comType: "Select",
    prop: "alignSelf",
    label: "自身对齐方式",
    option: alignItemsOptions,
    width: "50%",
  },
  width: {
    comType: "InputNumber",
    prop: "width",
    label: "宽度",
    min: 0,
  },
  height: {
    comType: "InputNumber",
    prop: "height",
    label: "高度",
    min: 0,
  },
  padding: {
    comType: "custom",
    prop: "padding",
    label: "内边距",
    hasSlot: true,
  },
  margin: {
    comType: "custom",
    prop: "margin",
    label: "外边距",
    hasSlot: true,
  },
  direction: {
    comType: "RadioGroup",
    prop: "direction",
    label: "文本方向",
    option: directionOptions,
  },
  fontFamily: {
    comType: "Select",
    prop: "fontFamily",
    label: "通用字体",
    option: fontFamilyOptions,
    width: "50%",
  },
  fontSize: {
    comType: "InputNumber",
    prop: "fontSize",
    label: "字体大小",
    min: 12,
  },
  lineHeight: {
    comType: "InputNumber",
    prop: "lineHeight",
    label: "行高",
    min: 12,
  },
  letterSpacing: {
    comType: "InputNumber",
    prop: "letterSpacing",
    label: "字体间隙",
  },
  textIndent: {
    comType: "InputNumber",
    prop: "textIndent",
    label: "字体缩进",
  },
  fontWeight: {
    comType: "Select",
    prop: "fontWeight",
    label: "字体粗细",
    option: fontWeightOptions,
    width: "50%",
  },
  fontStyle: {
    comType: "Select",
    prop: "fontStyle",
    label: "字体样式",
    width: "50%",
    option: fontStyleOptions,
  },
  showTextDecoration: {
    comType: "RadioGroup",
    prop: "showTextDecoration",
    label: "是否展示文本修饰",
    option: [true, false],
  },
  textDecorationLine: {
    comType: "Select",
    prop: "textDecorationLine",
    label: "文本修饰线",
    option: textDecorationLineOptions,
    width: "50%",
  },
  textDecorationStyle: {
    comType: "Select",
    prop: "textDecorationStyle",
    label: "文本修饰样式",
    option: textDecorationStyleOptions,
    width: "50%",
  },
  textDecorationThick: {
    comType: "InputNumber",
    prop: "textDecorationThick",
    label: "文本修饰线厚度",
    min: 0,
  },
  textAlign: {
    comType: "Select",
    prop: "textAlign",
    label: "字体对齐",
    option: textAlignOptions,
    width: "50%",
  },
  color: {
    comType: "ColorPicker",
    prop: "color",
    label: "字体颜色",
  },
  border: {
    comType: "Checkbox",
    prop: "border",
    label: "是否显示边框",
  },
  borderWidth: {
    comType: "InputNumber",
    prop: "borderWidth",
    label: "边框宽度",
    show: "border",
    min: 0,
  },
  borderStyle: {
    comType: "Select",
    prop: "borderStyle",
    label: "边框样式",
    option: borderStyleOptions,
    show: "border",
    width: "50%",
  },
  borderColor: {
    comType: "ColorPicker",
    prop: "borderColor",
    label: "边框颜色",
    show: "border",
  },
  borderRadius: {
    comType: "InputNumber",
    prop: "borderRadius",
    label: "边框弧度",
    min: 0,
  },
  backgroundColor: {
    comType: "ColorPicker",
    prop: "backgroundColor",
    label: "背景颜色",
  },
  cursor: {
    comType: "Select",
    prop: "cursor",
    label: "光标",
    option: cursorOptions,
    width: "50%",
  },
};
