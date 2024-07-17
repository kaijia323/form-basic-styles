import type { TElementAttrs } from "@/components/czForm/data";
export const useButtonAttrs = () => {
  const attrs = ref<TElementAttrs>({
    // width: "fit-content",
    // height: "fit-content",
    width: 80,
    height: 30,
    showBorder: false,
    color: "#fff",
    backgroundColor: "#c6dfc8",
    borderWidth: 1,
    borderStyle: "none",
    borderColor: "#000",
    borderRadius: 0,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    textIndent: 0,
    boxSizing: "content-box",
    padding: 5,
    margin: 5,
    alignItems: "start",
    cursor: "pointer",
  });

  const styles = computed<Record<string, any>>(() => {
    // 边框样式
    let border = "none";
    if (attrs.value.showBorder) {
      border = `${turnPx(attrs.value.borderWidth)} ${attrs.value.borderStyle} ${
        attrs.value.borderColor
      }`;
    }
    // 内边距
    const padding = `${turnPx(attrs.value?.paddingTop)} ${turnPx(
      attrs.value?.paddingRight
    )} ${turnPx(attrs.value?.paddingBottom)} ${turnPx(
      attrs.value?.paddingLeft
    )}`;

    // 外边距
    const margin = `${turnPx(attrs.value?.marginTop)} ${turnPx(
      attrs.value?.marginRight
    )} ${turnPx(attrs.value?.marginBottom)} ${turnPx(attrs.value?.marginLeft)}`;

    return {
      ...attrs.value,
      width: turnPx(attrs.value.width),
      height: turnPx(attrs.value.height),
      borderRadius: turnPx(attrs.value.borderRadius),
      fontSize: turnPx(attrs.value.fontSize),
      letterSpacing: turnPx(attrs.value.letterSpacing),
      textIndent: turnPx(attrs.value.textIndent),
      border,
      padding,
      margin,
    };
  });

  const turnPx = (num?: string | number) => {
    if (isNaN(Number(num))) {
      return num;
    }
    return num + "px";
  };

  return {
    attrs,
    styles,
    turnPx,
  };
};
