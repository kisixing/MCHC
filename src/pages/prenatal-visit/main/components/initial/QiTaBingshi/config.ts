import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [

  { name: 'menarche', key: '.menstrualHistory.menarche', label: "初潮", input_type: "input", span: 6, rules: "required" },
  { name: 'menstrualCycle', key: '.menstrualHistory.menstrualCycle', label: "周期", input_type: "input", span: 6, rules: "required" },
  { name: 'menstrualPeriod', key: '.menstrualHistory.menstrualPeriod', label: "持续天数", input_type: "input", span: 6, rules: "required" },
  { name: 'dysmenorrhea', key: '.menstrualHistory', label: "痛经", input_type: "checkbox", span: 6, rules: "required",
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "dysmenorrhea",
          label: "痛经",
          options: [
            { label: "无", value: false },
            { label: "有", value: true  },
          ]
        }
      ],
    }
  },
  { name: 'maritalStatus', key: '.*', label: "婚姻史", input_type: "checkbox", span: 10, rules: "required",
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "maritalStatus",
          label: "婚姻史",
          options: [
            { label: "已婚", value: 0 },
            { label: "未婚", value: 1 },
            { label: "离异", value: 2 },
            { label: "再婚", value: 3 },
            { label: "丧偶", value: 4 },
          ],
        }
      ],
    }
  },
  { name: 'maritalYears', key: '.maritalYears', label: "本次结婚年龄", input_type: "input", span: 7, rules: "required" },
  { name: 'nearRelation', key: '.*', label: "近亲结婚", input_type: "checkbox", span: 7, rules: "required",
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "nearRelation",
          label: "近亲结婚",
          options: [
            { label: "否", value: false },
            { label: "是", value: true  },
          ]
        }
      ],
    }
  },

  { name: 'smoke', key: '.partnerProfile', label: "吸烟", input_type: "checkbox", span: 24, rules: "required",
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "smoke",
          label: "吸烟",
          options: [
            { label: "无", value: false  },
            { label: "有", value: true },
          ],
          extraEditors: [            {
            key: true,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }]
        }
      ],
    }
  },
  { name: 'alcohol', key: '.partnerProfile', label: "饮酒", input_type: "checkbox", span: 24, rules: "required",
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "alcohol",
          label: "饮酒",
          options: [
            { label: "无", value: false  },
            { label: "有", value: true },
          ],
          extraEditors: [            {
            key: true,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }]
        }
      ],
    }
  },
  { name: 'hazardoussubstances', key: '.personalProfile', label: "接触有害物质", input_type: "checkbox", span: 24, rules: "required",
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "hazardoussubstances",
          label: "接触有害物质",
          options: [
            { label: "无", value: false  },
            { label: "有", value: true },
          ],
          extraEditors: [            {
            key: true,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }]
        }
      ],
    }
  },
  { name: 'radioactivity', key: '.personalProfile', label: "接触放射线", input_type: "checkbox", span: 24, rules: "required",
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "radioactivity",
          label: "接触放射线",
          options: [
            { label: "无", value: false  },
            { label: "有", value: true },
          ],
          extraEditors: [            {
            key: true,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }]
        }
      ],
    }
  },
  { name: 'other', key: '.personalProfile', label: "其他", input_type: "checkbox", span: 24,
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "other",
          label: "高血压",
          options: [
            { label: "无", value: false  },
            { label: "有", value: true },
          ],
          extraEditors: [            {
            key: true,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }]
        }
      ],
    }
  },
  { name: 'hypertension', key: '.familyHistory', label: "高血压", input_type: "checkbox", span: 24, rules: "required",
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "hypertension",
          label: "高血压",
          options: [
            { label: "无", value: false  },
            { label: "有", value: true },
          ],
          extraEditors: [{
            key: true,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }]
        }
      ],
    }
   },

  { name: 'diabetes', key: '.familyHistory', label: "糖尿病", input_type: "checkbox", span: 24, rules: "required",
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "diabetes",
          label: "糖尿病",
          options: [
            { label: "无", value: false  },
            { label: "有", value: true },
          ],
          extraEditors: [            {
            key: true,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }]
        }
      ],
    }
  },
  { name: 'birthdefects', key: '.familyHistory', label: "先天畸形", input_type: "checkbox", span: 24, rules: "required",
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "birthdefects",
          label: "心脏病",
          options: [
            { label: "无", value: false  },
            { label: "有", value: true },
          ],
          extraEditors: [            {
            key: true,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }]
        }
      ],
    }
   },
// { name: 'add_FIELD_jzyichuanbing', key: '..familyHistory', label: "遗传病", input_type: "checkbox", span: 24, rules: "required",
// input_props:{
//   type: "custom",
//   renderData: [
//     {
//       key: "add_FIELD_jzyichuanbing",
//       label: "遗传病",
//       options: [
//         { label: "无", value: false  },
//         { label: "有", value: true },
//       ],
//       extraEditors: [            {
//         key: true,
//         editors: [
//           { name: "", key: "", label: "", input_type: "input" }
//         ]
//       }]
//     }
//   ],
// } },
  { name: 'other', key: '.familyHistory', label: "其他", input_type: "checkbox", span: 24,
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "other",
          label: "其他",
          options: [
            { label: "无", value: false  },
            { label: "有", value: true },
          ],
          extraEditors: [            {
            key: true,
            editors: [
              { name: "", key: "", label: "", input_type: "input" }
            ]
          }]
        }
      ],
    }
  },
]
export default config;

