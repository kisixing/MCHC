import { FormConfig } from '../../../components/MyForm/interface';

const config: Array<FormConfig> = [
  {
    key: ".downsscreen_0", label: "孕妇基本信息", input_type: "b-custom", span: 24, offset: 8,
    rules: {},
    input_props: {
      config: [
        { key: '.aaa', label: "就诊卡号", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "姓名", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "手机号码", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "固定电话", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "证件类型", input_type: "select", span: 7, offset: 1, rules: "required", input_props:{selectOptions: [{ value: 1, label: 1 }]} },
        { key: '.chief complaint', label: "证件号码", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        // { key: '.chief complaint', label: "已审核", input_type: "checkbox", span: 7, offset: 1, input_props:{} },
        { key: '.chief complaint', label: "出生日期", input_type: "date", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "国籍", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "籍贯", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "年龄", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "民族", input_type: "select", span: 7, offset: 1, rules: "required", input_props:{selectOptions: [{ value: 1, label: 1 }]} },
        { key: '.chief complaint', label: "职业", input_type: "select", span: 7, offset: 1, rules: "required", input_props:{selectOptions: [{ value: 1, label: 1 }]} },
        { key: '.chief complaint', label: "婚姻状态", input_type: "select", span: 7, offset: 1, rules: "required", input_props:{selectOptions: [{ value: 1, label: 1 }]} },
        { key: '.chief complaint', label: "准生证号", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        // { key: '.chief complaint', label: "已审核", input_type: "checkbox", span: 7, offset: 1, input_props:{} },
        { key: '.chief complaint', label: "户口地址", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "居住地地址", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "产休地址", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
      ]
    }
  },
  {
    key: ".downsscreen_0", label: "丈夫基本信息", input_type: "b-custom", span: 24, offset: 8,
    rules: {},
    input_props: {
      config: [
        { key: '.chief complaint', label: "姓名", input_type: "input", span: 7, offset: 1, input_props:{} },
        { key: '.chief complaint', label: "手机号码", input_type: "input", span: 7, offset: 1, input_props:{} },
        { key: '.chief complaint', label: "配偶门诊号", input_type: "input", span: 7, offset: 1, input_props:{} },
        { key: '.chief complaint', label: "证件类型", input_type: "select", span: 7, offset: 1, input_props:{selectOptions: [{ value: 1, label: 1 }]} },
        { key: '.chief complaint', label: "证件号码", input_type: "input", span: 7, offset: 1, input_props:{} },
        { key: '.chief complaint', label: "年龄", input_type: "input", span: 7, offset: 1, input_props:{} },
        { key: '.chief complaint', label: "国籍", input_type: "input", span: 7, offset: 1, input_props:{} },
        { key: '.chief complaint', label: "籍贯", input_type: "input", span: 7, offset: 1, input_props:{} },
        { key: '.chief complaint', label: "民族", input_type: "input", span: 7, offset: 1, input_props:{} },
        { key: '.chief complaint', label: "职业", input_type: "select", span: 7, offset: 1, input_props:{selectOptions: [{ value: 1, label: 1 }]} },
        { key: '.chief complaint', label: "烟(支)", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "酒(ml)", input_type: "select", span: 7, offset: 1, rules: "required", input_props:{selectOptions: [{ value: 1, label: 1 }]} },
        { key: '.chief complaint', label: "是否患有疾病", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
      ]
    }
  },
  {
    key: ".downsscreen_0", label: "本次孕产信息", input_type: "b-custom", span: 24, offset: 8,
    rules: {},
    input_props: {
      config: [
        { key: '.aaa', label: "建档日期", input_type: "date", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "建档号", input_type: "input", span: 7, offset: 1, input_props:{} },
        { key: '.chief complaint', label: "末次月经", input_type: "date", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "预产期-日期", input_type: "date", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "预产期-B超", input_type: "date", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "孕前体重(kg)", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "现体重", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "身高", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "收缩压", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "舒张压", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "脉搏", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "初潮", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "月经周期", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "持续天数", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },

        // { key: '.tj', label: "痛经", input_type: "checkbox", span: 7, offset: 1, rules: "required",
        //   input_props:{
        //     type: "multiple",
        //     radio: true,
        //     renderData: [
        //       { key: "epilepsy", label: "经常" },
        //       { key: "cardiacDisease", label: "偶尔" },
        //       { key: "cardiacDis88ease", label: "无" },
        //     ],
        //     extraEditors: []
        //   } },
        { key: '.chief complaint', label: "近亲结婚", input_type: "checkbox", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "结婚年龄", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "吸烟", input_type: "checkbox", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "饮酒", input_type: "checkbox", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "接触有害物质", input_type: "checkbox", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "接触放射线", input_type: "checkbox", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "高血压", input_type: "checkbox", span: 7, offset: 1, rules: "required", input_props:{} },

        { key: '.chief complaint', label: "糖尿病", input_type: "checkbox", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "心脏病", input_type: "checkbox", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "手术史", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "过敏史", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "家族史", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
      ]
    }
  },

  {
    key: ".fetuses", label: "孕产史", input_type: "b-custom", span: 24, offset: 0,
    rules: {},
    input_props: {
      config: [
        { key: '.chief complaint', label: "妊娠终止", input_type: "date", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "并发症", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "是否分娩", input_type: "checkbox", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "分娩医院", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "分娩孕周", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "胎数", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "分娩方式", input_type: "input", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "产后持续发热", input_type: "checkbox", span: 7, offset: 1, rules: "required", input_props:{} },
        { key: '.chief complaint', label: "产后出血", input_type: "checkbox", span: 7, offset: 1, rules: "required", input_props:{} },
      ]
    },
  },

  // {
  //   key: ".fetuses", label: "孕产史", input_type: "b-fetuses", span: 24, offset: 0,
  //   rules: {
  //     fetalPosition: "required",
  //     fetalHeartRate: "required",
  //     fetalMovement: "required",
  //     presentation: "required",
  //     weight: "required",
  //     avf: "required",
  //     umbilicalbloodflow: "required",
  //   },
  //   input_props: {},
  // },
]
export default config;

