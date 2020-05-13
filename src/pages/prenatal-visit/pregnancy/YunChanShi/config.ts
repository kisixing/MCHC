import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [

  {
    name: "yunfuxinxi",
    key: ".yunfuxinxi",
    label: "孕妇基本信息",
    input_type: "simpleobject",
    input_props: {
      config: [
  { name: 'datagridYearMonth', key: '.datagridYearMonth', label: "妊娠终止", input_type: "date", span: 7, rules: "required", input_props:{} },
  { name: 'bingfzh', key: '.bingfzh', label: "并发症", input_type: "input", span: 7, rules: "required", input_props:{} },
  { name: 'sffm', key: '.yunchanshi', label: "是否分娩", input_type: "checkbox", span: 7, rules: "required",
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "sffm",
          label: "是否分娩",
          options: [
            { label: "是", value: '1' },
            { label: "否", value: '2'  },
          ],
          extraEditors: []
        }
      ],
    } },
  { name: 'hospital', key: '.hospital', label: "分娩医院", input_type: "input", span: 7, rules: "required", input_props:{} },
  { name: 'gesweek', key: '.gesweek', label: "分娩孕周", input_type: "input", span: 7, rules: "required", input_props:{} },
  { name: 'births', key: '.births', label: "胎数", input_type: "input", span: 7, rules: "required", input_props:{} },
  { name: 'fenm', key: '.fenm', label: "分娩方式", input_type: "input", span: 7, rules: "required", input_props:{} },
  { name: 'chanrure', key: '.yunchanshi', label: "产后持续发热", input_type: "checkbox", span: 7, rules: "required",
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "chanrure",
          label: "产后持续发热",
          options: [
            { label: "有", value: '1' },
            { label: "无", value: '2'  },
          ],
          extraEditors: []
        }
      ],
    }},
  { name: 'chuxue', key: '.yunchanshi', label: "产后出血", input_type: "checkbox", span: 7, rules: "required",
    input_props:{
      type: "custom",
      renderData: [
        {
          key: "chuxue",
          label: "产后出血",
          options: [
            { label: "有", value: '1' },
            { label: "无", value: '2'  },
          ],
          extraEditors: []
        }
      ],
    } },
      ]
    }
  }



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

