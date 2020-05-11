import { FormConfig } from '../../../../components/MyForm/interface';

const config: Array<FormConfig> = [
  {
    key: ".downsscreen_0", label: "疾病史", input_type: "b-custom", span: 24, offset: 8,
    rules: {},
    input_props: {
      config: [
        { key: '.chief complaint', label: "高血压", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "糖尿病", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "心脏病", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "其他", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "手术史", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "过敏史", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "输血史", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "其他", input_type: "input", span: 7, offset: 1, input_props:{} },
      ]
    }
  },
]
export default config;

