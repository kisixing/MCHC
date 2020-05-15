import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
  {
    name: "yunchanxinxi",
    key: ".yunchanxinxi",
    label: "本次孕产信息",
    header_label: true,
    input_type: "custom",
    input_props: {
      config: [
        { name: 'usercuzh', key: '.usercuzh', label: "建档日期", input_type: "date", span: 7, rules: "required" },
        { name: 'add_FIELD_createNO', key: '.add_FIELD_createNO', label: "建档号", input_type: "input", span: 7 },
        { name: 'gesmoc', key: '.gesmoc', label: "末次月经", input_type: "date", span: 7, rules: "required" },
        { name: 'gesexpect', key: '.gesexpect', label: "预产期-日期", input_type: "date", span: 7, rules: "required" },
        { name: 'gesexpectrv', key: '.gesexpectrv', label: "预产期-B超", input_type: "date", span: 7, rules: "required" },
        { name: 'cktizh', key: '.cktizh', label: "孕前体重(kg)", input_type: "input", span: 7, rules: "required" },
        { name: 'ckcurtizh', key: '.ckcurtizh', label: "现体重", input_type: "input", span: 7, rules: "required" },
        { name: 'cksheng', key: '.cksheng', label: "身高", input_type: "input", span: 7, rules: "required" },
        { name: 'ckshrinkpressure', key: '.ckshrinkpressure', label: "收缩压", input_type: "input", span: 7, rules: "required" },
        { name: 'ckdiastolicpressure', key: '.ckdiastolicpressure', label: "舒张压", input_type: "input", span: 7, rules: "required" },
        { name: 'add_FIELD_pulse', key: '.add_FIELD_pulse', label: "脉搏", input_type: "input", span: 7, rules: "required" },
        { name: 'yjcuch', key: '.yjcuch', label: "初潮", input_type: "input", span: 7, rules: "required" },
        { name: 'yjzhouq', key: '.yjzhouq', label: "月经周期", input_type: "input", span: 7, rules: "required" },
        { name: 'yjchix', key: '.yjchix', label: "持续天数", input_type: "input", span: 7, rules: "required" },

        { name: 'yjtongj', key: '.yunchanxinxi', label: "痛经", input_type: "checkbox", span: 7, rules: "required",
          input_props:{
            type: "custom",
            renderData: [
              {
                key: "yjtongj",
                label: "痛经",
                options: [
                  { label: "经常", value: 1 },
                  { label: "偶尔", value: 2 },
                  { label: "无", value: 3 },
                ],
                extraEditors: []
              }
            ],
          } },
        { name: 'userjinqjh', key: '.yunchanxinxi', label: "近亲结婚", input_type: "checkbox", span: 7, rules: "required",
          input_props:{
            type: "custom",
            renderData: [
              {
                key: "userjinqjh",
                label: "近亲结婚",
                options: [
                  { label: "是", value: '1' },
                  { label: "否", value: '2'  },
                ],
                extraEditors: []
              }
            ],
          } },
        { name: 'userjiehn', key: '.userjiehn', label: "结婚年龄", input_type: "input", span: 7, rules: "required" },
        { name: 'add_FIELD_grxiyan', key: '.yunchanxinxi', label: "吸烟", input_type: "checkbox", span: 7, rules: "required",
          input_props:{
            type: "custom",
            renderData: [
              {
                key: "add_FIELD_grxiyan",
                label: "吸烟",
                options: [
                  { label: "有", value: '1' },
                  { label: "无", value: '2'  },
                ],
                extraEditors: []
              }
            ],
          } },
        { name: 'add_FIELD_gryinjiu', key: '.yunchanxinxi', label: "饮酒", input_type: "checkbox", span: 7, rules: "required",
          input_props:{
            type: "custom",
            renderData: [
              {
                key: "add_FIELD_gryinjiu",
                label: "饮酒",
                options: [
                  { label: "有", value: '1' },
                  { label: "无", value: '2'  },
                ],
                extraEditors: []
              }
            ],
          } },
        { name: 'add_FIELD_gryouhai', key: '.yunchanxinxi', label: "接触有害物质", input_type: "checkbox", span: 7, rules: "required",
          input_props:{
            type: "custom",
            renderData: [
              {
                key: "add_FIELD_gryouhai",
                label: "接触有害物质",
                options: [
                  { label: "有", value: '1' },
                  { label: "无", value: '2'  },
                ],
                extraEditors: []
              }
            ],
          } },
        { name: 'add_FIELD_grfangshe', key: '.yunchanxinxi', label: "接触放射线", input_type: "checkbox", span: 7, rules: "required",
          input_props:{
            type: "custom",
            renderData: [
              {
                key: "yjtongj",
                label: "接触放射线",
                options: [
                  { label: "有", value: '1' },
                  { label: "无", value: '2'  },
                ],
                extraEditors: []
              }
            ],
          } },
        { name: 'add_FIELD_jzgaoxueya', key: '.yunchanxinxi', label: "高血压", input_type: "checkbox", span: 7, rules: "required",
          input_props:{
            type: "custom",
            renderData: [
              {
                key: "add_FIELD_jzgaoxueya",
                label: "高血压",
                options: [
                  { label: "有", value: '1' },
                  { label: "无", value: '2'  },
                ],
                extraEditors: []
              }
            ],
          } },

        { name: 'add_FIELD_jztangniaobing', key: '.yunchanxinxi', label: "糖尿病", input_type: "checkbox", span: 7, rules: "required",
          input_props:{
            type: "custom",
            renderData: [
              {
                key: "add_FIELD_jztangniaobing",
                label: "糖尿病",
                options: [
                  { label: "有", value: '1' },
                  { label: "无", value: '2'  },
                ],
                extraEditors: []
              }
            ],
          } },
        { name: 'add_FIELD_jzxinzangbing', key: '.yunchanxinxi', label: "心脏病", input_type: "checkbox", span: 7, rules: "required",
          input_props:{
            type: "custom",
            renderData: [
              {
                key: "add_FIELD_jzxinzangbing",
                label: "心脏病",
                options: [
                  { label: "有", value: '1' },
                  { label: "无", value: '2'  },
                ],
                extraEditors: []
              }
            ],
          } },
        { name: 'add_FIELD_mb_sss_sss', key: '.add_FIELD_mb_sss_sss', label: "手术史", input_type: "input", span: 7, rules: "required" },
        { name: 'bsguomin', key: '.bsguomin', label: "过敏史", input_type: "input", span: 7, rules: "required" },
        { name: 'mzxuan', key: '.mzxuan', label: "家族史", input_type: "select", span: 24, rules: "required",
          input_props: {
            type: "default",
            radio: false,
            options: [
              { label: "高血压", value: "1" },
              { label: "肾病", value: "2" },
              { label: "胃病", value: "3" },
              { label: "呼吸道疾病", value: "4" },
              { label: "癫痫", value: "5" },
              { label: "心脏疾病", value: "6" },
              { label: "内分泌疾病", value: "7" },
              { label: "甲状腺疾病", value: "8" },
              { label: "血液病", value: "9" },
            ],
            extraEditors: []
          } },
      ]
    }
  }
]
export default config;

