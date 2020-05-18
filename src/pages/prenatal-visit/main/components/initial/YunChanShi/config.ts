import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
  {
    name: "pregnancyHistories",
    key: ".pregnancyHistories",
    label: "孕产史",
    input_type: "table",
    input_props: {
      editable: true,
      tableColumns: [
        { key: "gravidityindex", title: "孕次", editor: { name: "", key: "", input_type: "input" } },
        { key: "year", title: "年", editor: { name: "", key: "", input_type: "date" } },
        { key: "naturalAbortion", title: "自然流产", editor: { name: "", key: "", input_type: "checkbox", input_props: {type: 'default'} } },
        { key: "currettage", title: "清宫	", editor: { name: "", key: "", input_type: "checkbox", input_props: {type: 'default'} } },
        { key: "naturalAbortion", title: "手术流产", editor: { name: "", key: "", input_type: "checkbox", input_props: {type: 'default'} } },
        { key: "inducedLabor", title: "引产", editor: { name: "", key: "", input_type: "checkbox", input_props: {type: 'default'} } },
        { key: "fetusdeath", title: "死胎	", editor: { name: "", key: "", input_type: "checkbox", input_props: {type: 'default'} } },
        // { key: "zaoch", title: "早产", editor: { name: "", key: "", input_type: "checkbox", input_props: {type: 'default'} } },
        { key: "term", title: "足月产", editor: { name: "", key: "", input_type: "checkbox", input_props: {type: 'default'} } },
        { key: "vaginalDelivery", title: "顺产", editor: { name: "", key: "", input_type: "checkbox", input_props: {type: 'default'} } },
        // { key: "shouShuChanType", title: "手术产式", editor: { name: "", key: "", input_type: "input" } },
        { key: "hemorrhage", title: "出血", editor: { name: "", key: "", input_type: "checkbox", input_props: {type: 'default'} } },
        { key: "puerperalFever", title: "产褥热", editor: { name: "", key: "", input_type: "checkbox", input_props: {type: 'default'} } },
        // { key: "fetalcount", title: "胎数	", editor: { name: "", key: "", input_type: "input" } },
        // { key: "xingb", title: "性别", editor: { name: "", key: "", input_type: "input" } },
        // { key: "child", title: "生存", editor: { name: "", key: "", input_type: "input" } },
        // { key: "deathTime", title: "死亡时间", editor: { name: "", key: "", input_type: "input" } },
        // { key: "deathCause", title: "死亡原因", editor: { name: "", key: "", input_type: "input" } },
        // { key: "sequela", title: "后遗症", editor: { name: "", key: "", input_type: "input" } },
        // { key: "tizh", title: "出生体重(kg)", editor: { name: "", key: "", input_type: "input" } },
        { key: "hospital", title: "分娩医院", editor: { name: "", key: "", input_type: "input" } },
        { key: "exceptionalcase", title: "特殊情况", editor: { name: "", key: "", input_type: "input" } },
      ]
    }
  },
]
export default config;

