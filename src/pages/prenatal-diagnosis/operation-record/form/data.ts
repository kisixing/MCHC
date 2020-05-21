const data = {
    "test-address": "广东省,广州市,天河区,XXXX大街XXX号",

    "id": 8,
    "operationType": 1, // enum
    "operationName": "羊膜腔穿刺",
    "serialNo": "0001",
    "grade": 1,
    "operationDate": "",
    "incisionType" : null,
    "rePuncture" : null,
    "operator" : null,
    "assistant" : null,
    "assistant2" : null,
    "nurse" : null,
    "circuiting" : null,
    // 术前
    "pdPreOperation": {
        "temperature": "",
        "systolic": "",
        "diastolic": "",
        "pluse": "",
        "heartrate": "",
        "respiratory": "",
        "bloodCollectionDate": "",
        "bloodType": "",
        "diagnosis": "",
        "pdPreMeasurement": [
            {
                "leftPleuralEffusion": "",
                "rightPleuralEffusion": "",
                "ascites": "",
                "hygromata": "",
                "lungCompression": "",
                "mediastinum": "",
                "note": ""
            }
        ],
        "ultrasound": [
            {
                "checkdate": "",
                "type": "",
                "clr": "",
                "nt": "",
                "menopause": "",
                "gestationalWeek": ""
            }
        ],
        "pdPreBloodFlow": [
            {
                "uaEdf": "",
                "uaPi": "",
                "uaRi": "",
                "uaSdratio": "",
                "mcaPsv": "",
                "mcaPi": "",
                "mcaRi": "",
                "mcaSdratio": "",
                "dv": "",
                "note": ""
            }
        ],
        "pdPreHemogram": [
            {
                "hbc": "红细胞",
                "hgb": "血红蛋白",
                "wbc": "白细胞",
                "hct": "红细胞压积",
                "plt": "血小板",
                "nrbc": "有核红细胞",
                "ret": "网织红细胞",
                "coombs": "抗球蛋白试验",
            }

        ],
        "pdAnaesthetic": {
            "type": 1,
            "doctor": "麻醉医生",
        }
    },
    // 手术过程
    "pdProcedure": [{
        "startTime": "08:00:00",
        "endTime": "10:00:00",
        "duration": "2",
        "punctureTart": 1,
        "punctureAmount": 1,
        "placentaEntry": 1,
        "placentaHemorrha": 1,
        "placentaHemorrhaNote": "",
        "sampleSite": "",
        "sampleInspection": "",
        "processEvaluation": 1,
        "processEvaluationNote": "",
        "diagnosis": "",
        "exception": "",
        "instrument": 1,

        "pdMedication": [],
        "invasiveNote": {}
    }],
    "pdMedications" : [ ],
    "prenatalPatient" : {
        "id": 1
    },
    "pdPreBloodFlows": [],
    "pdPostOperation": {}
}



export default data;
