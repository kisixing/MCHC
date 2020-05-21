import { FormConfig } from '@/components/MyForm/interface';


const pdPreBloodFlows: FormConfig = {
  name: "pdPreBloodFlows",
  key: ".pdPreBloodFlows",
  input_type: "custom",
  span: 24,
  label: "术前血流指标",
  header_label: true,
  input_props: {
    config: [
      { name: "uaEdf", key: ".uaEdf", input_type: "input", label: "ua-Edf", span: 6 },
      { name: "uaPi", key: ".uaPi", input_type: "input", label: "ua-PI", span: 6 },
      { name: "uaRi", key: ".uaRi", input_type: "input", label: "ua-Ri", span: 6 },
      { name: "uaSdratio", key: ".uaSdratio", input_type: "input", label: "ua-S/D", span: 6 },
      { name: "mcaPsv", key: ".mcaPsv", input_type: "input", label: "mca-Psv", span: 6 },
      { name: "mcaPi", key: ".mcaPi", input_type: "input", label: "mca-Pi", span: 6 },
      { name: "mcaSdratio", key: ".mcaSdratio", input_type: "input", label: "mca-S/D", span: 6 },
      { name: "note", key: ".note", input_type: "input", label: "备注", span: 6 },
    ]
  }
}

export default pdPreBloodFlows;