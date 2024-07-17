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
      v-if="attrsObjKeys.includes('paddingTop')"
      label="内边距"
      prop="padding"
    >
      <el-input-number v-model="attrsObj.paddingTop" />
      <el-input-number v-model="attrsObj.paddingRight" />
      <el-input-number v-model="attrsObj.paddingBottom" />
      <el-input-number v-model="attrsObj.paddingLeft" />
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('marginTop')"
      label="外边距"
      prop="margin"
    >
      <el-input-number v-model="attrsObj.marginTop" />
      <el-input-number v-model="attrsObj.marginRight" />
      <el-input-number v-model="attrsObj.marginBottom" />
      <el-input-number v-model="attrsObj.marginLeft" />
    </el-form-item>
    <el-form-item
      v-if="attrsObjKeys.includes('fontSize')"
      label="字体大小"
      prop="fontSize"
    >
      <el-input-number v-model="attrsObj.fontSize" :min="12"></el-input-number>
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
      v-if="attrsObjKeys.includes('backgroundColor')"
      label="背景颜色"
      prop="backgroundColor"
    >
      <el-color-picker v-model="attrsObj.backgroundColor" />
    </el-form-item>
    <el-form-item label="是否显示边框" prop="border">
      <el-checkbox v-model="attrsObj.showBorder"></el-checkbox>
    </el-form-item>
    <!-- 边框样式 -->
    <template v-if="attrsObj.showBorder">
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
const attrsObj: any = defineModel();

const attrsObjKeys = Object.keys(attrsObj.value);
console.log(attrsObjKeys, "KEYS");
import {
  borderStyleOptions,
  fontWeightOptions,
  fontStyleOptions,
  textAlignOptions,
  boxSizingOptions,
  alignItemsOptions,
  cursorOptions,
} from "./data";
</script>
