import { FormConfig } from '@/components/MyForm/interface';
import * as Options from '@/pages/prenatal-visit/options';

const config: Array<FormConfig> = [
  {
    name: "record",
    key: ".*",
    label: "本次产检记录",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name: 'visitDate', key: '.visitDate', label: "日期", input_type: "date", span: 8, rules: "required" },
        { name: 'gestationalWeek', key: '.gestationalWeek', label: "孕周", input_type: "input", span: 8, rules: "required" },
        { name: 'weight', key: '.physicalExam.weight', label: "体重", input_type: "input", span: 8, rules: "required" },
        { name: 'systolic', key: '.physicalExam.systolic', label: "收缩压", input_type: "input", span: 8 },
        { name: 'diastolic', key: '.physicalExam.diastolic', label: "舒张压", input_type: "input", span: 8 },
        { name: 'fundalHeight', key: '.gynecologicalExam.fundalHeight', label: "宫高", input_type: "input", span: 8, rules: "required" },
        { name: 'edema', key: '.generalExam.edema', label: "下肢水肿", input_type: "select", span: 6, input_props:{options: Options.edemaOptions} },

        {
          name: "fetusXX",
          key: ".fetus",
          label: "胎儿信息",
          input_type: "array-custom",
          is_new_row: true,
          input_props: {
            config: [
              { name: 'fetalMovement', key: '.fetalMovement', label: "胎动", input_type: "select", span: 6, input_props:{options: Options.fetalMovementOptions} },
              { name: 'fetalHeartRate', key: '.fetalHeartRate', label: "胎心率", input_type: "input", span: 6, unit: 'bmp' },
              { name: 'presentation', key: '.presentation', label: "先露", input_type: "select", span: 6, input_props:{options: Options.presentationOptions} },
              { name: 'fetalPosition', key: '.fetalPosition', label: "位置", input_type: "input", span: 6 },
            ]
          }
        },
        {
          name: "fetusCS",
          key: ".fetus",
          label: "胎儿超声",
          input_type: "array-custom",
          is_new_row: true,
          input_props: {
            config: [
              { name: 'fetusWeight', key: '.weight', label: "胎儿体重", input_type: "input", span: 8 },
              { name: 'avf', key: '.avf', label: "AVF", input_type: "input", span: 8 },
              { name: 'umbilicalbloodflow', key: '.umbilicalbloodflow', label: "脐血流", input_type: "input", span: 8 },
            ]
          }
        },

        { name: 'bg0h', key: '.ogttExam.bg0h', label: "空腹血糖", input_type: "input", span: 8, unit: 'mmol/L' },
        { name: 'bg2h', key: '.ogttExam.bg2h', label: "餐后2H血糖", input_type: "input", span: 8, unit: 'mmol/L' },
        { name: 'hgb', key: '.bloodTestExam.hgb', label: "HbAlc", input_type: "input", span: 8, unit: '%' },

        // { name: 'riMoMedicine', key: '.list.riMoMedicine', label: "早", input_type: "input", span: 8 },
        // { name: 'riMoDosage', key: '.list.riMoDosage', label: "", input_type: "input", span: 4 },
        // { name: 'riNoMedicine', key: '.list.riNoMedicine', label: "中", input_type: "input", span: 8 },
        // { name: 'riNoDosage', key: '.list.riNoDosage', label: "", input_type: "input", span: 4 },
        // { name: 'riEvMedicine', key: '.list.riEvMedicine', label: "晚", input_type: "input", span: 8 },
        // { name: 'riEvDosage', key: '.list.riEvDosage', label: "", input_type: "input", span: 4 },
        // { name: 'riSlMedicine', key: '.list.riSlMedicine', label: "睡前", input_type: "input", span: 8 },
        // { name: 'riSlDosage', key: '.list.riSlDosage', label: "", input_type: "input", span: 4 },
        // { name: 'upState', key: '.list.upState', label: "定性", input_type: "input", span: 6 },
        // { name: 'upDosage24h', key: '.list.upDosage24h', label: "24H定量", input_type: "input", span: 6 },

        { name: 'medication', key: '.pdMedication.medication', label: "用药方案(药名)", input_type: "input", span: 12 },
        { name: 'amount', key: '.pdMedication.amount', label: "用药方案(剂量)", input_type: "input", span: 12 },

        // { name: 'examination', key: '.list.examination', label: "检验检查", input_type: "input", span: 12, input_props:{type: "textarea",} },
        { name: 'prescription ', key: '.prescription', label: "处理措施", input_type: "input", span: 12, input_props:{type: "textarea",} },
        { name: 'appointmentType', key: '.appointmentType', label: "下次复诊", input_type: "select", span: 5, is_new_row: true, input_props:{options: Options.appointmentWeekOptions} },
        { name: 'appointmentWeek', key: '.appointmentWeek', label: "", input_type: "select", span: 3, input_props:{options: Options.appointmentDateOptions}},
        { name: 'appointmentDate', key: '.appointmentDate', label: "", input_type: "date", span: 3, rules: "required" },
        { name: 'appointmentPeriod', key: '.appointmentPeriod', label: "", input_type: "select", span: 3, input_props:{options: Options.appointmentPeriodOptions} },
      ]
    }
  }
]
export default config;

