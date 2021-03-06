import { FormConfig } from '@/components/MyForm/interface';

const punctureTargetOptions = [
  { label: "经胎盘", value: 1 },
  { label: "经羊膜", value: 0 },
  { label: "经宫颈", value: 1 },
  { label: "经腹部", value: 2 },
  { label: "经脐静脉", value: 1 },
  { label: "经脐静脉游离段", value: 2 },
  { label: "胸腔", value: 1 },
  { label: "腹腔膜", value: 2 },
];


const instrumentOptions = [
  { label: "穿刺针16/18G", value: 1 },
  { label: "穿刺针17/19G", value: 2 },
  { label: "穿刺针20G", value: 3 },
  { label: "穿刺针21G", value: 4 },
  { label: "活检钳", value: 5 }
]



const generalPdProcedureConfig = [
  {
    name: "startTime", key: ".startTime", input_type: "date", label: "开始时间", span: 6,
    input_props: {
      type: "time",
      format: "HH:mm"
    }
  },
  {
    name: "endTime", key: ".endTime", input_type: "date", label: "结束时间", span: 6,
    input_props: {
      type: "time",
      format: "HH:mm"
    }
  },
  { name: "duration", key: ".duration", input_type: "input", label: "持续时间", unit: "min", span: 6 },
  {
    name: "processEvaluation", key: ".processEvaluation(Note)", input_type: "checkbox", label: "过程评估", span: 24,
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "processEvaluation",
          label: "",
          options: [
            { label: "顺利", value: 0 },
            { label: "困难", value: 1 },
            { label: "失败", value: 2 }
          ],
          extraEditors: [
            {
              key: 1,
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            },
            {
              key: 2,
              editors: [
                { name: "", key: "", label: "备注", input_type: "input" }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    name: "diagnosis", key: ".diagnosis", input_type: "input", label: "诊断", span: 24,
    input_props: {
      type: "textarea"
    }
  },
  {
    name: "exception", key: ".exception", input_type: "input", label: "特殊记录", span: 24,
    input_props: {
      type: "textarea"
    }
  },
]

const pdProcedures: { [key: string]: FormConfig } = {
  "1": {
    name: "pdProcedure",
    key: ".pdProcedure",
    input_type: "custom",
    span: 24,
    label: "手术过程记录",
    header_label: true,
    input_props: {
      config: [
        ...generalPdProcedureConfig,
        {
          name: "punctureTarget", key: ".punctureTarget", input_type: "select", label: "穿刺部位", span: 6, is_new_row: true,
          input_props: {
            options: [
              punctureTargetOptions[0],
              punctureTargetOptions[1]
            ]
          }
        },
        {
          name: "punctureAmount", key: ".punctureAmount", input_type: "input", label: "穿刺次数", span: 6,
          input_props: {
            type: "number"
          }
        },
        {
          name: "placentaEntry", key: ".placentaEntry", input_type: "select", label: "经否胎盘", span: 6,
          input_props: {
            options: [
              { label: "经", value: 1 },
              { label: "否", value: 0 }
            ]
          }
        },
        {
          name: "placentaHemorrhage", key: ".placentaHemorrhage(Note)", input_type: "checkbox", label: "胎盘出血", span: 12,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "placentaHemorrhage",
                label: "",
                options: [
                  { label: "是", value: 1 },
                  { label: "否", value: 0 }
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        { name: "sampleInspection", key: ".sampleInspection", input_type: "input", label: "送检项目", span: 6 },
      ]
    }
  },
  "2": {
    name: "pdProcedure",
    key: ".pdProcedure",
    input_type: "custom",
    span: 24,
    label: "手术过程记录",
    header_label: true,
    input_props: {
      config: [
        ...generalPdProcedureConfig,
        {
          name: "punctureTarget", key: ".punctureTarget", input_type: "select", label: "穿刺部位", span: 6, is_new_row: true,
          input_props: {
            options: [
              punctureTargetOptions[2],
              punctureTargetOptions[3]
            ]
          }
        },
        {
          name: "instrument", key: ".instrument", input_type: "select", label: "器械", span: 6,
          input_props: {
            options: [
              instrumentOptions[0],
              instrumentOptions[1],
              instrumentOptions[2],
              instrumentOptions[3],
              instrumentOptions[4],
            ]
          }
        },
        {
          name: "punctureAmount", key: ".punctureAmount", input_type: "input", label: "穿刺次数", span: 6,
          input_props: {
            type: "number"
          }
        },
        {
          name: "placentaHemorrhage", key: ".placentaHemorrhage(Note)", input_type: "checkbox", label: "胎盘出血", span: 12,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "placentaHemorrhage",
                label: "",
                options: [
                  { label: "是", value: 1 },
                  { label: "否", value: 0 }
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        { name: "sampleInspection", key: ".sampleInspection", input_type: "input", label: "送检项目", span: 6 },
      ]
    }
  },
  "3": {
    name: "pdProcedure",
    key: ".pdProcedure",
    input_type: "custom",
    span: 24,
    label: "手术过程记录",
    header_label: true,
    input_props: {
      config: [
        ...generalPdProcedureConfig,
        {
          name: "punctureTarget", key: ".punctureTarget", input_type: "select", label: "穿刺部位", span: 6, is_new_row: true,
          input_props: {
            options: [
              punctureTargetOptions[4],
              punctureTargetOptions[5]
            ]
          }
        },
        {
          name: "punctureAmount", key: ".punctureAmount", input_type: "input", label: "穿刺次数", span: 6,
          input_props: {
            type: "number"
          }
        },
        { name: "hitAmount", key: ".hitAmount", input_type: "input", label: "刺中次数", span: 6 },
        {
          name: "placentaEntry", key: ".placentaEntry", input_type: "select", label: "经否胎盘", span: 6,
          input_props: {
            options: [
              { label: "经", value: 1 },
              { label: "否", value: 0 }
            ]
          }
        },
        {
          name: "placentaHemorrhage", key: ".placentaHemorrhage(Note)", input_type: "checkbox", label: "胎盘出血", span: 12,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "placentaHemorrhage",
                label: "",
                options: [
                  { label: "是", value: 1 },
                  { label: "否", value: 0 }
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        { name: "sampleInspection", key: ".sampleInspection", input_type: "input", label: "送检项目", span: 6 },
      ]
    }
  },
  "4": {
    name: "pdProcedure",
    key: ".pdProcedure",
    input_type: "custom",
    span: 24,
    label: "手术过程记录",
    header_label: true,
    input_props: {
      config: [
        ...generalPdProcedureConfig,
        {
          name: "punctureTarget", key: ".punctureTarget", input_type: "select", label: "穿刺部位", span: 6, is_new_row: true,
          input_props: {
            options: [
              punctureTargetOptions[0],
              punctureTargetOptions[1]
            ]
          }
        },
        {
          name: "punctureAmount", key: ".punctureAmount", input_type: "input", label: "穿刺次数", span: 6,
          input_props: {
            type: "number"
          }
        },
        {
          name: "placentaEntry", key: ".placentaEntry", input_type: "select", label: "经否胎盘", span: 6,
          input_props: {
            options: [
              { label: "经", value: 1 },
              { label: "否", value: 0 }
            ]
          }
        },
        {
          name: "placentaHemorrhage", key: ".placentaHemorrhage(Note)", input_type: "checkbox", label: "胎盘出血", span: 12,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "placentaHemorrhage",
                label: "",
                options: [
                  { label: "是", value: 1 },
                  { label: "否", value: 0 }
                ],
                extraEditors: [
                  {
                    key: 1,
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
  "5": {
    name: "pdProcedure",
    key: ".pdProcedure",
    input_type: "custom",
    span: 24,
    label: "手术过程记录",
    header_label: true,
    input_props: {
      config: [
        ...generalPdProcedureConfig,
        {
          name: "punctureAmount", key: ".punctureAmount", input_type: "input", label: "穿刺次数", span: 6,
          input_props: {
            type: "number"
          }
        },
        { name: "disappearfhr", key: ".disappearfhr", input_type: "input", label: "胎心消失时间", unit: "min", span: 6 },
      ]
    }
  },
  "6": {
    name: "pdProcedure",
    key: ".pdProcedure",
    input_type: "custom",
    span: 24,
    label: "手术过程记录",
    header_label: true,
    input_props: {
      config: [
        ...generalPdProcedureConfig,
        {
          name: "punctureAmount", key: ".punctureAmount", input_type: "input", label: "穿刺次数", span: 6,
          input_props: {
            type: "number"
          }
        },
        {
          name: "placentaEntry", key: ".placentaEntry", input_type: "select", label: "经否胎盘", span: 6,
          input_props: {
            options: [
              { label: "经", value: 1 },
              { label: "否", value: 0 }
            ]
          }
        },
        {
          name: "instrument", key: ".instrument", input_type: "select", label: "穿刺针", span: 6,
          input_props: {
            options: [
              instrumentOptions[0],
              instrumentOptions[1],
              instrumentOptions[2],
              instrumentOptions[3],
            ]
          }
        },
        {
          name: "placentaHemorrhage", key: ".placentaHemorrhage(Note)", input_type: "checkbox", label: "胎盘出血", span: 12,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "placentaHemorrhage",
                label: "",
                options: [
                  { label: "是", value: 1 },
                  { label: "否", value: 0 }
                ],
                extraEditors: [
                  {
                    key: 1,
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
  "7": {
    name: "pdProcedure",
    key: ".pdProcedure",
    input_type: "custom",
    span: 24,
    label: "手术过程记录",
    header_label: true,
    input_props: {
      config: [
        ...generalPdProcedureConfig,
        { name: "hct", key: ".hct", input_type: "input", label: "目标HCT", span: 6},
        { name: "analysisbtvolume", key: ".analysisbtvolume", input_type: "input", label: "计算输血量", span: 6},
        { name: "actualbtvolume", key: ".actualbtvolume", input_type: "input", label: "实际输血量", span: 6},
        { name: "btspeed", key: ".btspeed", input_type: "input", label: "输血速度", span: 6},
        {
          name: "punctureTarget", key: ".punctureTarget", input_type: "select", label: "穿刺部位", span: 6, is_new_row: true,
          input_props: {
            options: [
              punctureTargetOptions[4],
              punctureTargetOptions[5]
            ]
          }
        },
        {
          name: "punctureAmount", key: ".punctureAmount", input_type: "input", label: "穿刺次数", span: 6,
          input_props: {
            type: "number"
          }
        },
        {
          name: "hitAmount", key: ".hitAmount", input_type: "input", label: "刺中次数", span: 6,
          input_props: {
            type: "number"
          }
        },
        {
          name: "placentaEntry", key: ".placentaEntry", input_type: "select", label: "经否胎盘", span: 6,
          input_props: {
            options: [
              { label: "经", value: 1 },
              { label: "否", value: 0 }
            ]
          }
        },
        {
          name: "instrument", key: ".instrument", input_type: "select", label: "器械", span: 6,
          input_props: {
            options: instrumentOptions
          }
        },
        {
          name: "placentaHemorrhage", key: ".placentaHemorrhage(Note)", input_type: "checkbox", label: "胎盘出血", span: 12,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "placentaHemorrhage",
                label: "",
                options: [
                  { label: "是", value: 1 },
                  { label: "否", value: 0 }
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { name: "", key: "", input_type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        { name: "sampleInspection", key: ".sampleInspection", input_type: "input", label: "送检项目", span: 6 },
        { name: "cordbloodvolume", key: ".cordbloodvolume", input_type: "select", label: "脐血量", span: 6},
        { name: "cordbloodcharacter", key: ".cordbloodcharacter", input_type: "select", label: "脐血性状", span: 6},
      ]
    }
  },
  "8": {
    name: "pdProcedure",
    key: ".pdProcedure",
    input_type: "custom",
    span: 24,
    label: "手术过程记录",
    header_label: true,
    input_props: {
      config: [
        ...generalPdProcedureConfig,
        {
          name: "punctureTarget", key: ".punctureTarget", input_type: "select", label: "穿刺部位", span: 6, is_new_row: true,
          input_props: {
            options: [
              punctureTargetOptions[6],
              punctureTargetOptions[7]
            ]
          }
        },
        {
          name: "punctureAmount", key: ".punctureAmount", input_type: "input", label: "穿刺次数", span: 6,
          input_props: {
            type: "number"
          }
        },
        {
          name: "placentaEntry", key: ".placentaEntry", input_type: "select", label: "经否胎盘", span: 6,
          input_props: {
            options: [
              { label: "经", value: 1 },
              { label: "否", value: 0 }
            ]
          }
        },
        {
          name: "placentaHemorrhage", key: ".placentaHemorrhage(Note)", input_type: "checkbox", label: "胎盘出血", span: 12,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "placentaHemorrhage",
                label: "",
                options: [
                  { label: "是", value: 1 },
                  { label: "否", value: 0 }
                ],
                extraEditors: [
                  {
                    key: 1,
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
  "9": {
    name: "pdProcedure",
    key: ".pdProcedure",
    input_type: "custom",
    span: 24,
    label: "手术过程记录",
    header_label: true,
    input_props: {
      config: [
        ...generalPdProcedureConfig,
        {
          name: "punctureTarget", key: ".punctureTarget", input_type: "select", label: "穿刺部位", span: 6, is_new_row: true,
          input_props: {
            options: [
              punctureTargetOptions[6],
              punctureTargetOptions[7]
            ]
          }
        },
        {
          name: "punctureAmount", key: ".punctureAmount", input_type: "input", label: "穿刺次数", span: 6,
          input_props: {
            type: "number"
          }
        },
        {
          name: "placentaEntry", key: ".placentaEntry", input_type: "select", label: "经否胎盘", span: 6,
          input_props: {
            options: [
              { label: "经", value: 1 },
              { label: "否", value: 0 }
            ]
          }
        },
        // { name: "instrument", key: ".instrument", input_type: "input", label: "器械", span: 6 },

        {
          name: "placentaHemorrhage", key: ".placentaHemorrhage(Note)", input_type: "checkbox", label: "胎盘出血", span: 12,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "placentaHemorrhage",
                label: "",
                options: [
                  { label: "是", value: 1 },
                  { label: "否", value: 0 }
                ],
                extraEditors: [
                  {
                    key: 1,
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
  "10": {
    name: "pdProcedure",
    key: ".pdProcedure",
    input_type: "custom",
    span: 24,
    label: "手术过程记录",
    header_label: true,
    input_props: {
      config: [
        ...generalPdProcedureConfig,
        {
          name: "punctureTarget", key: ".punctureTarget", input_type: "select", label: "穿刺部位", span: 6, is_new_row: true,
          input_props: {
            options: [
              punctureTargetOptions[6],
              punctureTargetOptions[7]
            ]
          }
        },
        {
          name: "punctureAmount", key: ".punctureAmount", input_type: "input", label: "穿刺次数", span: 6, input_props: {
            type: "number"
          }
        },
        {
          name: "placentaEntry", key: ".placentaEntry", input_type: "select", label: "经否胎盘", span: 6,
          input_props: {
            options: [
              { label: "经", value: 1 },
              { label: "否", value: 0 }
            ]
          }
        },
        // { name: "instrument", key: ".instrument", input_type: "input", label: "器械", span: 6 },

        {
          name: "placentaHemorrhage", key: ".placentaHemorrhage(Note)", input_type: "checkbox", label: "胎盘出血", span: 12,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "placentaHemorrhage",
                label: "",
                options: [
                  { label: "是", value: 1 },
                  { label: "否", value: 0 }
                ],
                extraEditors: [
                  {
                    key: 1,
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
}

export default pdProcedures;