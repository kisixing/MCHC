import { FormConfig } from '@/components/MyForm/interface';

/**
 * key?: string,
  title: string,
  children?: Array<TableColumns>,
  width?: number,
  editor?: FormConfig
 */

const pdPreBloodFlows: FormConfig = {
  name: "pdPreBloodFlows",
  key: ".pdPreBloodFlows",
  input_type: "table",
  span: 24,
  label: "术前血流指标",
  input_props: {
    editable: true,
    tableColumns: [
      {
        key: "uaEdf", title: "ua-Edf",
        editor: { key:"", name: "", input_type: "input"}
      },
      {
        key: "uaPi", title: "ua-PI",
        editor: { key:"", name: "", input_type: "input"}
      },
      {
        key: "uaRi", title: "ua-RI",
        editor: { key:"", name: "", input_type: "input"}
      },
      {
        key: "uaSdratio", title: "ua-S/D",
        editor: { key:"", name: "", input_type: "input"}
      },
      {
        key: "mcaPsv", title: "mca-Psv",
        editor: { key:"", name: "", input_type: "input"}
      },
      {
        key: "mcaPi", title: "mca-Pi",
        editor: { key:"", name: "", input_type: "input"}
      },
      {
        key: "mcaSdratio", title: "mca-S/D",
        editor: { key:"", name: "", input_type: "input"}
      },
      {
        key: "note", title: "note",
        editor: { key:"", name: "", input_type: "input"}
      },
    ]
  }
}

export default pdPreBloodFlows;