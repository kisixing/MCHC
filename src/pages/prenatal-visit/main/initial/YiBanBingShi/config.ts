import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [

  {
    name: "diseaseHistory",
    key: ".diseaseHistory",
    label: "疾病史",
    input_type: "custom",
    header_label: true,
    input_props: {
      config: [
        { name: 'hypertension', key: '.hypertension(Note)', label: "高血压", input_type: "checkbox", span: 24, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "hypertension",
                label: "",
                options: [
                  {label: "无", value: false},
                  {label: "有", value: true},
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'diabetes', key: '.diabetes(Note)', label: "糖尿病", input_type: "checkbox", span: 24, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "diabetes",
                label: "",
                options: [
                  {label: "无", value: false},
                  {label: "有", value: true},
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'endocrineDisease', key: '.endocrineDisease(Note)', label: "心脏病", input_type: "checkbox", span: 24, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "endocrineDisease",
                label: "",
                options: [
                  {label: "无", value: false},
                  {label: "有", value: true},
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        // { name: 'other', key: '.*', label: "其他", input_type: "checkbox", span: 24, rules: "required",
        //   input_props: {
        //     type: "custom",
        //     renderData: [
        //       {
        //         key: "other",
        //         label: "",
        //         options: [
        //           {label: "无", value: false},
        //           {label: "有", value: true},
        //         ],
        //         extraEditors: [
        //           {
        //             key: true,
        //             editors: [
        //               { name: "", key: "", label: "", input_type: "input" }
        //             ]
        //           }
        //         ]
        //       },
        //     ],
        //   }
        // },
      ]
    }
  },
  {
    name: "procedureHistory",
    key: ".procedureHistory",
    label: "手术史",
    input_type: "custom",
    header_label: true,
    input_props: {
      config: [
        { name: 'uterus', key: '.uterus(Note)', label: "子宫手术", input_type: "checkbox", span: 24, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "uterus",
                label: "",
                options: [
                  {label: "无", value: false},
                  {label: "有", value: true},
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'ovaries', key: '.ovaries(Note)', label: "卵巢手术", input_type: "checkbox", span: 24, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "ovaries",
                label: "",
                options: [
                  {label: "无", value: false},
                  {label: "有", value: true},
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'thyroid', key: '.thyroid(Note)', label: "甲状腺手术", input_type: "checkbox", span: 24, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "thyroid",
                label: "",
                options: [
                  {label: "无", value: false},
                  {label: "有", value: true},
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'other', key: '.other(Note)', label: "其他", input_type: "checkbox", span: 24, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "other",
                label: "",
                options: [
                  {label: "无", value: false},
                  {label: "有", value: true},
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
      ]
    }
  },
  {
    name: "allergyHistory",
    key: ".allergyHistory",
    label: "过敏史",
    input_type: "custom",
    header_label: true,
    input_props: {
      config: [
        { name: 'penicillin', key: '.penicillin(Note)', label: "青霉素", input_type: "checkbox", span: 24, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "penicillin",
                label: "",
                options: [
                  {label: "无", value: false},
                  {label: "有", value: true},
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'cephalosporin', key: '.cephalosporin(Note)', label: "头孢", input_type: "checkbox", span: 24, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "cephalosporin",
                label: "",
                options: [
                  {label: "无", value: false},
                  {label: "有", value: true},
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'alcohol', key: '.alcohol(Note)', label: "酒精", input_type: "checkbox", span: 24, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "alcohol",
                label: "",
                options: [
                  {label: "无", value: false},
                  {label: "有", value: true},
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'other', key: '.other(Note)', label: "其他", input_type: "checkbox", span: 24, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "other",
                label: "",
                options: [
                  {label: "无", value: false},
                  {label: "有", value: true},
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
      ]
    }
  },

]
export default config;

