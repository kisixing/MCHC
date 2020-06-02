import { FormConfig } from '@/components/MyForm/interface';

const numberSelectOptions = [
  { label: 0, value: 0 },
  { label: 1, value: 1 },
  { label: 2, value: 2 },
  { label: 3, value: 3 },
  { label: 4, value: 4 },
  { label: 5, value: 5 },
  { label: 6, value: 6 },
  { label: 7, value: 7 },
  { label: 8, value: 8 },
  { label: 9, value: 9 },
  { label: 10, value: 10 }
]

const config: Array<FormConfig> = [
  { name: "id", key: ".id", input_type: "input", label: "id", span: 8, offset: 0, hidden: true },

  { name: "outpatientNO", key: ".outpatientNO", input_type: "input", label: "门诊号", rules: "required", span: 8, offset: 0 },

  {
    name: "idType", key: ".idType", input_type: "select", label: "证件类型", rules: "required", span: 8, offset: 0,
    input_props: {
      options: [
        { label: "身份证", value: 1 },
        { label: "护照", value: 2 },
        { label: "回乡证", value: 3 },
        { label: "台胞证", value: 4 },
        { label: "港澳台居民居住证", value: 5 },
        { label: "其他", value: 99 },
      ]
    }
  },
  { name: "idNO", key: ".idNO", input_type: "input", label: "证件号码", rules: "required", span: 8, offset: 0 },
  { name: "name", key: ".name", input_type: "input", label: "姓名", rules: "required", span: 8, offset: 0 },
  { name: "age", key: ".age", input_type: "input", label: "年龄", rules: "required", span: 8, offset: 0 },
  { name: "residenceAddress", key: ".residenceAddress", input_type: "addressCascader", label: "居住地址", rules: "required", span: 24},
  { name: "permanentResidenceAddress", key: ".permanentResidenceAddress", input_type: "addressCascader", label: "户口地址", rules: "required", span: 24},
  { name: "telephone", key: ".telephone", input_type: "input", label: "孕妇联系号码", rules: "required|telephone", span: 8},
  { name: "partnerTelephone", key: ".partnerTelephone", input_type: "input", label: "家属联系号码", rules: "required|telephone", span: 8},
  
  { name: "lmp", key: ".lmp", input_type: "date", label: "末次月经", rules: "required", span: 8, offset: 0, is_new_row: true },
  { name: "edd", key: ".edd", input_type: "date", label: "预产期-日期", rules: "required", span: 8, offset: 0 },
  { name: "sureEdd", key: ".sureEdd", input_type: "date", label: "预产期-B超", rules: "required", span: 8, offset: 0 },
  {
    name: "gravidity", key: ".gravidity", input_type: "select", label: "G", rules: "required", span: 8, offset: 0,
    input_props: {
      options: numberSelectOptions
    }
  },
  {
    name: "parity", key: ".parity", input_type: "select", label: "P", rules: "required", span: 8, offset: 0,
    input_props: {
      options: numberSelectOptions
    }
  },
  {
    name: "abortion", key: ".abortion", input_type: "select", label: "A", rules: "required", span: 8, offset: 0,
    input_props: {
      options: numberSelectOptions
    }
  },
  {
    name: "exfetation", key: ".exfetation", input_type: "select", label: "E", rules: "required", span: 8, offset: 0,
    input_props: {
      options: numberSelectOptions
    }
  },
]

export default config;