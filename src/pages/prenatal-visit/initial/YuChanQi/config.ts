import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
  { name: 'gesmoc', key: 'gesmoc', label: "末次月经", input_type: "date", span: 7, rules: "required"},
  // { name: 'add_FIELD_gesmoc_unknown', key: 'add_FIELD_gesmoc_unknown', label: "已审核", input_type: "checkbox", span: 7},
  { name: 'gesexpect', key: 'gesexpect', label: "预产期-日期", input_type: "date", span: 7},
  { name: 'gesexpectrv', key: 'gesexpectrv', label: "预产期-B超", input_type: "date", span: 7, rules: "required"},
  { name: 'ckzdate', key: 'ckzdate', label: "早孕-B超", input_type: "date", span: 7},
  { name: 'ckztingj', key: 'ckztingj', label: "停经", input_type: "input", span: 7},
  { name: 'ckzcrl', key: 'ckzcrl', label: "CRL", input_type: "input", span: 7},
  { name: 'ckzbpd', key: 'ckzbpd', label: "NT", input_type: "input", span: 7},
  { name: 'ckzweek', key: 'ckzweek', label: "如孕", input_type: "input", span: 7},
  { name: 'pregnantInfo-add_FIELD_shouyun', key: '.pregnantInfo', label: "受孕方式", input_type: "checkbox", span: 10, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "add_FIELD_shouyun",
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

