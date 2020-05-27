import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
  { name: 'id', key: '.pregnancy.id', label: "id", input_type: "input", span: 0, input_props:{} },
  { name: 'aBO', key: '.partnerProfile.aBO', label: "男方血型", input_type: "select", span: 5,
    input_props:{
      options: [
        { label: 'O', value: 0 },
        { label: 'A', value: 1 },
        { label: 'B', value: 2 },
        { label: 'AB', value: 3 },
      ]
    }
  },
  { name: 'rH', key: '.partnerProfile.rH', label: "", input_type: "select", span: 5,
    input_props:{
      options: [
        { label: 'RH(-)', value: 0 },
        { label: 'RH(+)', value: 1 },
      ]
    }
  },
  // { name: 'husbandThalassemia', key: '.lis', label: "男方地贫", input_type: "checkbox", span: 14, rules: "required",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "husbandThalassemia",
  //         label: "",
  //         options: [
  //           {label: "正常", value: 1},
  //           {label: "异常", value: 2},
  //           {label: "未查", value: 3},
  //           {label: "其他", value: 4},
  //         ],
  //         extraEditors: [
  //           { key: 2, editors: [ { name: "", key: "", label: "", input_type: "input" } ] },
  //           { key: 4, editors: [ { name: "", key: "", label: "", input_type: "input" } ] },
  //         ]
  //       },
  //     ],
  //   } },
  { name: 'aBO2', key: '.personalProfile.aBO', label: "女方血型", input_type: "select", span: 5,
    input_props:{
      options: [
        { label: 'O', value: 0 },
        { label: 'A', value: 1 },
        { label: 'B', value: 2 },
        { label: 'AB', value: 3 },
      ]
    }
  },
  { name: 'rH2', key: '.personalProfile.rH', label: "", input_type: "select", span: 5,
    input_props:{
      options: [
        { label: 'RH(-)', value: 0 },
        { label: 'RH(+)', value: 1 },
      ]
    }
  },
  { name: 'thalassemiaResult', key: '.prenatalExam', label: "女方地贫", input_type: "checkbox", span: 14, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "thalassemiaResult",
          label: "",
          options: [
            {label: "正常", value: 1},
            {label: "异常", value: 2},
            {label: "未查", value: 3},
            {label: "其他", value: 4},
          ],
        },
      ],
    }
  },
  { name: 'tsh', key: '.thyroidTestExam.tsh', label: "TSH", input_type: "input", unit: "uIU/ml", span: 7, input_props:{} },
  { name: 'et3', key: '.thyroidTestExam.et3', label: "游离T3", input_type: "input", unit: "pmol/L", span: 7, input_props:{} },
  { name: 'et4', key: '.thyroidTestExam.et4', label: "游离T4", input_type: "input", unit: "pmol/L", span: 7, input_props:{} },
  { name: 'hgb', key: '.bloodTestExam.hgb', label: "HB", input_type: "input", unit: "g/L", span: 7, input_props:{} },
  { name: 'mcv', key: '.bloodTestExam.mcv', label: "MCV", input_type: "input", unit: "fL", span: 7, input_props:{} },
  { name: 'plt', key: '.bloodTestExam.plt', label: "PLT", input_type: "input", unit: "x10^9/L", span: 7, input_props:{} },
  // { name: 'add_FIELD_ndb', key: '.lis', label: "尿蛋白", input_type: "checkbox", span: 24, rules: "required",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "add_FIELD_ndb",
  //         label: "",
  //         options: [
  //           {label: "阴性", value: 1},
  //           {label: "弱阳性", value: 2},
  //           {label: "阳性", value: 3},
  //           {label: "未查", value: 4},
  //           {label: "其他", value: 5},
  //         ],
  //         extraEditors: [
  //           { key: 3, editors: [ { name: "", key: "", label: "", input_type: "input" } ] },
  //           { key: 5, editors: [ { name: "", key: "", label: "", input_type: "input" } ] },
  //         ]
  //       },
  //     ],
  //   }},
  // { name: 'hbsAg', key: '.lis', label: "乙肝两对半", input_type: "checkbox", span: 10, rules: "required",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "hbsAg",
  //         label: "",
  //         options: [
  //           {label: "正常", value: 1},
  //           {label: "异常", value: 2},
  //           {label: "未查", value: 3},
  //         ],
  //         extraEditors: [
  //           { key: 2, editors: [ { name: "", key: "", label: "", input_type: "input" } ] },
  //         ]
  //       },
  //     ],
  //   } },
  // { name: 'add_FIELD_hbsAg_DNA', key: '.lis', label: "HBV DNA", input_type: "checkbox", unit: "IU/ml", span: 4, input_props:{} },
  { name: 'alt', key: '.liverExam.alt', label: "ALT", input_type: "input", unit: "U/L", span: 4, input_props:{} },
  { name: 'ast', key: '.liverExam.ast', label: "AST", input_type: "input", unit: "U/L", span: 4, input_props:{} },

  { name: 'hcvResult', key: '.prenatalExam', label: "丙肝抗体", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "hcvResult",
          label: "",
          options: [
            {label: "阴性", value: 1},
            {label: "阳性", value: 2},
            {label: "未查", value: 3},
          ]
        },
      ],
    }
  },
  { name: 'hcvrnaResult', key: '.prenatalExam', label: "丙肝RNA", input_type: "checkbox", span: 12, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "hcvrnaResult",
          label: "",
          options: [
            {label: "阴性", value: 1},
            {label: "阳性", value: 2},
            {label: "未查", value: 3},
          ]
        },
      ],
    }
  },

  { name: 'syphilisResult', key: '.prenatalExam', label: "梅毒", input_type: "checkbox", span: 24, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "syphilisResult",
          label: "",
          options: [
            {label: "阴性", value: 1},
            {label: "阳性", value: 2},
            {label: "未查", value: 3},
            {label: "其他", value: 4},
          ],
          // extraEditors: [
          //   { key: 2, editors: [ { name: "", key: "syphilisExam.trust", label: "TPPA滴度", input_type: "input" }, { name: "", key: "", label: "TRUST滴度", input_type: "input" } ] },
          //   { key: 4, editors: [ { name: "", key: "", label: "", input_type: "input" } ] },
          // ]
        },
      ],
    }
  },

  { name: 'hivResult', key: '.prenatalExam.hivResult(Note)', label: "HIV", input_type: "checkbox", span: 24, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "hivResult",
          label: "",
          options: [
            {label: "阴性", value: 1},
            {label: "阳性", value: 2},
            {label: "未查", value: 3},
          ],
          extraEditors: [
            { key: 2, editors: [ { name: "", key: "", label: "", input_type: "input" } ] },
          ]
        },
      ],
    }
  },

  { name: 'gbsResult', key: '.prenatalExam', label: "GBS", input_type: "checkbox", span: 24, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "gbsResult",
          label: "",
          options: [
            {label: "阴性", value: 1},
            {label: "阳性", value: 2},
            {label: "未查", value: 3},
          ],
          // extraEditors: [
          //   { key: 2, editors: [ { name: "", key: "", label: "", input_type: "input" } ] },
          // ]
        },
      ],
    }
  },
  { name: 'ogttResult', key: '.prenatalExam', label: "OGTT", input_type: "checkbox", span: 24, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "ogttResult",
          label: "",
          options: [
            {label: "正常", value: 1},
            {label: "GDM", value: 2},
            {label: "未查", value: 3},
          ],
          // extraEditors: [
          //   { key: 2, editors: [ { name: "", key: "", label: "空腹血糖", input_type: "input" },{ name: "", key: "", label: "餐后1H血糖", input_type: "input" }, { name: "", key: "", label: "餐后1H血糖", input_type: "input" },  ] },
          // ]
        },
      ],
    }
  },
]
export default config;

