// TODO 关于开放式存储的结果转换问题今天搞掂 5/11
/**
 *  入参 obj 形式 {"0": "1, ..."} 
 */
export function getArrayFormObject(obj: object): Array<any> {
  const resArr: Array<any> = [];
  let flag: boolean = true;
  Object.keys(obj).forEach((key: string) => {
    if (/^[0-9]+$/.test(key)) {
      resArr[Number(key)] = obj[key];
    } else {
      flag = false;
    }
  })
  if (!flag) {
    console.warn("开放式数据中存在非JSON结构化的存储方式");
  }
  return resArr;
}


/**
 * 
 * @return resObj {"0":"", "1": ""}
 */
export function getObjectFormArray(arr: Array<any>): object {
  const resObj: object = {};
  for (let i = 0; i < arr.length; i++) {
    resObj[i] = arr[i];
  }
  return resObj;
}



export function isBase(data: any): boolean {
  return typeof data !== "object";
}

export function isArr(data: any): boolean {
  return Object.prototype.toString.call(data) === "[object Array]";
}

export function isObj(data: any): boolean {
  return Object.prototype.toString.call(data) === '[object Object]';
}
export function isNumber(str: string): boolean {
  return /^[0-9]+$/.test(str);
}

export function isStringObj(data: any): boolean {
  let resObj:object = {};
  try {
    resObj = JSON.parse(data);
  } catch (e) {
    return false;
  }
  return Object.prototype.toString.call(resObj) === '[object Object]';
}

/**
 * 用于extraEditors的数据转换方法
 */
export function convertExtraEditors(editorsValue: string): Array<any>|string{
  let res:any;
  try{
    res = getArrayFormObject(JSON.parse(editorsValue));
    return res;
  }catch(e){

  }
  return [res];
}