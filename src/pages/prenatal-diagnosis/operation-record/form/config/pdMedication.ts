import { FormConfig } from '@/components/MyForm/interface';

const pdMedications: FormConfig = {
  name: "pdMedications",
  key: ".pdMedications",
  label: "用药情况",
  header_label: true,
  input_type: "array-custom",
  input_props: {
    config: [
      { name: "id", key: ".id", input_type: "input", label: "id", span: 6, hidden: true },
      { name: "medication", key: ".medication", input_type: "input", label: "药物名称", span: 6 },
      { name: "amount", key: ".amount", input_type: "input", label: "用药量", span: 6 },
      { name: "unit", key: ".unit", input_type: "input", label: "单位", span: 6 },
    ]
  }
}

export default pdMedications