import { FormConfig } from '@/components/MyForm/interface';
import generalConfig from './general';
import pdPreOperations from './pdPreOperation';
// 8、9、10有术前测量值
import pdPreMeasurement from './pdPreMeasurement';
// 7 术前血象
import pdPreHemogram from './pdPreHemogram';
// 7  术前流血
import pdPreBloodFlows from './pdPreBloodFlows';
// 手术过程记录
import pdProcedures from './pdProcedure';
// 出血 + ...
import invasiveNotes from './invasiveNote';
// 用药情况
import pdAnaesthetic from './pdAnaesthetic';
// 用药情况
import pdMedication from './pdMedication';
// 术后情况
import pdPostOperation from './pdPostOperation';
import pdPostBloodFlows from './pdPostBloodFlows';
import pdPostHemogram from './pdPostHemogram';

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
// const ultrasound: Array<FormConfig> = [
//   {
//     name: "ultrasound",
//     key: ".ultrasound",
//     input_type: "table",
//     span: 24,
//     offset: 0,
//     input_props: {
//       tableColumns: [

//       ]
//     }
//   }
// ]

const config = {
  "1": [
    ...generalConfig,
    pdPreOperations["1"],
    pdProcedures["1"],
    invasiveNotes["1"],
    pdMedication,
    pdAnaesthetic,
    pdPostOperation
  ],
  "2": [
    ...generalConfig,
    pdPreOperations["2"],
    pdProcedures["2"],
    invasiveNotes["2"],
    pdMedication,
    pdAnaesthetic,
    pdPostOperation
  ],
  "3": [
    ...generalConfig,
    pdPreOperations["3"],
    pdProcedures["3"],
    invasiveNotes["3"],
    pdMedication,
    pdAnaesthetic,
    pdPostOperation
  ],
  "4": [
    ...generalConfig,
    pdPreOperations["4"],
    pdProcedures["4"],
    invasiveNotes["4"],
    pdMedication,
    pdAnaesthetic,
    pdPostOperation
  ],
  "5": [
    ...generalConfig,
    pdPreOperations["5"],
    pdProcedures["5"],
    invasiveNotes["5"],
    pdMedication,
    pdAnaesthetic,
    pdPostOperation
  ],
  "6": [
    ...generalConfig,
    pdPreOperations["6"],
    pdProcedures["6"],
    invasiveNotes["6"],
    pdMedication,
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
    pdMedication,
    pdAnaesthetic,
    pdPostBloodFlows,
    pdPostHemogram,
    pdPostOperation
  ],
  "8": [
    ...generalConfig,
    pdPreMeasurement,
    pdPreOperations["8"],
    pdProcedures["8"],
    invasiveNotes["8"],
    pdMedication,
    pdAnaesthetic,
    pdPostOperation
  ],
  "9": [
    ...generalConfig,
    pdPreMeasurement,
    pdPreOperations["9"],
    pdProcedures["9"],
    invasiveNotes["9"],
    pdMedication,
    pdAnaesthetic,
    pdPostOperation
  ],
  "10": [
    ...generalConfig,
    pdPreMeasurement,
    pdPreOperations["10"],
    pdProcedures["10"],
    invasiveNotes["10"],
    pdMedication,
    pdAnaesthetic,
    pdPostOperation
  ],
}


export default config;