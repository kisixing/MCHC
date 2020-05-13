import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [

  { name: 'add_FIELD_gaoxueya', key: '.hisInfo', label: "高血压", input_type: "checkbox", span: 24, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "add_FIELD_gaoxueya",
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
  { name: 'add_FIELD_tangniaobing', key: '.hisInfo', label: "糖尿病", input_type: "checkbox", span: 24, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "add_FIELD_tangniaobing",
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
  { name: 'add_FIELD_xinzangbing', key: '.hisInfo', label: "心脏病", input_type: "checkbox", span: 24, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "add_FIELD_xinzangbing",
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
  { name: 'add_FIELD_qitabingshi', key: '.hisInfo', label: "其他", input_type: "checkbox", span: 24, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "add_FIELD_qitabingshi",
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
  { name: 'add_FIELD_has_operation_history', key: '.hisInfo', label: "手术史", input_type: "checkbox", span: 24, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "add_FIELD_has_operation_history",
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
  { name: 'bsguomin', key: '.hisInfo', label: "过敏史", input_type: "checkbox", span: 24, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "bsguomin",
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
  { name: 'hobtabp', key: '.hisInfo', label: "输血史", input_type: "checkbox", span: 24, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "hobtabp",
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
  { name: 'hisInfo-add_FIELD_symptom', key: '.hisInfo', label: "其他", input_type: "input", span: 24 },

]
export default config;

