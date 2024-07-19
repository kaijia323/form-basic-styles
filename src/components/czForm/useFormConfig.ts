import type { FormItemProps } from "element-plus/es";
import type { FormComponents } from "./formComponents";
import { ExtractPublicPropTypes } from "vue";

export type FormItemSlot = {
  type: FormComponents[keyof FormComponents];
  props: ExtractPublicPropTypes<FormComponents[keyof FormComponents]>;
  slots: FormItemSlot[];
};

export type FormConfig = {
  formItemProps: FormItemProps;
  slots: FormItemSlot[];
};

export const useFormConfig = (config: FormConfig) => {
  console.log(config);
};
