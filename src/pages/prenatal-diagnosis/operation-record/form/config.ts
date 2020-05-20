import { FormConfig } from '@/components/MyForm/interface';

const config1: Array<FormConfig> = [
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
                            { label: "否", value: 0 },
                            { label: "是", value: 1 },
                        ],
                        extraEditors: [
                            {
                                key: 1,
                                editors: [
                                    { name: "", key: "", input_type: "input", label: "出血时长", unit: "s" }
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
                            { label: "穿刺针16/18G", value: 0 },
                            { label: "穿刺针17/19G", value: 1 },
                            { label: "穿刺针20G", value: 2 },
                            { label: "穿刺针21G", value: 3 },
                            { label: "活检钳", value: 4 },
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
                            { name: "medication", key: ".medication", input_type: "input", label: "药名", span: 8, offset: 0 },
                            { name: "amount", key: ".amount", input_type: "input", label: "计量", span: 8, offset: 0 },
                            { name: "unit", key: ".unit", input_type: "input", label: "单位", span: 8, offset: 0 },
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
                                    options: [
                                        { label: "无", value: 0 },
                                        { label: "有", value: 1 },
                                    ],
                                    extraEditors: [
                                        {
                                            key: 1,
                                            editors: [
                                                { name: "", key: "", input_type: "input", label: "出血时长", unit: "s" }
                                            ]
                                        }
                                    ]
                                }
                            },
                            {
                                name: "uterusHemorrhage", key: ".*", input_type: "select", label: "宫壁出血", span: 8, offset: 0,
                                input_props: {
                                    type: "multiple",
                                    options: [
                                        { label: "无", value: 0 },
                                        { label: "有", value: 1 },
                                    ],
                                    extraEditors: [
                                        {
                                            key: 1,
                                            editors: [
                                                { name: "", key: "", input_type: "input", label: "出血时长", unit: "s" }
                                            ]
                                        }
                                    ]
                                }
                            },
                            { name: "cordbloodvolume", key: ".cordbloodvolume", input_type: "input", label: "脐血量", span: 8, offset: 0, },
                            {
                                name: "cordbloodvolume", key: ".cordbloodvolume", input_type: "select", label: "脐血量", span: 8, offset: 0,
                                input_props: {
                                    options: [
                                        { label: "鲜红", value: 0 },
                                        { label: "混入羊水", value: 1 },
                                        { label: "混入母血", value: 2 },
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

const generalConfig: Array<FormConfig> = [

    { name: "id", key: ".id", input_type: "input", label: "手术病历id", hidden: true },
    { name: "prenatalPatient-id", key: ".prenatalPatient.id", input_type: "input", label: "患者id", hidden: true },
    { name: "serialNo", key: ".serialNo", label: "检查流水号", input_type: "input", span: 6, hidden: true },
    {
        name: "operationType",
        key: ".operationType",
        input_type: "select",
        label: "手术名称",
        span: 6,
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
        span: 6,
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
    { name: "operationDate", key: ".operationDate", input_type: "date", label: "手术日期", span: 6 },
    {
        name: "incisionType", key: ".incisionType", input_type: "select", label: "切口类型", span: 6,
        input_props: {
            type: "default",
            options: [
                { label: "0Ⅰ", value: 1 },
                { label: "0Ⅱ", value: 2 },
                { label: "0Ⅲ", value: 3 },
                { label: "Ⅰ", value: 4 },
                { label: "Ⅱ", value: 5 },
                { label: "Ⅲ", value: 6 },
                { label: "Ⅳ", value: 7 }
            ]
        }
    },
    {
        name: "rePuncture", key: ".rePuncture", input_type: "select", label: "是否再次穿刺", span: 6,
        input_props: {
            type: "default",
            radio: true,
            options: [
                { label: "是", value: true },
                { label: "否", value: false }
            ]
        }
    },
    { name: "operator", key: ".operator", input_type: "input", label: "术者", span: 6, is_new_row: true },
    { name: "assistant1", key: ".assistant", input_type: "input", label: "助手1", span: 6 },
    { name: "assistant2", key: ".assistant2", input_type: "input", label: "助手2", span: 6 },
    { name: "nurse", key: ".nurse", input_type: "input", label: "护士", span: 6 },
    { name: "circuiting", key: ".circuiting", input_type: "input", label: "巡回护士", span: 6 }
]

//  术前超声 暂缺
const ultrasound: Array<FormConfig> = [
    {
        name: "ultrasound",
        key: ".ultrasound",
        input_type: "table",
        span: 24,
        offset: 0,
        input_props: {
            tableColumns: [

            ]
        }
    }
]

const pdPreOperation = {
    name: "pdPreOperation",
    key: ".pdPreOperation",
    label: "术前记录",
    header_label: true,
    input_type: "custom",
    input_props: {
        config: [
            { name: "temperature", key: ".temperature", input_type: "input", label: "体温", unit: "℃", span: 6 },
            { name: "pluse", key: ".pluse", input_type: "input", label: "脉率", unit: "次/分", span: 6 },
            { name: "heartrate", key: ".heartrate", input_type: "input", label: "心率", unit: "次/分", span: 6 },
            { name: "respiratory", key: ".respiratory", input_type: "input", label: "呼吸", span: 6 },
            { name: "systolic", key: ".systolic", input_type: "input", label: "收缩压", unit: "mmHg", span: 6 },
            { name: "diastolic", key: ".diastolic", input_type: "input", label: "舒张压", unit: "mmHg", span: 6 },
            // 宫内输血
            { name: "bloodCollectionDate", key: ".bloodCollectionDate", input_type: "date", label: "采血日期", span: 6 },
            {
                name: "diastolic", key: ".diastolic", input_type: "select", label: "库血类型", span: 6,
                input_props: {
                    options: [
                        { label: "全血", value: 1 },
                        { label: "洗涤", value: 2 },
                        { label: "悬浮", value: 3 },
                        { label: "浓缩", value: 4 },
                    ]
                }
            }
        ]
    }
}

// 术前测量值
const pdPreMeasurement: FormConfig = {
    name: "pdPreMeasurement",
    key: ".pdPreMeasurement",
    input_type: "custom",
    span: 24,
    label: "术前测量值",
    header_label: true,
    input_props: {
        config: [
            { name: "leftPleuralEffusion", key: ".leftPleuralEffusion", input_type: "input", label: "左胸腔积液", unit: "ml", span: 6 },
            { name: "rightPleuralEffusion", key: ".rightPleuralEffusion", input_type: "input", label: "右胸腔积液", unit: "ml", span: 6 },
            { name: "ascites", key: ".ascites", input_type: "input", label: "腹水", unit: "ml", span: 6 },
            { name: "hygromata", key: ".hygromata", input_type: "input", label: "囊肿", unit: "mm", span: 6 },
            { name: "lungCompression", key: ".lungCompression", input_type: "input", label: "肺压缩", span: 6 },
            { name: "mediastinum", key: ".mediastinum", input_type: "input", label: "纵膈", span: 6 },
            { name: "note", key: ".note", input_type: "input", label: "备注", span: 6 },
        ]
    }
}

// 术前血象指标
const pdPreHemogram: FormConfig = {
    name: "PdPreHemogram",
    key: ".PdPreHemogram",
    input_type: "custom",
    span: 24,
    label: "术前血象检查",
    header_label: true,
    input_props: {
        config: [
            { name: "hbc", key: ".hbc", input_type: "input", label: "红细胞", span: 6 },
            { name: "hgb", key: ".hgb", input_type: "input", label: "血红蛋白", unit: "g/L", span: 6 },
            { name: "wbc", key: ".wbc", input_type: "input", label: "白细胞", unit: "x10⁹/L", span: 6 },
            { name: "hct", key: ".hct", input_type: "input", label: "红细胞压积", span: 6 },
            { name: "plt", key: ".plt", input_type: "input", label: "血小板", unit: "x10⁹/L", span: 6 },
            { name: "nrbc", key: ".nrbc", input_type: "input", label: "有核红细胞", unit: "x10⁹/L", span: 6 },
            { name: "ret", key: ".ret", input_type: "input", label: "网织红细胞", unit: "%", span: 6 },
            { name: "coombs", key: ".coombs", input_type: "input", label: "抗球蛋白试验", span: 6 },
        ]
    }
}

// 术前血流指标
const pdPreBloodFlows: FormConfig = {
    name: "pdPreBloodFlows",
    key: ".pdPreBloodFlows",
    input_type: "custom",
    span: 24,
    label: "术前血流指标",
    header_label: true,
    input_props: {
        config: [
            { name: "uaEdf", key: ".uaEdf", input_type: "input", label: "ua-Edf", span: 6 },
            { name: "uaPi", key: ".uaPi", input_type: "input", label: "ua-PI", span: 6 },
            { name: "uaRi", key: ".uaRi", input_type: "input", label: "ua-Ri", span: 6 },
            { name: "uaSdratio", key: ".uaSdratio", input_type: "input", label: "ua-S/D", span: 6 },
            { name: "mcaPsv", key: ".mcaPsv", input_type: "input", label: "mca-Psv", span: 6 },
            { name: "mcaPi", key: ".mcaPi", input_type: "input", label: "mca-Pi", span: 6 },
            { name: "mcaSdratio", key: ".mcaSdratio", input_type: "input", label: "mca-S/D", span: 6 },
            { name: "note", key: ".note", input_type: "input", label: "备注", span: 6 },
        ]
    }
}


const pdProcedure: { [key: string]: FormConfig } = {
    "1": {
        name: "pdProcedure",
        key: ".pdProcedure",
        input_type: "custom",
        span: 24,
        label: "手术过程记录",
        header_label: true,
        input_props: {
            config: [
                {
                    name: "startTime", key: ".startTime", input_type: "date", label: "开始时间", span: 6,
                    input_props: {
                        type: "time"
                    }
                },
                {
                    name: "endTime", key: ".endTime", input_type: "date", label: "结束时间", span: 6,
                    input_props: {
                        type: "time"
                    }
                },
                { name: "duration", key: ".duration", input_type: "input", label: "持续时间", unit: "min", span: 6 },
                /** 
                 * punctureTarget|sampleSite|sampleInspection|instrument 会因为手术类型不同而导致选项不相同
                 * */
                {
                    name: "punctureTarget", key: ".punctureTarget", input_type: "select", label: "穿刺部位", span: 6, is_new_row: true,
                    input_props: {
                        options: [
                            { label: "经胎盘", value: 1 },
                            { label: "经羊膜", value: 2 },
                        ]
                    }
                },
                { name: "punctureAmount", key: ".punctureAmount", input_type: "input", label: "穿刺次数", span: 6 },
                {
                    name: "placentaEntry", key: ".placentaEntry", input_type: "select", label: "经否胎盘", span: 6,
                    input_props: {
                        options: [
                            { label: "经", value: true },
                            { label: "否", value: false }
                        ]
                    }
                },
                { name: "instrument", key: ".instrument", input_type: "input", label: "器械", span: 6 },

                {
                    name: "placentaHemorrhage", key: ".*", input_type: "checkbox", label: "胎盘出血", span: 12,
                    input_props: {
                        type: "custom",
                        renderData: [
                            {
                                key: "placentaHemorrhage",
                                label: "",
                                options: [
                                    { label: "是", value: 1 },
                                    { label: "否", value: 0 }
                                ],
                                extraEditors: [
                                    {
                                        key: 1,
                                        editors: [
                                            { name: "", key: "", input_type: "input" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                { name: "sampleSite", key: ".sampleSite", input_type: "select", label: "取样部位", span: 6 },
                { name: "sampleInspection", key: ".sampleInspection", input_type: "input", label: "送检项目", span: 6 },
                {
                    name: "processEvaluation", key: ".*", input_type: "checkbox", label: "评估过程", span: 24,
                    input_props: {
                        type: "custom",
                        renderData: [
                            {
                                key: "processEvaluation",
                                label: "",
                                options: [
                                    { label: "顺利", value: 0 },
                                    { label: "困难", value: 1 },
                                    { label: "失败", value: 2 }
                                ],
                                extraEditors: [
                                    {
                                        key: 0,
                                        editors: [
                                            { name: "", key: "", input_type: "input" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: "diagnosis", key: ".diagnosis", input_type: "input", label: "诊断", span: 24,
                    input_props: {
                        type: "textarea"
                    }
                },
                {
                    name: "exception", key: ".exception", input_type: "input", label: "特殊记录", span: 24,
                    input_props: {
                        type: "textarea"
                    }
                },
            ]
        }
    }
}

const pdAnaesthetic: FormConfig = {
    name: "pdAnaesthetic",
    key: ".pdAnaesthetic",
    input_type: "custom",
    label: "麻醉情况",
    header_label: true,
    input_props: {
        config: [
            {
                name: "type", key: ".type", input_type: "select", label: "麻醉方式", span: 12,
                input_props: {
                    type: "default",
                    options: [
                        { label: "全部麻醉", value: 1 },
                        { label: "局部麻醉", value: 2 },
                        { label: "复合麻醉", value: 3 },
                        { label: "其他", value: 4 },
                    ]
                }
            },
            { name: "doctor", key: ".doctor", input_type: "input", label: "麻醉医生", span: 12 },
        ]
    }
}

// 出血+血量+性状
const invasiveNote: FormConfig = {
    name: "invasiveNote",
    key: ".invasiveNote",
    input_type: "custom",
    label: "出血+血量+性状",
    header_label: true,
    input_props: {
        config: [
            {
                name: "umbilicalHemorrhage", key: ".*", input_type: "checkbox", label: "脐带出血", span: 24,
                input_props: {
                    type: "custom",
                    renderData: [
                        {
                            key: "umbilicalHemorrhage",
                            label: "",
                            options: [
                                { value: true, label: "有" },
                                { value: false, label: "无" },
                            ],
                            extraEditors: [
                                {
                                    key: true,
                                    editors: [
                                        { key: "", name: "", input_type: "input", unit: "s" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                name: "uterusHemorrhage", key: ".*", input_type: "checkbox", label: "宫璧出血", span: 24,
                input_props: {
                    type: "custom",
                    renderData: [
                        {
                            key: "uterusHemorrhage",
                            label: "",
                            options: [
                                { value: true, label: "有" },
                                { value: false, label: "无" },
                            ],
                            extraEditors: [
                                {
                                    key: true,
                                    editors: [
                                        { key: "", name: "", input_type: "input", unit: "s" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            { name: "cordbloodvolume", key: ".cordbloodvolume", input_type: "input", label: "脐血量", span: 6 },
            { name: "cordbloodcharacter", key: ".cordbloodcharacter", input_type: "input", label: "脐血性状", span: 6 },
            { name: "amnioticfluidvolume", key: ".amnioticfluidvolume", input_type: "input", label: "羊水量", span: 6 },
            { name: "amnioticfluidcharacter", key: ".amnioticfluidcharacter", input_type: "input", label: "羊水性状", span: 6 },
            { name: "villusvolume", key: ".villusvolume", input_type: "input", label: "绒毛量", span: 6 },
            { name: "villuscharacter", key: ".villuscharacter", input_type: "input", label: "绒毛性状", span: 6 },
            { name: "perfusionvolum", key: ".perfusionvolum", input_type: "input", label: "灌注量", span: 6 },
            { name: "catheteramount", key: ".catheteramount", input_type: "input", label: "插管次数", span: 6 },
            { name: "suctionamount", key: ".suctionamount", input_type: "input", label: "抽吸次数", span: 6 },
            { name: "negativepressure", key: ".negativepressure", input_type: "input", label: "负压", span: 6 },
        ]
    }
}

const pdMedications: FormConfig = {
    name: "pdMedications",
    key: ".pdMedications",
    label: "用药情况",
    header_label: true,
    input_type: "array-custom",
    input_props: {
        config: [
            { name: "medication", key: ".medication", input_type: "input", label: "药物名称", span: 6 },
            { name: "amount", key: ".amount", input_type: "input", label: "用药量", span: 6 },
            { name: "unit", key: ".unit", input_type: "input", label: "单位", span: 6 },
        ]
    }
}

const pdPostOperation: FormConfig = {
    name: "pdMedications",
    key: ".pdMedications",
    label: "术后记录",
    header_label: true,
    input_type: "array-custom",
    input_props: {
        config: [
            { name: "postFhr", key: ".postFhr", input_type: "input", label: "术后胎心率", span: 6 },
            { name: "advice", key: ".advice", input_type: "input", label: "术后医嘱", span: 6 },
            { name: "complication", key: ".complication", input_type: "input", label: "并发症", span: 6 },
            { name: "complicationNote", key: ".complicationNote", input_type: "input", label: "并发症备注", span: 6 },
            { name: "diagnosis", key: ".diagnosis", input_type: "input", label: "术后诊断", span: 6 },
        ]
    }
}

const config = {
    "1": [
        ...generalConfig,
        pdPreOperation,
        pdPreMeasurement,
        pdPreHemogram,
        pdPreBloodFlows,
        pdProcedure["1"],
        pdAnaesthetic,
        invasiveNote,
        pdMedications,
        pdPostOperation
    ]
}


export default config;