import { FormConfig } from '../../../../components/MyForm/interface';

const config: Array<FormConfig> = [

  { name: 'yjcuch', key: '.menstruationMarriage', label: "初潮", input_type: "input", span: 6, rules: "required" },
  { name: 'yjzhouq', key: '.menstruationMarriage', label: "周期", input_type: "input", span: 6, rules: "required" },
  { name: 'yjchix', key: '.menstruationMarriage', label: "持续天数", input_type: "input", span: 6, rules: "required" },
  { name: 'yjtongj', key: '.menstruationMarriage', label: "痛经", input_type: "checkbox", span: 6, rules: "required",
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "yjtongj",
          label: "吸烟",
          options: [
            { label: "无", value: '1' },
            { label: "有", value: '2'  },
          ],
          extraEditors: []
        }
      ],
    } },
  { name: 'maritalHistory', key: '.menstruationMarriage', label: "婚姻史", input_type: "checkbox", span: 10, rules: "required",
  input_props:{
    type: "custom",
    renderData: [
      {
        key: "maritalHistory",
        label: "婚姻史",
        options: [
          { label: "已婚", value: '1' },
          { label: "未婚", value: '2' },
          { label: "离异", value: '3' },
          { label: "再婚", value: '4' },
          { label: "丧偶", value: '5' },
        ],
        extraEditors: []
      }
    ],
   } },
  { name: 'userjiehn', key: '.menstruationMarriage', label: "本次结婚年龄", input_type: "input", span: 7, rules: "required" },
  { name: 'userjinqjh', key: '.menstruationMarriage', label: "近亲结婚", input_type: "checkbox", span: 7, rules: "required",
  input_props:{
    type: "custom",
    renderData: [
      {
        key: "userjinqjh",
        label: "近亲结婚",
        options: [
          { label: "否", value: '1' },
          { label: "是", value: '2'  },
        ],
        extraEditors: []
      }
    ],
  } },

  { name: 'add_FIELD_grxiyan', key: '.biography', label: "吸烟", input_type: "checkbox", span: 24, rules: "required",
  input_props:{
    type: "custom",
    renderData: [
      {
        key: "add_FIELD_grxiyan",
        label: "吸烟",
        options: [
          { label: "无", value: 1  },
          { label: "有", value: 2 },
        ],
        extraEditors: [            {
          key: 2,
          editors: [
            { name: "", key: "", label: "", input_type: "input" }
          ]
        }]
      }
    ],
  } },
{ name: 'add_FIELD_gryinjiu', key: '.biography', label: "饮酒", input_type: "checkbox", span: 24, rules: "required",
  input_props:{
    type: "custom",
    renderData: [
      {
        key: "add_FIELD_gryinjiu",
        label: "饮酒",
        options: [
          { label: "无", value: 1  },
          { label: "有", value: 2 },
        ],
        extraEditors: [            {
          key: 2,
          editors: [
            { name: "", key: "", label: "", input_type: "input" }
          ]
        }]
      }
    ],
  } },
{ name: 'add_FIELD_gryouhai', key: '.biography', label: "接触有害物质", input_type: "checkbox", span: 24, rules: "required",
  input_props:{
    type: "custom",
    renderData: [
      {
        key: "add_FIELD_gryouhai",
        label: "接触有害物质",
        options: [
          { label: "无", value: 1  },
          { label: "有", value: 2 },
        ],
        extraEditors: [            {
          key: 2,
          editors: [
            { name: "", key: "", label: "", input_type: "input" }
          ]
        }]
      }
    ],
  } },
{ name: 'add_FIELD_grfangshe', key: '.biography', label: "接触放射线", input_type: "checkbox", span: 24, rules: "required",
  input_props:{
    type: "custom",
    renderData: [
      {
        key: "yjtongj",
        label: "接触放射线",
        options: [
          { label: "无", value: 1  },
          { label: "有", value: 2 },
        ],
        extraEditors: [            {
          key: 2,
          editors: [
            { name: "", key: "", label: "", input_type: "input" }
          ]
        }]
      }
    ],
  } },
  { name: 'add_FIELD_grqita', key: '.biography', label: "其他", input_type: "checkbox", span: 24,
  input_props:{
    type: "custom",
    renderData: [
      {
        key: "add_FIELD_grqita",
        label: "高血压",
        options: [
          { label: "无", value: 1  },
          { label: "有", value: 2 },
        ],
        extraEditors: [            {
          key: 2,
          editors: [
            { name: "", key: "", label: "", input_type: "input" }
          ]
        }]
      }
    ],
  } },
{ name: 'add_FIELD_jzgaoxueya', key: '.biography', label: "高血压", input_type: "checkbox", span: 24, rules: "required",
  input_props:{
    type: "custom",
    renderData: [
      {
        key: "add_FIELD_jzgaoxueya",
        label: "高血压",
        options: [
          { label: "无", value: 1  },
          { label: "有", value: 2 },
        ],
        extraEditors: [            {
          key: 2,
          editors: [
            { name: "", key: "", label: "", input_type: "input" }
          ]
        }]
      }
    ],
  } },

{ name: 'add_FIELD_jztangniaobing', key: '.biography', label: "糖尿病", input_type: "checkbox", span: 24, rules: "required",
  input_props:{
    type: "custom",
    renderData: [
      {
        key: "add_FIELD_jztangniaobing",
        label: "糖尿病",
        options: [
          { label: "无", value: 1  },
          { label: "有", value: 2 },
        ],
        extraEditors: [            {
          key: 2,
          editors: [
            { name: "", key: "", label: "", input_type: "input" }
          ]
        }]
      }
    ],
  } },
{ name: 'add_FIELD_jzjixing', key: '.biography', label: "先天畸形", input_type: "checkbox", span: 24, rules: "required",
  input_props:{
    type: "custom",
    renderData: [
      {
        key: "add_FIELD_jzyichuanbing",
        label: "心脏病",
        options: [
          { label: "无", value: 1  },
          { label: "有", value: 2 },
        ],
        extraEditors: [            {
          key: 2,
          editors: [
            { name: "", key: "", label: "", input_type: "input" }
          ]
        }]
      }
    ],
  } },
{ name: 'add_FIELD_jzyichuanbing', key: '.biography', label: "遗传病", input_type: "checkbox", span: 24, rules: "required",
input_props:{
  type: "custom",
  renderData: [
    {
      key: "add_FIELD_jzyichuanbing",
      label: "心脏病",
      options: [
        { label: "无", value: 1  },
        { label: "有", value: 2 },
      ],
      extraEditors: [            {
        key: 2,
        editors: [
          { name: "", key: "", label: "", input_type: "input" }
        ]
      }]
    }
  ],
} },
{ name: 'add_FIELD_jzqita', key: '.bsguomin', label: "其他", input_type: "checkbox", span: 24,
input_props:{
  type: "custom",
  renderData: [
    {
      key: "add_FIELD_jzqita",
      label: "心脏病",
      options: [
        { label: "无", value: 1  },
        { label: "有", value: 2 },
      ],
      extraEditors: [            {
        key: 2,
        editors: [
          { name: "", key: "", label: "", input_type: "input" }
        ]
      }]
    }
  ],
} },



]
export default config;

