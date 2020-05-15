import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
    {
        name: "operationType",
        key: ".operationType",
        input_type: "select",
        label: "手术名称",
        span: 8,
        offset: 0,
        input_props: {
            type: "default",
            options: [
                { label: "羊膜腔穿刺", value: 1 },
                { label: "绒毛活检术", value: 2 },
                { label: "脐带穿刺术", value: 3 },
                { label: "羊膜腔灌注术", value: 4 },
                { label: "选择性减胎", value: 5 },
                { label: "羊水减量", value: 6 },
                { label: "宫内输血", value: 7 },
                { label: "胎儿胸腔积液", value: 8 },
                { label: "腹水", value: 9 },
                { label: "囊液穿刺", value: 10 }
            ]
        }
    },
    {
        name: "operationName",
        key: ".grade",
        input_type: "select",
        label: "手术级别",
        span: 8,
        offset: 0,
        input_props: {
            type: "default",
            options: [
                { label: "一级", value: 1 },
                { label: "二级", value: 2 },
                { label: "三级", value: 3 },
                { label: "四级", value: 4 }
            ]
        }
    },
    {
        name: "pdPreOperation",
        key: ".pdPreOperation",
        input_type: "custom",
        label: "术前检查",
        rules: { 
            temperature: "required"
        },
        header_label: true,
        is_new_row: true,
        input_props: {
            config: [
                { name: "temperature", key: ".temperature", input_type: "input", label: "体温", unit: "℃", span: 8, offset: 0, rules: "required" },
                { name: "systolic", key: ".systolic", input_type: "input", label: "收缩压", unit: "mmHg", span: 8, offset: 0 },
                { name: "diastolic", key: ".diastolic", input_type: "input", label: "舒张压", unit: "mmHg", span: 8, offset: 0 },
                {
                    name: "pdPreMeasurement",
                    key: ".pdPreMeasurement",
                    input_type: "table",
                    label: "术前测量",
                    span: 24,
                    offset: 0,
                    input_props: {
                        editable: true,
                        tableColumns: [
                            {
                                key: "leftPleuralEffusion",
                                title: "左胸腔积液",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "rightPleuralEffusion",
                                title: "右胸腔积液",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "ascites",
                                title: "腹水",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "hygromata",
                                title: "囊肿",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "lungCompression",
                                title: "肺压缩",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "mediastinum",
                                title: "纵膈",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "note",
                                title: "备注",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                        ]
                    }
                },
                { name: "ultrasound", key: ".ultrasound", input_type: "input", label: "超声表格" },
                {
                    name: "pdPreBloodFlow",
                    key: ".pdPreBloodFlow",
                    label: "术前流血指标",
                    input_type: "table",
                    input_props: {
                        tableColumns: [
                            {
                                key: "uaEdf",
                                title: "脐动脉",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "uaPi",
                                title: "PI",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "uaRi",
                                title: "RI",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "uaSdratio",
                                title: "S/D",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "mcaPsv",
                                title: "大脑中动脉",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "mcaPi",
                                title: "MCA-PI",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "mcaRi",
                                title: "MCA-RI",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "mcaSdratio",
                                title: "MCA-S/D",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "dv",
                                title: "DV静脉导管",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "note",
                                title: "备注",
                                editor: { name: "", key: "", input_type: "input" }
                            }
                        ]
                    }
                },
                {
                    name: "pdPreHemogram",
                    key: ".pdPreHemogram",
                    label: "术前血象检查",
                    input_type: "table",
                    input_props: {
                        tableColumns: [
                            {
                                key: "hbc",
                                title: "红细胞",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "hgb",
                                title: "血红蛋白",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "wbc",
                                title: "白细胞",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "hct",
                                title: "红细胞压积",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "plt",
                                title: "血小板",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "nrbc",
                                title: "有核红细胞",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "ret",
                                title: "网织红细胞",
                                editor: { name: "", key: "", input_type: "input" }
                            },
                            {
                                key: "coombs",
                                title: "抗球蛋白试验",
                                editor: { name: "", key: "", input_type: "input" }
                            }
                        ]
                    }
                },
                {
                    name: "pdAnaesthetic",
                    key: ".pdAnaesthetic",
                    input_type: "custom",
                    input_props: {
                        config: [
                            // {
                            //     name: "type",
                            //     key: ".type",
                            //     label: "麻醉方式",
                            //     input_type: "select",
                            //     input_props: {
                            //         type: "default",
                            //         options: [
                            //             { label: "全部麻醉", value: 1 },
                            //             { label: "局部麻醉", value: 2 },
                            //             { label: "复合麻醉", value: 3 },
                            //             { label: "其他", value: 4 },
                            //         ],
                            //         extraEditors: [
                            //             {
                            //                 key: 4,
                            //                 editors: [
                            //                     { key: "", name: "", input_type: "input" }
                            //                 ]
                            //             }
                            //         ]
                            //     },
                            // },
                            {
                                name: "doctor",
                                key: ".doctor",
                                label: "麻醉医生",
                                input_type: "input"
                            }
                        ]
                    }
                }
            ]
        }
    }
]

export default config;