import { FormConfig } from '@/components/MyForm/interface';

const deletionsOptions = [
  { label: "β地中海贫血基因CD14-15突变", value: "β地中海贫血基因CD14-15突变" },
  { label: "β地中海贫血基因CD17突变", value: "β地中海贫血基因CD17突变" },
  { label: "β地中海贫血基因CD27/28突变", value: "β地中海贫血基因CD27/28突变" },
  { label: "β地中海贫血基因CD41-42突变", value: "β地中海贫血基因CD41-42突变" },
  { label: "β地中海贫血基因CD43突变", value: "β地中海贫血基因CD43突变" },
  { label: "β地中海贫血基因CD71-72突变", value: "β地中海贫血基因CD71-72突变" },
  { label: "β地中海贫血基因βE突变", value: "β地中海贫血基因βE突变" },
  { label: "β地中海贫血基因-32突变", value: "β地中海贫血基因-32突变" },
  { label: "β地中海贫血基因CD31突变", value: "β地中海贫血基因CD31突变" },
  { label: "β地中海贫血基因30突变", value: "β地中海贫血基因30突变" },
  { label: "β地中海贫血基因-29突变", value: "β地中海贫血基因-29突变" },
  { label: "β地中海贫血基因-28突变", value: "β地中海贫血基因-28突变" },
  { label: "β地中海贫血基因IVS-I-1突变", value: "β地中海贫血基因IVS-I-1突变" },
  { label: "β地中海贫血基因IVS-II-654突变", value: "β地中海贫血基因IVS-II-654突变" },
  { label: "β地中海贫血基因IVS-I-5突变", value: "β地中海贫血基因IVS-I-5突变" },
  { label: "β地中海贫血基因CAP+1突变", value: "β地中海贫血基因CAP+1突变" },
  { label: "β地中海贫血基因IntM突变", value: "β地中海贫血基因IntM突变" },
  { label: "a地中海贫血基因SEA缺失", value: "a地中海贫血基因SEA缺失" },
  { label: "a地中海贫血基因3.7缺失", value: "a地中海贫血基因3.7缺失" },
  { label: "a地中海贫血基因4.2缺失", value: "a地中海贫血基因4.2缺失" },
  { label: "a地中海贫血基因QS突变", value: "a地中海贫血基因QS突变" },
  { label: "a地中海贫血基因WS突变", value: "a地中海贫血基因WS突变" },
  { label: "a地中海贫血基因CS突变", value: "a地中海贫血基因CS突变" },
]

