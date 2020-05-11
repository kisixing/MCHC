import { FormConfig } from '../../../../components/MyForm/interface';

const config: Array<FormConfig> = [
  { key: 'pregnantInfo.gesmoc', label: "末次月经", input_type: "date", span: 7, offset: 1, rules: "required", input_props:{} },
  // { key: '.aaa', label: "已审核", input_type: "checkbox", span: 7, offset: 1, input_props:{} },
  { key: '.pregnantInfo.gesmoc', label: "预产期-日期", input_type: "date", span: 7, offset: 1, input_props:{} },
  { key: '.pregnantInfo.gesmoc', label: "预产期-B超", input_type: "date", span: 7, offset: 1, rules: "required", input_props:{} },
  { key: '.pregnantInfo.gesmoc', label: "早孕-B超", input_type: "date", span: 7, offset: 1, input_props:{} },
  { key: '.pregnantInfo.gesmoc', label: "停经", input_type: "input", span: 7, offset: 1, input_props:{} },
  { key: '.pregnantInfo.gesmoc', label: "CRL", input_type: "input", span: 7, offset: 1, input_props:{} },
  { key: '.pregnantInfo.gesmoc', label: "NT", input_type: "input", span: 7, offset: 1, input_props:{} },
  { key: '.pregnantInfo.gesmoc', label: "如孕", input_type: "input", span: 7, offset: 1, input_props:{} },
  { key: '.pregnantInfo.gesmoc', label: "受孕方式", input_type: "checkbox", span: 7, offset: 1, rules: "required", input_props:{} },
]
export default config;

