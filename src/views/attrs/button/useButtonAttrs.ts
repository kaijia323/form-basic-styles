export const useButtonAttrs = () => {
  const attrs = ref({
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
    boxSizing: "border-box",
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    alignItems: "start",
  });

  const styles = computed<Record<string, any>>(() => {
    // 边框样式
    let border = "none";
    if (attrs.value.showBorder) {
      border = `${attrs.value.borderWidth}px ${attrs.value.borderStyle} ${attrs.value.borderColor}`;
    }
    // 内边距
    const padding = `${attrs.value.paddingTop}px ${attrs.value.paddingRight}px ${attrs.value.paddingBottom}px ${attrs.value.paddingLeft}px`;

    // 外边距
    const margin = `${attrs.value.marginTop}px ${attrs.value.marginRight}px ${attrs.value.marginBottom}px ${attrs.value.marginLeft}px`;

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
