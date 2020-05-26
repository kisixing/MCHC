import { FormConfig } from '@/components/MyForm/interface';
import { keyBy, get } from 'lodash';

const config: Array<FormConfig> = [
  {
    name: "list",
    key: ".list",
    label: "",
    input_type: "table",
    input_props: {
      editable: true,
      hiddenBtn: true,
      tableColumns: [
        { key: "visitDate", title: "日期", editor: { name: "", key: "", input_type: "date" } },
        { key: "gestationalWeek", title: "孕周", editor: { name: "gestationalWeek", key: "", input_type: "input" } },
        { key: "physicalExam.weight", title: "体重", editor: { name: "", key: "", input_type: "input" } },
        { key: "physicalExam.diastolic", title: "收缩压	", editor: { name: "", key: "", input_type: "input" } },
        { key: "physicalExam.systolic", title: "舒张压	", editor: { name: "", key: "", input_type: "input" } },
        // { key: "ckzijzhz", title: "症状及查体", editor: { name: "", key: "", input_type: "input" } },
        { key: "gynecologicalExam.fundalHeight", title: "宫高", editor: { name: "", key: "", input_type: "input" } },
        // { key: "taix", title: "胎心率	", editor: { name: "", key: "", input_type: "input" } },
        // { key: "xianl", title: "先露", editor: { name: "", key: "", input_type: "input" } },
        { key: "generalExam.edemaNote", title: "下肢水肿", editor: { name: "", key: "", input_type: "input" } },
        // { key: "examination", title: "检验检查", editor: { name: "", key: "", input_type: "input" } },
        // { key: "treatment", title: "处理措施", editor: { name: "", key: "", input_type: "input" } },
        { key: "appointmentDate", title: "下次复诊", editor: { name: "", key: "", input_type: "date" } },
        { key: "doctor", title: "医生", editor: { name: "", key: "", input_type: "input" } },
      ]
    }
  },
]
export default config;

