import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
  { name: 'lmp', key: '.lmp', label: "末次月经", input_type: "date", span: 7, rules: "required"},
  // { name: 'add_FIELD_gesmoc_unknown', key: 'add_FIELD_gesmoc_unknown', label: "已审核", input_type: "checkbox", span: 7},
  { name: 'edd', key: '.edd', label: "预产期-日期", input_type: "date", span: 7},
  { name: 'sureEdd', key: '.sureEdd', label: "预产期-B超", input_type: "date", span: 7, rules: "required"},
  // { name: 'sureEdd', key: '.sureEdd', label: "早孕-B超", input_type: "date", span: 7},
  // { name: 'menopause', key: '.ultrasounds.menopause', label: "停经", input_type: "input", span: 7},
  // { name: 'crl', key: '.ultrasounds.crl', label: "CRL", input_type: "input", span: 7},
  // { name: 'nt', key: '.ultrasounds.nt', label: "NT", input_type: "input", span: 7},
  // { name: 'gestationalWeek', key: '.ultrasounds.gestationalWeek', label: "如孕", input_type: "input", span: 7},
  { name: 'conceiveMode', key: '.personalprofile.conceiveMode(Note)', label: "受孕方式", input_type: "checkbox", span: 10, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "conceiveMode",
          label: "受孕方式",
          options: [
            {label: "IVF", value: 1},
            {label: "自然", value: 2},
          ],
          extraEditors: [
            {
              key: 1,
              editors: [
                { name: "", key: "", label: "", input_type: "input" }
              ]
            }
          ]
        },
      ],
    }
  },
]
export default config;

