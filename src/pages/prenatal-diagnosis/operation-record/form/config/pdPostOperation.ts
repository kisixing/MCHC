import { FormConfig } from '@/components/MyForm/interface';

const pdPostOperation: FormConfig = {
  name: "pdPostOperation",
  key: ".pdPostOperation",
  label: "术后记录",
  header_label: true,
  input_type: "custom",
  input_props: {
    config: [
      { name: "postFhr", key: ".postFhr", input_type: "input", label: "术后胎心率", span: 6 },
      {
        name: "complication", key: ".*", input_type: "checkbox", label: "并发症", span: 24,
        input_props: {
          type: "custom",
          renderData: [
            {
              key: "complication",
              label: "",
              options: [
                { label: "有", value: 1 },
                { label: "无", value: 0 }
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
      {
        name: "advice", key: ".advice", input_type: "input", label: "术后医嘱", span: 24,
        input_props: {
          type: "textarea"
        }
      },
      {
        name: "diagnosis", key: ".diagnosis", input_type: "input", label: "术后诊断", span: 24,
        input_props: {
          type: "textarea"
        }
      },
    ]
  }
}

export default pdPostOperation;