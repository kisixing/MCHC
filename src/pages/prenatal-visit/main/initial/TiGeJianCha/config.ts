import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
  {
    name: "physicalExam",
    key: ".physicalExam",
    label: "基本体检",
    input_type: "custom",
    header_label: true,
    input_props: {
      config: [
        { name: 'systolic', key: '.systolic', label: "收缩压", input_type: "input", span: 8, rules: "required", },
        { name: 'diastolic', key: '.diastolic', label: "舒张压", input_type: "input", span: 8, rules: "required", },
        { name: 'pulse', key: '.pulse', label: "脉搏", input_type: "input", span: 8, rules: "required", },
        { name: 'height', key: '.height', label: "身高", input_type: "input", span: 8, rules: "required", },
        { name: 'weight', key: '.weight', label: "现体重", input_type: "input", span: 8, rules: "required", },
      ]
    }
  },
  // 下面的保存不成功
  // { name: 'id', key: '.pregnancy.personalProfile.id', label: "id", input_type: "input", span: 0, hidden: true},
  // { name: 'bmi', key: '.pregnancy.personalProfile.bmi', label: "孕前BMI", input_type: "input", span: 8, rules: "required", },
  // { name: 'preweight', key: '.pregnancy.personalProfile.preweight', label: "孕前体重", input_type: "input", span: 8, rules: "required", },

  {
    name: "generalExam",
    key: ".generalExam",
    label: "内科检查",
    input_type: "custom",
    header_label: true,
    input_props: {
      config: [
        { name: 'heartrate', key: '.*.heartrate', label: "心率", input_type: "input", span: 7, rules: "required", },
        { name: 'skin', key: '.*', label: "皮肤黏膜", input_type: "checkbox", span: 12, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "skin",
                label: "",
                options: [
                  {label: "正常", value: 1},
                  {label: "其他", value: 2},
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'thyroid', key: '.*', label: "甲状腺", input_type: "checkbox", span: 12, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "thyroid",
                label: "",
                options: [
                  {label: "正常", value: 1},
                  {label: "其他", value: 2},
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'nipple', key: '.*', label: "乳房乳腺", input_type: "checkbox", span: 12, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "nipple",
                label: "",
                options: [
                  {label: "正常", value: 1},
                  {label: "其他", value: 2},
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'respiratory', key: '.*', label: "呼吸音", input_type: "checkbox", span: 12, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "respiratory",
                label: "",
                options: [
                  {label: "清", value: 1},
                  {label: "其他", value: 2},
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'rales', key: '.*', label: "啰音", input_type: "checkbox", span: 12, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "rales",
                label: "",
                options: [
                  {label: "无", value: 1},
                  {label: "有", value: 2},
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'heartrhythm', key: '.*', label: "心律", input_type: "checkbox", span: 12, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "heartrhythm",
                label: "",
                options: [
                  {label: "齐", value: 1},
                  {label: "不齐", value: 2},
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'murmurs', key: '.*', label: "杂音", input_type: "checkbox", span: 12, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "murmurs",
                label: "",
                options: [
                  {label: "无", value: 1},
                  {label: "有", value: 2},
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'liver', key: '.*', label: "肝脏", input_type: "checkbox", span: 12, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "liver",
                label: "",
                options: [
                  {label: "未触及", value: 1},
                  {label: "可触及", value: 2},
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'spleen', key: '.*', label: "脾脏", input_type: "checkbox", span: 12, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "spleen",
                label: "",
                options: [
                  {label: "未触及", value: 1},
                  {label: "可触及", value: 2},
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'ckshenz', key: '.*', label: "肾区叩痛", input_type: "checkbox", span: 12, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "ckshenz",
                label: "",
                options: [
                  {label: "无", value: 1},
                  {label: "有", value: 2},
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'spine', key: '.*', label: "脊柱", input_type: "checkbox", span: 12, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "spine",
                label: "",
                options: [
                  {label: "正常", value: 1},
                  {label: "其他", value: 2},
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'physiologicalreflection', key: '.*', label: "生理反射", input_type: "checkbox", span: 12, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "physiologicalreflection",
                label: "",
                options: [
                  {label: "存在", value: 1},
                  {label: "其他", value: 2},
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'pathologicalreflection', key: '.*', label: "病理反射", input_type: "checkbox", span: 12, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "pathologicalreflection",
                label: "",
                options: [
                  {label: "无", value: 1},
                  {label: "有", value: 2},
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              },
            ],
          }
        },
        { name: 'edema', key: '.*', label: "下肢水肿", input_type: "checkbox", span: 12, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "edema",
                label: "",
                options: [
                  {label: "-", value: 1},
                  {label: "+", value: 2},
                  {label: "+-", value: 2},
                  {label: "++", value: 3},
                  {label: "+++", value: 4},
                ]
              },
            ],
          }
        },
      ]
    }
  },
];

export default config;

