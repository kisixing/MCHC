import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [

  { name:'ckgongg', key: '.specialityCheckUp', label: "宫高", input_type: "input", span: 7, rules: "required" },
  { name:'add_FIELD_ckjc', key: '.specialityCheckUp', label: "胎心率&先露", input_type: "input", span: 24, rules: "required" },
  { name:'add_FIELD_gynecological_examination', key: '.specialityCheckUp', label: "妇科检查", input_type: "checkbox", span: 24, rules: "required",
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
  { name:'ckwaiy', key: '.specialityCheckUp', label: "外阴", input_type: "input", span: 6, rules: "required" },
  { name:'ckyind', key: '.specialityCheckUp', label: "阴道", input_type: "input", span: 6, rules: "required" },
  { name:'ckgongj', key: '.specialityCheckUp', label: "宫颈", input_type: "input", span: 6, rules: "required" },
  { name:'ckgongt', key: '.specialityCheckUp', label: "子宫", input_type: "input", span: 6, rules: "required" },
  { name:'ckfuj', key: '.specialityCheckUp.ckfuj', label: "附件", input_type: "input", span: 6 },

]
export default config;

