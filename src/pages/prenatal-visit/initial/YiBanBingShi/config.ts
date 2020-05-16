import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [

  { name: 'id1', key: '.pregnancy.id', label: "id1", input_type: "input", span: 0, hidden: true},

  { name: 'hypertension', key: '.pregnancy.diseaseHistory', label: "高血压", input_type: "checkbox", span: 24, rules: "required",
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
    } },
  { name: 'diabetes', key: '.pregnancy.diseaseHistory', label: "糖尿病", input_type: "checkbox", span: 24, rules: "required",
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
    } },
  { name: 'endocrineDisease', key: '.pregnancy.diseaseHistory', label: "心脏病", input_type: "checkbox", span: 24, rules: "required",
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
    } },
  { name: 'other', key: '.pregnancy.diseaseHistory', label: "其他", input_type: "checkbox", span: 24, rules: "required",
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
    } },
  // { name: 'procedureHistory', key: '.pregnancy.procedureHistory', label: "手术史", input_type: "checkbox", span: 24, rules: "required",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "procedureHistory",
  //         label: "",
  //         options: [
  //           {label: "无", value: 1},
  //           {label: "有", value: 2},
  //         ],
  //         extraEditors: [
  //           {
  //             key: 2,
  //             editors: [
  //               { name: "", key: "", label: "", input_type: "input" }
  //             ]
  //           }
  //         ]
  //       },
  //     ],
  //   } },
  // { name: 'allergyHistory', key: '.pregnancy.allergyHistory', label: "过敏史", input_type: "checkbox", span: 24, rules: "required",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "allergyHistory",
  //         label: "",
  //         options: [
  //           {label: "无", value: 1},
  //           {label: "有", value: 2},
  //         ],
  //         extraEditors: [
  //           {
  //             key: 2,
  //             editors: [
  //               { name: "", key: "", label: "", input_type: "input" }
  //             ]
  //           }
  //         ]
  //       },
  //     ],
  //   } },
  // { name: 'transfusionHistory', key: '.pregnancy.transfusionHistory', label: "输血史", input_type: "checkbox", span: 24, rules: "required",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "transfusionHistory",
  //         label: "",
  //         options: [
  //           {label: "无", value: 1},
  //           {label: "有", value: 2},
  //         ],
  //         extraEditors: [
  //           {
  //             key: 2,
  //             editors: [
  //               { name: "", key: "", label: "", input_type: "input" }
  //             ]
  //           }
  //         ]
  //       },
  //     ],
  //   } },
  // { name: 'add_FIELD_symptom', key: '.hisInfo.add_FIELD_symptom', label: "其他", input_type: "input", span: 24 },

]
export default config;

