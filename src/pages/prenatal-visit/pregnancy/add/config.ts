import { FormConfig } from '@/components/MyForm/interface';
import * as Options from '@/pages/prenatal-visit/options';

const config: Array<FormConfig> = [

  {
    name: "yunfuxinxi",
    key: ".*",
    label: "孕妇基本信息",
    input_type: "custom",
    header_label: true,
    input_props: {
      config: [
          { name: 'outpatientNO', key: '.outpatientNO', label: "就诊卡号", input_type: "input", span: 7, rules: "required" },
          { name: 'name', key: '.name', label: "姓名", input_type: "input", span: 7, rules: "required" },
          { name: 'telephone', key: '.telephone', label: "手机号码", input_type: "input", span: 7, rules: "required" },
          { name: 'workPhone', key: '.workPhone', label: "固定电话", input_type: "input", span: 7, rules: "required" },
          { name: 'idType', key: '.idType', label: "证件类型", input_type: "select", span: 7, rules: "required", input_props:{options: Options.idTypeOptions} },
          { name: 'idNO', key: '.idNO', label: "证件号码", input_type: "input", span: 7, rules: "required" },
          // { name: 'add_FIELD_sh', key: '.add_FIELD_sh', label: "已审核", input_type: "checkbox", span: 7, offset: 1 },
          { name: 'dob', key: '.dob', label: "出生日期", input_type: "date", span: 7, rules: "required" },
          { name: 'nationality', key: '.nationality', label: "国籍", input_type: "input", span: 7, rules: "required" },
          { name: 'nativeplace', key: '.nativeplace', label: "籍贯", input_type: "select", span: 7, rules: "required", input_props:{options: Options.nativeplaceOptions} },
          { name: 'age', key: '.age', label: "年龄", input_type: "input", span: 7, rules: "required" },
          { name: 'ethnic', key: '.ethnic', label: "民族", input_type: "select", span: 7, rules: "required", input_props:{options: Options.ethnicOptions} },
          { name: 'occupation', key: '.occupation', label: "职业", input_type: "select", span: 7, rules: "required", input_props:{options: Options.occupationOptions} },
          { name: 'maritalStatus', key: '.maritalStatus', label: "婚姻状态", input_type: "select", span: 7, rules: "required", input_props:{options: Options.maritalStatusOptions} },
          // { name: 'add_FIELD_zhunsz', key: '.add_FIELD_zhunsz', label: "准生证号", input_type: "input", span: 7, rules: "required" },
          // { name: 'add_FIELD_ADD_zhunsz_sh', key: '.add_FIELD_ADD_zhunsz_sh', label: "已审核", input_type: "checkbox", span: 7, offset: 1 },
          { name: 'permanentResidenceAddress', key: '.permanentResidenceAddress', label: "户口地址", input_type: "addressCascader", span: 18, rules: "required" },
          { name: 'residenceAddress', key: '.residenceAddress', label: "居住地地址", input_type: "addressCascader", span: 18, rules: "required" },
          { name: 'postpartumAddress', key: '.postpartumAddress', label: "产休地址", input_type: "addressCascader", span: 18, rules: "required" },
      ]
    }
  },

  {
    name: "zhangfuxinxi",
    key: ".*",
    label: "丈夫基本信息",
    input_type: "custom",
    header_label: true,
    input_props: {
      config: [
        { name: 'partnerName', key: '.partnerName', label: "姓名", input_type: "input", span: 7 },
        { name: 'partnerTelephone', key: '.partnerTelephone', label: "手机号码", input_type: "input", span: 7 },
        { name: 'userhmcno', key: '.partnerProfile.outpatientNO', label: "门诊号", input_type: "input", span: 7 },
        { name: 'partnerIdType', key: '.partnerIdType', label: "证件类型", input_type: "select", span: 7, input_props:{options: Options.idTypeOptions} },
        { name: 'partnerIdNO', key: '.partnerIdNO', label: "证件号码", input_type: "input", span: 7 },
        // { name: 'userhage', key: '.userhage', label: "年龄", input_type: "input", span: 7 },
        { name: 'partnerNationality', key: '.partnerNationality', label: "国籍", input_type: "input", span: 7 },
        { name: 'partnerNativeplace', key: '.partnerNativeplace', label: "籍贯", input_type: "select", span: 7, input_props:{options: Options.nativeplaceOptions} },
        { name: 'partnerEthnic', key: '.partnerEthnic', label: "民族", input_type: "select", span: 7, input_props:{options: Options.ethnicOptions} },
        { name: 'partnerOccupation', key: '.partnerOccupation', label: "职业", input_type: "select", span: 7, input_props:{options: Options.occupationOptions} },
        // { name: 'smokeNote', key: '.partnerProfile.smokeNote', label: "烟(支)", input_type: "input", span: 7, rules: "required" },
        // { name: 'alcoholNote', key: '.partnerProfile.alcoholNote', label: "酒(ml)", input_type: "input", span: 7, rules: "required", input_props:{} },
        {
          name: 'smoke', key: '.partnerProfile', label: "烟(支)", input_type: "checkbox", span: 10, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "smoke",
                label: "烟(支)",
                options: [
                  { label: "有", value: true },
                  { label: "无", value: false },
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ],
          }
        },
        {
          name: 'alcohol', key: '.partnerProfile', label: "酒(ml)", input_type: "checkbox", span: 10, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "alcohol",
                label: "酒(ml)",
                options: [
                  { label: "有", value: true },
                  { label: "无", value: false },
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ],
          }
        },

        { name: 'disease', key: '.partnerProfile.disease', label: "是否患有疾病", input_type: "select", span: 7, rules: "required",
          input_props:{
            radio: false,
            options: Options.diseaseOptions
          }
        },
      ]
    }
  },

  {
    name: "yunchanxinxi",
    key: ".*",
    label: "本次孕产信息",
    input_type: "custom",
    header_label: true,
    input_props: {
      config: [
        { name: 'checkupNO', key: '.checkupNO', label: "建档日期", input_type: "date", span: 7, rules: "required" },
        { name: 'createDate', key: '.createDate', label: "建档号", input_type: "input", span: 7 },
        { name: 'lmp', key: '.lmp', label: "末次月经", input_type: "date", span: 7, rules: "required" },
        { name: 'edd', key: '.edd', label: "预产期-日期", input_type: "date", span: 7, rules: "required" },
        { name: 'sureEdd', key: '.sureEdd', label: "预产期-B超", input_type: "date", span: 7, rules: "required" },
        { name: 'preweight', key: '.personalProfile.preweight', label: "孕前体重(kg)", input_type: "input", span: 7, rules: "required" },
        // { name: 'weight', key: '.physicalExam.weight', label: "现体重", input_type: "input", span: 7, rules: "required" },
        // { name: 'height', key: '.physicalExam.height', label: "身高", input_type: "input", span: 7, rules: "required" },
        // { name: 'systolic', key: '.physicalExam.systolic', label: "收缩压", input_type: "input", span: 7, rules: "required" },
        // { name: 'diastolic', key: '.physicalExam.diastolic', label: "舒张压", input_type: "input", span: 7, rules: "required" },
        // { name: 'pulse', key: '.physicalExam.pulse', label: "脉搏", input_type: "input", span: 7, rules: "required" },
        { name: 'menarche', key: '.menstrualHistory.menarche', label: "初潮", input_type: "select", span: 7, rules: "required", input_props:{options: Options.menarcheOptions} },
        { name: 'menstrualCycle', key: '.menstrualHistory.menstrualCycle', label: "月经周期", input_type: "input", span: 7, rules: "required" },
        { name: 'menstrualPeriod', key: '.menstrualHistory.menstrualPeriod', label: "持续天数", input_type: "input", span: 7, rules: "required" },

        {
          name: 'dysmenorrhea', key: '.menstrualHistory', label: "痛经", input_type: "checkbox", span: 7, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "dysmenorrhea",
                label: "痛经",
                options: [
                  { label: "是", value: true },
                  { label: "无", value: false },
                ]
              }
            ],
          }
        },
        {
          name: 'nearRelation', key: '.*', label: "近亲结婚", input_type: "checkbox", span: 7, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "nearRelation",
                label: "近亲结婚",
                options: [
                  { label: "是", value: true },
                  { label: "否", value: false },
                ]
              }
            ],
          }
        },
        { name: 'maritalYears', key: '.maritalYears', label: "结婚年龄", input_type: "input", span: 7, rules: "required" },
        {
          name: 'smoke', key: '.personalProfile', label: "吸烟", input_type: "checkbox", span: 10, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "smoke",
                label: "吸烟",
                options: [
                  { label: "有", value: true },
                  { label: "无", value: false },
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ],
          }
        },
        {
          name: 'alcohol', key: '.personalProfile', label: "饮酒", input_type: "checkbox", span: 10, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "alcohol",
                label: "饮酒",
                options: [
                  { label: "有", value: true },
                  { label: "无", value: false },
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ],
          }
        },
        {
          name: 'hazardoussubstances', key: '.personalProfile', label: "接触有害物质", input_type: "checkbox", span: 7, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "hazardoussubstances",
                label: "接触有害物质",
                options: [
                  { label: "有", value: true },
                  { label: "无", value: false },
                ]
              }
            ],
          }
        },
        {
          name: 'radioactivity', key: '.personalProfile', label: "接触放射线", input_type: "checkbox", span: 7, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "radioactivity",
                label: "接触放射线",
                options: [
                  { label: "有", value: true },
                  { label: "无", value: false },
                ]
              }
            ],
          }
        },
        {
          name: 'hypertension', key: '.diseaseHistory', label: "高血压", input_type: "checkbox", span: 7, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "hypertension",
                label: "高血压",
                options: [
                  { label: "有", value: true },
                  { label: "无", value: false },
                ]
              }
            ],
          }
        },

        {
          name: 'diabetes', key: '.diseaseHistory', label: "糖尿病", input_type: "checkbox", span: 7, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "diabetes",
                label: "糖尿病",
                options: [
                  { label: "有", value: true },
                  { label: "无", value: false },
                ]
              }
            ],
          }
        },
        {
          name: 'cardiacDisease', key: '.diseaseHistory', label: "心脏病", input_type: "checkbox", span: 7, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "cardiacDisease",
                label: "心脏病",
                options: [
                  { label: "有", value: true },
                  { label: "无", value: false },
                ]
              }
            ],
          }
        },
        // { name: 'add_FIELD_mb_sss_sss', key: '.diseaseHistory', label: "手术史", input_type: "input", span: 7, rules: "required" },
        // { name: 'bsguomin', key: '.diseaseHistory', label: "过敏史", input_type: "input", span: 7, rules: "required" },
        // { name: 'mzxuan', key: '.diseaseHistory', label: "家族史", input_type: "input", span: 7, rules: "required" },

      ]
    }
  },
  {
    name: "pregnancyHistories",
    key: ".pregnancyHistories",
    label: "孕产史",
    input_type: "array-custom",
    header_label: true,
    is_new_row: true,
    input_props: {
      config: [
        { name: 'year', key: '.year', label: "妊娠终止", input_type: "date", span: 7, rules: "required", input_props:{} },
        { name: 'complication', key: '.*', label: "并发症", input_type: "checkbox", span: 10, rules: "required",
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "complication",
                label: "并发症",
                options: [
                  { label: "是", value: true },
                  { label: "否", value: false },
                ],
                extraEditors: [
                  {
                    key: true,
                    editors: [
                      { name: "", key: "", label: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ],
          }
        },
        // { name: 'sffm', key: '', label: "是否分娩", input_type: "checkbox", span: 7, rules: "required",
        //   input_props:{
        //     type: "custom",
        //     renderData: [
        //       {
        //         key: "sffm",
        //         label: "是否分娩",
        //         options: [
        //           { label: "是", value: true },
        //           { label: "否", value: false  },
        //         ],
        //         extraEditors: []
        //       }
        //     ],
        //   }
        // },
        { name: 'hospital', key: '.hospital', label: "分娩医院", input_type: "input", span: 7, rules: "required", input_props:{} },
        // { name: 'gesweek', key: '.gesweek', label: "分娩孕周", input_type: "input", span: 7, rules: "required", input_props:{} },
        { name: 'fetalcount', key: '.fetalcount', label: "胎数", input_type: "input", span: 7, rules: "required", input_props:{} },

        // { name: 'fenm', key: '.fenm', label: "分娩方式", input_type: "input", span: 7, rules: "required", input_props:{} },
        { name: 'puerperalFever', key: '.*', label: "产后持续发热", input_type: "checkbox", span: 7, rules: "required",
          input_props:{
            type: "custom",
            renderData: [
              {
                key: "puerperalFever",
                label: "产后持续发热",
                options: [
                  { label: "有", value: true },
                  { label: "无", value: false  },
                ]
              }
            ],
          }
        },
        { name: 'hemorrhage', key: '.*', label: "产后出血", input_type: "checkbox", span: 7, rules: "required",
          input_props:{
            type: "custom",
            renderData: [
              {
                key: "hemorrhage",
                label: "产后出血",
                options: [
                  { label: "有", value: true },
                  { label: "无", value: false  },
                ]
              }
            ],
          }
        },

        // { name: 'fetalcount', key: '.fetalcount', label: "胎儿信息", input_type: "array-custom", span: 24, rules: "required",
        //   input_props:{
        //     config: [
        //       { name: 'childGender', key: '.*', label: "性别", input_type: "checkbox", span: 7, rules: "required",
        //         input_props:{
        //           type: "custom",
        //           renderData: [
        //             {
        //               key: "childGender",
        //               label: "性别",
        //               options: [
        //                 { label: "男", value: 1 },
        //                 { label: "女", value: 2 },
        //               ]
        //             }
        //           ],
        //         }
        //       },
        //       { name: 'neonateWeight', key: '.neonateWeight', label: "胎数", input_type: "input", span: 7, rules: "required", input_props:{} },
        //       { name: 'menarche', key: '.menstrualHistory.menarche', label: "新生儿当前状况", input_type: "select", span: 7, rules: "required",
        //         input_props:{
        //           options: [
        //             { label: "健在", value: 1 },
        //             { label: "死亡", value: 2 },
        //           ]
        //         }
        //       },
        //     ]
        //   }
        // },
      ]
    }
  }

]
export default config;
