import { FormConfig } from '@/components/MyForm/interface';
import * as Options from '@/pages/prenatal-visit/options';

const config: Array<FormConfig> = [

    { name: 'prescription', key: '.prescription', label: "处理措施", input_type: "input", span: 24, input_props:{type: "textarea",} },
    { name: 'appointmentType', key: '.appointmentType', label: "下次复诊", input_type: "select", span: 5, input_props:{options: Options.appointmentWeekOptions} },
    { name: 'appointmentWeek', key: '.appointmentWeek', label: "", input_type: "select", span: 3, input_props:{options: Options.appointmentDateOptions}},
    { name: 'appointmentDate', key: '.appointmentDate', label: "", input_type: "date", span: 3, rules: "required" },
    { name: 'appointmentPeriod', key: '.appointmentPeriod', label: "", input_type: "select", span: 3, input_props:{options: Options.appointmentPeriodOptions} },
    { name: 'visitDate', key: '.visitDate', label: "初诊日期", input_type: "date", span: 7, is_new_row: true },
    { name: 'doctor', key: '.doctor', label: "初诊医生", input_type: "input", span: 7 },

]
export default config;

