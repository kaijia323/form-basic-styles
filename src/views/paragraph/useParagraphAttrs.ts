import type { TElementAttrs } from "@/components/czForm/data";
import { extractUnlessAttr } from "@/utils";

export const useParagraphAttrs = () => {
  const attrs = ref<TElementAttrs>({
    // width: "fit-content",
    // height: "fit-content",
    boxSizing: "content-box",
    width: 800,
    height: 180,
    padding: 5,
    margin: 5,
    alignSelf: "start",
    direction: "ltr",
    fontFamily: "serif",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "normal",
    fontStyle: "italic",
    letterSpacing: 0,
    textAlign: "center",
    textIndent: 0,
    showTextDecoration: true,
    textDecorationColor: "red",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationThick: 2,
    showBorder: false,
    color: "#000",
    backgroundColor: "#c6dfc8",
    borderWidth: 1,
    borderStyle: "none",
    borderColor: "#000",
    borderRadius: 0,
    cursor: "pointer",
  });

  const styles = computed<Record<string, any>>(() => {
    return extractUnlessAttr(attrs.value);
  });

  return {
    attrs,
    styles,
  };
};
