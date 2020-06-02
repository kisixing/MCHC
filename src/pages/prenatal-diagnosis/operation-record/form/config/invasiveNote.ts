import { FormConfig } from '@/components/MyForm/interface';

const cordbloodcharacter = [
  { label: "鲜红", value: 1 },
  { label: "混入羊水", value: 2 },
  { label: "混入母血", value: 3 },
]

const villuscharacter = [
  { label: "鲜红", value: 1 },
  { label: "混入羊水", value: 2 },
  { label: "混入母血", value: 3 },
]

const amnioticfluidcharacter = [
  { label: "淡黄色", value: 1 },
  { label: "水样", value: 2 },
  { label: "血染", value: 3 },
  { label: "新鲜血性", value: 4 },
  { label: "陈旧血性", value: 5 },
]

const liquidcharacter = [
  {label: "清亮，金黄色", value: 1},
  {label: "血型，浅黄色", value: 2},
  {label: "浑浊", value: 3},
]

const invasiseNotes: { [key: string]: FormConfig } = {
  "1": {
    name: "invasiveNote",
    key: ".invasiveNote",
    input_type: "custom",
    label: "出血+血量+性状",
    header_label: true,
    input_props: {
      config: [
        {
          name: "uterusHemorrhage", key: ".uterusHemorrhage(Note)", input_type: "checkbox", label: "宫璧出血", span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "uterusHemorrhage",
                label: "",
                options: [
                  { value: 1, label: "有" },
                  { value: 0, label: "无" },
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { key: "", name: "", input_type: "input", unit: "s" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        { name: "amnioticfluidvolume", key: ".amnioticfluidvolume", input_type: "input", label: "羊水量", unit: "ml", span: 6 },
        {
          name: "amnioticfluidcharacter", key: ".amnioticfluidcharacter", input_type: "select", label: "羊水性状", span: 6,
          input_props: {
            options: amnioticfluidcharacter
          }
        },
      ]
    }
  },
  "2": {
    name: "invasiveNote",
    key: ".invasiveNote",
    input_type: "custom",
    label: "出血+血量+性状",
    header_label: true,
    input_props: {
      config: [
        { name: "villusvolume", key: ".villusvolume", input_type: "input", label: "绒毛量", span: 6 },
        {
          name: "villuscharacter", key: ".villuscharacter", input_type: "select", label: "绒毛性状", span: 6,
          input_props: {
            options: villuscharacter
          }
        },
        {
          name: "catheteramount", key: ".catheteramount", input_type: "input", label: "插管次数", span: 6,
          input_props: {
            type: "number"
          }
        },
        {
          name: "suctionamount", key: ".suctionamount", input_type: "input", label: "抽吸次数", span: 6,
          input_props: {
            type: "number"
          }
        },
        {
          name: "hemorrhage", key: ".hemorrhage", input_type: "select", label: "是否出血", span: 6,
          input_props: {
            options: [
              { label: "是", value: 1 },
              { label: "否", value: 0 },
            ]
          }
        },
        { name: "negativepressure", key: ".negativepressure", input_type: "input", label: "负压", span: 6 },
      ]
    }
  },
  "3": {
    name: "invasiveNote",
    key: ".invasiveNote",
    input_type: "custom",
    label: "出血+血量+性状",
    header_label: true,
    input_props: {
      config: [
        {
          name: "umbilicalHemorrhage", key: ".umbilicalHemorrhage(Note)", input_type: "checkbox", label: "脐带出血", span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "umbilicalHemorrhage",
                label: "",
                options: [
                  { value: 1, label: "有" },
                  { value: 0, label: "无" },
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { key: "", name: "", input_type: "input", unit: "s" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: "uterusHemorrhage", key: ".uterusHemorrhage(Note)", input_type: "checkbox", label: "宫璧出血", span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "uterusHemorrhage",
                label: "",
                options: [
                  { value: 1, label: "有" },
                  { value: 0, label: "无" },
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { key: "", name: "", input_type: "input", unit: "s" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        { name: "cordbloodvolume", key: ".cordbloodvolume", input_type: "input", label: "脐血量", span: 6 },
        {
          name: "cordbloodcharacter", key: ".cordbloodcharacter", input_type: "select", label: "脐血性状", span: 6,
          input_props: {
            options: cordbloodcharacter
          }
        },
      ]
    }
  },
  "4": {
    name: "invasiveNote",
    key: ".invasiveNote",
    input_type: "custom",
    label: "出血+血量+性状",
    header_label: true,
    input_props: {
      config: [
        {
          name: "amnioticfluidcharacter", key: ".amnioticfluidcharacter", input_type: "select", label: "羊水性状", span: 6,
          input_props: {
            options: amnioticfluidcharacter
          }
        },
        { name: "perfusionvolum", key: ".perfusionvolum", input_type: "input", label: "灌注液量", span: 6 },
      ]
    }
  },
  "5": {
    name: "invasiveNote",
    key: ".invasiveNote",
    input_type: "custom",
    label: "出血+血量+性状",
    header_label: true,
    input_props: {
      config: [
        {
          name: "suctionvolum",
          key: ".suctionvolum",
          input_type: "checkbox",
          label: "回抽液体",
          span: 6,
          input_props: {
            type: "group",
            options: [
              { label: "有", value: 1 },
              { label: "无", value: 0 },
            ]
          }
        },
        {
          name: "liquidcharacter",
          key: ".liquidcharacter",
          input_type: "select",
          label: "液体性状",
          span: 6,
          input_props: {
            options: amnioticfluidcharacter
          }
        }
      ]
    }
  },
  "6": {
    name: "invasiveNote",
    key: ".invasiveNote",
    input_type: "custom",
    label: "出血+血量+性状",
    header_label: true,
    input_props: {
      config: [
        {
          name: "amnioticfluidcharacter", key: ".amnioticfluidcharacter", input_type: "select", label: "羊水性状", span: 6, input_props: {
            options: amnioticfluidcharacter
          }
        },
        {
          name: "suctionvolum", key: ".suctionvolum", input_type: "input", label: "回抽羊水量", span: 6, input_props: {
            type: "number"
          }
        },
        { name: "negativepressure", key: ".negativepressure", input_type: "input", label: "负压", span: 6 },
      ]
    }
  },
  "7": {
    name: "invasiveNote",
    key: ".invasiveNote",
    input_type: "custom",
    label: "出血+血量+性状",
    header_label: true,
    input_props: {
      config: [
        {
          name: "umbilicalHemorrhage", key: ".umbilicalHemorrhage(Note)", input_type: "checkbox", label: "脐带出血", span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "umbilicalHemorrhage",
                label: "",
                options: [
                  { value: 1, label: "有" },
                  { value: 0, label: "无" },
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { key: "", name: "", input_type: "input", unit: "s" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: "uterusHemorrhage", key: ".uterusHemorrhage(Note)", input_type: "checkbox", label: "宫璧出血", span: 24,
          input_props: {
            type: "custom",
            renderData: [
              {
                key: "uterusHemorrhage",
                label: "",
                options: [
                  { value: 1, label: "有" },
                  { value: 0, label: "无" },
                ],
                extraEditors: [
                  {
                    key: 1,
                    editors: [
                      { key: "", name: "", input_type: "input", unit: "s" }
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
  "8": {
    name: "invasiveNote",
    key: ".invasiveNote",
    input_type: "custom",
    label: "出血+血量+性状",
    header_label: true,
    input_props: {
      config: [
        {
          name: "liquidvolume", key: ".liquidvolume", input_type: "input", label: "液体量", span: 6,
          input_props: {
            type: "number"
          }
        },
        {
          name: "liquidcharacter", key: ".liquidcharacter", input_type: "select", label: "液体性状", span: 6,
          input_props: {
            options: liquidcharacter
          }
        },
      ]
    }
  },
  "9": {
    name: "invasiveNote",
    key: ".invasiveNote",
    input_type: "custom",
    label: "出血+血量+性状",
    header_label: true,
    input_props: {
      config: [
        {
          name: "liquidvolume", key: ".liquidvolume", input_type: "input", label: "液体量", span: 6,
          input_props: {
            type: "number"
          }
        },
        {
          name: "liquidcharacter", key: ".liquidcharacter", input_type: "select", label: "液体性状", span: 6,
          input_props: {
            options: liquidcharacter
          }
        },
      ]
    }
  },
  "10": {
    name: "invasiveNote",
    key: ".invasiveNote",
    input_type: "custom",
    label: "出血+血量+性状",
    header_label: true,
    input_props: {
      config: [
        {
          name: "liquidvolume", key: ".liquidvolume", input_type: "input", label: "液体量", span: 6,
          input_props: {
            type: "number"
          }
        },
        {
          name: "liquidcharacter", key: ".liquidcharacter", input_type: "select", label: "液体性状", span: 6,
          input_props: {
            options: liquidcharacter
          }
        },
      ]
    }
  },
}

export default invasiseNotes;