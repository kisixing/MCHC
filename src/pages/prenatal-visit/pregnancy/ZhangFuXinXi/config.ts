import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
  {
    name: "zhangfuxinxi",
    key: ".zhangfuxinxi",
    label: "丈夫基本信息",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name: 'userhname', key: '.userhname', label: "姓名", input_type: "input", span: 7 },
        { name: 'userhmobile', key: '.userhmobile', label: "手机号码", input_type: "input", span: 7 },
        { name: 'userhmcno', key: '.userhmcno', label: "配偶门诊号", input_type: "input", span: 7 },
        { name: 'add_FIELD_husband_useridtype', key: '.add_FIELD_husband_useridtype', label: "证件类型", input_type: "select", span: 7, input_props:{options: [{ value: 1, label: 1 }]} },
        { name: 'userhidno', key: '.userhidno', label: "证件号码", input_type: "input", span: 7 },
        { name: 'userhage', key: '.userhage', label: "年龄", input_type: "input", span: 7 },
        { name: 'userhnation', key: '.userhnation', label: "国籍", input_type: "input", span: 7 },
        { name: 'userhroots', key: '.userhroots', label: "籍贯", input_type: "input", span: 7 },
        { name: 'userhpeople', key: '.userhpeople', label: "民族", input_type: "input", span: 7 },
        { name: 'userhoccupation', key: '.userhoccupation', label: "职业", input_type: "select", span: 7, input_props:{options: [{ value: 1, label: 1 }]} },
        { name: 'add_FIELD_husband_smoking', key: '.add_FIELD_husband_smoking', label: "烟(支)", input_type: "input", span: 7, rules: "required" },
        { name: 'drink', key: '.drink', label: "酒(ml)", input_type: "select", span: 14, rules: "required",
          input_props: {
            type: "default",
            radio: false,
            options: [
              { label: "无", value: "0" },
              { label: "白酒", value: "1" },
              { label: "啤酒", value: "2" },
              { label: "红酒", value: "3" },
            ],
            extraEditors: [
              {
                key: "1",
                editors: [
                  { name: "", key: "", input_type: "input" }
                ]
              }
            ]
          } },
        { name: 'userhjib', key: '.userhjib', label: "是否患有疾病", input_type: "select", span: 14, rules: "required",
          input_props: {
            type: "default",
            radio: false,
            options: [
              { label: "无", value: "0" },
              { label: "高血压", value: "1" },
              { label: "糖尿病", value: "2" },
              { label: "心脏病", value: "3" },
            ],
            extraEditors: []
          }
        },
      ]
    }
  }
]
export default config;

