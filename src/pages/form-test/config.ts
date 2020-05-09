import { FormConfig } from '../../components/MyForm/interface';

const config: Array<FormConfig> = [
  // {
  //   key: '.chief complaint', label: "主诊", input_type: "input", span: 22, offset: 1, rules: "required",
  //   input_props: {
  //     type: "textarea",
  //   }
  // },
  // {
  //   key: '.lmp', label: "末次月经", input_type: 'date', span: 7, offset: 2, rules: "required",
  //   input_props: {
  //     type: "date",
  //     format: "YYYY-MM-DD"
  //   }
  // },
  // {
  //   key: '.edd', label: "预产期", input_type: "date", span: 7, offset: 1, rules: "required",
  //   input_props: {
  //     type: "date",
  //     format: "YYYY-MM-DD"
  //   }
  // },
  // {
  //   key: '.sureEdd', label: "预产期-日期", input_type: "date", span: 7, offset: 1, rules: "required",
  //   input_props: {
  //     type: "date",
  //     format: "YYYY-MM-DD"
  //   }
  // },
  // {
  //   key: '.gravidity', label: "G", input_type: "select", span: 7, offset: 1, rules: "required|number",
  //   input_props: {
  //     selectOptions: [
  //       { value: 1, label: 1 },
  //       { value: 2, label: 2 },
  //       { value: 3, label: 3 },
  //       { value: 4, label: 4 },
  //       { value: 5, label: 5 },
  //       { value: 6, label: 6 },
  //       { value: 7, label: 7 },
  //       { value: 8, label: 8 },
  //       { value: 9, label: 9 },
  //     ]
  //   }
  // },
  // {
  //   key: '.parity', label: "P", input_type: "select", span: 7, offset: 1, rules: "required|number",
  //   input_props: {
  //     selectOptions: [
  //       { value: 1, label: 1 },
  //       { value: 2, label: 2 },
  //       { value: 3, label: 3 },
  //       { value: 4, label: 4 },
  //       { value: 5, label: 5 },
  //       { value: 6, label: 6 },
  //       { value: 7, label: 7 },
  //       { value: 8, label: 8 },
  //       { value: 9, label: 9 },
  //     ]
  //   }
  // },
  // {
  //   key: ".thalassemia_0", label: "地贫/血型检查(女)", input_type: "b-custom", span: 24, offset: 0,
  //   rules: {},
  //   input_props: {
  //     config: [
  //       { key: ".Hb", label: "Hb", unit: "g/L", input_type: "input", span: 7, offset: 1, input_props: {} },
  //       { key: ".MCV", label: "MCV", unit: "g", input_type: "input", span: 7, offset: 1, input_props: {} },
  //       { key: ".MCH", label: "MCH", input_type: "input", span: 7, offset: 1, input_props: {} },
  //       { key: ".HbA2", label: "HbA2", input_type: "input", span: 7, offset: 1, input_props: {} },
  //       { key: ".Hb", label: "Hb", unit: "g/L", input_type: "input", span: 7, offset: 1, input_props: {} },
  //       {
  //         key: ".rh", label: "RH血型", input_type: "select", span: 7, offset: 1, input_props: {
  //           type: "default",
  //           selectOptions: [
  //             { label: "RH(+)", value: "RH(+)" },
  //             { label: "RH(-)", value: "RH(-)" },
  //           ]
  //         }
  //       },
  //       {
  //         key: ".genotype", label: "地贫基因型", input_type: "select", span: 7, offset: 1, input_props: {
  //           type: "default",
  //           selectOptions: [
  //             { label: "β地中海贫血基因CD14-15突变", value: "β地中海贫血基因CD14-15突变" },
  //             { label: "β地中海贫血基因CD17突变", value: "β地中海贫血基因CD17突变" },
  //             { label: "β地中海贫血基因CD27/28突变", value: "β地中海贫血基因CD27/28突变" },
  //             { label: "β地中海贫血基因CD41-42突变", value: "β地中海贫血基因CD41-42突变" },
  //             { label: "β地中海贫血基因CD43突变", value: "β地中海贫血基因CD43突变" },
  //             { label: "β地中海贫血基因CD71-72突变", value: "β地中海贫血基因CD71-72突变" },
  //             { label: "β地中海贫血基因βE突变", value: "β地中海贫血基因βE突变" },
  //             { label: "β地中海贫血基因-32突变", value: "β地中海贫血基因-32突变" },
  //             { label: "β地中海贫血基因CD31突变", value: "β地中海贫血基因CD31突变" },
  //             { label: "β地中海贫血基因30突变", value: "β地中海贫血基因30突变" },
  //             { label: "β地中海贫血基因-29突变", value: "β地中海贫血基因-29突变" },
  //             { label: "β地中海贫血基因-28突变", value: "β地中海贫血基因-28突变" },
  //             { label: "β地中海贫血基因IVS-I-1突变", value: "β地中海贫血基因IVS-I-1突变" },
  //             { label: "β地中海贫血基因IVS-II-654突变", value: "β地中海贫血基因IVS-II-654突变" },
  //             { label: "β地中海贫血基因IVS-I-5突变", value: "β地中海贫血基因IVS-I-5突变" },
  //             { label: "β地中海贫血基因CAP+1突变", value: "β地中海贫血基因CAP+1突变" },
  //             { label: "β地中海贫血基因IntM突变", value: "β地中海贫血基因IntM突变" },
  //             { label: "a地中海贫血基因SEA缺失", value: "a地中海贫血基因SEA缺失" },
  //             { label: "a地中海贫血基因3.7缺失", value: "a地中海贫血基因3.7缺失" },
  //             { label: "a地中海贫血基因4.2缺失", value: "a地中海贫血基因4.2缺失" },
  //             { label: "a地中海贫血基因QS突变", value: "a地中海贫血基因QS突变" },
  //             { label: "a地中海贫血基因WS突变", value: "a地中海贫血基因WS突变" },
  //             { label: "a地中海贫血基因CS突变", value: "a地中海贫血基因CS突变" }
  //           ]
  //         }
  //       },
  //     ]
  //   }
  // },
  // 
  {
    key: ".diseaseHistory", label: "既往史/疾病史", input_type: "b-custom", span: 24, offset: 0,
    input_props: {
      config: [
        {
          // 这个key的名命待定
          key: "++hypertension", label: "高血压", input_type: "checkbox", span: 24, offset: 0, input_props: {
            type: "whether",
            renderData:[{key: "hypertension", label: "高血压"}],
            extraEditors:[
              {key: "hypertension", editors:[
                {key:"", input_type:"input",span:24,offset:0,input_props:{
                  type: "default"
                }}
              ]}
            ]
          }
        },
        // {
        //   key: "+diabetes", label: "糖尿病", input_type: "checkbox", span: 24, offset: 0, input_props: {
        //     type: "whether",
        //     renderData:[{key: "diabetes", label: "高血压"}],
        //     extraEditors:[
        //       {key: "diabetes", editors:[
        //         {key:"", input_type:"input",span:24,offset:0,input_props:{
        //           type: "default"
        //         }}
        //       ]}
        //     ]
        //   }
        // }
      ]
    }
  },

  // {
  //   key: ".downsscreen_0", label: "早期唐氏筛查", input_type: "b-custom", span: 24, offset: 8,
  //   rules: {},
  //   input_props: {
  //     config: [
  //       { key: ".checkdate", label: "检查日期", input_type: "date", span: 7, offset: 1, input_props: {}, rules: "required" },
  //       { key: ".trisomy21", label: "21三体风险", input_type: "input", span: 7, offset: 1, input_props: {} },
  //       { key: ".trisomy18", label: "18三体风险", input_type: "input", span: 7, offset: 1, input_props: {} },
  //       { key: ".trisomy13", label: "13三体风险", input_type: "input", span: 7, offset: 1, input_props: {} },
  //       {
  //         key: ".note", label: "姓名", input_type: "b-custom", span: 24, offset: 0,
  //         input_props: {
  //           config: [
  //             { key: ".name", label: "姓名", input_type: "input", span: 7, offset: 1, input_props: {} }
  //           ]
  //         }
  //       }
  //     ]
  //   }
  // },
  // {
  //   key: ".fetuses", label: "胎儿检查", input_type: "b-fetuses", span: 24, offset: 0,
  //   rules: {
  //     fetalPosition: "required",
  //     fetalHeartRate: "required",
  //     fetalMovement: "required",
  //     presentation: "required",
  //     weight: "required",
  //     avf: "required",
  //     umbilicalbloodflow: "required",
  //   },
  //   input_props: {}
  // },
  // {
  //   key: '.familyHistory.hypertension', label: "高血压", unit: "", input_type: "checkbox", span: 24, offset: 0, rules: "",
  //   input_props: {}
  // },
  // // 关于路径相同问题，在config中是不会覆盖的，不用担心
  {
    key: '.familyHistory', label: "1", unit: "", input_type: "checkbox", span: 24, offset: 0, rules: "",
    input_props: {
      type: "multiple",
      radio: false,
      // 仅在multiple下有的radio
      renderData: [
        { key: "hepaticDisease", label: "1" },
        { key: "hypertension", label: "2" },
        { key: "epilepsy", label: "3" },
        { key: "cardiacDisease", label: "4" },
      ],
      extraEditors: [
        {
          key: "hepaticDisease",
          editors: [
            {
              key: "",
              label: "药物名称",
              unit: "",
              input_type: "input",
              span: 0,
              offset: 0,
              rules: "",
              input_props: {
                type: "password",
              },
            }
          ]
        },
        {
          key: "hypertension",
          editors: [
            {
              key: "",
              label: "药物名称",
              unit: "",
              input_type: "input",
              span: 0,
              offset: 0,
              rules: "",
              input_props: {
                type: "default",
              },
            }
          ]
        }
      ]
    }
  },
  // // {
  // //   key: ".familyHistory", label: "家族史", input_type: "checkbox", span: 24, offset: 0,
  // //   input_props: {
  // //     type: "multiple",
  // //     radio: false,
  // //     renderData: [
  // //       {
  // //         key: "epilepsy", label: "癫痫"
  // //       }, {
  // //         key: "cardiacDisease", label: "心脏病"
  // //       }
  // //     ],
  // //     extraEditors: [
  // //       {
  // //         key: "epilepsy",
  // //         editors: [{
  // //           key: "",
  // //           label: "药物名称",
  // //           input_type: "input",
  // //           span: 0,
  // //           offset: 0,
  // //           input_props: {
  // //             type: "default",
  // //           },
  // //         }]
  // //       }
  // //     ]
  // //   }
  // // },
  // {
  //   key: ".allergyHistory", label: "过敏史", input_type: "select", span: 24, offset: 0,
  //   input_props: {
  //     type: "multiple",
  //     radio: true,
  //     renderData: [
  //       {
  //         key: "penicillin", label: "青霉素"
  //       }, {
  //         key: "cephalosporin", label: "头孢霉菌素"
  //       }
  //     ],
  //     extraEditors: [
  //       {
  //         key: "penicillin",
  //         editors: [{
  //           key: "",
  //           label: "药物名称",
  //           input_type: "input",
  //           span: 0,
  //           offset: 0,
  //           input_props: {
  //             type: "default",
  //           },
  //         }]
  //       }
  //     ]
  //   }
  // },
  // {
  //   key: ".ultrasounds", label: "超声检查", input_type: "table", span: 24, offset: 0,
  //   input_props: {
  //     type: "default",
  //     editable: true,
  //     tableColumns: [
  //       {
  //         key: "checkdate", title: "检查日期",
  //         editor: {
  //           key: "",
  //           span: 0,
  //           offset: 0,
  //           input_type: "input",
  //           input_props: {
  //             type: "default"
  //           }
  //         }
  //       },
  //       { key: "type", title: "类型" },
  //       {
  //         key: "clr", title: "clr",
  //         editor: {
  //           key: "",
  //           span: 0,
  //           offset: 0,
  //           input_type: "input",
  //           input_props: {
  //             type: "default"
  //           }
  //         }
  //       },
  //       {
  //         title: "aaa",
  //         children: [
  //           {
  //             key: "nt", title: "nt",
  //             editor: {
  //               key: "",
  //               span: 0,
  //               offset: 0,
  //               input_type: "input",
  //               input_props: {
  //                 type: "default"
  //               }
  //             }
  //           },
  //           { key: "menopause", title: "menopause" },
  //         ]
  //       },
  //       { key: "gestationalweek", title: "孕周" },
  //       { key: "bpd", title: "bpd" },
  //       { key: "hc", title: "hc" },
  //       { key: "ac", title: "ac" },
  //       { key: "fl", title: "fl" },
  //       { key: "afv", title: "afv" },
  //       { key: "umbilicalbloodflow", title: "脐带血" },
  //       { key: "diagnosis", title: "诊断" },
  //       { key: "note", title: "备注" },
  //     ]
  //   }
  // }
]
export default config;