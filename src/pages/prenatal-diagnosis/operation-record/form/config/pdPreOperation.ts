import { FormConfig } from '@/components/MyForm/interface';

// 术前记录

const generalPdPreOperations: FormConfig = {
  name: "pdPreOperation",
  key: ".pdPreOperation",
  label: "术前记录",
  header_label: true,
  input_type: "custom",
  input_props: {
    config: [
      { name: "temperature", key: ".temperature", input_type: "input", label: "体温", unit: "℃", span: 6 },
      { name: "pluse", key: ".pluse", input_type: "input", label: "脉率", unit: "次/分", span: 6 },
      { name: "heartrate", key: ".heartrate", input_type: "input", label: "心率", unit: "次/分", span: 6 },
      { name: "respiratory", key: ".respiratory", input_type: "input", label: "呼吸", span: 6 },
      { name: "systolic", key: ".systolic", input_type: "input", label: "收缩压", unit: "mmHg", span: 6 },
      { name: "diastolic", key: ".diastolic", input_type: "input", label: "舒张压", unit: "mmHg", span: 6 },
    ]
  }
}

const pdPreOperations: {[key:string]: FormConfig} = {
  "1": generalPdPreOperations,
  "2": generalPdPreOperations,
  "3": generalPdPreOperations,
  "4": generalPdPreOperations,
  "5": generalPdPreOperations,
  "6": generalPdPreOperations,
  "7": {
    name: "pdPreOperation",
    key: ".pdPreOperation",
    label: "术前记录",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name: "temperature", key: ".temperature", input_type: "input", label: "体温", unit: "℃", span: 6 },
        { name: "pluse", key: ".pluse", input_type: "input", label: "脉率", unit: "次/分", span: 6 },
        { name: "heartrate", key: ".heartrate", input_type: "input", label: "心率", unit: "次/分", span: 6 },
        { name: "respiratory", key: ".respiratory", input_type: "input", label: "呼吸", span: 6 },
        { name: "systolic", key: ".systolic", input_type: "input", label: "收缩压", unit: "mmHg", span: 6 },
        { name: "diastolic", key: ".diastolic", input_type: "input", label: "舒张压", unit: "mmHg", span: 6 },
        // 宫内输血
        { name: "bloodCollectionDate", key: ".bloodCollectionDate", input_type: "date", label: "采血日期", span: 6 },
        {
          name: "diastolic", key: ".diastolic", input_type: "select", label: "库血类型", span: 6,
          input_props: {
            options: [
              { label: "全血", value: 1 },
              { label: "洗涤", value: 2 },
              { label: "悬浮", value: 3 },
              { label: "浓缩", value: 4 },
            ]
          }
        }
      ]
    }
  },
  "8": generalPdPreOperations,
  "9": generalPdPreOperations,
  "10": generalPdPreOperations
}

export default pdPreOperations;