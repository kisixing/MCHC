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
  {name: "lmp",key: ".lmp",label: "末次月经",span: 8,offset: 0,input_type: "date"},
  {name: "edd",key: ".edd",label: "预产期-日期",span: 8,offset: 0,input_type: "date"},
  {name: "sureEdd",key: ".sureEdd",label: "预产期-B超",span: 8,offset: 0,input_type: "date"},
  {name: "gravidity", key: ".gravidity", label:"G", span: 8, offset:0, input_type: "select"},
  {name: "parity", key: ".parity", label:"P", span: 8, offset:0, input_type: "select"},
  {
    name: "diseaseHistory",key: '.diseaseHistory',label: "疾病史",input_type: "checkbox",
    input_props: {
      type: "multiple",
      radio: false,
      renderData: [
        { key: "hypertension", label: "高血压" },
        { key: "nephropathy", label: "肾病" },
        { key: "respiratoryDisease", label: "呼吸道疾病" },
        { key: "gastroDisease", label: "胃病" },
        { key: "hepaticDisease", label: "肝病" },
        { key: "epilepsy", label: "癫痫" },
        { key: "cardiacDisease", label: "心脏疾病" },
        { key: "endocrineDisease", label: "内分泌疾病" },
        { key: "thyroidDisease", label: "甲状腺疾病" },
        { key: "hematopathy", label: "血液病" },
        { key: "mentalDisease", label: "精神疾病" },
        { key: "diabetes", label: "糖尿病" },
      ],
      extraEditors: [
        {
          key: "hepaticDisease",
          editors: [
            { name: "", key: "", label: "药物名称", input_type: "input", span: 0, offset: 0 }
          ]
        },
        {
          key: "hypertension",
          editors: [
            { name: "", key: "", label: "药物名称", unit: "", input_type: "input", span: 0, offset: 0 }
          ]
        }
      ]
    }
  },
  {
    name: "familyHistory-hypertension",
    key: '.familyHistory',
    label: "高血压",
    input_type: "checkbox",
    input_props: {
      type: "whether",
      renderData: [
        { key: "hypertension", label: "高血压" },
      ],
      extraEditors: [
        {
          key: true,
          editors: [
            { name: "", key: "",label: "药物名称",input_type: "input"}
          ]
        }
      ]
    }
  },
  {
    name: "familyHistory-hepaticDisease",
    key: '.familyHistory',
    label: "肝疾病",
    input_type: "checkbox",
    input_props: {
      type: "whether",
      renderData: [
        { key: "hepaticDisease", label: "肝疾病" },
      ],
      extraEditors: [
        {
          key: true,
          editors: [
            { name: "", key: "",label: "药物名称",input_type: "input",}
          ]
        }
      ]
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
          editor: {name:"", key: "", input_type: "date"}
        },
        {
          key: "name",
          title: "手术名称",
          editor: {name:"",key:"",input_type: "input"}
        },
        {
          key: "hospital",
          title: "手术医院",
          editor: {name:"",key:"",input_type: "select"}
        },
        {
          key: "postoperativePathology",
          title: "术后病理",
          editor: {name:"",key:"",input_type: "input"}
        }
      ]
    }
  }
]
export default config;