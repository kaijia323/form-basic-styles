// 所有表单组件
import {
  ElForm,
  ElFormItem,
  ElButton,
  ElInput,
  ElSelect,
  ElOption,
  ElInputNumber,
  ElCheckboxGroup,
  ElCheckbox,
  ElRadioGroup,
  ElRadio,
  ElColorPicker,
  ElAutocomplete,
  ElCascader,
  ElTransfer,
  ElDatePicker,
  ElRate,
  ElSlider,
  ElSwitch,
  ElTimePicker,
  ElTimeSelect,
  ElTreeSelect,
  ElTree,
  ElUpload,
} from "element-plus";

// 如需更新类型，请打开注释

// const names = [
//   ElForm,
//   ElFormItem,
//   ElButton,
//   ElInput,
//   ElSelect,
//   ElOption,
//   ElInputNumber,
//   ElCheckboxGroup,
//   ElCheckbox,
//   ElRadioGroup,
//   ElRadio,
//   ElColorPicker,
//   ElAutocomplete,
//   ElCascader,
//   ElTransfer,
//   ElDatePicker,
//   ElRate,
//   ElSlider,
//   ElSwitch,
//   ElTimePicker,
//   ElTimeSelect,
//   ElTreeSelect,
//   ElTree,
//   ElUpload,
// ];

// const types = `export type FormComponents = {
//   ${names
//     .map(item => {
//       return `${item.name}: typeof ${item.name}`;
//     })
//     .join(",")}
// }`;

// console.log(types);

export type FormComponents = {
  ElForm: typeof ElForm;
  ElFormItem: typeof ElFormItem;
  ElButton: typeof ElButton;
  ElInput: typeof ElInput;
  ElSelect: typeof ElSelect;
  ElOption: typeof ElOption;
  ElInputNumber: typeof ElInputNumber;
  ElCheckboxGroup: typeof ElCheckboxGroup;
  ElCheckbox: typeof ElCheckbox;
  ElRadioGroup: typeof ElRadioGroup;
  ElRadio: typeof ElRadio;
  ElColorPicker: typeof ElColorPicker;
  ElAutocomplete: typeof ElAutocomplete;
  ElCascader: typeof ElCascader;
  ElTransfer: typeof ElTransfer;
  ElDatePicker: typeof ElDatePicker;
  ElRate: typeof ElRate;
  ElSlider: typeof ElSlider;
  ElSwitch: typeof ElSwitch;
  ElTimePicker: typeof ElTimePicker;
  ElTimeSelect: typeof ElTimeSelect;
  ElTreeSelect: typeof ElTreeSelect;
  ElTree: typeof ElTree;
  ElUpload: typeof ElUpload;
};

export const formComponents: FormComponents = {
  ElForm,
  ElFormItem,
  ElButton,
  ElInput,
  ElSelect,
  ElOption,
  ElInputNumber,
  ElCheckboxGroup,
  ElCheckbox,
  ElRadioGroup,
  ElRadio,
  ElCascader,
  ElColorPicker,
  ElAutocomplete,
  ElTransfer,
  ElDatePicker,
  ElRate,
  ElSlider,
  ElSwitch,
  ElTimePicker,
  ElTimeSelect,
  ElTreeSelect,
  ElTree,
  ElUpload,
};
