import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
  {
    name: "yunfuxinxi",
    key: ".yunfuxinxi",
    label: "孕妇基本信息",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
          { name: 'usermcno', key: '.usermcno', label: "就诊卡号", input_type: "input", span: 7, rules: "required" },
          { name: 'username', key: '.username', label: "姓名", input_type: "input", span: 7, rules: "required" },
          { name: 'usermobile', key: '.usermobile', label: "手机号码", input_type: "input", span: 7, rules: "required" },
          { name: 'phone', key: '.phone', label: "固定电话", input_type: "input", span: 7 },
          { name: 'useridtype', key: '.useridtype', label: "证件类型", input_type: "select", span: 7, rules: "required", input_props:{options: [{ value: 1, label: 1 }]} },
          { name: 'useridno', key: '.useridno', label: "证件号码", input_type: "input", span: 7, rules: "required" },
          // { name: 'add_FIELD_sh', key: '.add_FIELD_sh', label: "已审核", input_type: "checkbox", span: 7, offset: 1 },
          { name: 'userbirth', key: '.userbirth', label: "出生日期", input_type: "date", span: 7, rules: "required" },
          { name: 'usernation', key: '.usernation', label: "国籍", input_type: "input", span: 7, rules: "required" },
          { name: 'userroots', key: '.userroots', label: "籍贯", input_type: "input", span: 7, rules: "required" },
          { name: 'userage', key: '.userage', label: "年龄", input_type: "input", span: 7, rules: "required" },
          { name: 'userpeople', key: '.userpeople', label: "民族", input_type: "select", span: 7, rules: "required", input_props:{options: [{ value: 1, label: 1 }]} },
          { name: 'useroccupation', key: '.useroccupation', label: "职业", input_type: "select", span: 7, rules: "required", input_props:{options: [{ value: 1, label: 1 }]} },
          { name: 'maritalHistory', key: '.maritalHistory', label: "婚姻状态", input_type: "select", span: 7, rules: "required", input_props:{options: [{ value: 1, label: 1 }]} },
          { name: 'add_FIELD_zhunsz', key: '.add_FIELD_zhunsz', label: "准生证号", input_type: "input", span: 7, rules: "required" },
          // { name: 'add_FIELD_ADD_zhunsz_sh', key: '.add_FIELD_ADD_zhunsz_sh', label: "已审核", input_type: "checkbox", span: 7, offset: 1 },
          { name: 'root', key: '.root', label: "户口地址", input_type: "input", span: 7, rules: "required" },
          { name: 'address', key: '.address', label: "居住地地址", input_type: "input", span: 7, rules: "required" },
          { name: 'add_FIELD_readdress', key: '.add_FIELD_readdress', label: "产休地址", input_type: "input", span: 7, rules: "required" },
      ]
    }
  }
]
export default config;

