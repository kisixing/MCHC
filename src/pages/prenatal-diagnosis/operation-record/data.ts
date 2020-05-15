const data = {
    "id": 8,
    "operationType": 1, // enum
    "operationName": "羊膜腔穿刺",
    "serialNo": "0001",
    "grade": 1,
    "pdPreOperation": {
        "temperature": "",
        "systolic": "",
        "diastolic": "",
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
        "ultrasound": [],
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
    "pdProcedure": [{
        "startTime": "",
        "pdMedication": [],
        "invasiveNote": {}
    }],
    "pdPostOperation": {}
}

export default data;
