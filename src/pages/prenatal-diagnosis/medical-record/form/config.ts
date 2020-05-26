import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
  { name: "prenatalPatientId", key: ".prenatalPatientId.id", label: "病人id", span: 6, offset: 0, input_type: "input", hidden: true },
  { name: "id", key: ".id", label: "病历id", span: 6, offset: 0, input_type: "input", hidden: true },
  { name: "visitDate", key: ".visitDate", label: "检查时间", span: 6, offset: 0, input_type: "date", rules: "required", },
  {
    name: "chiefComplaint",
    key: '.chiefcomplaint',
    label: "主诊",
    input_type: "input",
    rules: "required",
    input_props: {
      type: "textarea",
    }
  },
  {
    name: "male-thalassemia",
    key: ".thalassemia_0",
    label: "男方地贫检查",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name: "type", key: ".type", label: "类型", unit: "g/L", input_type: "input", span: 6, offset: 0, hidden: true },
        { name: "Hb", key: ".Hb", label: "Hb", unit: "g/L", input_type: "input", span: 6, offset: 0 },
        { name: "MCV", key: ".MCV", label: "MCV", unit: "fL", input_type: "input", span: 6, offset: 0 },
        { name: "MCH", key: ".MCH", label: "MCH", input_type: "input", span: 6, offset: 0 },
        { name: "HbA2", key: ".HbA2", label: "HbA2", input_type: "input", span: 6, offset: 0 },
        // { name: "", key: "trisomy18z", label: "血型", input_type: "input" },
        {
          name: "rh",
          key: ".rh",
          label: "RH血型",
          input_type: "select",
          span: 6, offset: 0,
          input_props: {
            type: "default",
            options: [
              { label: "RH(+)", value: "RH(+)" },
              { label: "RH(-)", value: "RH(-)" },
            ]
          }
        },
        {
          name: "genotype", key: ".genotype", label: "地贫基因型", input_type: "select", span: 6, offset: 0,
          input_props: {
            type: "default",
            radio: false,
            options: [
              { label: "β地中海贫血基因CD14-15突变", value: "β地中海贫血基因CD14-15突变" },
              { label: "β地中海贫血基因CD17突变", value: "β地中海贫血基因CD17突变" }
            ]
          }
        },
        { name: "note", key: ".note", label: "其他异常", input_type: "input", span: 6, offset: 0, },
      ]
    }
  },
  {
    name: "female-thalassemia",
    key: ".thalassemia_1",
    label: "女方地贫检查",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name: "type", key: ".type", label: "类型", unit: "g/L", input_type: "input", span: 6, offset: 0, hidden: true },
        { name: "Hb", key: ".Hb", label: "Hb", unit: "g/L", input_type: "input", span: 6, offset: 0 },
        { name: "MCV", key: ".MCV", label: "MCV", unit: "fL", input_type: "input", span: 6, offset: 0 },
        { name: "MCH", key: ".MCH", label: "MCH", input_type: "input", span: 6, offset: 0 },
        { name: "HBA2", key: ".HbA2", label: "HbA2", input_type: "input", span: 6, offset: 0 },
        // { name: "", key: "trisomy18z", label: "血型", input_type: "input" },
        {
          name: "rh",
          key: ".rh",
          label: "RH血型",
          input_type: "select", span: 6, offset: 0,
          input_props: {
            options: [
              { label: "RH(+)", value: "RH(+)" },
              { label: "RH(-)", value: "RH(-)" },
            ]
          }
        },
        {
          name: "genotype", key: ".genotype", label: "地贫基因型", input_type: "select", span: 6, offset: 0,
          input_props: {
            type: "default",
            radio: false,
            options: [
              { label: "β地中海贫血基因CD14-15突变", value: "β地中海贫血基因CD14-15突变" },
              { label: "β地中海贫血基因CD17突变", value: "β地中海贫血基因CD17突变" }
            ]
          }
        },
        { name: "note", key: ".note", label: "其他异常", input_type: "input", span: 6, offset: 0, },
      ]
    }
  },
  {
    name: "early-downsScreens",
    key: ".downsScreens_0",
    label: "早期唐氏筛查",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name: "type", key: ".type", label: "类型", input_type: "input", span: 6, offset: 0, hidden: true },

        { name: "id", key: ".id", input_type: "input", span: 6, offset: 0, hidden: true },

        { name: "trisomy21", key: ".trisomy21", label: "21三体风险", input_type: "input", span: 6, offset: 0 },
        { name: "trisomy18", key: ".trisomy18", label: "18三体风险", input_type: "input", span: 6, offset: 0 },
        { name: "trisomy13", key: ".trisomy13", label: "13三体风险", input_type: "input", span: 6, offset: 0 },
        { name: "hCG", key: ".hCG", label: "β-HCG", input_type: "input", span: 6, offset: 0 },
        { name: "pAPPA", key: ".pAPPA", label: "PAPP-A", input_type: "input", span: 6, offset: 0 },
      ]
    }
  },
  {
    name: "middle-downsscreen",
    key: ".downsScreens_1",
    label: "中期唐氏筛查",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name: "type", key: ".type", label: "类型", input_type: "input", span: 6, offset: 0, hidden: true },
        { name: "id", key: ".id", input_type: "input", span: 6, offset: 0, hidden: true },
        { name: "trisomy21", key: ".trisomy21", label: "21三体风险", input_type: "input", span: 6, offset: 0 },
        { name: "trisomy18", key: ".trisomy18", label: "18三体风险", input_type: "input", span: 6, offset: 0 },
        { name: "trisomy13", key: ".trisomy13", label: "13三体风险", input_type: "input", span: 6, offset: 0 },
        { name: "NTD", key: ".nTD", label: "NTD风险", input_type: "input", span: 6, offset: 0 },
        { name: "HCG", key: ".hCG", label: "β-HCG", unit: "mom", input_type: "input", span: 6, offset: 0 },
        { name: "AFP", key: ".aFP", label: "AFP", unit: "mom", input_type: "input", span: 6, offset: 0 },
        { name: "E3", key: ".e3", label: "E3", unit: "mom", input_type: "input", span: 6, offset: 0 },
        { name: "note", key: ".note", label: "其他异常", input_type: "input", span: 6, offset: 0 },
      ]
    }
  },
  {
    name: "nipt-downsscreen",
    key: ".downsScreens_2",
    label: "NIPT唐氏筛查",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name: "type", key: ".type", label: "类型", input_type: "input", span: 6, offset: 0, hidden: true },
        { name: "id", key: ".id", input_type: "input", span: 6, offset: 0, hidden: true },
        { name: "trisomy21", key: ".trisomy21", label: "21三体风险", input_type: "input", span: 6, offset: 0 },
        { name: "trisomy18", key: ".trisomy18", label: "18三体风险", input_type: "input", span: 6, offset: 0 },
        { name: "trisomy13", key: ".trisomy13", label: "13三体风险", input_type: "input", span: 6, offset: 0 },
        { name: "trisomy21z", key: ".trisomy21z", label: "21三体风险Z值", input_type: "input", span: 6, offset: 0 },
        { name: "trisomy18z", key: ".trisomy18z", label: "18三体风险Z值", input_type: "input", span: 6, offset: 0 },
        { name: "trisomy13z", key: ".trisomy13z", label: "13三体风险Z值", input_type: "input", span: 6, offset: 0 },
        { name: "note", key: ".note", label: "其他异常", input_type: "input", span: 6, offset: 0 },
      ]
    }
  },
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
                { name: "", key: "", label: "备注", unit: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "nephropathy",
          label: "肾病",
          extraEditors: [
            {
              key: "nephropathy",
              editors: [
                { name: "", key: "", label: "备注", unit: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "respiratoryDisease",
          label: "呼吸系统疾病",
          extraEditors: [
            {
              key: "respiratoryDisease",
              editors: [
                { name: "", key: "", label: "备注", unit: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "gastroDisease",
          label: "胃病",
          extraEditors: [
            {
              key: "gastroDisease",
              editors: [
                { name: "", key: "", label: "备注", unit: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "hepaticDisease",
          label: "肝病",
          extraEditors: [
            {
              key: "hepaticDisease",
              editors: [
                { name: "", key: "", label: "备注", unit: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "epilepsy",
          label: "癫痫",
          extraEditors: [
            {
              key: "epilepsy",
              editors: [
                { name: "", key: "", label: "备注", unit: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "cardiacDisease",
          label: "心脏病",
          extraEditors: [
            {
              key: "cardiacDisease",
              editors: [
                { name: "", key: "", label: "备注", unit: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "endocrineDisease",
          label: "内分泌病",
          extraEditors: [
            {
              key: "endocrineDisease",
              editors: [
                { name: "", key: "", label: "备注", unit: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "thyroidDisease",
          label: "甲状腺",
          extraEditors: [
            {
              key: "thyroidDisease",
              editors: [
                { name: "", key: "", label: "备注", unit: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "hematopathy",
          label: "血液病",
          extraEditors: [
            {
              key: "hematopathy",
              editors: [
                { name: "", key: "", label: "备注", unit: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "mentalDisease",
          label: "心理疾病",
          extraEditors: [
            {
              key: "mentalDisease",
              editors: [
                { name: "", key: "", label: "备注", unit: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "diabetes",
          label: "糖尿病",
          extraEditors: [
            {
              key: "diabetes",
              editors: [
                { name: "", key: "", label: "备注", unit: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "other",
          label: "其他",
          extraEditors: [
            {
              key: "other",
              editors: [
                { name: "", key: "", label: "备注", unit: "", input_type: "input" }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    name: "familyHistory", key: '.familyHistory', label: "家族史", input_type: "checkbox",
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
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "hepaticDisease",
          label: "肝病",
          extraEditors: [
            {
              key: "hepaticDisease",
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "epilepsy",
          label: "癫痫",
          extraEditors: [
            {
              key: "epilepsy",
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            },
          ]
        },
        {
          key: "cardiacDisease",
          label: "心脏病",
          extraEditors: [
            {
              key: "hepaticDisease",
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            },
          ]
        },
        {
          key: "endocrineDisease",
          label: "内分泌病",
          extraEditors: [
            {
              key: "endocrineDisease",
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            },
          ]
        },
        {
          key: "thyroidDisease",
          label: "甲状腺",
          extraEditors: [
            {
              key: "thyroidDisease",
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            },
          ]
        },
        {
          key: "hematopathy",
          label: "血液病",
          extraEditors: [
            {
              key: "hematopathy",
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            },
          ]
        },
        {
          key: "mentalDisease",
          label: "心理疾病",
          extraEditors: [
            {
              key: "mentalDisease",
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            },
          ]
        },
        {
          key: "diabetes",
          label: "糖尿病",
          extraEditors: [
            {
              key: "diabetes",
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            },
          ]
        },
        {
          key: "birthdefects",
          label: "先天畸形",
          extraEditors: [
            {
              key: "birthdefects",
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            },
          ]
        },
        {
          key: "other",
          label: "其他",
          extraEditors: [
            {
              key: "other",
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            },
          ]
        },
      ],
    }
  },


  {
    name: "allergyHistory",
    key: '.allergyHistory',
    label: "过敏史",
    input_type: "checkbox",
    input_props: {
      type: "multiple",
      radio: false,
      renderData: [
        {
          key: "penicillin",
          label: "青霉素",
          extraEditors: [
            {
              key: "penicillin",
              editors: [
                { name: "", key: "", label: "药物名称", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "cephalosporin",
          label: "头孢菌素",
          extraEditors: [
            {
              key: "cephalosporin",
              editors: [
                { name: "", key: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "sulfa",
          label: "磺胺类",
          extraEditors: [
            {
              key: "sulfa",
              editors: [
                { name: "", key: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "drug",
          label: "药物",
          extraEditors: [
            {
              key: "drug",
              editors: [
                { name: "", key: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "alcohol",
          label: "酒精",
          extraEditors: [
            {
              key: "alcohol",
              editors: [
                { name: "", key: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "food",
          label: "食物",
          extraEditors: [
            {
              key: "food",
              editors: [
                { name: "", key: "", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "other",
          label: "其他",
          extraEditors: [
            {
              key: "other",
              editors: [
                { name: "", key: "", input_type: "input" }
              ]
            }
          ]
        },
      ],
    }
  },
  // 接口暂无
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
  {
    name: "procedureHistory", key: '.procedureHistory', label: "手术史", input_type: "checkbox",
    input_props: {
      type: "multiple",
      radio: false,
      renderData: [
        {
          key: "uterus",
          label: "子宫手术",
          extraEditors: [
            {
              key: "uterus",
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "ovaries",
          label: "卵巢手术",
          extraEditors: [
            {
              key: "ovaries",
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "thyroid", label: "甲状腺手术",
          extraEditors: [
            {
              key: "thyroid",
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            }
          ]
        },
        {
          key: "other", label: "其他",
          extraEditors: [
            {
              key: "other",
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            }
          ]
        }
      ],
    }
  },



  // {
  //   name: "diseaseHistory-h",
  //   key: ".diseaseHistory",
  //   label: "单选带input",
  //   input_type: "select",
  //   input_props: {
  //     type: "multiple",
  //     options: [
  //       { label: "高血压", value: "hypertension" },
  //       { label: "肾病", value: "nephropathy" },
  //       { label: "呼吸道疾病", value: "respiratoryDisease" },
  //     ],
  //     extraEditors: [
  //       {
  //         key: "hypertension",
  //         editors: [
  //           { name: "", key: "", input_type: "input" }
  //         ]
  //       }
  //     ]
  //   }
  // },
  // {
  //   name: "diseaseHistory-h1",
  //   key: ".diseaseHistory",
  //   label: "多选带input",
  //   input_type: "select",
  //   input_props: {
  //     type: "multiple",
  //     radio: false,
  //     options: [
  //       { label: "高血压", value: "hypertension" },
  //       { label: "肾病", value: "nephropathy" },
  //       { label: "胃病", value: "gastroDisease" },
  //       { label: "呼吸道疾病", value: "respiratoryDisease" },
  //       { label: "癫痫", value: "epilepsy" },
  //       { label: "心脏疾病", value: "cardiacDisease" },
  //       { label: "内分泌疾病", value: "endocrineDisease" },
  //       { label: "甲状腺疾病", value: "thyroidDisease" },
  //       { label: "血液病", value: "hematopathy" },
  //       { label: "精神疾病", value: "mentalDisease" },
  //       { label: "糖尿病", value: "diabetes" },
  //     ],
  //     extraEditors: [
  //       {
  //         key: "hypertension",
  //         editors: [
  //           { name: "", key: "", input_type: "input" }
  //         ]
  //       }
  //     ]
  //   }
  // },

  {
    name: "fetuses",
    key: ".fetuses",
    label: "胎儿检查",
    header_label: true,
    input_type: "array-custom",
    input_props: {
      config: [
        { name: "id", key: ".id", label: "id", input_type: "input", span: 6, offset: 0, hidden: true },
        { name: "fetalPosition", key: ".fetalPosition", label: "胎儿位置", input_type: "input", span: 6, offset: 0 },
        { name: "fetalHeartRate", key: ".fetalHeartRate", label: "胎心率", input_type: "input", span: 6, offset: 0 },
        { name: "fetalMovement", key: ".fetalMovement", label: "胎动", input_type: "input", span: 6, offset: 0 },
        { name: "presentation", key: ".presentation", label: "先露", input_type: "input", span: 6, offset: 0 },
        { name: "weight", key: ".weight", label: "胎重", unit: "kg", input_type: "input", span: 6, offset: 0 },
        { name: "avf", key: ".avf", label: "avf", input_type: "input", span: 6, offset: 0 },
      ]
    }
  },
  {
    name: "physicalExam",
    key: ".physicalExam",
    label: "体格检查",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name: "id", key: ".id", label: "id", input_type: "input", span: 6, offset: 0, hidden: true },
        { name: "height", key: ".height", label: "身高", unit: "cm", input_type: "input", span: 6, offset: 0 },
        { name: "weight", key: ".weight", label: "体重", unit: "kg", input_type: "input", span: 6, offset: 0 },
        { name: "systolic", key: ".systolic", label: "收缩压", unit: "mmHg", input_type: "input", span: 6, offset: 0 },
        { name: "diastolic", key: ".diastolic", label: "舒张压", unit: "mmHg", input_type: "input", span: 6, offset: 0 },
        { name: "pulse", key: ".pulse", label: "脉率", unit: "次/分", input_type: "input", span: 6, offset: 0 },
        { name: "temperature", key: ".temperature", label: "体温", unit: "℃", input_type: "input", span: 6, offset: 0 },
      ]
    }
  },
  {
    name: "gynecologicalExam",
    key: ".gynecologicalExam",
    label: "妇科检查",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name: "id", key: ".id", label: "id", input_type: "input", span: 6, offset: 0, hidden: true },
        { name: "fundalHeight", key: ".fundalHeight", label: "宫高", unit: "cm", input_type: "input", span: 6, offset: 0 },
        { name: "waistHip", key: ".waistHip", label: "腹围", unit: "cm", input_type: "input", span: 6, offset: 0 },
        { name: "engagement", key: ".engagement", label: "衔接", unit: "cm", input_type: "input", span: 6, offset: 0 }
      ]
    }
  }
]

export default config;