import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
  {
    name: "preghiss",
    key: ".gestation.preghiss",
    label: "孕产史",
    input_type: "table",
    input_props: {
      editable: true,
      tableColumns: [
        { key: "pregnum", title: "孕次", editor: { name: "", key: "", input_type: "input" } },
        { key: "datagridYearMonth", title: "年-月", editor: { name: "", key: "", input_type: "input" } },
        { key: "zir", title: "自然", editor: { name: "", key: "", input_type: "input" } },
        { key: "removalUterus", title: "清宫	", editor: { name: "", key: "", input_type: "input" } },
        { key: "reng", title: "人工", editor: { name: "", key: "", input_type: "input" } },
        { key: "yinch", title: "引产", editor: { name: "", key: "", input_type: "input" } },
        { key: "sit", title: "死胎	", editor: { name: "", key: "", input_type: "input" } },
        { key: "zaoch", title: "早产", editor: { name: "", key: "", input_type: "input" } },
        { key: "zuych", title: "足月产", editor: { name: "", key: "", input_type: "input" } },
        { key: "shunch", title: "顺产", editor: { name: "", key: "", input_type: "input" } },
        { key: "shouShuChanType", title: "手术产式", editor: { name: "", key: "", input_type: "input" } },
        { key: "chuxue", title: "出血", editor: { name: "", key: "", input_type: "input" } },
        { key: "chanrure", title: "产褥热", editor: { name: "", key: "", input_type: "input" } },

        { key: "births", title: "胎数	", editor: { name: "", key: "", input_type: "input" } },
        { key: "xingb", title: "性别", editor: { name: "", key: "", input_type: "input" } },
        { key: "child", title: "生存", editor: { name: "", key: "", input_type: "input" } },
        { key: "deathTime", title: "死亡时间", editor: { name: "", key: "", input_type: "input" } },
        { key: "deathCause", title: "死亡原因", editor: { name: "", key: "", input_type: "input" } },
        { key: "sequela", title: "后遗症", editor: { name: "", key: "", input_type: "input" } },
        { key: "tizh", title: "出生体重(kg)", editor: { name: "", key: "", input_type: "input" } },
        { key: "hospital", title: "分娩医院", editor: { name: "", key: "", input_type: "input" } },
        { key: "bingfzh", title: "特殊情况", editor: { name: "", key: "", input_type: "input" } },
      ]
    }
  },
]
export default config;

