import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [

  {
    name: "record",
    key: ".*",
    label: "本次产检记录",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name: 'id', key: '.pregnancy.id', label: "id", input_type: "input", span: 0, rules: "required", hidden: true, input_props:{} },
        { name: 'visitDate', key: '.visitDate', label: "日期", input_type: "date", span: 8, rules: "required", input_props:{} },
        { name: 'gestationalWeek', key: '.gestationalWeek', label: "孕周", input_type: "input", span: 8, rules: "required", input_props:{} },
        { name: 'weight', key: '.physicalExam.weight', label: "体重", input_type: "input", span: 8, rules: "required", input_props:{} },
        { name: 'systolic', key: '.physicalExam.systolic', label: "收缩压", input_type: "input", span: 8, rules: "required", input_props:{} },
        { name: 'diastolic', key: '.physicalExam.diastolic', label: "舒张压", input_type: "input", span: 8, rules: "required", input_props:{} },
        // { name: 'riEvDosage', key: '.gynecologicalExam.riEvDosage', label: "自觉症状", input_type: "select", span: 8, rules: "required",
        //   input_props: {
        //     type: "default",
        //     radio: true,
        //     options: [
        //       { label: "无不适", value: "0" },
        //       { label: "胎动好", value: "1" },
        //       { label: "无不适，胎动好", value: "2" },
        //     ],
        //     extraEditors: []
        //   }
        // },
        { name: 'fundalHeight', key: '.gynecologicalExam.fundalHeight', label: "宫高", input_type: "input", span: 8, rules: "required", input_props:{} },
        // { name: 'riSlDosage', key: '.gynecologicalExam.riSlDosage', label: "胎心率", input_type: "input", span: 8, rules: "required", input_props:{} },
        // { name: 'riSlMedicine', key: '.gynecologicalExam.riSlMedicine', label: "先露", input_type: "input", span: 8, rules: "required",
        //   input_props: {
        //     type: "default",
        //     radio: true,
        //     options: [
        //       { label: "头", value: "0" },
        //       { label: "臀", value: "1" },
        //       { label: "肩", value: "2" },
        //       { label: "-", value: "3" },
        //     ],
        //     extraEditors: []
        //   }
        // },
        // { name: 'edemaNote', key: '.generalExam.edemaNote', label: "下肢水肿", input_type: "select", span: 8, rules: "required", is_new_row: true,
        //   input_props: {
        //     type: "default",
        //     radio: true,
        //     options: [
        //       { label: "-", value: "-" },
        //       { label: "+", value: "+" },
        //       { label: "++", value: "++" },
        //       { label: "+++", value: "+++" },
        //       { label: "++++", value: "++++" },
        //     ],
        //     extraEditors: []
        //   }
        // },

        // { name: 'fetalCondition', key: '.list.fetalCondition', label: "位置", input_type: "input", span: 8, rules: "required", input_props:{} },
        // { name: 'fetalCondition', key: '.list.fetalCondition', label: "胎心率", input_type: "input", span: 8, rules: "required", input_props:{} },
        // { name: 'fetalCondition', key: '.list.fetalCondition', label: "先露", input_type: "input", span: 8, rules: "required", input_props:{} },

        // { name: 'fetalUltrasound', key: '.list.fetalCondition', label: "胎儿体重", input_type: "input", span: 8, rules: "required", input_props:{} },
        // { name: 'fetalUltrasound', key: '.list.fetalCondition', label: "AVF", input_type: "input", span: 8, rules: "required", input_props:{} },
        // { name: 'fetalUltrasound', key: '.list.fetalCondition', label: "脐血流", input_type: "input", span: 8, rules: "required", input_props:{} },

        // { name: 'fpg', key: '.list.fpg', label: "空腹血糖", input_type: "input", span: 8, rules: "required", input_props:{} },
        // { name: 'pbg2h', key: '.list.pbg2h', label: "餐后2H", input_type: "input", span: 8, rules: "required", input_props:{} },
        // { name: 'hbAlc', key: '.list.hbAlc', label: "HbAlc", input_type: "input", span: 8, rules: "required", input_props:{} },

        // { name: 'riMoMedicine', key: '.list.riMoMedicine', label: "早", input_type: "input", span: 8, rules: "required", input_props:{} },
        // { name: 'riMoDosage', key: '.list.riMoDosage', label: "", input_type: "input", span: 4, rules: "required", input_props:{} },
        // { name: 'riNoMedicine', key: '.list.riNoMedicine', label: "中", input_type: "input", span: 8, rules: "required", input_props:{} },
        // { name: 'riNoDosage', key: '.list.riNoDosage', label: "", input_type: "input", span: 4, rules: "required", input_props:{} },
        // { name: 'riEvMedicine', key: '.list.riEvMedicine', label: "晚", input_type: "input", span: 8, rules: "required", input_props:{} },
        // { name: 'riEvDosage', key: '.list.riEvDosage', label: "", input_type: "input", span: 4, rules: "required", input_props:{} },
        // { name: 'riSlMedicine', key: '.list.riSlMedicine', label: "睡前", input_type: "input", span: 8, rules: "required", input_props:{} },
        // { name: 'riSlDosage', key: '.list.riSlDosage', label: "", input_type: "input", span: 4, rules: "required", input_props:{} },

        // { name: 'upState', key: '.list.upState', label: "定性", input_type: "input", span: 6, rules: "required", input_props:{} },
        // { name: 'upDosage24h', key: '.list.upDosage24h', label: "24H定量", input_type: "input", span: 6, rules: "required", input_props:{} },
        // { name: 'medicationPlan', key: '.list.medicationPlan', label: "用药方案", input_type: "input", span: 6, rules: "required", input_props:{} },

        // { name: 'examination', key: '.list.examination', label: "检验检查", input_type: "input", span: 12, rules: "required", input_props:{type: "textarea",} },
        // { name: 'treatment', key: '.list.treatment', label: "处理措施", input_type: "input", span: 12, rules: "required", input_props:{type: "textarea",} },
        { name: 'appointmentType', key: '.appointmentType', label: "下次复诊", input_type: "select", span: 6, rules: "required",
          input_props: {
            type: "default",
            radio: true,
            options: [
              { label: "", value: "0" },
              { label: "普通门诊", value: "1" },
              { label: "高位门诊", value: "2" },
              { label: "教授门诊", value: "3" },
              { label: "特需门诊", value: "4" },
            ],
            extraEditors: []
          }
        },
        // { name: 'ckappointmentWeek', key: '.visitDate', label: "", input_type: "select", span: 6, rules: "required",
        //   input_props: {
        //     type: "default",
        //     radio: false,
        //     options: [
        //       { label: "一周后", value: "0" },
        //       { label: "两周后", value: "1" },
        //       { label: "三周后", value: "2" },
        //     ],
        //     extraEditors: []
        //   }
        // },
        { name: 'appointmentDate', key: '.appointmentDate', label: "", input_type: "date", span: 6, rules: "required", input_props:{} },
        { name: 'appointmentPeriod', key: '.appointmentPeriod', label: "", input_type: "select", span: 6, rules: "required",
          input_props: {
            type: "default",
            radio: true,
            options: [
              { label: "上午", value: "上午" },
              { label: "下午", value: "下午" },
            ],
            extraEditors: []
          }
        },

      ]
    }
  }

]
export default config;

