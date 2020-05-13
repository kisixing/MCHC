import { FormConfig } from '../../../../components/MyForm/interface';

const config: Array<FormConfig> = [
  { name: 'ckpressure', key: '.checkUp', label: "血压", input_type: "input", span: 8, rules: "required", },
  { name: 'add_FIELD_pulse', key: '.checkUp', label: "脉搏", input_type: "input", span: 8, rules: "required", },
  { name: 'cksheng', key: '.checkUp', label: "身高", input_type: "input", span: 8, rules: "required", },
  { name: 'cktizh', key: '.checkUp', label: "孕前体重", input_type: "input", span: 8, rules: "required", },
  { name: 'ckcurtizh', key: '.checkUp', label: "现体重", input_type: "input", span: 8, rules: "required", },
  { name: 'ckbmi', key: '.checkUp', label: "孕前BMI", input_type: "input", span: 8, rules: "required", },
  { name: 'cardiac', key: '.checkUp', label: "心率", input_type: "input", span: 24, rules: "required", },


  { name: 'add_FIELD_headFeatures', key: '.checkUp', label: "头颅五官", input_type: "checkbox", span: 8, rules: "required",
  input_props: {
    type: "custom",
    renderData: [
      {
        key: "add_FIELD_headFeatures",
        label: "",
        options: [
          {label: "正常", value: 1},
          {label: "其他", value: 2},
        ],
        extraEditors: [
          {
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  } },
  { name: 'ckpifu', key: '.checkUp', label: "皮肤黏膜", input_type: "checkbox", span: 8, rules: "required",
  input_props: {
    type: "custom",
    renderData: [
      {
        key: "ckpifu",
        label: "",
        options: [
          {label: "正常", value: 1},
          {label: "其他", value: 2},
        ],
        extraEditors: [
          {
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  } },
  { name: 'ckjiazhx', key: '.checkUp', label: "甲状腺", input_type: "checkbox", span: 8, rules: "required",
  input_props: {
    type: "custom",
    renderData: [
      {
        key: "ckjiazhx",
        label: "",
        options: [
          {label: "正常", value: 1},
          {label: "其他", value: 2},
        ],
        extraEditors: [
          {
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  }},
  { name: 'ckrut', key: '.checkUp', label: "乳房乳腺", input_type: "checkbox", span: 8, rules: "required",
  input_props: {
    type: "custom",
    renderData: [
      {
        key: "ckrut",
        label: "",
        options: [
          {label: "正常", value: 1},
          {label: "其他", value: 2},
        ],
        extraEditors: [
          {
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  }},
  { name: 'breathSounds', key: '.checkUp', label: "呼吸音", input_type: "checkbox", span: 8, rules: "required",
  input_props: {
    type: "custom",
    renderData: [
      {
        key: "breathSounds",
        label: "",
        options: [
          {label: "清", value: 1},
          {label: "其他", value: 2},
        ],
        extraEditors: [
          {
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  }},
  { name: 'breathSoundsOther', key: '.checkUp', label: "啰音", input_type: "checkbox", span: 8, rules: "required",
  input_props: {
    type: "custom",
    renderData: [
      {
        key: "breathSoundsOther",
        label: "",
        options: [
          {label: "无", value: 1},
          {label: "有", value: 2},
        ],
        extraEditors: [
          {
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  } },
  { name: 'heart', key: '.checkUp', label: "心律", input_type: "checkbox", span: 8, rules: "required",
  input_props: {
    type: "custom",
    renderData: [
      {
        key: "heart",
        label: "",
        options: [
          {label: "齐", value: 1},
          {label: "不齐", value: 2},
        ],
        extraEditors: [
          {
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  } },
  { name: 'murmurs', key: '.checkUp', label: "杂音", input_type: "checkbox", span: 8, rules: "required",
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
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  }},
  { name: 'ckganz', key: '.checkUp', label: "肝脏", input_type: "checkbox", span: 8, rules: "required",
  input_props: {
    type: "custom",
    renderData: [
      {
        key: "ckganz",
        label: "",
        options: [
          {label: "未触及", value: 1},
          {label: "可触及", value: 2},
        ],
        extraEditors: [
          {
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  }},
  { name: 'ckpiz', key: '.checkUp', label: "脾脏", input_type: "checkbox", span: 8, rules: "required",
  input_props: {
    type: "custom",
    renderData: [
      {
        key: "ckpiz",
        label: "",
        options: [
          {label: "未触及", value: 1},
          {label: "可触及", value: 2},
        ],
        extraEditors: [
          {
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  }},
  { name: 'ckshenz', key: '.checkUp', label: "肾区叩痛", input_type: "checkbox", span: 8, rules: "required",
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
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  } },
  { name: 'ckjizh', key: '.checkUp', label: "脊柱", input_type: "checkbox", span: 8, rules: "required",
  input_props: {
    type: "custom",
    renderData: [
      {
        key: "ckjizh",
        label: "",
        options: [
          {label: "正常", value: 1},
          {label: "其他", value: 2},
        ],
        extraEditors: [
          {
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  }},
  { name: 'nervousReflex', key: '.checkUp', label: "生理反射", input_type: "checkbox", span: 8, rules: "required",
  input_props: {
    type: "custom",
    renderData: [
      {
        key: "nervousReflex",
        label: "",
        options: [
          {label: "存在", value: 1},
          {label: "其他", value: 2},
        ],
        extraEditors: [
          {
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  } },
  { name: 'vascularMurmurOther', key: '.checkUp', label: "病理反射", input_type: "checkbox", span: 8, rules: "required",
  input_props: {
    type: "custom",
    renderData: [
      {
        key: "vascularMurmurOther",
        label: "",
        options: [
          {label: "无", value: 1},
          {label: "有", value: 2},
        ],
        extraEditors: [
          {
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  } },
  { name: 'ckfuzh', key: '.checkUp', label: "下肢水肿", input_type: "checkbox", span: 24, rules: "required",
  input_props: {
    type: "custom",
    renderData: [
      {
        key: "ckfuzh",
        label: "",
        options: [
          {label: "-", value: 1},
          {label: "+", value: 2},
          {label: "+-", value: 3},
          {label: "++", value: 4},
          {label: "+++", value: 5},
        ],
        extraEditors: [
          {
            key: 2,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }
        ]
      },
    ],
  }},

  { name: 'add_FIELD_checkup_other', key: '.checkUp', label: "其他", input_type: "input", span: 24 },
];

export default config;

