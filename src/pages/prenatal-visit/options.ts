function toOptions(data){
  if(typeof data === 'string'){
    return data.split(/[,;]/).map((v,i) => ({ label: v, value: v }))
  }
}

// 证件类型
export const idTypeOptions = [
  {label: '身份证', value: 0},
  {label: '港澳台居民居住证', value: 1},
  {label: '护照', value: 2},
  {label: '回乡证', value: 3},
  {label: '台胞证', value: 4},
];

// 婚姻
export const maritalStatusOptions = [
  {label: '未婚', value: 0},
  {label: '已婚', value: 1},
  {label: '丧偶', value: 2},
  {label: '离婚', value: 3},
]

// 下次复诊  门诊类型
export const appointmentWeekOptions = [
	{ label: ' ', value: ' ', describe: '' },
	{ label: '普通门诊', value: 0, describe: '普' },
	{ label: '高危门诊', value: 1, describe: '高' },
	{ label: '教授门诊', value: 10, describe: '教' },
	{ label: '特需门诊', value: 50, describe: '特' },
	{ label: '候床入院', value: 60, describe: '候' },
	{ label: '留观', value: 70, describe: '留' },
]


// 下次复诊 时间间隔
export const appointmentDateOptions = [
	{ label: '', value: 0 },
	{ label: '1周后', value: 7 },
	{ label: '2周后', value: 14 },
	{ label: '3周后', value: 21 },
	{ label: '4周后', value: 28 },
	{ label: '5周后', value: 35 },
	{ label: '1天后', value: 1 },
	{ label: '2天后', value: 2 },
	{ label: '3天后', value: 3 },
	{ label: '4天后', value: 4 },
	{ label: '5天后', value: 5 },
	{ label: '6天后', value: 6 },
]

// 下次复诊 时间段
export const appointmentPeriodOptions = [
  {label: '上午', value: 1},
  {label: '下午', value: 2},
]

// 胎动
export const fetalMovementOptions = [
  { label: "无不适", value: "无不适" },
  { label: "胎动好", value: "胎动好" },
  { label: "无不适，胎动好", value: "无不适，胎动好" },
]

// 先露
export const presentationOptions = [
  { label: "头", value: "头" },
  { label: "臀", value: "臀" },
  { label: "肩", value: "肩" },
  { label: "-", value: "-" },
]

// 下肢水肿
export const edemaOptions = [
  { label: "-", value: 1 },
  { label: "+", value: 2 },
  { label: "++", value: 3 },
  { label: "+++", value: 4 },
  { label: "++++", value: 5 },
]

// 职业
export const occupationOptions = toOptions('国家公务员,专业技术人员,企业管理人员,自由职业者,工人,现役军人,个体经营者,职员,农民,学生,退（离）休人员,其他');

// 籍贯
const city = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
export const nativeplaceOptions = Object.values(city).map(e => ({ label: e, value: e }));

// 民族
export const ethnicOptions = ["汉族","壮族","回族","满族","土家族","瑶族","苗族","侗族","畲族","蒙古族","藏族","维吾尔族","彝族","布依族","朝鲜族","白族","哈尼族","哈萨克族","傣族","黎族","傈僳族","佤族","高山族","拉祜族","水族","东乡族","纳西族","景颇族","柯尔克孜族","土族","达斡尔族","仫佬族","羌族","布朗族","撒拉族","毛南族","仡佬族","锡伯族","阿昌族","普米族","塔吉克族","怒族", "乌孜别克族","俄罗斯族","鄂温克族","德昂族","保安族","裕固族","京族","塔塔尔族","独龙族","鄂伦春族","赫哲族","门巴族","珞巴族","基诺族","其他"].map(e => ({ label: e, value: e }));

// 酒的类型
export const jiuOptions = toOptions('无,白酒,啤酒,红酒,其他');

// 血型O,A,B,AB
export const xuexingOptions = toOptions('O,A,B,AB');

// 血型RH(+),RH(-)
export const xuexing2Options = toOptions('RH(+),RH(-)')

// 初潮
export const menarcheOptions = toOptions('8,9,10,11,12,13,14,15,16,17,18');

// 频率
export const plOptions = toOptions('偶尔,经常,无');

// 无、有
export const hnOptions = toOptions('无,有');

// 主诉
export const zsOptions = toOptions('无不适,胎动好,无不适，胎动好');

// 心率
export const xinlvOptions = toOptions('齐,不齐');

// 触及
export const cjOptions = toOptions('未触及,可触及');

// 分娩医院
export const fmyyOptions = toOptions('中山一院,中山二院,中山三院,广医一院,广医三院,省妇幼,市妇幼');

// 疾病
export const diseaseOptions = toOptions('无,高血压,心脏病,癫痫,甲亢,甲减,糖尿病,肾脏疾病,风湿,肝脏疾病,肺结核,血栓疾病,地中海贫血,G6PD缺乏症,其他');

