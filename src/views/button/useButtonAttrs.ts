import type { TElementAttrs } from "@/components/czForm/data";
import { extractUnlessAttr, turnUnit } from "@/utils";
export const useButtonAttrs = () => {
  const attrs = ref<TElementAttrs>({
    // width: "fit-content",
    // height: "fit-content",
    boxSizing: "content-box",
    width: 80,
    height: 30,
    padding: 5,
    margin: 5,
    alignItems: "start",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    textIndent: 0,
    color: "#fff",
    backgroundColor: "#c6dfc8",
    showBorder: false,
    borderWidth: 0,
    borderStyle: "none",
    borderColor: "#000",
    borderRadius: 0,
    cursor: "pointer",
  });

  const styles = computed<Record<string, any>>(() => {
    // // 边框样式
    // let border = "none";
    // if (attrs.value.showBorder) {
    //   border = `${turnUnit(attrs.value.borderWidth)} ${
    //     attrs.value.borderStyle
    //   } ${attrs.value.borderColor}`;
    // }
    // // 内边距
    // const padding = `${turnUnit(attrs.value?.paddingTop)} ${turnUnit(
    //   attrs.value?.paddingRight
    // )} ${turnUnit(attrs.value?.paddingBottom)} ${turnUnit(
    //   attrs.value?.paddingLeft
    // )}`;
    // // 外边距
    // const margin = `${turnUnit(attrs.value?.marginTop)} ${turnUnit(
    //   attrs.value?.marginRight
    // )} ${turnUnit(attrs.value?.marginBottom)} ${turnUnit(
    //   attrs.value?.marginLeft
    // )}`;
    // return {
    //   ...attrs.value,
    //   width: turnUnit(attrs.value.width),
    //   height: turnUnit(attrs.value.height),
    //   fontSize: turnUnit(attrs.value.fontSize),
    //   letterSpacing: turnUnit(attrs.value.letterSpacing),
    //   textIndent: turnUnit(attrs.value.textIndent, "em"),
    //   border,
    //   borderRadius: turnUnit(attrs.value.borderRadius),
    //   padding,
    //   margin,
    // };
    return extractUnlessAttr(attrs.value);
  });

  return {
    attrs,
    styles,
  };
};
