import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [

  {
    name: "specialityCheckUp",
    key: ".specialityCheckUp",
    label: "专科检查",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name:'ckgongg', key: '.ckgongg', label: "宫高", input_type: "input", span: 7, rules: "required" },
        {
          name: "add_FIELD_ckjc",
          key: ".add_FIELD_ckjc",
          label: "",
          header_label: true,
          input_type: "array-custom",
          input_props: {
            config: [
              { name: "fetalHeartRate", key: ".fetalHeartRate", label: "胎心率", input_type: "input", span: 8, offset: 0 },
              { name: "presentation", key: ".presentation", label: "先露", input_type: "input", span: 8, offset: 0 },
            ]
          }
        },
      ]
    }
  },

  { name:'add_FIELD_gynecological_examination', key: '.specialityCheckUp.add_FIELD_gynecological_examination', label: "妇科检查", input_type: "checkbox", span: 24, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "add_FIELD_gynecological_examination",
          label: "",
          options: [
            {label: "已查", value: 1},
            {label: "未查", value: 2},
          ],
          extraEditors: []
        },
      ],
    }
  },
  { name:'ckwaiy', key: '.specialityCheckUp.ckwaiy', label: "外阴", input_type: "input", span: 6, rules: "required" },
  { name:'ckyind', key: '.specialityCheckUp.ckyind', label: "阴道", input_type: "input", span: 6, rules: "required" },
  { name:'ckgongj', key: '.specialityCheckUp.ckgongj', label: "宫颈", input_type: "input", span: 6, rules: "required" },
  { name:'ckgongt', key: '.specialityCheckUp.ckgongt', label: "子宫", input_type: "input", span: 6, rules: "required" },
  { name:'ckfuj', key: '.specialityCheckUp.ckfuj', label: "附件", input_type: "input", span: 6 },

]
export default config;

