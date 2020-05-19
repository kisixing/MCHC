import { FormConfig } from '@/components/MyForm/interface';

const config: Array<FormConfig> = [
    // {
    //     name: "test-address",
    //     key: ".test-address",
    //     label: "地址选择器",
    //     input_type: "b-address"
    // },
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
        name: "grade",
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
        header_label: true,
        is_new_row: true,
        input_props: {
            config: [
                { name: "temperature", key: ".temperature", input_type: "input", label: "体温", unit: "℃", span: 8, offset: 0 },
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
                            {
                                name: "type",
                                key: ".type",
                                label: "麻醉方式",
                                input_type: "select",
                                span: 12,
                                offset: 0,
                                input_props: {
                                    type: "default",
                                    options: [
                                        { label: "全部麻醉", value: 1 },
                                        { label: "局部麻醉", value: 2 },
                                        { label: "复合麻醉", value: 3 },
                                        { label: "其他", value: 4 },
                                    ],
                                    extraEditors: [
                                        {
                                            key: 4,
                                            editors: [
                                                { key: "", name: "", input_type: "input" }
                                            ]
                                        }
                                    ]
                                },
                            },
                            {
                                name: "doctor",
                                key: ".doctor",
                                label: "麻醉医生",
                                span: 12,
                                offset: 0,
                                input_type: "input"
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        name: "pdProcedure",
        key: ".pdProcedure",
        input_type: "array-custom",
        label: "手术过程记录",
        header_label: true,
        is_new_row: true,
        input_props: {
            config: [
                {
                    name: "startTime", key: ".startTime", input_type: "date", label: "开始时间", span: 8, offset: 0,
                    input_props: {
                        type: "time",
                        format: "HH:mm:ss"
                    }
                },
                {
                    name: "endTime", key: ".endTime", input_type: "date", label: "结束时间", span: 8, offset: 0,
                    input_props: {
                        type: "time",
                        format: "HH:mm:ss"
                    }
                },
                { name: "duration", key: ".duration", input_type: "input", label: "持续时间", span: 8, offset: 0 },
                {
                    name: "punctureTart", key: ".punctureTart", input_type: "select", label: "穿刺部位", span: 8, offset: 0,
                    input_props: {
                        type: "default",
                        options: [
                            { label: "经胎盘", value: 1 },
                            { label: "经羊膜", value: 2 }
                        ]
                    }
                },
                { name: "punctureAmount", key: ".punctureAmount", input_type: "input", label: "穿刺次数", span: 8, offset: 0 },
                {
                    name: "placentaEntry", key: ".placentaEntry", input_type: "select", label: "经否胎盘", span: 8, offset: 0,
                    input_props: {
                        options: [
                            { label: "经", value: 1 },
                            { label: "否", value: 0 }
                        ]
                    }
                },
                { 
                    name: "placentaHemorrhage", key: ".*", input_type: "select", label: "胎盘出血", span: 8, offset: 0,
                    input_props: {
                        type: "multiple",
                        options: [
                            {label: "否", value: 0},
                            {label: "是", value: 1},
                        ],
                        extraEditors: [
                            {
                                key: 1,
                                editors: [
                                    { name: "", key: "", input_type: "input", label: "出血时长", unit: "s"}
                                ]
                            }
                        ]
                    }
                },
                { name: "sampleSite", key: ".sampleSite", input_type: "input", label: "取样部位", span: 8, offset: 0 },
                { name: "sampleInspection", key: ".sampleInspection", input_type: "input", label: "送检类型", span: 8, offset: 0 },
                {
                    name: "processEvaluation", key: ".*", input_type: "checkbox", label: "评估过程", span: 24, offset: 0, is_new_row: true,
                    input_props: {
                        type: "custom",
                        renderData: [
                            {
                                key: "processEvaluation",
                                label: "评估过程",
                                options: [
                                    { label: "顺利", value: 1 },
                                    { label: "困难", value: 2 },
                                    { label: "失败", value: 3 },
                                ],
                                extraEditors: [
                                ]
                            },
                        ],
                    }
                },
                { 
                    name: "instrument", key: ".instrument", input_type: "select", label: "器械", span: 8, offset: 0,
                    input_props: {
                        type: "default",
                        options: [
                            {label: "穿刺针16/18G", value: 0},
                            {label: "穿刺针17/19G", value: 1},
                            {label: "穿刺针20G", value: 2},
                            {label: "穿刺针21G", value: 3},
                            {label: "活检钳", value: 4},
                        ]
                    }
                },
                {
                    name: "diagnosis", key: ".diagnosis", input_type: "input", label: "诊断", span: 24, offset: 0,
                    input_props: {
                        type: "textarea"
                    }
                },
                {
                    name: "exception", key: ".exception", input_type: "input", label: "特殊记录", span: 24, offset: 0,
                    input_props: {
                        type: "textarea"
                    }
                },
                {
                    name: "PdMedication",
                    key: "pdMedication",
                    input_type: "array-custom",
                    header_label: true,
                    label: "用药记录",
                    input_props: {
                        config: [
                            {name: "medication", key: ".medication", input_type: "input", label: "药名", span: 8, offset: 0},
                            {name: "amount", key: ".amount", input_type: "input", label: "计量", span: 8, offset: 0},
                            {name: "unit", key: ".unit", input_type: "input", label: "单位", span: 8, offset: 0},
                        ]
                    }
                },
                {
                    name: "invasiveNote",
                    key: ".invasiveNote",
                    input_type: "custom",
                    input_props: {
                        config: [
                            { 
                                name: "umbilicalHemorrhage", key: ".*", input_type: "select", label: "脐带出血", span: 8, offset: 0,
                                input_props: {
                                    type: "multiple",
                                    options:[
                                        { label: "无", value: 0},
                                        { label: "有", value: 1},
                                    ],
                                    extraEditors: [
                                        {
                                            key: 1,
                                            editors: [
                                                { name: "", key: "", input_type: "input", label: "出血时长", unit: "s"}
                                            ]
                                        }
                                    ]
                                }
                            },
                            { 
                                name: "uterusHemorrhage", key: ".*", input_type: "select", label: "宫壁出血", span: 8, offset: 0,
                                input_props: {
                                    type: "multiple",
                                    options:[
                                        { label: "无", value: 0},
                                        { label: "有", value: 1},
                                    ],
                                    extraEditors: [
                                        {
                                            key: 1,
                                            editors: [
                                                { name: "", key: "", input_type: "input", label: "出血时长", unit: "s"}
                                            ]
                                        }
                                    ]
                                }
                            },
                            { name: "cordbloodvolume", key: ".cordbloodvolume", input_type: "input", label: "脐血量", span: 8, offset: 0,},
                            { 
                                name: "cordbloodvolume", key: ".cordbloodvolume", input_type: "select", label: "脐血量", span: 8, offset: 0,
                                input_props: {
                                    options:[
                                        {label: "鲜红", value: 0},
                                        {label: "混入羊水", value: 1},
                                        {label: "混入母血", value: 2},
                                    ]
                                }
                            },
                        ]
                    }
                }
            ]
        }
    },
    
]

export default config;