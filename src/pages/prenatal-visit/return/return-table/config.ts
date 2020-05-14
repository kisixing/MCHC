import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
  {
    name: "list",
    key: ".list",
    label: "",
    input_type: "table",
    input_props: {
      editable: false,
      tableColumns: [
        { key: "checkdate", title: "日期", editor: { name: "", key: "", input_type: "input" } },
        { key: "ckweek", title: "孕周", editor: { name: "", key: "", input_type: "input" } },
        { key: "cktizh", title: "体重", editor: { name: "", key: "", input_type: "input" } },
        { key: "ckpressure", title: "血压	", editor: { name: "", key: "", input_type: "input" } },
        { key: "ckzijzhz", title: "症状及查体", editor: { name: "", key: "", input_type: "input" } },
        { key: "ckgongg", title: "宫高", editor: { name: "", key: "", input_type: "input" } },
        { key: "taix", title: "胎心率	", editor: { name: "", key: "", input_type: "input" } },
        { key: "xianl", title: "先露", editor: { name: "", key: "", input_type: "input" } },
        { key: "ckfuzh", title: "下肢水肿", editor: { name: "", key: "", input_type: "input" } },
        { key: "examination", title: "检验检查", editor: { name: "", key: "", input_type: "input" } },
        { key: "treatment", title: "处理措施", editor: { name: "", key: "", input_type: "input" } },
        { key: "nextRvisitText", title: "下次复诊", editor: { name: "", key: "", input_type: "input" } },
        { key: "sign", title: "医生", editor: { name: "", key: "", input_type: "input" } },
      ]
    }
  },
]
export default config;

