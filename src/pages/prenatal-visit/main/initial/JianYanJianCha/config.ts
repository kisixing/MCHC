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
  // { name: 'thalassemia', key: '.lis', label: "女方地贫", input_type: "checkbox", span: 14, rules: "required",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "thalassemia",
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
  { name: 'tsh', key: '.thyroidTestExam.tsh', label: "TSH", input_type: "input", span: 7, input_props:{} },
  { name: 'et3', key: '.thyroidTestExam.et3', label: "游离T3", input_type: "input", span: 7, input_props:{} },
  { name: 'et4', key: '.thyroidTestExam.et4', label: "游离T4", input_type: "input", span: 7, input_props:{} },
  { name: 'hgb', key: '.bloodTestExam.hgb', label: "HB", input_type: "input", span: 7, input_props:{} },
  { name: 'mcv', key: '.bloodTestExam.mcv', label: "MCV", input_type: "input", span: 7, input_props:{} },
  { name: 'plt', key: '.bloodTestExam.plt', label: "PLT", input_type: "input", span: 7, input_props:{} },
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
  // { name: 'add_FIELD_hbsAg_DNA', key: '.lis', label: "HBV DNA", input_type: "checkbox", span: 4, input_props:{} },
  { name: 'alt', key: '.liverExam.alt', label: "ALT", input_type: "input", span: 4, input_props:{} },
  { name: 'ast', key: '.liverExam.ast', label: "AST", input_type: "input", span: 4, input_props:{} },

  // { name: 'hcvAb', key: '.lis', label: "丙肝抗体", input_type: "checkbox", span: 12, rules: "required",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "hcvAb",
  //         label: "",
  //         options: [
  //           {label: "阴性", value: 1},
  //           {label: "阳性", value: 2},
  //           {label: "未查", value: 3},
  //         ],
  //         extraEditors: [
  //           { key: 2, editors: [ { name: "", key: "", label: "", input_type: "input" } ] },
  //         ]
  //       },
  //     ],
  //   }
  // },
  // { name: 'add_FIELD_hcvAb_RNA', key: '.lis', label: "丙肝RNA", input_type: "checkbox", span: 12, rules: "required",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "add_FIELD_hcvAb_RNA",
  //         label: "",
  //         options: [
  //           {label: "阴性", value: 1},
  //           {label: "阳性", value: 2},
  //           {label: "未查", value: 3},
  //         ],
  //         extraEditors: [
  //           { key: 2, editors: [ { name: "", key: "", label: "", input_type: "input" } ] },
  //         ]
  //       },
  //     ],
  //   }},

  // { name: 'rpr', key: '.lis', label: "梅毒", input_type: "checkbox", span: 24, rules: "required",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "rpr",
  //         label: "",
  //         options: [
  //           {label: "阴性", value: 1},
  //           {label: "阳性", value: 2},
  //           {label: "未查", value: 3},
  //           {label: "其他", value: 4},
  //         ],
  //         extraEditors: [
  //           { key: 2, editors: [ { name: "", key: "", label: "TPPA滴度", input_type: "input" }, { name: "", key: "", label: "TRUST滴度", input_type: "input" } ] },
  //           { key: 4, editors: [ { name: "", key: "", label: "", input_type: "input" } ] },
  //         ]
  //       },
  //     ],
  //   } },

  // { name: 'aids', key: '.lis', label: "HIV", input_type: "checkbox", span: 24, rules: "required",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "aids",
  //         label: "",
  //         options: [
  //           {label: "阴性", value: 1},
  //           {label: "阳性", value: 2},
  //           {label: "未查", value: 3},
  //         ],
  //         extraEditors: [
  //           { key: 2, editors: [ { name: "", key: "", label: "", input_type: "input" } ] },
  //         ]
  //       },
  //     ],
  //   } },

  // { name: 'add_FIELD_GBS', key: '.lis', label: "GBS", input_type: "checkbox", span: 24, rules: "required",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "add_FIELD_GBS",
  //         label: "",
  //         options: [
  //           {label: "阴性", value: 1},
  //           {label: "阳性", value: 2},
  //           {label: "未查", value: 3},
  //         ],
  //         extraEditors: [
  //           { key: 2, editors: [ { name: "", key: "", label: "", input_type: "input" } ] },
  //         ]
  //       },
  //     ],
  //   }},
  // { name: 'ogtt', key: '.lis', label: "OGTT", input_type: "checkbox", span: 24, rules: "required",
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "ogtt",
  //         label: "",
  //         options: [
  //           {label: "正常", value: 1},
  //           {label: "GDM", value: 2},
  //           {label: "未查", value: 3},
  //         ],
  //         extraEditors: [
  //           { key: 2, editors: [ { name: "", key: "", label: "空腹血糖", input_type: "input" },{ name: "", key: "", label: "餐后1H血糖", input_type: "input" }, { name: "", key: "", label: "餐后1H血糖", input_type: "input" },  ] },
  //         ]
  //       },
  //     ],
  //   } },
  // { name: 'add_FIELD_early_downs_syndrome', key: '.lis', label: "早唐", input_type: "checkbox", span: 7,
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "add_FIELD_early_downs_syndrome",
  //         label: "",
  //         options: [
  //           {label: "低风险", value: 1},
  //           {label: "高风险", value: 2},
  //         ],
  //         extraEditors: []
  //       },
  //     ],
  //   } },

  // { name: 'add_FIELD_mk_downs_syndrome', key: '.lis', label: "中唐", input_type: "checkbox", span: 7,
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "add_FIELD_mk_downs_syndrome",
  //         label: "",
  //         options: [
  //           {label: "低风险", value: 1},
  //           {label: "高风险", value: 2},
  //         ],
  //         extraEditors: []
  //       },
  //     ],
  //   }},
  // { name: 'add_FIELD_nipt', key: '.lis', label: "NIPT", input_type: "checkbox", span: 7,
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "add_FIELD_nipt",
  //         label: "",
  //         options: [
  //           {label: "低风险", value: 1},
  //           {label: "高风险", value: 2},
  //         ],
  //         extraEditors: []
  //       },
  //     ],
  //   }},
  // { name: 'add_FIELD_outpatient', key: '.lis', label: "产前诊断", input_type: "checkbox", span: 24,
  //   input_props: {
  //     type: "custom",
  //     renderData: [
  //       {
  //         key: "add_FIELD_outpatient",
  //         label: "",
  //         options: [
  //           {label: "低风险", value: 1},
  //           {label: "高风险", value: 2},
  //           {label: "拒绝产前诊断和知情同意书", value: 3},
  //         ],
  //         extraEditors: []
  //       },
  //     ],
  //   } },
  // { name: 'ckfzother', key: '.lis.ckfzother', label: "其他", input_type: "input", span: 24, input_props:{} },

]
export default config;

