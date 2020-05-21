import { FormConfig } from '@/components/MyForm/interface';
import * as Options from '@/pages/prenatal-visit/options';

const config: Array<FormConfig> = [

  { name: 'partnerName', key: '.partnerName', label: "姓名", input_type: "input", span: 7 },
  { name: 'outpatientNO', key: '.outpatientNO', label: "门诊号", input_type: "input", span: 7 },
  { name: 'partnerAge', key: '.partnerAge', label: "年龄", input_type: "input", span: 7 },
  { name: 'partnerNationality', key: '.partnerNationality', label: "国籍", input_type: "input", span: 7 },
  { name: 'partnerNativeplace', key: '.partnerNativeplace', label: "籍贯", input_type: "select", span: 7, input_props:{options: Options.nativeplaceOptions} },
  { name: 'partnerEthnic', key: '.partnerEthnic', label: "民族", input_type: "select", span: 7, input_props:{options: Options.ethnicOptions} },
  { name: 'partnerOccupation', key: '.partnerOccupation', label: "职业", input_type: "select", span: 7, input_props:{options: Options.occupationOptions} },

  { name: 'partnerTelephone', key: '.partnerTelephone', label: "手机号码", input_type: "input", span: 7 },
  { name: 'partnerIdType', key: '.partnerIdType', label: "证件类型", input_type: "select", span: 7, input_props:{options: Options.idTypeOptions} },
  { name: 'partnerIdNO', key: '.partnerIdNO', label: "证件号码", input_type: "input", span: 7 },

  {
    name: 'smoke', key: '.partnerProfile', label: "烟(支)", input_type: "checkbox", span: 10, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "smoke",
          label: "烟(支)",
          options: [
            { label: "有", value: true },
            { label: "无", value: false },
          ],
          extraEditors: [
            {
              key: true,
              editors: [
                { name: "", key: "", label: "", input_type: "input" }
              ]
            }
          ]
        }
      ],
    }
  },
  {
    name: 'alcohol', key: '.partnerProfile', label: "酒(ml)", input_type: "checkbox", span: 10, rules: "required",
    input_props: {
      type: "custom",
      renderData: [
        {
          key: "alcohol",
          label: "酒(ml)",
          options: [
            { label: "有", value: true },
            { label: "无", value: false },
          ],
          extraEditors: [
            {
              key: true,
              editors: [
                { name: "", key: "", label: "", input_type: "input" }
              ]
            }
          ]
        }
      ],
    }
  },

  { name: 'disease', key: '.partnerProfile.disease', label: "是否患有疾病", input_type: "select", span: 7, rules: "required",
    input_props:{
      radio: false,
      options: Options.diseaseOptions
    }
  },
  { name: 'permanentResidenceAddress', key: '.permanentResidenceAddress', label: "户口地址", input_type: "addressCascader", span: 18, rules: "required" },
]
export default config;

