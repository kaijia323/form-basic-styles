<template>
  <el-form :model="attrsObj" label-width="auto">
    <el-form-item
      v-if="attrsObjKeys.includes('boxSizing')"
      label="盒子模型"
      prop="boxSizing"
    >
      <el-radio-group v-model="attrsObj.boxSizing">
        <el-radio
          v-for="(opt, index) in boxSizingOptions"
          :key="index"
          :label="opt"
          :value="opt"
        ></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('alignItems')"
      label="对齐方式"
      prop="alignItems"
    >
      <el-select v-model="attrsObj.alignItems" style="width: 50%">
        <el-option
          v-for="opt in alignItemsOptions"
          :key="opt"
          :value="opt"
          :label="opt"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('alignSelf')"
      label="自身对齐方式"
      prop="alignSelf"
    >
      <el-select v-model="attrsObj.alignSelf" style="width: 50%">
        <el-option
          v-for="opt in alignItemsOptions"
          :key="opt"
          :value="opt"
          :label="opt"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('width')"
      label="宽度"
      prop="width"
    >
      <el-input-number v-model="attrsObj.width" :min="0"></el-input-number>
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('height')"
      label="高度"
      prop="height"
    >
      <el-input-number v-model="attrsObj.height" :min="0"></el-input-number>
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('padding')"
      label="内边距"
      prop="padding"
    >
      <el-input-number v-model="attrsObj.paddingTop" :min="0" />
      <el-input-number v-model="attrsObj.paddingRight" :min="0" />
      <el-input-number v-model="attrsObj.paddingBottom" :min="0" />
      <el-input-number v-model="attrsObj.paddingLeft" :min="0" />
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('margin')"
      label="外边距"
      prop="margin"
    >
      <el-input-number v-model="attrsObj.marginTop" :min="0" />
      <el-input-number v-model="attrsObj.marginRight" :min="0" />
      <el-input-number v-model="attrsObj.marginBottom" :min="0" />
      <el-input-number v-model="attrsObj.marginLeft" :min="0" />
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('direction')"
      label="文本方向"
      prop="direction"
    >
      <el-radio-group v-model="attrsObj.direction">
        <el-radio label="ltr" value="ltr"></el-radio>
        <el-radio label="rtl" value="rtl"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('fontFamily')"
      label="通用字体"
      prop="fontFamily"
    >
      <el-select v-model="attrsObj.fontFamily" style="width: 50%">
        <el-option
          v-for="opt in fontFamilyOptions"
          :key="opt"
          :value="opt"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('fontSize')"
      label="字体大小"
      prop="fontSize"
    >
      <el-input-number v-model="attrsObj.fontSize" :min="12"></el-input-number>
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('lineHeight')"
      label="行高"
      prop="lineHeight"
    >
      <el-input-number
        v-model="attrsObj.lineHeight"
        :min="12"
      ></el-input-number>
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('letterSpacing')"
      label="字体间隙"
      prop="letterSpacing"
    >
      <el-input-number v-model="attrsObj.letterSpacing"></el-input-number>
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('textIndent')"
      label="字体缩进"
      prop="textIndent"
    >
      <el-input-number v-model="attrsObj.textIndent" />
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('fontWeight')"
      label="字体粗细"
      prop="fontWeight"
    >
      <el-select v-model="attrsObj.fontWeight" style="width: 50%">
        <el-option
          v-for="(opt, index) in fontWeightOptions"
          :key="index"
          :label="opt"
          :value="opt"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('fontStyle')"
      label="字体样式"
      prop="fontStyle"
    >
      <el-select v-model="attrsObj.fontStyle" style="width: 50%">
        <el-option
          v-for="(opt, index) in fontStyleOptions"
          :key="index"
          :label="opt"
          :value="opt"
        ></el-option>
      </el-select>
    </el-form-item>
    <!-- <el-form-item
      v-if="attrsObjKeys.includes('textDecorationColor')"
      label="字体"
    ></el-form-item> -->
    <el-form-item
      v-if="attrsObjKeys.includes('showTextDecoration')"
      label="是否展示文本修饰"
    >
      <el-radio-group v-model="attrsObj.showTextDecoration">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>

    <template v-if="attrsObj?.showTextDecoration">
      <el-form-item
        v-if="attrsObjKeys.includes('textDecorationColor')"
        label="文本修饰颜色"
        prop="textDecorationColor"
      >
        <el-color-picker v-model="attrsObj.textDecorationColor" />
      </el-form-item>
      <el-form-item
        v-if="attrsObjKeys.includes('textDecorationLine')"
        label="文本修饰线"
        prop="textDecorationLine"
      >
        <el-select v-model="attrsObj.textDecorationLine" style="width: 50%">
          <el-option
            v-for="(opt, index) in textDecorationLineOptions"
            :key="index"
            :label="opt"
            :value="opt"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        v-if="attrsObjKeys.includes('textDecorationStyle')"
        label="文本修饰样式"
        prop="textDecorationStyle"
      >
        <el-select v-model="attrsObj.textDecorationStyle" style="width: 50%">
          <el-option
            v-for="(opt, index) in textDecorationStyleOptions"
            :key="index"
            :label="opt"
            :value="opt"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        v-if="attrsObjKeys.includes('textDecorationThick')"
        prop="textDecorationThick"
        label="文本修饰线厚度"
      >
        <el-input-number
          v-model="attrsObj.textDecorationThick"
          :min="0"
        ></el-input-number>
      </el-form-item>
    </template>

    <el-form-item
      v-if="attrsObjKeys.includes('textAlign')"
      label="字体对齐"
      prop="textAlign"
    >
      <el-select v-model="attrsObj.textAlign" style="width: 50%">
        <el-option
          v-for="(opt, index) in textAlignOptions"
          :key="index"
          :label="opt"
          :value="opt"
          @click="console.log(opt)"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('color')"
      label="字体颜色"
      prop="color"
    >
      <el-color-picker v-model="attrsObj.color" />
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('showBorder')"
      label="是否显示边框"
      prop="border"
    >
      <el-checkbox v-model="attrsObj.showBorder"></el-checkbox>
    </el-form-item>
    <!-- 边框样式 -->
    <template v-if="attrsObj?.showBorder">
      <el-form-item
        v-if="attrsObjKeys.includes('borderWidth')"
        label="边框宽度"
        prop="borderWidth"
      >
        <el-input-number
          v-model="attrsObj.borderWidth"
          :min="0"
        ></el-input-number>
      </el-form-item>
      <el-form-item
        v-if="attrsObjKeys.includes('borderStyle')"
        label="边框样式"
        prop="borderStyle"
      >
        <!-- <el-checkbox v-model="attrsObj.borderStyle"></el-checkbox> -->
        <el-select v-model="attrsObj.borderStyle" style="width: 50%">
          <el-option
            v-for="(opt, index) in borderStyleOptions"
            :key="index"
            :label="opt"
            :value="opt"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        v-if="attrsObjKeys.includes('borderColor')"
        label="边框颜色"
        prop="borderColor"
      >
        <el-color-picker v-model="attrsObj.borderColor" />
      </el-form-item>
    </template>
    <el-form-item
      v-if="attrsObjKeys.includes('borderRadius')"
      label="边框弧度"
      prop="borderRadius"
    >
      <el-input-number
        v-model="attrsObj.borderRadius"
        :min="0"
      ></el-input-number>
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('backgroundColor')"
      label="背景颜色"
      prop="backgroundColor"
    >
      <el-color-picker v-model="attrsObj.backgroundColor" />
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('cursor')"
      label="光标"
      prop="cursor"
    >
      <el-select v-model="attrsObj.cursor" style="width: 50%">
        <el-option
          v-for="opt in cursorOptions"
          :key="opt"
          :label="opt"
          :value="opt"
        ></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import type { TElementAttrs } from "@/components/czForm/data";
import {
  borderStyleOptions,
  fontWeightOptions,
  fontStyleOptions,
  textAlignOptions,
  boxSizingOptions,
  alignItemsOptions,
  cursorOptions,
  fontFamilyOptions,
  textDecorationLineOptions,
  textDecorationStyleOptions,
} from "./data";

const attrsObj: TElementAttrs = defineModel();
const attrsObjKeys = ref<string[]>([]);

watch(
  () => attrsObj.value,
  (val) => {
    if (val) {
      attrsObjKeys.value = Object.keys(val);
      if (attrsObjKeys.value.includes("padding")) {
        ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"].forEach(
          (key) => {
            attrsObj.value[key] = attrsObj.value.padding;
          }
        );
      }
      if (attrsObjKeys.value.includes("margin")) {
        ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach(
          (key) => {
            attrsObj.value[key] = attrsObj.value.margin;
          }
        );
      }
    }
  }
);
</script>
