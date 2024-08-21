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
    lineHeight: 20,
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

    return extractUnlessAttr(attrs.value);
  });

  return {
    attrs,
    styles,
  };
};
