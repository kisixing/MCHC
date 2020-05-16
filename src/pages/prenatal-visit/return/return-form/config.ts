import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [

  { name: 'fetalCondition', key: '.list', label: "位置", input_type: "input", span: 6, rules: "required", input_props:{} },
  { name: 'fetalCondition', key: '.list', label: "胎心率", input_type: "input", span: 6, rules: "required", input_props:{} },
  { name: 'fetalCondition', key: '.list', label: "先露", input_type: "input", span: 6, rules: "required", input_props:{} },

  { name: 'fetalUltrasound', key: '.list', label: "胎儿体重", input_type: "input", span: 6, rules: "required", input_props:{} },
  { name: 'fetalUltrasound', key: '.list', label: "AVF", input_type: "input", span: 6, rules: "required", input_props:{} },
  { name: 'fetalUltrasound', key: '.list', label: "脐血流", input_type: "input", span: 6, rules: "required", input_props:{} },

  { name: 'fpg', key: '.list', label: "空腹血糖", input_type: "input", span: 6, rules: "required", input_props:{} },
  { name: 'pbg2h', key: '.list', label: "餐后2H", input_type: "input", span: 6, rules: "required", input_props:{} },
  { name: 'hbAlc', key: '.list', label: "HbAlc", input_type: "input", span: 6, rules: "required", input_props:{} },


  { name: 'riMoMedicine', key: '.list', label: "早", input_type: "input", span: 4, rules: "required", input_props:{} },
  { name: 'riMoDosage', key: '.list', label: "", input_type: "input", span: 2, rules: "required", input_props:{} },
  { name: 'riNoMedicine', key: '.list', label: "中", input_type: "input", span: 4, rules: "required", input_props:{} },
  { name: 'riNoDosage', key: '.list', label: "", input_type: "input", span: 2, rules: "required", input_props:{} },
  { name: 'riEvMedicine', key: '.list', label: "晚", input_type: "input", span: 4, rules: "required", input_props:{} },
  { name: 'riEvDosage', key: '.list', label: "", input_type: "input", span: 2, rules: "required", input_props:{} },
  { name: 'riSlMedicine', key: '.list', label: "睡前", input_type: "input", span: 4, rules: "required", input_props:{} },
  { name: 'riSlDosage', key: '.list', label: "", input_type: "input", span: 2, rules: "required", input_props:{} },

  { name: 'upState', key: '.list', label: "定性", input_type: "input", span: 6, rules: "required", input_props:{} },
  { name: 'upDosage24h', key: '.list', label: "24H定量", input_type: "input", span: 6, rules: "required", input_props:{} },
  { name: 'medicationPlan', key: '.list', label: "用药方案", input_type: "input", span: 6, rules: "required", input_props:{} },


  { name: 'examination', key: '.list', label: "检验检查", input_type: "input", span: 12, rules: "required", input_props:{type: "textarea",} },
  { name: 'treatment', key: '.list', label: "处理措施", input_type: "input", span: 12, rules: "required", input_props:{type: "textarea",} },
  { name: 'rvisitOsType', key: '.list', label: "下次复诊", input_type: "input", span: 6, rules: "required", input_props:{} },
  { name: 'ckappointmentWeek', key: '.list', label: "", input_type: "input", span: 6, rules: "required", input_props:{} },
  { name: 'ckappointment', key: '.list.ckappointment', label: "", input_type: "date", span: 6, rules: "required", input_props:{} },
  { name: 'ckappointmentArea', key: '.list', label: "", input_type: "input", span: 6, rules: "required", input_props:{} },

]
export default config;

