import { FormConfig } from '@/components/MyForm/interface';

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
          name: "uterusHemorrhage", key: ".*", input_type: "checkbox", label: "宫璧出血", span: 24,
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
        { name: "amnioticfluidvolume", key: ".amnioticfluidvolume", input_type: "input", label: "羊水量", span: 6 },
        { name: "amnioticfluidcharacter", key: ".amnioticfluidcharacter", input_type: "input", label: "羊水性状", span: 6 },
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
        { name: "villuscharacter", key: ".villuscharacter", input_type: "input", label: "绒毛性状", span: 6 },
        { name: "catheteramount", key: ".catheteramount", input_type: "input", label: "插管次数", span: 6 },
        { name: "suctionamount", key: ".suctionamount", input_type: "input", label: "抽吸次数", span: 6 },
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
          name: "umbilicalHemorrhage", key: ".*", input_type: "checkbox", label: "脐带出血", span: 24,
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
          name: "uterusHemorrhage", key: ".*", input_type: "checkbox", label: "宫璧出血", span: 24,
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
        { name: "cordbloodcharacter", key: ".cordbloodcharacter", input_type: "input", label: "脐血性状", span: 6 },
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
        { name: "amnioticfluidcharacter", key: ".amnioticfluidcharacter", input_type: "input", label: "羊水性状", span: 6 },
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
        // {
        //   name: "umbilicalHemorrhage", key: ".*", input_type: "checkbox", label: "脐带出血", span: 24,
        //   input_props: {
        //     type: "custom",
        //     renderData: [
        //       {
        //         key: "umbilicalHemorrhage",
        //         label: "",
        //         options: [
        //           { value: true, label: "有" },
        //           { value: false, label: "无" },
        //         ],
        //         extraEditors: [
        //           {
        //             key: true,
        //             editors: [
        //               { key: "", name: "", input_type: "input", unit: "s" }
        //             ]
        //           }
        //         ]
        //       }
        //     ]
        //   }
        // },
        // {
        //   name: "uterusHemorrhage", key: ".*", input_type: "checkbox", label: "宫璧出血", span: 24,
        //   input_props: {
        //     type: "custom",
        //     renderData: [
        //       {
        //         key: "uterusHemorrhage",
        //         label: "",
        //         options: [
        //           { value: true, label: "有" },
        //           { value: false, label: "无" },
        //         ],
        //         extraEditors: [
        //           {
        //             key: true,
        //             editors: [
        //               { key: "", name: "", input_type: "input", unit: "s" }
        //             ]
        //           }
        //         ]
        //       }
        //     ]
        //   }
        // },
        // { name: "cordbloodvolume", key: ".cordbloodvolume", input_type: "input", label: "脐血量", span: 6 },
        // { name: "cordbloodcharacter", key: ".cordbloodcharacter", input_type: "input", label: "脐血性状", span: 6 },
        // { name: "amnioticfluidvolume", key: ".amnioticfluidvolume", input_type: "input", label: "羊水量", span: 6 },
        // { name: "amnioticfluidcharacter", key: ".amnioticfluidcharacter", input_type: "input", label: "羊水性状", span: 6 },
        // { name: "villusvolume", key: ".villusvolume", input_type: "input", label: "绒毛量", span: 6 },
        // { name: "villuscharacter", key: ".villuscharacter", input_type: "input", label: "绒毛性状", span: 6 },
        // { name: "perfusionvolum", key: ".perfusionvolum", input_type: "input", label: "灌注液量", span: 6 },
        // { name: "catheteramount", key: ".catheteramount", input_type: "input", label: "插管次数", span: 6 },
        // { name: "suctionamount", key: ".suctionamount", input_type: "input", label: "抽吸次数", span: 6 },
        // { name: "negativepressure", key: ".negativepressure", input_type: "input", label: "负压", span: 6 },
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
        { name: "amnioticfluidcharacter", key: ".amnioticfluidcharacter", input_type: "input", label: "羊水性状", span: 6 },
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
          name: "umbilicalHemorrhage", key: ".*", input_type: "checkbox", label: "脐带出血", span: 24,
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
          name: "uterusHemorrhage", key: ".*", input_type: "checkbox", label: "宫璧出血", span: 24,
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
        // { name: "cordbloodvolume", key: ".cordbloodvolume", input_type: "input", label: "脐血量", span: 6 },
        // { name: "cordbloodcharacter", key: ".cordbloodcharacter", input_type: "input", label: "脐血性状", span: 6 },
        // { name: "amnioticfluidvolume", key: ".amnioticfluidvolume", input_type: "input", label: "羊水量", span: 6 },
        // { name: "amnioticfluidcharacter", key: ".amnioticfluidcharacter", input_type: "input", label: "羊水性状", span: 6 },
        // { name: "villusvolume", key: ".villusvolume", input_type: "input", label: "绒毛量", span: 6 },
        // { name: "villuscharacter", key: ".villuscharacter", input_type: "input", label: "绒毛性状", span: 6 },
        // { name: "perfusionvolum", key: ".perfusionvolum", input_type: "input", label: "灌注液量", span: 6 },
        // { name: "catheteramount", key: ".catheteramount", input_type: "input", label: "插管次数", span: 6 },
        // { name: "suctionamount", key: ".suctionamount", input_type: "input", label: "抽吸次数", span: 6 },
        // { name: "negativepressure", key: ".negativepressure", input_type: "input", label: "负压", span: 6 },
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
      ]
    }
  },
}

export default invasiseNotes;