import { FormConfig } from '@/components/MyForm/interface';

// 通用配置

/**
 * options directions
 * 是 - 1 否 - 0
 * 
 */

const generalConfig: Array<FormConfig> = [

  { name: "id", key: ".id", input_type: "input", label: "手术病历id", hidden: true },
  { name: "prenatalPatient-id", key: ".prenatalPatient.id", input_type: "input", label: "患者id", hidden: true },
  { name: "serialNo", key: ".serialNo", label: "检查流水号", input_type: "input", span: 6, hidden: true },
  {
      name: "operationType",
      key: ".operationType",
      input_type: "select",
      rules: "required",
      label: "手术名称",
      span: 6,
      offset: 0,
      input_props: {
          type: "default",
          options: [
              { label: "羊膜腔穿刺", value: 1 },
              { label: "绒毛活检术", value: 2 },
              { label: "脐带穿刺术", value: 3 },
              { label: "羊膜腔灌注术", value: 4 },
              { label: "选择性减胎", value: 5 },
              { label: "羊水减量", value: 6 },
              { label: "宫内输血", value: 7 },
              { label: "胎儿胸腔积液", value: 8 },
              { label: "腹水", value: 9 },
              { label: "囊液穿刺", value: 10 }
          ]
      }
  },
  {
      name: "grade",
      key: ".grade",
      input_type: "select",
      label: "手术级别",
      rules: "required",
      span: 6,
      offset: 0,
      input_props: {
          type: "default",
          options: [
              { label: "一级", value: 1 },
              { label: "二级", value: 2 },
              { label: "三级", value: 3 },
              { label: "四级", value: 4 }
          ]
      }
  },
  { name: "operationDate", key: ".operationDate", input_type: "date", rules: "required", label: "手术日期", span: 6 },
  {
      name: "incisionType", key: ".incisionType", input_type: "select", rules: "required", label: "切口类型", span: 6,
      input_props: {
          type: "default",
          options: [
              { label: "0Ⅰ", value: 1 },
              { label: "0Ⅱ", value: 2 },
              { label: "0Ⅲ", value: 3 },
              { label: "Ⅰ", value: 4 },
              { label: "Ⅱ", value: 5 },
              { label: "Ⅲ", value: 6 },
              { label: "Ⅳ", value: 7 }
          ]
      }
  },
  {
      name: "rePuncture", key: ".rePuncture", input_type: "select", rules: "required", label: "是否再次穿刺", span: 6,
      input_props: {
          type: "default",
          radio: true,
          options: [
              { label: "是", value: 1 },
              { label: "否", value: 0 }
          ]
      }
  },
  { name: "operator", key: ".operator", input_type: "input", label: "术者", span: 6, is_new_row: true },
  { name: "assistant1", key: ".assistant", input_type: "input", label: "助手1", span: 6 },
  { name: "assistant2", key: ".assistant2", input_type: "input", label: "助手2", span: 6 },
  { name: "nurse", key: ".nurse", input_type: "input", label: "护士", span: 6 },
  { name: "circuiting", key: ".circuiting", input_type: "input", label: "巡回护士", span: 6 }
]

export default generalConfig;