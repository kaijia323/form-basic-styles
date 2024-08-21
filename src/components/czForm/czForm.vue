<template>
  <ElForm :model="attrsObj" label-width="auto">
    <template v-for="(item, index) in formConfig" :key="index">
      <ElFormItem
        v-if="!item?.show?.length || attrsObj[item.show] === true"
        :label="item.label"
        :prop="item.prop"
      >
        <!-- 非自定义 -->
        <template v-if="item.comType !== 'custom'">
          <component
            :is="`El${item.comType}`"
            v-model="attrsObj[item.prop]"
            :min="item?.min ?? 0"
            :style="{ width: item?.width }"
          >
            <template v-if="item.comType === 'Select'">
              <el-option
                v-for="(opt, index1) in item.option"
                :key="index1"
                :label="opt"
                :value="opt"
              ></el-option>
            </template>
            <template v-if="item.comType === 'RadioGroup'">
              <el-radio
                v-for="(opt, index2) in item.option"
                :key="index2"
                :label="opt"
                :value="opt"
              ></el-radio>
            </template>
          </component>
        </template>
        <!-- 自定义 padding margin -->
        <template v-else>
          <ElInputNumber
            v-model="attrsObj[item.prop + 'Top']"
            :min="item?.min"
          ></ElInputNumber>
          <ElInputNumber
            v-model="attrsObj[item.prop + 'Right']"
            :min="item?.min"
          ></ElInputNumber>
          <ElInputNumber
            v-model="attrsObj[item.prop + 'Bottom']"
            :min="item?.min"
          ></ElInputNumber>
          <ElInputNumber
            v-model="attrsObj[item.prop + 'Left']"
            :min="item?.min"
          ></ElInputNumber>
        </template>
      </ElFormItem>
    </template>
  </ElForm>
</template>

<script lang="ts" setup>
import type { TElementAttrs } from "@/components/czForm/data";
import { mapFormConfig } from "./useFormConfig";
import type { TFormItem } from "./useFormConfig";

const attrsObj: TElementAttrs = defineModel();
const attrsObjKeys = ref<string[]>([]);
const formConfig = ref<TFormItem[]>([]);

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
        // delete attrsObj.value["padding"];
      }
      if (attrsObjKeys.value.includes("margin")) {
        ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach(
          (key) => {
            attrsObj.value[key] = attrsObj.value.margin;
          }
        );
        // delete attrsObj.value.margin;
      }

      console.log(attrsObj.value, "attrsObj.value");
      // 映射表单配置
      const config: TFormItem[] = [];
      attrsObjKeys.value.forEach((key) => {
        key = key === "showBorder" ? "border" : key;
        if (mapFormConfig[key]) {
          config.push(mapFormConfig[key]);
        }
      });
      formConfig.value = config;
      console.log(attrsObjKeys.value, "keys");
      console.log(formConfig.value, "formConfig");
    }
  }
);
</script>

<!-- 组件不足之处： 1.这个组件是单拎出来的，且已经有对应的样式对象，就写了一个map对象来映射每一种类型，所以只能用于字段固定的表单中 -->
<!-- 组件改进之处： 1.插槽设置不够合理，只局限于padding，不好扩展；且组件是公用的。以后写组件要考虑多面，配置和插槽兼得，配置是给简单数据用，插槽是给复杂数据用 -->
