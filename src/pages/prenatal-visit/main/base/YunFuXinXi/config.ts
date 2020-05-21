import { FormConfig } from '@/components/MyForm/interface';
import * as Options from '@/pages/prenatal-visit/options';

const config: Array<FormConfig> = [

  { name: 'age', key: '.age', label: "年龄", input_type: "input", span: 7, rules: "required" },
  { name: 'dob', key: '.dob', label: "出生日期", input_type: "date", span: 7, rules: "required" },
  { name: 'nationality', key: '.nationality', label: "国籍", input_type: "input", span: 7, rules: "required" },
  { name: 'nativeplace', key: '.nativeplace', label: "籍贯", input_type: "select", span: 7, rules: "required", input_props:{options: Options.nativeplaceOptions} },
  { name: 'ethnic', key: '.ethnic', label: "民族", input_type: "select", span: 7, rules: "required", input_props:{options: Options.ethnicOptions} },
  { name: 'occupation', key: '.occupation', label: "职业", input_type: "select", span: 7, rules: "required", input_props:{options: Options.occupationOptions} },
  { name: 'telephone', key: '.telephone', label: "手机号码", input_type: "input", span: 7, rules: "required" },
  { name: 'workPhone', key: '.workPhone', label: "固定电话", input_type: "input", span: 7, rules: "required" },
  { name: 'idType', key: '.idType', label: "证件类型", input_type: "select", span: 7, rules: "required", input_props:{options: Options.idTypeOptions} },
  { name: 'idNO', key: '.idNO', label: "证件号码", input_type: "input", span: 7, rules: "required" },
  { name: 'permanentResidenceAddress', key: '.permanentResidenceAddress', label: "户口地址", input_type: "addressCascader", span: 18, rules: "required" },
  { name: 'residenceAddress', key: '.residenceAddress', label: "居住地地址", input_type: "addressCascader", span: 18, rules: "required" },
  { name: 'postpartumAddress', key: '.postpartumAddress', label: "产休地址", input_type: "addressCascader", span: 18, rules: "required" },

]
export default config;

