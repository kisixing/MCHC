import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
    { name: 'userhname', key: '.userhname', label: "姓名", input_type: "input", span: 7 },
    { name: 'userhmobile', key: '.userhmobile', label: "手机号码", input_type: "input", span: 7 },
    { name: 'userhmcno', key: '.userhmcno', label: "配偶门诊号", input_type: "input", span: 7 },
    { name: 'add_FIELD_husband_useridtype', key: '.add_FIELD_husband_useridtype', label: "证件类型", input_type: "select", span: 7, input_props:{selectOptions: [{ value: 1, label: 1 }]} },
    { name: 'userhidno', key: '.userhidno', label: "证件号码", input_type: "input", span: 7 },
    { name: 'userhage', key: '.userhage', label: "年龄", input_type: "input", span: 7 },
    { name: 'userhnation', key: '.userhnation', label: "国籍", input_type: "input", span: 7 },
    { name: 'userhroots', key: '.userhroots', label: "籍贯", input_type: "input", span: 7 },
    { name: 'userhpeople', key: '.userhpeople', label: "民族", input_type: "input", span: 7 },
    { name: 'userhoccupation', key: '.userhoccupation', label: "职业", input_type: "select", span: 7, input_props:{selectOptions: [{ value: 1, label: 1 }]} },
    { name: 'add_FIELD_husband_smoking', key: '.add_FIELD_husband_smoking', label: "烟(支)", input_type: "input", span: 7, rules: "required" },
    { name: 'drink', key: '.drink', label: "酒(ml)", input_type: "select", span: 7, rules: "required", input_props:{selectOptions: [{ value: 1, label: 1 }]} },
    { name: 'userhjib', key: '.userhjib', label: "是否患有疾病", input_type: "input", span: 7, rules: "required" },
]
export default config;

