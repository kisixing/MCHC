import { FormConfig } from '../../components/MyForm/interface';

const template = {
  key: '.lmp', label: "lmp", unit: "", input_type: "", span: 7, offset: 1,
  input_props: {
    input_type: "date",
    rules: "required",
    format: "YYYY-MM-DD"
  }
}
// TODO 加入渲染标题

const config: Array<FormConfig> = [
  {
    key: '.chief complaint', label: "主诊", unit: "", input_type: "input", span: 7, offset: 1, rules: "required",
    input_props: {
      type: "textarea",
    }
  },
  {
    key: '.lmp', label: "末次月经", unit: "", input_type: 'date', span: 7, offset: 17, rules: "required",
    input_props: {
      type: "date",
      format: "YYYY-MM-DD"
    }
  },
  {
    key: '.edd', label: "预产期", unit: "", input_type: "date", span: 7, offset: 1, rules: "required",
    input_props: {
      type: "date",
      format: "YYYY-MM-DD"
    }
  },
  {
    key: '.gravidity', label: "G", unit: "", input_type: "select", span: 7, offset: 1, rules: "required|number",
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
    }
  },
  {
    key: '.parity', label: "P", unit: "", input_type: "select", span: 7, offset: 1, rules: "required|number",
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
    }
  },
  {
    key: '.physicalExam.id', label: "体检id", unit: "", input_type: 'text', span: 7, offset: 1, hidden: true, rules: "required|number",
    input_props: {
      type: "default",
    }
  },
  {
    key: '.physicalExam.weight', label: "体重", unit: "kg", input_type: 'input', span: 7, offset: 1, rules: "required|number",
    input_props: {
      type: "default",
    }
  },
  {
    key: '.physicalExam.height', label: "身高", unit: "cm", input_type: 'input', span: 7, offset: 1, rules: "required|number",
    input_props: {
      type: "default",
    }
  },
  {
    key: '.physicalExam.systolic', label: "收缩压", unit: "mmHg", input_type: 'input', span: 7, offset: 1, rules: "required|number",
    input_props: {
      type: "default",
    }
  },
  {
    key: '.physicalExam.diastolic', label: "舒张压", unit: "mmHg", input_type: 'input', span: 7, offset: 1, rules: "required|number",
    input_props: {
      type: "default",
    }
  },
  {
    key: '.physicalExam.pulse', label: "脉率", unit: "次/min", input_type: 'input', span: 7, offset: 1, rules: "required|number",
    input_props: {
      type: "default",
    }
  },
  {
    key: '.physicalExam.temperature', label: "体温", unit: "°C", input_type: 'input', span: 7, offset: 1, rules: "required|number",
    input_props: {
      type: "default",
    }
  },
  {
    key: ".fetuses", label: "", unit: "", input_type: "b-fetuses", span: 24, offset: 16,
    rules: {
      fetalPosition: "required",
      fetalHeartRate: "required",
      fetalMovement: "required",
      presentation: "required",
      weight: "required",
      avf: "required",
      umbilicalbloodflow: "required",
    },
    input_props: {
      type: null,
    }
  },
  {
    key: '.familyHistory.hypertension', label: "高血压", unit: "", input_type: "checkbox", span: 24, offset: 0, rules: "",
    input_props: {
      type: "default",
    }
  },
  // 关于路径相同问题，在config中是不会覆盖的，不用担心
  {
    key: '.familyHistory', label: "肝病", unit: "", input_type: "checkbox", span: 24, offset: 0, rules: "",
    input_props: {
      type: "whether",
      // 仅在multiple下有的radio
      radio: true,
      renderData: [{
        key: "hepaticDisease", label: "肝病"
      }],
      extraEditors: [
        {
          key: true,
          editors:[{
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
          },{
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
          }]
        }
      ]
    }
  },
  {
    key: ".familyHistory", label: "家族史", input_type: "checkbox", span: 24, offset: 0,
    input_props: {
      type: "multiple",
      renderData: [
        {
          key: "epilepsy", label:"癫痫"
        },{
          key: "cardiacDisease", label:"心脏病"
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
    key: ".ultrasounds", label: "超声检查",input_type: "table", span: 24, offset: 0,
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
        {key: "type", title: "类型"},
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
            {key: "menopause", title: "menopause"},
          ]
        },
        {key: "gestationalweek", title: "孕周"},
        {key: "bpd", title: "bpd"},
        {key: "hc", title: "hc"},
        {key: "ac", title: "ac"},
        {key: "fl", title: "fl"},
        {key: "afv", title: "afv"},
        {key: "umbilicalbloodflow", title: "脐带血"},
        {key: "diagnosis", title: "诊断"},
        {key: "note", title: "备注"},
      ]
    }
  }
]
export default config;