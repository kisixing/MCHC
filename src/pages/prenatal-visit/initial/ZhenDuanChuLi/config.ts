import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [

    { name: 'id1', key: '.id', label: "id1", input_type: "input", span: 0, hidden: true},

    // { name: 'diagnosisHandle', key: '.diagnosis.diagnosisHandle', label: "处理措施", input_type: "input", span: 24, rules: "required", input_props:{type: "textarea",} },
    { name: 'appointmentType', key: '.appointmentType', label: "下次复诊", input_type: "input", span: 6, rules: "required", input_props:{} },
    // { name: 'nextRvisitWeek', key: '.diagnosis.nextRvisitWeek', label: "", input_type: "input", span: 6, rules: "required", input_props:{} },
    { name: 'appointmentDate', key: '.appointmentDate', label: "", input_type: "date", span: 6, rules: "required", input_props:{} },
    { name: 'appointmentPeriod', key: '.appointmentPeriod', label: "", input_type: "input", span: 6, rules: "required", input_props:{} },
    // { name: 'add_FIELD_first_save_ivisit_time', key: '.diagnosis.add_FIELD_first_save_ivisit_time', label: "初诊日期", input_type: "input", span: 7, rules: "required", input_props:{} },
    // { name: 'add_FIELD_first_clinical_doctor', key: '.diagnosis.add_FIELD_first_clinical_doctor', label: "初诊医生", input_type: "input", span: 7, rules: "required", input_props:{} },

]
export default config;