const config: Array<FormConfig> = [
  { name: "prenatalPatientId", key: ".prenatalPatientId.id", label: "病人id", span: 6, offset: 0, input_type: "input", hidden: true },
  { name: "id", key: ".id", label: "病历id", span: 6, offset: 0, input_type: "input", hidden: true },
  { name: "visitDate", key: ".visitDate", label: "检查时间", span: 8, offset: 0, input_type: "date", rules: "required", },
  {
    name: "chiefComplaint",
    key: '.chiefcomplaint',
    label: "主诉",
    input_type: "input",
    rules: "required",
    input_props: {
      type: "textarea",
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
        { name: "note", key: ".note", label: "其他异常", input_type: "input", span: 6, offset: 0 },
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
    name: "male-thalassemiaExams",
    key: ".thalassemiaExams_0",
    label: "男方地贫检查",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name: "id", key: ".id", label: "id", input_type: "input", hidden: true },
        { name: "type", key: ".type", label: "类型", input_type: "input", hidden: true },
        // { name: "hB", key: ".hB", label: "Hb", unit: "g/L", input_type: "input", span: 6, offset: 0, rules: "range(0,10)" },
        { name: "hB", key: ".hB", label: "Hb", unit: "g/L", input_type: "input", span: 6, offset: 0 },
        { name: "mCV", key: ".mCV", label: "MCV", unit: "fL", input_type: "input", span: 6, offset: 0 },
        { name: "mCH", key: ".mCH", label: "MCH", input_type: "input", span: 6, offset: 0 },
        { name: "hbA2", key: ".hbA2", label: "HbA2", input_type: "input", span: 6, offset: 0 },
        // {
        //   name: "rh",
        //   key: ".rh",
        //   label: "RH血型",
        //   input_type: "select",
        //   span: 6, offset: 0,
        //   input_props: {
        //     type: "default",
        //     options: [
        //       { label: "RH(+)", value: "RH(+)" },
        //       { label: "RH(-)", value: "RH(-)" },
        //     ]
        //   }
        // },
        {
          name: "deletions", key: ".deletions", label: "地贫基因型", input_type: "select", span: 24, offset: 0,
          input_props: {
            type: "default",
            radio: false,
            options: deletionsOptions
          }
        },
        { name: "otherNote", key: ".note", label: "其他异常", input_type: "input", span: 24, offset: 0, },
      ]
    }
  },
  {
    name: "female-thalassemiaExams",
    key: ".thalassemiaExams_1",
    label: "女方地贫检查",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name: "id", key: ".id", label: "id", input_type: "input", hidden: true },
        { name: "type", key: ".type", label: "类型", input_type: "input", hidden: true },
        { name: "hB", key: ".hB", label: "Hb", unit: "g/L", input_type: "input", span: 6, offset: 0 },
        { name: "mCV", key: ".mCV", label: "MCV", unit: "fL", input_type: "input", span: 6, offset: 0 },
        { name: "mCH", key: ".mCH", label: "MCH", input_type: "input", span: 6, offset: 0 },
        { name: "hBA2", key: ".hbA2", label: "HbA2", input_type: "input", span: 6, offset: 0 },
        // {
        //   name: "rh",
        //   key: ".rh",
        //   label: "RH血型",
        //   input_type: "select", span: 6, offset: 0,
        //   input_props: {
        //     options: [
        //       { label: "RH(+)", value: "RH(+)" },
        //       { label: "RH(-)", value: "RH(-)" },
        //     ]
        //   }
        // },
        // {
        {
          name: "deletions", key: ".deletions", label: "地贫基因型", input_type: "select", span: 24, offset: 0,
          input_props: {
            type: "default",
            radio: false,
            options: deletionsOptions
          }
        },
        { name: "otherNote", key: ".note", label: "其他异常", input_type: "input", span: 24, offset: 0, },
      ]
    }
  },
  {
    name: "diseaseHistory",
    key: '.diseaseHistory',
    label: "疾病史",
    header_label: true,
    span: 24,
    input_type: "custom",
    input_props: {
      config: [
        {
          name: "hypertension",
          key: ".hypertension(Note)",
          input_type: "checkbox",
          label: "高血压",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "hypertension",
                label: "高血压",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: "diabetes",
          key: ".diabetes(Note)",
          input_type: "checkbox",
          label: "糖尿病",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "diabetes",
                label: "",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: "cardiacDisease",
          key: ".cardiacDisease(Note)",
          input_type: "checkbox",
          label: "心脏病",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "hypertension",
                label: "",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: "other",
          key: ".other(Note)",
          input_type: "checkbox",
          label: "其他",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "other",
                label: "",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  },
  {
    name: "allergyHistory",
    key: '.allergyHistory',
    label: "过敏史",
    header_label: true,
    span: 24,
    input_type: "custom",
    input_props: {
      config: [
        {
          name: "drug",
          key: ".drug(Note)",
          input_type: "checkbox",
          label: "药物",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "drug",
                label: "",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: "food",
          key: ".food(Note)",
          input_type: "checkbox",
          label: "食物",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "food",
                label: "",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: "other",
          key: ".other(Note)",
          input_type: "checkbox",
          label: "其他",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "other",
                label: "",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  },

  {
    name: "procedureHistory",
    key: '.procedureHistory',
    label: "手术史",
    header_label: true,
    span: 24,
    input_type: "custom",
    input_props: {
      config: [
        {
          name: "uterus",
          key: ".uterus(Note)",
          input_type: "checkbox",
          label: "子宫手术",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "uterus",
                label: "",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: "ovaries",
          key: ".ovaries(Note)",
          input_type: "checkbox",
          label: "卵巢手术",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "ovaries",
                label: "",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: "thyroid",
          key: ".thyroid(Note)",
          input_type: "checkbox",
          label: "甲状腺手术",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "thyroid",
                label: "",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: "other",
          key: ".other(Note)",
          input_type: "checkbox",
          label: "其他",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "other",
                label: "",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
      ]
    }
  },



  {
    name: "familyHistory",
    key: '.familyHistory',
    label: "疾病史",
    header_label: true,
    span: 24,
    input_type: "custom",
    input_props: {
      config: [
        {
          name: "hypertension",
          key: ".hypertension(Note)",
          input_type: "checkbox",
          label: "高血压",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "hypertension",
                label: "高血压",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: "diabetes",
          key: ".diabetes(Note)",
          input_type: "checkbox",
          label: "糖尿病",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "diabetes",
                label: "",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: "birthdefects",
          key: ".birthdefects(Note)",
          input_type: "checkbox",
          label: "先天畸形",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "birthdefects",
                label: "",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: "heritableDisease",
          key: ".heritableDisease(Note)",
          input_type: "checkbox",
          label: "遗传病",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "heritableDisease",
                label: "",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: "other",
          key: ".other(Note)",
          input_type: "checkbox",
          label: "其他",
          span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "other",
                label: "",
                options: [
                  { label: "无", value: false },
                  { label: "有", value: true }
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ]
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
        { name: "engagement", key: ".engagement", label: "衔接", unit: "cm", input_type: "input", span: 6, offset: 0 }
      ]
    }
  }
]

export default config;