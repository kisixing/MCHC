import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
  { name: 'systolic', key: '.physicalExam.systolic', label: "收缩压", input_type: "input", span: 8, rules: "required", },
  { name: 'diastolic', key: '.physicalExam.diastolic', label: "舒张压", input_type: "input", span: 8, rules: "required", },
  { name: 'pulse', key: '.physicalExam.pulse', label: "脉搏", input_type: "input", span: 8, rules: "required", },
  { name: 'height', key: '.physicalExam.height', label: "身高", input_type: "input", span: 8, rules: "required", },
  { name: 'weight', key: '.physicalExam.weight', label: "现体重", input_type: "input", span: 8, rules: "required", },

  // 下面的保存不成功
  // { name: 'id', key: '.pregnancy.personalProfile.id', label: "id", input_type: "input", span: 0, hidden: true},
  // { name: 'bmi', key: '.pregnancy.personalProfile.bmi', label: "孕前BMI", input_type: "input", span: 8, rules: "required", },
  // { name: 'preweight', key: '.pregnancy.personalProfile.preweight', label: "孕前体重", input_type: "input", span: 8, rules: "required", },

  { name: 'heartrate', key: '.generalExam.heartrate', label: "心率", input_type: "input", span: 7, rules: "required", },
  // { name: 'face', key: '.generalExam', label: "头颅五官", input_type: "checkbox", span: 8, rules: "required",
  // input_props: {
  //   type: "custom",
  //   renderData: [
  //     {
  //       key: "face",
  //       label: "",
  //       options: [
  //         {label: "正常", value: 0},
  //         {label: "其他", value: 1},
  //       ],
  //       extraEditors: [
  //         {
  //           key: 1,
  //           editors: [
  //             { name: "", key: "", label: "", input_type: "input" }
  //           ]
  //         }
  //       ]
  //     },
  //   ],
  // } },
  { name: 'skin', key: '.generalExam', label: "皮肤黏膜", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "skin",
          label: "",
          options: [
            {label: "正常", value: 0},
            {label: "其他", value: 1},
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
  { name: 'thyroid', key: '.generalExam', label: "甲状腺", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "thyroid",
          label: "",
          options: [
            {label: "正常", value: 0},
            {label: "其他", value: 1},
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
  { name: 'nipple', key: '.generalExam', label: "乳房乳腺", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "nipple",
          label: "",
          options: [
            {label: "正常", value: 0},
            {label: "其他", value: 1},
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
  { name: 'respiratory', key: '.generalExam', label: "呼吸音", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "respiratory",
          label: "",
          options: [
            {label: "清", value: 0},
            {label: "其他", value: 1},
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
  { name: 'rales', key: '.generalExam', label: "啰音", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "rales",
          label: "",
          options: [
            {label: "无", value: 0},
            {label: "有", value: 1},
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
  { name: 'heartrhythm', key: '.generalExam', label: "心律", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "heartrhythm",
          label: "",
          options: [
            {label: "齐", value: 0},
            {label: "不齐", value: 1},
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
  { name: 'murmurs', key: '.generalExam', label: "杂音", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "murmurs",
          label: "",
          options: [
            {label: "无", value: 0},
            {label: "有", value: 1},
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
  { name: 'liver', key: '.generalExam', label: "肝脏", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "liver",
          label: "",
          options: [
            {label: "未触及", value: 0},
            {label: "可触及", value: 1},
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
  { name: 'spleen', key: '.generalExam', label: "脾脏", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "spleen",
          label: "",
          options: [
            {label: "未触及", value: 0},
            {label: "可触及", value: 1},
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
  { name: 'ckshenz', key: '.generalExam', label: "肾区叩痛", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "ckshenz",
          label: "",
          options: [
            {label: "无", value: 0},
            {label: "有", value: 1},
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
  { name: 'spine', key: '.generalExam', label: "脊柱", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "spine",
          label: "",
          options: [
            {label: "正常", value: 0},
            {label: "其他", value: 1},
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
  { name: 'physiologicalreflection', key: '.generalExam', label: "生理反射", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "physiologicalreflection",
          label: "",
          options: [
            {label: "存在", value: 0},
            {label: "其他", value: 1},
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
  { name: 'pathologicalreflection', key: '.generalExam', label: "病理反射", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "pathologicalreflection",
          label: "",
          options: [
            {label: "无", value: 0},
            {label: "有", value: 1},
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
  { name: 'edema', key: '.generalExam', label: "下肢水肿", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "edema",
          label: "",
          options: [
            {label: "-", value: 0},
            {label: "+", value: 1},
            {label: "+-", value: 2},
            {label: "++", value: 3},
            {label: "+++", value: 4},
          ]
        },
      ],
    }
  },
];

export default config;

