import { FormConfig } from '@/components/MyForm/interface';

const pdAnaesthetic: FormConfig = {
  name: "pdAnaesthetic",
  key: ".pdAnaesthetic",
  input_type: "custom",
  label: "麻醉情况",
  header_label: true,
  input_props: {
    config: [
      {
        name: "type", key: ".type", input_type: "select", label: "麻醉方式", span: 12,
        input_props: {
          type: "default",
          options: [
            { label: "全部麻醉", value: 1 },
            { label: "局部麻醉", value: 2 },
            { label: "复合麻醉", value: 3 },
            { label: "其他", value: 4 },
          ]
        }
      },
      { name: "doctor", key: ".doctor", input_type: "input", label: "麻醉医生", span: 12 },
    ]
  }
}

export default pdAnaesthetic;