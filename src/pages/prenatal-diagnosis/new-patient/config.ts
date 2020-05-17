import { FormConfig } from '@/components/MyForm/interface';

const numberSelectOptions = [
  {label: 0, value: 0},
  {label: 1, value: 1},
  {label: 2, value: 2},
  {label: 3, value: 3},
  {label: 4, value: 4},
  {label: 5, value: 5},
  {label: 6, value: 6},
  {label: 7, value: 7},
  {label: 8, value: 8},
  {label: 9, value: 9},
  {label: 10, value: 10}
]

const config:Array<FormConfig> = [
  { name: "name", key: ".name", input_type: "input", label: "姓名", rules: "required", span: 8, offset: 0},
  { name: "lmp", key: ".lmp", input_type: "date", label: "末次月经", rules: "required", span: 8, offset: 0},
  { name: "edd", key: ".edd", input_type: "date", label: "预产期-日期", rules: "required", span: 8, offset: 0},
  { name: "sureEdd", key: ".sureEdd", input_type: "date", label: "预产期-B超", rules: "required", span: 8, offset: 0},
  { 
    name: "gravidity", key: ".gravidity", input_type: "select", label: "G", rules: "required",span: 8, offset: 0,
    input_props: {
      options: numberSelectOptions
    }
  },
  { 
    name: "parity", key: ".parity", input_type: "select", label: "P", rules: "required",span: 8, offset: 0,
    input_props: {
      options: numberSelectOptions
    }
  },
  { 
    name: "abortion", key: ".abortion", input_type: "select", label: "A", rules: "required",span: 8, offset: 0,
    input_props: {
      options: numberSelectOptions
    }
  },
  { 
    name: "exfetation", key: ".exfetation", input_type: "select", label: "E", rules: "required",span: 8, offset: 0,
    input_props: {
      options: numberSelectOptions
    } 
  },
]

export default config;