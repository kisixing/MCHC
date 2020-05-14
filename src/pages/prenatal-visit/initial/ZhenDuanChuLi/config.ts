import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [

    { name: 'diagnosisHandle', key: '.diagnosis', label: "处理措施", input_type: "input", span: 24, rules: "required", input_props:{type: "textarea",} },
    { name: 'xiacsftype', key: '.diagnosis', label: "下次复诊", input_type: "input", span: 6, rules: "required", input_props:{} },
    { name: 'nextRvisitWeek', key: '.diagnosis', label: "", input_type: "input", span: 6, rules: "required", input_props:{} },
    { name: 'xiacsfdate', key: '.diagnosis.xiacsfdate', label: "", input_type: "date", span: 6, rules: "required", input_props:{} },
    { name: 'xiacsfdatearea', key: '.diagnosis', label: "", input_type: "input", span: 6, rules: "required", input_props:{} },
    { name: 'add_FIELD_first_save_ivisit_time', key: '.diagnosis', label: "初诊日期", input_type: "input", span: 7, rules: "required", input_props:{} },
    { name: 'add_FIELD_first_clinical_doctor', key: '.diagnosis', label: "初诊医生", input_type: "input", span: 7, rules: "required", input_props:{} },

]
export default config;

