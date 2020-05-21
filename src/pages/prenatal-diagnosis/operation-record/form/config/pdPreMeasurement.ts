import { FormConfig } from '@/components/MyForm/interface';

const pdPreMeasurement: FormConfig = {
  name: "pdPreMeasurement",
  key: ".pdPreMeasurement",
  input_type: "custom",
  span: 24,
  label: "术前测量值",
  header_label: true,
  input_props: {
    config: [
      { name: "leftPleuralEffusion", key: ".leftPleuralEffusion", input_type: "input", label: "左胸腔积液", unit: "ml", span: 6 },
      { name: "rightPleuralEffusion", key: ".rightPleuralEffusion", input_type: "input", label: "右胸腔积液", unit: "ml", span: 6 },
      { name: "ascites", key: ".ascites", input_type: "input", label: "腹水", unit: "ml", span: 6 },
      { name: "hygromata", key: ".hygromata", input_type: "input", label: "囊肿", unit: "mm", span: 6 },
      { name: "lungCompression", key: ".lungCompression", input_type: "input", label: "肺压缩", span: 6 },
      { name: "mediastinum", key: ".mediastinum", input_type: "input", label: "纵膈", span: 6 },
      { name: "note", key: ".note", input_type: "input", label: "备注", span: 6 },
    ]
  }
}

export default pdPreMeasurement;