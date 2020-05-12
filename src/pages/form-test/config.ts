import { FormConfig } from '../../components/MyForm/interface';

const config: Array<FormConfig> = [
  {
    name: "chiefComplaint",
    key: '.chief complaint',
    label: "主诊",
    input_type: "input",
    rules: "required",
    input_props: {
      type: "textarea",
    }
  },
  { name: "lmp", key: ".lmp", label: "末次月经", span: 8, offset: 0, input_type: "date" },
  { name: "edd", key: ".edd", label: "预产期-日期", span: 8, offset: 0, input_type: "date" },
  { name: "sureEdd", key: ".sureEdd", label: "预产期-B超", span: 8, offset: 0, input_type: "date" },
  { name: "gravidity", key: ".gravidity", label: "G", span: 8, offset: 0, input_type: "select" },
  { name: "parity", key: ".parity", label: "P", span: 8, offset: 0, input_type: "select" },
  {
    name: "diseaseHistory", key: '.diseaseHistory', label: "疾病史", input_type: "checkbox",
    input_props: {
      type: "multiple",
      radio: false,
      renderData: [
        {
          key: "hypertension",
          label: "高血压",
          extraEditors: [
            {
              key: "hypertension",
              editors: [
                { name: "", key: "", label: "药物名称", unit: "", input_type: "input", span: 0, offset: 0 }
              ]
            }
          ]
        },
        { key: "nephropathy", label: "肾病" },
        { key: "respiratoryDisease", label: "呼吸道疾病" },
        { key: "gastroDisease", label: "胃病" },
        {
          key: "hepaticDisease", label: "肝病",
          extraEditors: [
            {
              key: "hepaticDisease",
              editors: [
                { name: "", key: "", label: "药物名称", input_type: "input", span: 0, offset: 0 }
              ]
            },
          ]
        },
        { key: "epilepsy", label: "癫痫" },
        { key: "cardiacDisease", label: "心脏疾病" },
        { key: "endocrineDisease", label: "内分泌疾病" },
        { key: "thyroidDisease", label: "甲状腺疾病" },
        { key: "hematopathy", label: "血液病" },
        { key: "mentalDisease", label: "精神疾病" },
        { key: "diabetes", label: "糖尿病" },
      ],
    }
  },
  {
    name: "familyHistory-hypertension",
    key: '.familyHistory',
    label: "高血压",
    input_type: "checkbox",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "hypertension",
          label: "高血压",
          options: [
            {label: "有", value: 1},
            {label: "无", value: 2},
          ],
          extraEditors: [
            {
              // 这个key对应的史当前这个checkboxValue的value
              key: 1,
              editors: [
                { name: "", key: "", label: "药物名称", input_type: "input" }
              ]
            }
          ]
        },
      ],
    }
  },
  {
    name: "procedureHistory",
    key: ".procedureHistory",
    label: "手术史",
    input_type: "table",
    input_props: {
      editable: true,
      tableColumns: [
        {
          key: "date",
          title: "手术日期",
          editor: { name: "", key: "", input_type: "date" }
        },
        {
          key: "name",
          title: "手术名称",
          editor: { name: "", key: "", input_type: "input" }
        },
        {
          key: "hospital",
          title: "手术医院",
          editor: { name: "", key: "", input_type: "select" }
        },
        {
          key: "postoperativePathology",
          title: "术后病理",
          editor: { name: "", key: "", input_type: "input" }
        }
      ]
    }
  },
  {
    name: "early-downsscreen",
    key: ".downsscreen_0",
    label: "早期唐氏筛查",
    input_type: "simpleobject",
    input_props: {
      config: [
        { name: "", key: "checkdate", label: "检查日期", unit: "", input_type: "date" },
        { name: "", key: "trisomy21", label: "21三体风险", unit: "天", input_type: "input" },
        { name: "", key: "trisomy18", label: "18三体风险", unit: "天", input_type: "input" },
        { name: "", key: "trisomy13", label: "13三体风险", unit: "天", input_type: "input" },
        { name: "", key: "checkdate", label: "检查日期", unit: "天", input_type: "date" },
        { name: "", key: "checkdate", label: "检查日期", unit: "天", input_type: "date" },
      ]
    }
  },
  {
    name: "middle-downsscreen",
    key: ".downsscreen_1",
    label: "中期唐氏筛查",
    input_type: "simpleobject",
    input_props: {
      config: [
        { name: "", key: "trisomy21", label: "21三体风险", input_type: "input" },
        { name: "", key: "trisomy18", label: "18三体风险", input_type: "input" },
        { name: "", key: "trisomy13", label: "13三体风险", input_type: "input" },
        { name: "", key: "NTD", label: "NTD风险", input_type: "input" },
        { name: "", key: "HCG", label: "β-HCG", unit: "mom", input_type: "input" },
        { name: "", key: "AFP", label: "AFP", unit: "mom", input_type: "input" },
        { name: "", key: "E3", label: "E3", unit: "mom", input_type: "input" },
        { name: "", key: "note", label: "其他异常", input_type: "input" },
      ]
    }
  },
  {
    name: "nipt-downsscreen",
    key: ".downsscreen_2",
    label: "NIPT唐氏筛查",
    input_type: "simpleobject",
    input_props: {
      config: [
        { name: "", key: "trisomy21", label: "21三体风险", input_type: "input" },
        { name: "", key: "trisomy18", label: "18三体风险", input_type: "input" },
        { name: "", key: "trisomy13", label: "13三体风险", input_type: "input" },
        { name: "", key: "trisomy21z", label: "21三体风险Z值", input_type: "input" },
        { name: "", key: "trisomy18z", label: "18三体风险Z值", input_type: "input" },
        { name: "", key: "trisomy13z", label: "13三体风险Z值", input_type: "input" },
        { name: "", key: "note", label: "其他异常", input_type: "input" },
      ]
    }
  },
  {
    name: "male-thalassemia",
    key: ".thalassemia_0",
    label: "男方地贫检查",
    input_type: "simpleobject",
    input_props: {
      config: [
        { name: "", key: "Hb", label: "Hb", unit: "g/L", input_type: "input" },
        { name: "", key: "MCV", label: "MCV", unit: "fL", input_type: "input" },
        { name: "", key: "MCH", label: "MCH", input_type: "input" },
        { name: "", key: "HbA2", label: "HbA2", input_type: "input" },
        // { name: "", key: "trisomy18z", label: "血型", input_type: "input" },
        {
          name: "",
          key: "rh", 
          label: "RH血型", 
          input_type: "select", 
          input_props: {} 
        },
        { name: "", key: "note", label: "其他异常", input_type: "input" },
      ]
    }
  },
]
export default config;