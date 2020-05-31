interface ValidateRule {
  [key: string]: (val: any) => boolean
}

const SPLIT_KEY = "|";
const PARAMS_PARENTHESES = /\((.*)\)/;
const PARAMS_POINT = ",";
function isBase(data: any): boolean {
  return typeof data !== "object";
}
function isStr(data: any): boolean {
  return Object.prototype.toString.call(data) === "[object String]";
}

function isArr(data: any): boolean {
  return Object.prototype.toString.call(data) === "[object Array]";
}

function isObj(data: any): boolean {
  return Object.prototype.toString.call(data) === '[object Object]';
}
function isRegExp(data: any): boolean {
  return data instanceof RegExp;
}

const errorText: { [key: string]: string } = {
  "required": "此输入值不可为空",
  "number": "请输入数字"
}

const validateRules: ValidateRule = {
  "required": function (val: any): boolean {
    return val !== undefined && val !== "" && val !== null;
  },
  "number": function (val: any): boolean {
    return /^[0-9]+$/.test(val);
  },
  "range": function (val: number|string, args: any) {
    console.log(arguments);
    return true;
    // return val >= nMin && val <= nMax;
  }
}

/**
 * 
 * @param {any} data 
 * @param {string|object|RegExp|null} rules
 * 输入规则
 * 1.基本数据类型校验rules格式 string
 * 2.引用数据类型校验rules格式 {}
 * 3.若输入的rule类型和data类型不相同，报错但可通过校验
 * TODO
 * 暂时写any 以后改类型
 */

export const validFun = function validFun(data: any, rules: any): any {
  if (!rules) return "";
  let errorTip: any = "";
  // data 为 null时，typeof为object
  if (isStr(rules) && (isBase(data) || !data)) {
    const ruleArr = rules.split(SPLIT_KEY);
    let isValid = true;
    for (let i = 0; i < ruleArr.length; i++) {
      // 完全相等 直接调用方法
      isValid = validateRules[ruleArr[i]](data);
      // if(validateRules[ruleArr[i]]){
      // }else {
      //   const validateRulesKeyArr = Object.keys(validateRules);
      //   const index = validateRulesKeyArr.findIndex((key: string) => ruleArr[i].indexOf(key) !== -1);
      //   if(index !== -1){
      //     const params = PARAMS_PARENTHESES.test(ruleArr[i]) && PARAMS_PARENTHESES.exec(ruleArr[i])[1].split(PARAMS_POINT);
      //     isValid = validateRules[validateRulesKeyArr[index]](data, params);

      //   }
      // }
      if (!isValid) {
        errorTip = errorText[ruleArr[i]];
        break;
      }
    }
  } else if (isObj(rules) && isObj(data)) {
    errorTip = Object.assign({}, rules);
    try {
      Object.keys(rules).forEach((key: string) => {
        errorTip[key] = "";
        errorTip[key] = validFun(data[key], rules[key]);
      });
    } catch (e) {
      console.error(e);
    }
  } else if (isRegExp(rules) && (!isBase(data) || !data)) {
    errorTip = rules.test(data) ? "" : `正则验证 ${rules} 不通过`;
  } else if (isObj(rules) && isArr(data)) {
    errorTip = data.map((v: any) => {
      const obj = Object.assign({}, v);
      Object.keys(obj).forEach((key: string) => {
        obj[key] = "";
      });
      return obj;
    });
    for (let i = 0; i < errorTip.length; i++) {
      errorTip[i] = validFun(data[i], rules);
    }
    console.log(errorTip);
  } else {
    console.error(`Type of rules is ${typeof rules}, but type of data is ${typeof data} `);
  }
  return errorTip;
}