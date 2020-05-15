import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
  // {
  //   name: "chiefComplaint",
  //   key: '.chief complaint',
  //   label: "主诊",
  //   input_type: "input",
  //   rules: "required",
  //   input_props: {
  //     type: "textarea",
  //   }
  // },
  // { name: "lmp", key: ".lmp", label: "末次月经", span: 8, offset: 0, input_type: "date", rules: "required", },
  // { name: "edd", key: ".edd", label: "预产期-日期", span: 8, offset: 0, input_type: "date", rules: "required", },
  // { name: "sureEdd", key: ".sureEdd", label: "预产期-B超", span: 8, offset: 0, input_type: "date", rules: "required", },
  // {
  //   name: "gravidity", key: ".gravidity", label: "G", span: 8, offset: 0, input_type: "select", rules: "required",
  //   input_props: {
  //     options: [
  //       { label: "1", value: 1 },
  //       { label: "2", value: 2 },
  //       { label: "3", value: 3 }
  //     ]
  //   }
  // },
  // {
  //   name: "parity", key: ".parity", label: "P", span: 8, offset: 0, input_type: "select", rules: "required",
  //   input_props: {
  //     options: [
  //       { label: "1", value: 1 },
  //       { label: "2", value: 2 },
  //       { label: "3", value: 3 }
  //     ]
  //   }
  // },
  // {
  //   name: "male-thalassemia",
  //   key: ".thalassemia_0",
  //   label: "男方地贫检查",
  //   header_label: true,
  //   input_type: "custom",
  //   input_props: {
  //     config: [
  //       { name: "Hb", key: ".Hb", label: "Hb", unit: "g/L", input_type: "input", span: 8, offset: 0 },
  //       { name: "MCV", key: ".MCV", label: "MCV", unit: "fL", input_type: "input", span: 8, offset: 0 },
  //       { name: "MCH", key: ".MCH", label: "MCH", input_type: "input", span: 8, offset: 0 },
  //       { name: "HbA2", key: ".HbA2", label: "HbA2", input_type: "input", span: 8, offset: 0 },
  //       // { name: "", key: "trisomy18z", label: "血型", input_type: "input" },
  //       {
  //         name: "rh",
  //         key: ".rh",
  //         label: "RH血型",
  //         input_type: "select",
  //         span: 8, offset: 0,
  //         input_props: {
  //           type: "default",
  //           options: [
  //             { label: "RH(+)", value: "RH(+)" },
  //             { label: "RH(-)", value: "RH(-)" },
  //           ]
  //         }
  //       },
  //       {
  //         name: "genotype", key: ".genotype", label: "地贫基因型", input_type: "select", span: 8, offset: 0,
  //         input_props: {
  //           type: "default",
  //           radio: false,
  //           options: [
  //             { label: "β地中海贫血基因CD14-15突变", value: "β地中海贫血基因CD14-15突变" },
  //             { label: "β地中海贫血基因CD17突变", value: "β地中海贫血基因CD17突变" }
  //           ]
  //         }
  //       },
  //       { name: "note", key: ".note", label: "其他异常", input_type: "input", span: 8, offset: 0, },
  //     ]
  //   }
  // },
  // {
  //   name: "female-thalassemia",
  //   key: ".thalassemia_1",
  //   label: "女方地贫检查",
  //   header_label: true,
  //   input_type: "custom",
  //   input_props: {
  //     config: [
  //       { name: "Hb", key: ".Hb", label: "Hb", unit: "g/L", input_type: "input", span: 8, offset: 0 },
  //       { name: "MCV", key: ".MCV", label: "MCV", unit: "fL", input_type: "input", span: 8, offset: 0 },
  //       { name: "MCH", key: ".MCH", label: "MCH", input_type: "input", span: 8, offset: 0 },
  //       { name: "HBA2", key: ".HbA2", label: "HbA2", input_type: "input", span: 8, offset: 0 },
  //       // { name: "", key: "trisomy18z", label: "血型", input_type: "input" },
  //       {
  //         name: "rh",
  //         key: ".rh",
  //         label: "RH血型",
  //         input_type: "select", span: 8, offset: 0,
  //         input_props: {
  //           options: [
  //             { label: "RH(+)", value: "RH(+)" },
  //             { label: "RH(-)", value: "RH(-)" },
  //           ]
  //         }
  //       },
  //       {
  //         name: "genotype", key: ".genotype", label: "地贫基因型", input_type: "select", span: 8, offset: 0,
  //         input_props: {
  //           type: "default",
  //           radio: false,
  //           options: [
  //             { label: "β地中海贫血基因CD14-15突变", value: "β地中海贫血基因CD14-15突变" },
  //             { label: "β地中海贫血基因CD17突变", value: "β地中海贫血基因CD17突变" }
  //           ]
  //         }
  //       },
  //       { name: "note", key: ".note", label: "其他异常", input_type: "input", span: 8, offset: 0, },
  //     ]
  //   }
  // },
  // {
  //   name: "early-downsscreen",
  //   key: ".downsscreen_0",
  //   label: "早期唐氏筛查",
  //   header_label: true,
  //   input_type: "custom",
  //   input_props: {
  //     config: [
  //       { name: "checkdate", key: ".checkdate", label: "检查日期", unit: "", input_type: "date", span: 8, offset: 0, rules: "required" },
  //       { name: "trisomy21", key: ".trisomy21", label: "21三体风险", unit: "天", input_type: "input", span: 8, offset: 0 },
  //       { name: "trisomy18", key: ".trisomy18", label: "18三体风险", unit: "天", input_type: "input", span: 8, offset: 0 },
  //       { name: "trisomy13", key: ".trisomy13", label: "13三体风险", unit: "天", input_type: "input", span: 8, offset: 0 },
  //       { name: "checkdate", key: ".checkdate", label: "检查日期", unit: "天", input_type: "date", span: 8, offset: 0 },
  //       { name: "checkdate", key: ".checkdate", label: "检查日期", unit: "天", input_type: "date", span: 8, offset: 0 },
  //     ]
  //   }
  // },
  // {
  //   name: "middle-downsscreen",
  //   key: ".downsscreen_1",
  //   label: "中期唐氏筛查",
  //   header_label: true,
  //   input_type: "custom",
  //   input_props: {
  //     config: [
  //       { name: "trisomy21", key: ".trisomy21", label: "21三体风险", input_type: "input", span: 8, offset: 0, rules: "required" },
  //       { name: "trisomy18", key: ".trisomy18", label: "18三体风险", input_type: "input", span: 8, offset: 0, rules: "required" },
  //       { name: "trisomy13", key: ".trisomy13", label: "13三体风险", input_type: "input", span: 8, offset: 0 },
  //       { name: "NTD", key: ".NTD", label: "NTD风险", input_type: "input", span: 8, offset: 0 },
  //       { name: "HCG", key: ".HCG", label: "β-HCG", unit: "mom", input_type: "input", span: 8, offset: 0 },
  //       { name: "AFP", key: ".AFP", label: "AFP", unit: "mom", input_type: "input", span: 8, offset: 0 },
  //       { name: "E3", key: ".E3", label: "E3", unit: "mom", input_type: "input", span: 8, offset: 0 },
  //       { name: "note", key: ".note", label: "其他异常", input_type: "input", span: 8, offset: 0 },
  //     ]
  //   }
  // },
  // {
  //   name: "nipt-downsscreen",
  //   key: ".downsscreen_2",
  //   label: "NIPT唐氏筛查",
  //   header_label: true,
  //   input_type: "custom",
  //   input_props: {
  //     config: [
  //       { name: "trisomy21", key: ".trisomy21", label: "21三体风险", input_type: "input", span: 8, offset: 0 },
  //       { name: "trisomy18", key: ".trisomy18", label: "18三体风险", input_type: "input", span: 8, offset: 0 },
  //       { name: "trisomy13", key: ".trisomy13", label: "13三体风险", input_type: "input", span: 8, offset: 0 },
  //       { name: "trisomy21z", key: ".trisomy21z", label: "21三体风险Z值", input_type: "input", span: 8, offset: 0 },
  //       { name: "trisomy18z", key: ".trisomy18z", label: "18三体风险Z值", input_type: "input", span: 8, offset: 0 },
  //       { name: "trisomy13z", key: ".trisomy13z", label: "13三体风险Z值", input_type: "input", span: 8, offset: 0 },
  //       { name: "note", key: ".note", label: "其他异常", input_type: "input", span: 8, offset: 0 },
  //     ]
  //   }
  // },
  // {
  //   name: "diseaseHistory", key: '.diseaseHistory', label: "疾病史", input_type: "checkbox",
  //   input_props: {
  //     type: "multiple",
  //     radio: false,
  //     renderData: [
  //       {
  //         key: "hypertension",
  //         label: "高血压",
  //         extraEditors: [
  //           {
  //             key: "hypertension",
  //             editors: [
  //               { name: "", key: "", label: "药物名称", unit: "", input_type: "input", span: 0, offset: 0 }
  //             ]
  //           }
  //         ]
  //       },
  //       { key: "nephropathy", label: "肾病" },
  //       { key: "respiratoryDisease", label: "呼吸道疾病" },
  //       { key: "gastroDisease", label: "胃病" },
  //       {
  //         key: "hepaticDisease", label: "肝病",
  //         extraEditors: [
  //           {
  //             key: "hepaticDisease",
  //             editors: [
  //               { name: "", key: "", label: "药物名称", input_type: "input", span: 0, offset: 0 }
  //             ]
  //           },
  //         ]
  //       },
  //       { key: "epilepsy", label: "癫痫" },
  //       { key: "cardiacDisease", label: "心脏疾病" },
  //       { key: "endocrineDisease", label: "内分泌疾病" },
  //       { key: "thyroidDisease", label: "甲状腺疾病" },
  //       { key: "hematopathy", label: "血液病" },
  //       { key: "mentalDisease", label: "精神疾病" },
  //       { key: "diabetes", label: "糖尿病" },
  //     ],
  //   }
  // },
  // {
  //   name: "familyHistory-hypertension",
  //   key: '.familyHistory',
  //   label: "高血压",
  //   input_type: "checkbox",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "hypertension",
  //         label: "高血压",
  //         options: [
  //           { label: "有", value: true },
  //           { label: "无", value: false },
  //         ],
  //         extraEditors: [
  //           {
  //             // 这个key对应的史当前这个checkboxValue的value
  //             key: true,
  //             editors: [
  //               { name: "", key: "", input_type: "input" }
  //             ]
  //           }
  //         ]
  //       },
  //     ],
  //   }
  // },
  // {
  //   name: "familyHistory-hepaticDisease",
  //   key: '.familyHistory',
  //   label: "肝病",
  //   input_type: "checkbox",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "hepaticDisease",
  //         label: "高血压",
  //         options: [
  //           { label: "有", value: true },
  //           { label: "无", value: false },
  //         ],
  //         extraEditors: [
  //           {
  //             key: true,
  //             editors: [
  //               { name: "", key: "", input_type: "input" }
  //             ]
  //           }
  //         ]
  //       },
  //     ],
  //   }
  // },
  // {
  //   name: "familyHistory-epilepsy",
  //   key: '.familyHistory',
  //   label: "癫痫",
  //   input_type: "checkbox",
  //   // rules: {
  //   //   epilepsy: "required",
  //   //   epilepsyNote: "required"
  //   // },
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "epilepsy",
  //         label: "癫痫",
  //         options: [
  //           { label: "有", value: true },
  //           { label: "无", value: false }
  //         ],
  //         extraEditors: [
  //           {
  //             key: true,
  //             editors: [
  //               { name: "", key: "", input_type: "input" }
  //             ]
  //           }
  //         ]
  //       },
  //     ],
  //   }
  // },
  // {
  //   name: "familyHistory-hypertension",
  //   key: '.familyHistory',
  //   label: "心脏病",
  //   input_type: "checkbox",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "cardiacDisease",
  //         label: "心脏病",
  //         options: [
  //           { label: "有", value: true },
  //           { label: "无", value: false }
  //         ],
  //         extraEditors: [
  //           {
  //             // 这个key对应的史当前这个checkboxValue的value
  //             key: 1,
  //             editors: [
  //               { name: "", key: "", label: "药物名称", input_type: "input" }
  //             ]
  //           }
  //         ]
  //       },
  //     ],
  //   }
  // },

  // {
  //   name: "allergyHistory",
  //   key: '.allergyHistory',
  //   label: "过敏史",
  //   input_type: "checkbox",
  //   input_props: {
  //     type: "multiple",
  //     renderData: [
  //       {
  //         key: "penicillin",
  //         label: "青霉素",
  //         extraEditors: [
  //           { 
  //             key: "penicillin",
  //             editors: [
  //               { name: "", key: "", label: "药物名称", input_type: "input" }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         key: "cephalosporin",
  //         label: "头孢菌素",
  //         extraEditors: [
  //           {
  //             key: "cephalosporin",
  //             editors: [
  //               { name: "", key: "", input_type: "input" }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         key: "sulfa",
  //         label: "磺胺类",
  //         extraEditors: [
  //           {
  //             key: "sulfa",
  //             editors: [
  //               { name: "", key: "", input_type: "input" }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         key: "drug",
  //         label: "药物",
  //         extraEditors: [
  //           {
  //             key: "drug",
  //             editors: [
  //               { name: "", key: "", input_type: "input" }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         key: "alcohol",
  //         label: "酒精",
  //         extraEditors: [
  //           {
  //             key: "alcohol",
  //             editors: [
  //               { name: "", key: "", input_type: "input" }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         key: "food",
  //         label: "食物",
  //         extraEditors: [
  //           {
  //             key: "food",
  //             editors: [
  //               { name: "", key: "", input_type: "input" }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         key: "other",
  //         label: "其他",
  //         extraEditors: [
  //           {
  //             key: "other",
  //             editors: [
  //               { name: "", key: "",  input_type: "input" }
  //             ]
  //           }
  //         ]
  //       },
  //     ],
  //   }
  // },
  // {
  //   name: "transfusionHistory",
  //   key: ".transfusionHistory",
  //   label: "输血史",
  //   input_type: "checkbox",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "type",
  //         label: "输血史",
  //         options: [
  //           {label: "有", value: true},
  //           {label: "无", value: false},
  //         ],
  //         extraEditors: [
  //           {
  //             key: true,
  //             editors: [
  //               { key:"" , name: "", input_type: "input", label: "时间"},
  //               { key:"" , name: "", input_type: "input", label: "原因"}
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // },

  // {
  //   name: "procedureHistory",
  //   key: ".procedureHistory",
  //   label: "手术史",
  //   input_type: "table",
  //   input_props: {
  //     editable: true,
  //     tableColumns: [
  //       {
  //         key: "date",
  //         title: "手术日期",
  //         editor: { name: "", key: "", input_type: "date" }
  //       },
  //       {
  //         key: "name",
  //         title: "手术名称",
  //         editor: { name: "", key: "", input_type: "input" }
  //       },
  //       {
  //         key: "hospital",
  //         title: "手术医院",
  //         editor: { name: "", key: "", input_type: "select" }
  //       },
  //       {
  //         key: "postoperativePathology",
  //         title: "术后病理",
  //         editor: { name: "", key: "", input_type: "input" }
  //       }
  //     ]
  //   }
  // },
  // // {
  // //   name: "diseaseHistory-h",
  // //   key: ".diseaseHistory",
  // //   label: "单选带input",
  // //   input_type: "select",
  // //   input_props: {
  // //     type: "multiple",
  // //     options: [
  // //       { label: "高血压", value: "hypertension" },
  // //       { label: "肾病", value: "nephropathy" },
  // //       { label: "呼吸道疾病", value: "respiratoryDisease" },
  // //     ],
  // //     extraEditors: [
  // //       {
  // //         key: "hypertension",
  // //         editors: [
  // //           { name: "", key: "", input_type: "input" }
  // //         ]
  // //       }
  // //     ]
  // //   }
  // // },
  // // {
  // //   name: "diseaseHistory-h1",
  // //   key: ".diseaseHistory",
  // //   label: "多选带input",
  // //   input_type: "select",
  // //   input_props: {
  // //     type: "multiple",
  // //     radio: false,
  // //     options: [
  // //       { label: "高血压", value: "hypertension" },
  // //       { label: "肾病", value: "nephropathy" },
  // //       { label: "胃病", value: "gastroDisease" },
  // //       { label: "呼吸道疾病", value: "respiratoryDisease" },
  // //       { label: "癫痫", value: "epilepsy" },
  // //       { label: "心脏疾病", value: "cardiacDisease" },
  // //       { label: "内分泌疾病", value: "endocrineDisease" },
  // //       { label: "甲状腺疾病", value: "thyroidDisease" },
  // //       { label: "血液病", value: "hematopathy" },
  // //       { label: "精神疾病", value: "mentalDisease" },
  // //       { label: "糖尿病", value: "diabetes" },
  // //     ],
  // //     extraEditors: [
  // //       {
  // //         key: "hypertension",
  // //         editors: [
  // //           { name: "", key: "", input_type: "input" }
  // //         ]
  // //       }
  // //     ]
  // //   }
  // // },
  // {
  //   name: "fetuses",
  //   key: ".fetuses",
  //   label: "胎儿检查",
  //   header_label: true,
  //   input_type: "array-custom",
  //   input_props: {
  //     config: [
  //       { name: "id", key: ".id", label: "id", input_type: "input", span: 8, offset: 0 },
  //       { name: "fetalPosition", key: ".fetalPosition", label: "胎儿位置", input_type: "input", span: 8, offset: 0 },
  //       { name: "fetalHeartRate", key: ".fetalHeartRate", label: "胎心率", input_type: "input", span: 8, offset: 0 },
  //       { name: "fetalMovement", key: ".fetalMovement", label: "胎动", input_type: "input", span: 8, offset: 0 },
  //       { name: "presentation", key: ".presentation", label: "先露", input_type: "input", span: 8, offset: 0 },
  //       { name: "weight", key: ".weight", label: "胎重", input_type: "input", span: 8, offset: 0 },
  //       { name: "avf", key: ".avf", label: "avf", input_type: "input", span: 8, offset: 0 },
  //     ]
  //   }
  // },
  // {
  //   name: "physicalExam",
  //   key: ".physicalExam",
  //   label: "体格检查",
  //   header_label: true,
  //   input_type: "custom",
  //   input_props: {
  //     config: [
  //       { name: "id", key: ".id", label: "id", input_type: "input", span: 8, offset: 0 },
  //       { name: "height", key: ".height", label: "身高", input_type: "input", span: 8, offset: 0 },
  //       { name: "weight", key: ".weight", label: "体重", input_type: "input", span: 8, offset: 0 },
  //       { name: "systolic", key: ".systolic", label: "收缩压", input_type: "input", span: 8, offset: 0 },
  //       { name: "diastolic", key: ".diastolic", label: "舒张压", input_type: "input", span: 8, offset: 0 },
  //       { name: "pulse", key: ".pulse", label: "脉率", input_type: "input", span: 8, offset: 0 },
  //       { name: "temperature", key: ".temperature", label: "体温", input_type: "input", span: 8, offset: 0 },
  //     ]
  //   }
  // },
  // {
  //   name: "gynecologicalExam",
  //   key: ".gynecologicalExam",
  //   label: "妇科检查",
  //   header_label: true,
  //   input_type: "custom",
  //   input_props: {
  //     config: [
  //       { name: "id", key: ".id", label: "id", input_type: "input", span: 8, offset: 0 },
  //       { name: "fundalHeight", key: ".fundalHeight", label: "基高", input_type: "input", span: 8, offset: 0 },
  //       { name: "fetalPosition", key: ".fetalPosition", label: "胎位", input_type: "input", span: 8, offset: 0 },
  //       { name: "fetalHeart", key: ".fetalHeart", label: "胎心", input_type: "input", span: 8, offset: 0 },
  //       { name: "presentation", key: ".presentation", label: "先露", input_type: "input", span: 8, offset: 0 },
  //       { name: "engagement", key: ".engagement", label: "engagement", input_type: "input", span: 8, offset: 0 },
  //       { name: "vagina", key: ".vagina", label: "vagina", input_type: "input", span: 8, offset: 0 },
  //       { name: "cervix", key: ".cervix", label: "cervix", input_type: "input", span: 8, offset: 0 },
  //       { name: "adnexa", key: ".adnexa", label: "adnexa", input_type: "input", span: 8, offset: 0 },
  //       { name: "note", key: ".note", label: "note", input_type: "input", span: 8, offset: 0 },
  //     ]
  //   }
  // },
  {
    name: "all-t",
    key: ".*",
    label: "",
    input_type: "input"
  }
]
export default config;