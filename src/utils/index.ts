import { TElementAttrs } from "@/components/czForm/data";
import { cloneDeep, omit } from "lodash-es";

export const turnUnit = (num?: string | number, unit = "px") => {
  if (isNaN(Number(num))) {
    return num;
  } else if (num === 0) {
    return num;
  } else {
    return num + unit;
  }
};

export const extractUnlessAttr = (attrObj: TElementAttrs) => {
  let newAttrObj = cloneDeep(attrObj);

  // Layout
  ["width", "height", "lineHeight"].forEach(key => {
    if (newAttrObj.hasOwnProperty(key)) {
      newAttrObj[key] = turnUnit(newAttrObj[key]);
    }
  });

  if (newAttrObj.hasOwnProperty("paddingTop")) {
    const paddingTop = newAttrObj.paddingTop;
    const paddingRight = newAttrObj.paddingRight;
    const paddingBottom = newAttrObj.paddingBottom;
    const paddingLeft = newAttrObj.paddingLeft;
    if (
      paddingTop === paddingRight &&
      paddingRight === paddingBottom &&
      paddingBottom === paddingLeft
    ) {
      newAttrObj.padding = turnUnit(paddingTop);
    } else if (paddingLeft === paddingRight) {
      if (paddingTop === paddingBottom) {
        newAttrObj.padding = `${turnUnit(paddingTop)} ${turnUnit(paddingLeft)}`;
      } else {
        newAttrObj.padding = `${turnUnit(paddingTop)} ${turnUnit(
          paddingLeft
        )} ${turnUnit(paddingBottom)}`;
      }
    } else {
      newAttrObj.padding = `${turnUnit(paddingTop)} ${turnUnit(
        paddingRight
      )} ${turnUnit(paddingBottom)} ${turnUnit(paddingLeft)}`;
    }
    newAttrObj = omit(newAttrObj, [
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
    ]);
  }

  if (newAttrObj.hasOwnProperty("marginTop")) {
    const marginTop = newAttrObj.marginTop;
    const marginRight = newAttrObj.marginRight;
    const marginBottom = newAttrObj.marginBottom;
    const marginLeft = newAttrObj.marginLeft;
    if (
      marginTop === marginRight &&
      marginRight === marginBottom &&
      marginBottom === marginLeft
    ) {
      newAttrObj.padding = turnUnit(marginTop);
    } else if (marginLeft === marginRight) {
      if (marginTop === marginBottom) {
        newAttrObj.padding = `${turnUnit(marginTop)} ${turnUnit(marginLeft)}`;
      } else {
        newAttrObj.padding = `${turnUnit(marginTop)} ${turnUnit(
          marginLeft
        )} ${turnUnit(marginBottom)}`;
      }
    } else {
      newAttrObj.padding = `${turnUnit(marginTop)} ${turnUnit(
        marginRight
      )} ${turnUnit(marginBottom)} ${turnUnit(marginLeft)}`;
    }
    newAttrObj = omit(newAttrObj, [
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
    ]);
  }

  // Text
  ["fontWeight", "fontStyle"].forEach(key => {
    if (newAttrObj.hasOwnProperty(key)) {
      ["normal", "none"].includes(newAttrObj[key]) && delete newAttrObj[key];
    }
  });

  if (newAttrObj.hasOwnProperty("letterSpacing")) {
    if (!newAttrObj.letterSpacing) {
      delete newAttrObj.letterSpacing;
    } else {
      newAttrObj.letterSpacing = turnUnit(newAttrObj.letterSpacing);
    }
  }

  if (newAttrObj.hasOwnProperty("textIndent")) {
    if (!newAttrObj.textIndent) {
      delete newAttrObj.textIndent;
    } else {
      newAttrObj.textIndent = turnUnit(newAttrObj.textIndent, "em");
    }
  }

  // 文本装饰
  if (
    newAttrObj.hasOwnProperty("showTextDecoration") &&
    newAttrObj.showTextDecoration
  ) {
    newAttrObj.textDecoration = `${newAttrObj.textDecorationColor} ${
      newAttrObj.textDecorationLine
    } ${newAttrObj.textDecorationStyle} ${turnUnit(
      newAttrObj.textDecorationThick
    )}`;
  }
  newAttrObj = omit(newAttrObj, [
    "textDecorationColor",
    "textDecorationLine",
    "textDecorationStyle",
    "showTextDecoration",
    "textDecorationThick",
  ]);

  // appearance
  if (newAttrObj.hasOwnProperty("showBorder") && newAttrObj.showBorder) {
    newAttrObj.border = `${turnUnit(newAttrObj.borderWidth)} ${
      newAttrObj.borderStyle
    } ${newAttrObj.borderColor}`;
  } else {
    newAttrObj.border = "none";
  }
  newAttrObj = omit(newAttrObj, [
    "borderWidth",
    "borderStyle",
    "borderColor",
    "showBorder",
  ]);

  if (newAttrObj.hasOwnProperty("borderRadius") && !newAttrObj.borderRadius)
    delete newAttrObj.borderRadius;

  if (newAttrObj.hasOwnProperty("cursor")) {
    if (newAttrObj.cursor === "default")
      newAttrObj = omit(newAttrObj, ["cursor"]);
  }
  return newAttrObj;
};
