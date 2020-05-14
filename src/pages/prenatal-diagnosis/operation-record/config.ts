import { FormConfig } from '@/components/MyForm/interface';

const config:Array<FormConfig> = [
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
                { label: "羊膜腔穿刺", value: 1},
                { label: "绒毛活检术", value: 2},
                { label: "脐带穿刺术", value: 3},
                { label: "羊膜腔灌注术", value: 4},
                { label: "选择性减胎", value: 5},
                { label: "羊水减量", value: 6},
                { label: "宫内输血", value: 7},
                { label: "胎儿胸腔积液", value: 8},
                { label: "腹水", value: 9},
                { label: "囊液穿刺", value: 10}
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
                { label: "一级", value: 1},
                { label: "二级", value: 2},
                { label: "三级", value: 3},
                { label: "四级", value: 4}
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
                { name: "temperature", key: ".temperature", input_type: "input", label: "体温", unit: "℃", span: 8, offset: 0},
                { name: "systolic", key: ".systolic", input_type: "input", label: "收缩压", unit: "mmHg", span: 8, offset: 0},
                { name: "diastolic", key: ".diastolic", input_type: "input", label: "舒张压", unit: "mmHg", span: 8, offset: 0},
                { 
                    name: "ultrasound", 
                    key: ".ultrasound",
                    input_type: "table",
                    label: "术前超声检查",
                    span: 24,
                    offset: 0,
                    input_props: {
                        editable: true,
                        tableColumns: [
                            { 
                                key: "checkdate", 
                                title: "检查日期", 
                                editor: {
                                    name: "",
                                    key: "",
                                    input_type: "input"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
]

export default config;