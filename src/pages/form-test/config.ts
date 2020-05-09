import { FormConfig } from '../../components/MyForm/interface';

const config: Array<FormConfig> = [
  {
    key: '.chief complaint', label: "主诊", input_type: "input", span: 22, offset: 1, rules: "required",
    input_props: {
      type: "textarea",
    }
  },
  {
    key: '.lmp', label: "末次月经", input_type: 'date', span: 7, offset: 2, rules: "required",
    input_props: {
      type: "date",
      format: "YYYY-MM-DD"
    }
  },
  {
    key: '.edd', label: "预产期", input_type: "date", span: 7, offset: 1, rules: "required",
    input_props: {
      type: "date",
      format: "YYYY-MM-DD"
    }
  },
  {
    key: '.sureEdd', label: "预产期-日期", input_type: "date", span: 7, offset: 1, rules: "required",
    input_props: {
      type: "date",
      format: "YYYY-MM-DD"
    }
  },
  {
    key: '.gravidity', label: "G", input_type: "select", span: 7, offset: 1, rules: "required|number",
    input_props: {
      selectOptions: [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 },
        { value: 6, label: 6 },
        { value: 7, label: 7 },
        { value: 8, label: 8 },
        { value: 9, label: 9 },
      ]
    }
  },
  {
    key: '.parity', label: "P", input_type: "select", span: 7, offset: 1, rules: "required|number",
    input_props: {
      selectOptions: [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 },
        { value: 6, label: 6 },
        { value: 7, label: 7 },
        { value: 8, label: 8 },
        { value: 9, label: 9 },
      ]
    }
  },
  {
    key: ".downsscreen_0", label: "早期唐氏筛查", input_type: "b-custom", span: 24, offset: 8,
    rules: {},
    input_props: {
      config: [
        {key: ".checkdate", label: "检查日期", input_type: "date", span: 7, offset: 1 ,input_props:{}, rules: "required"},
        {key: ".trisomy21", label: "21三体风险", input_type: "input", span: 7, offset: 1 ,input_props:{}},
        {key: ".trisomy18", label: "18三体风险", input_type: "input", span: 7, offset: 1 ,input_props:{}},
        {key: ".trisomy13", label: "13三体风险", input_type: "input", span: 7, offset: 1 ,input_props:{}},
        {
          key: ".note", label: "姓名", input_type: "b-custom", span: 24, offset: 0,
          input_props: {
            config: [
              {key: ".name", label: "姓名", input_type: "input", span: 7, offset: 1, input_props: {}}
            ]
          }
        }
      ]
    }
  },
  {
    key: ".fetuses", label: "胎儿检查", input_type: "b-fetuses", span: 24, offset: 0,
    rules: {
      fetalPosition: "required",
      fetalHeartRate: "required",
      fetalMovement: "required",
      presentation: "required",
      weight: "required",
      avf: "required",
      umbilicalbloodflow: "required",
    },
    input_props: {}
  },
  {
    key: '.familyHistory.hypertension', label: "高血压", unit: "", input_type: "checkbox", span: 24, offset: 0, rules: "",
    input_props: {}
  },
  // 关于路径相同问题，在config中是不会覆盖的，不用担心
  {
    key: '.familyHistory', label: "肝病", unit: "", input_type: "checkbox", span: 24, offset: 0, rules: "",
    input_props: {
      type: "whether",
      // 仅在multiple下有的radio
      radio: true,
      renderData: [
        { key: "hepaticDisease", label: "肝病" }
      ],
      extraEditors: [
        {
          key: true,
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
            }, {
              key: "",
              label: "用药次数",
              unit: "次",
              input_type: "select",
              span: 0,
              offset: 0,
              rules: "",
              input_props: {
                type: "default",
                selectOptions: [
                  { value: 1, label: 1 },
                  { value: 2, label: 2 },
                  { value: 3, label: 3 },
                  { value: 4, label: 4 },
                  { value: 5, label: 5 },
                  { value: 6, label: 6 },
                  { value: 7, label: 7 },
                  { value: 8, label: 8 },
                  { value: 9, label: 9 },
                ]
              },
            }
          ]
        }
      ]
    }
  },
  {
    key: ".familyHistory", label: "家族史", input_type: "checkbox", span: 24, offset: 0,
    input_props: {
      type: "multiple",
      radio: true,
      renderData: [
        {
          key: "epilepsy", label: "癫痫"
        }, {
          key: "cardiacDisease", label: "心脏病"
        }
      ],
      extraEditors: [
        {
          key: "epilepsy",
          editors: [{
            key: "",
            label: "药物名称",
            input_type: "input",
            span: 0,
            offset: 0,
            input_props: {
              type: "default",
            },
          }]
        }
      ]
    }
  },
  {
    key: ".ultrasounds", label: "超声检查", input_type: "table", span: 24, offset: 0,
    input_props: {
      type: "default",
      editable: true,
      tableColumns: [
        {
          key: "checkdate", title: "检查日期",
          editor: {
            key: "",
            span: 0,
            offset: 0,
            input_type: "input",
            input_props: {
              type: "default"
            }
          }
        },
        { key: "type", title: "类型" },
        {
          key: "clr", title: "clr",
          editor: {
            key: "",
            span: 0,
            offset: 0,
            input_type: "input",
            input_props: {
              type: "default"
            }
          }
        },
        {
          title: "aaa",
          children: [
            {
              key: "nt", title: "nt",
              editor: {
                key: "",
                span: 0,
                offset: 0,
                input_type: "input",
                input_props: {
                  type: "default"
                }
              }
            },
            { key: "menopause", title: "menopause" },
          ]
        },
        { key: "gestationalweek", title: "孕周" },
        { key: "bpd", title: "bpd" },
        { key: "hc", title: "hc" },
        { key: "ac", title: "ac" },
        { key: "fl", title: "fl" },
        { key: "afv", title: "afv" },
        { key: "umbilicalbloodflow", title: "脐带血" },
        { key: "diagnosis", title: "诊断" },
        { key: "note", title: "备注" },
      ]
    }
  }
]
export default config;