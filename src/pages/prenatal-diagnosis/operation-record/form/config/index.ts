import { FormConfig } from '@/components/MyForm/interface';
import generalConfig from './general';
import pdPreOperations from './pdPreOperation';
// 8、9、10有术前测量值
import pdPreMeasurement from './pdPreMeasurement';
// 7
import pdPreHemogram from './pdPreHemogram';
// 7
import pdPreBloodFlows from './pdPreBloodFlows';

import pdProcedures from './pdProcedure';

import invasiveNotes from './invasiveNote';
/**
 * "羊膜腔穿刺" - 1
 * "绒毛活检术" - 2
 * "脐带穿刺术" - 3
 * "羊膜腔灌注术" - 4
 * "选择性减胎" - 5
 * "羊水减量" - 6
 * "宫内输血" - 7
 * "胎儿胸腔积液" - 8
 * "腹水" - 9
 * "囊液穿刺" - 10
 */

//  术前超声 暂缺
const ultrasound: Array<FormConfig> = [
  {
    name: "ultrasound",
    key: ".ultrasound",
    input_type: "table",
    span: 24,
    offset: 0,
    input_props: {
      tableColumns: [

      ]
    }
  }
]


const pdAnaesthetic: FormConfig = {
  name: "pdAnaesthetic",
  key: ".pdAnaesthetic",
  input_type: "custom",
  label: "麻醉情况",
  header_label: true,
  input_props: {
    config: [
      {
        name: "type", key: ".type", input_type: "select", label: "麻醉方式", span: 12,
        input_props: {
          type: "default",
          options: [
            { label: "全部麻醉", value: 1 },
            { label: "局部麻醉", value: 2 },
            { label: "复合麻醉", value: 3 },
            { label: "其他", value: 4 },
          ]
        }
      },
      { name: "doctor", key: ".doctor", input_type: "input", label: "麻醉医生", span: 12 },
    ]
  }
}


const pdMedications: FormConfig = {
  name: "pdMedications",
  key: ".pdMedications",
  label: "用药情况",
  header_label: true,
  input_type: "array-custom",
  input_props: {
    config: [
      { name: "medication", key: ".medication", input_type: "input", label: "药物名称", span: 6 },
      { name: "amount", key: ".amount", input_type: "input", label: "用药量", span: 6 },
      { name: "unit", key: ".unit", input_type: "input", label: "单位", span: 6 },
    ]
  }
}

const pdPostOperation: FormConfig = {
  name: "pdMedications",
  key: ".pdMedications",
  label: "术后记录",
  header_label: true,
  input_type: "custom",
  input_props: {
    config: [
      { name: "postFhr", key: ".postFhr", input_type: "input", label: "术后胎心率", span: 6 },
      { name: "advice", key: ".advice", input_type: "input", label: "术后医嘱", span: 6 },
      { name: "complication", key: ".complication", input_type: "input", label: "并发症", span: 6 },
      { name: "complicationNote", key: ".complicationNote", input_type: "input", label: "并发症备注", span: 6 },
      { name: "diagnosis", key: ".diagnosis", input_type: "input", label: "术后诊断", span: 6 },
    ]
  }
}

const test: FormConfig = {
  name: "rePuncture",
  key: ".rePuncture",
  input_type: "checkbox",
  input_props: {
    type: "group",
    radio: true,
    options: [
      { label: "1", value: "1" },
      { label: "1", value: "2" },
      { label: "1", value: "3" },
    ]
  }
}

const config = {
  "1": [
    ...generalConfig,
    pdPreOperations["1"],
    pdProcedures["1"],
    invasiveNotes["1"],
    pdMedications,
    pdAnaesthetic,
    pdPostOperation
  ],
  "2": [
    ...generalConfig,
    pdPreOperations["2"],
    pdProcedures["2"],
    invasiveNotes["2"],
    pdMedications,
    pdAnaesthetic,
    pdPostOperation
  ],
  "3": [
    ...generalConfig,
    pdPreOperations["3"],
    pdProcedures["3"],
    invasiveNotes["3"],
    pdMedications,
    pdAnaesthetic,
    pdPostOperation
  ],
  "4": [
    ...generalConfig,
    pdPreOperations["4"],
    pdProcedures["4"],
    invasiveNotes["4"],
    pdMedications,
    pdAnaesthetic,
    pdPostOperation
  ],
  "5": [
    ...generalConfig,
    pdPreOperations["5"],
    pdProcedures["5"],
    invasiveNotes["5"],
    pdMedications,
    pdAnaesthetic,
    pdPostOperation
  ],
  "6": [
    ...generalConfig,
    pdPreOperations["6"],
    pdProcedures["6"],
    invasiveNotes["6"],
    pdMedications,
    pdAnaesthetic,
    pdPostOperation
  ],
  "7": [
    ...generalConfig,
    pdPreBloodFlows,
    pdPreHemogram,
    pdPreOperations["7"],
    pdProcedures["7"],
    invasiveNotes["7"],
    pdMedications,
    pdAnaesthetic,
    pdPostOperation
  ],
  "8": [
    ...generalConfig,
    pdPreMeasurement,
    pdPreOperations["8"],
    pdProcedures["8"],
    invasiveNotes["8"],
    pdMedications,
    pdAnaesthetic,
    pdPostOperation
  ],
  "9": [
    ...generalConfig,
    pdPreMeasurement,
    pdPreOperations["9"],
    pdProcedures["9"],
    invasiveNotes["9"],
    pdMedications,
    pdAnaesthetic,
    pdPostOperation
  ],
  "10": [
    ...generalConfig,
    pdPreMeasurement,
    pdPreOperations["10"],
    pdProcedures["10"],
    invasiveNotes["10"],
    pdMedications,
    pdAnaesthetic,
    pdPostOperation
  ],
}


export default config;