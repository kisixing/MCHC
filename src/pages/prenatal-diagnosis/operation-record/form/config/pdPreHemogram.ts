import { FormConfig } from '@/components/MyForm/interface';

const pdPreHemogram: FormConfig = {
  name: "PdPreHemogram",
  key: ".PdPreHemogram",
  input_type: "custom",
  span: 24,
  label: "术前血象检查",
  header_label: true,
  input_props: {
    config: [
      { name: "hbc", key: ".hbc", input_type: "input", label: "红细胞", span: 6 },
      { name: "hgb", key: ".hgb", input_type: "input", label: "血红蛋白", unit: "g/L", span: 6 },
      { name: "wbc", key: ".wbc", input_type: "input", label: "白细胞", unit: "x10⁹/L", span: 6 },
      { name: "hct", key: ".hct", input_type: "input", label: "红细胞压积", span: 6 },
      { name: "plt", key: ".plt", input_type: "input", label: "血小板", unit: "x10⁹/L", span: 6 },
      { name: "nrbc", key: ".nrbc", input_type: "input", label: "有核红细胞", unit: "x10⁹/L", span: 6 },
      { name: "ret", key: ".ret", input_type: "input", label: "网织红细胞", unit: "%", span: 6 },
      { name: "coombs", key: ".coombs", input_type: "input", label: "抗球蛋白试验", span: 6 },
    ]
  }
}

export default pdPreHemogram;