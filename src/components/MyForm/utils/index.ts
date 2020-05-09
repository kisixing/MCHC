/* eslint-disable no-lonely-if */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
import {FormConfig} from '../interface';

const o:string = ".";
const a:string = "_";
const ALL:string = "*";
// 只提取基本数据类型
const ONLYBASE:boolean = false;

function isBase(data: any):boolean{
  return typeof data !== "object";
}

function isArr(data: any):boolean{
  return Object.prototype.toString.call(data) === "[object Array]";
}

function isObj(data:any):boolean{
  return Object.prototype.toString.call(data) === '[object Object]';
}
function isNumber(str:string):boolean{
  return /^[0-9]+$/.test(str);
}

/**
 * 对于还需取下一级的继续向下取 
 */
function handleGetData(obj:any, currentKey:string, nextPath:string, history:string){
  let r = {};
  if(isObj(obj)){
    const keyArr = currentKey === ALL ? Object.keys(obj) : [currentKey];
    keyArr.forEach(key => {
      r = Object.assign(r, getData(obj[key], nextPath, `${history}.${key}`));
    })
  }else if(isArr(obj)){
    if(currentKey === ALL){
      obj.forEach((_:any, index:number) => {
        r = Object.assign(r, getData(obj[index], nextPath, `${history}_${index}`));
      })
    }else if(isNumber(currentKey)){
      r = Object.assign(r, getData(obj[Number(currentKey)], nextPath, `${history}_${currentKey}`));
    }
  }
  return r;
}

/**
 * 责任链式判断 拆分if-else
 * @param {number} oi - objectIndex
 * @param {number} ai - arrayIndex
 * 
 * @return {object} r 返回的结果
 */
const rules = [
  {
    match: (oi:number, ai:number) =>  (oi === ai),
    action:function(oi:number, ai:number, path:string, obj:any, history:string){
      // 只提取基本数据类型
      // if(isBase(obj) === ONLYBASE) return {};
      const r:{[key:string]:any} = {};
      if(path === ALL){
        if(isObj(obj)){
          Object.keys(obj).forEach((key:string) => {
            if(isBase(obj[key]) === ONLYBASE){
              r[`${history}.${key}`] = obj[key];
            }
          })
        }else if(isArr(obj)){
          obj.forEach((v:any,index:number) => {
            if(isBase(v) === ONLYBASE){
              r[`${history}_${index}`] = v;
            }
          })
        }
      }else{
        if(isObj(obj)){
          r[`${history}.${path}`] = obj[path];
        }else if(isArr(obj) && isNumber(path)){
          r[`${history}_${path}`] = obj[Number(path)];
        }
      }
      return r;
    }
  },{
    match: (oi:number, ai:number) =>  ( oi === -1 && ai !== -1),
    action:function(oi:number, ai:number, path:string, obj:any, history:string){
      const currentKey = path.substring(0, ai);
      const nextPath = path.substring(ai+1, path.length);
      let r = {};
      r = handleGetData(obj, currentKey, nextPath, history);
      return r;
    }
  },{
    match: (oi:number, ai:number) => ( oi !== -1 && ai === -1),
    action:function(oi:number, ai:number, path:string, obj:any, history:string){
      const currentKey = path.substring(0, oi);
      const nextPath = path.substring(oi+1, path.length);
      let r = {};
      r = handleGetData(obj, currentKey, nextPath, history);
      return r;
    }
  },{
    match: (oi:number, ai:number) => ( oi !== -1 && ai !== -1 && oi < ai),
    action:function(oi:number, ai:number, path:string, obj:any, history:string){
      const currentKey = path.substring(0, ai);
      const nextPath = path.substring(ai+1, path.length);
      const r = handleGetData(obj, currentKey, nextPath, history);
      return r;
    }
  },{
    match: (oi:number, ai:number) => ( oi !== -1 && ai !== -1 && oi > ai),
    action:function(oi:number, ai:number, path:string, obj:any, history:string){
      const currentKey = path.substring(0, ai);
      const nextPath = path.substring(ai+1, path.length);
      const r = handleGetData(obj, currentKey, nextPath, history);
      return r;
    }
  }
]

/**
 * 入口方法
 */
function getData(obj:any, path:string, history:string):object{
  if(!path){ console.warn('path is undefined'); return {}; }
  if(path.indexOf("+") !== -1){ 
    // console.warn('path is empty');
    console.warn("不向下取值，返回原对象");
    console.log(obj);
    return {[`+${path}`]:obj}; 
  }
  if(isBase(obj)){ return {}; }
  let r = {};
  const oi = path.indexOf(o);
  const ai = path.indexOf(a);
  for(let i = 0; i < rules.length ; i ++){
    if(rules[i].match(oi, ai)){
      r = Object.assign(r, rules[i].action(oi, ai, path, obj, history))
    }
  }
  return r;
}

/**
 * 遍历路径数组
 */
export function loopPath(obj:any, pathArr:Array<string>):object{
  let r = {};
  pathArr.forEach((path:string) => {
    // TODO 目前现在这个位置进行修改，之后再考虑那个点需不需要改
    path = path.substring(1,path.length);
    r = {
      ...r,
      ...getData(obj,path,"")
    }
  });
  console.log(r);
  return r;
}



/**
 * 获取render所需的data结构
 */
export function getRenderData(config:Array<FormConfig>, data:any): Array<FormConfig> {
  if(!data){
    return config;
  }
  const rConfig:Array<FormConfig> = config.map(v => v);
  const cData:{[key:string]:any} = loopPath(data, config.map(v => v.key));
  for(let i = 0 ; i < rConfig.length ; i++){
    rConfig[i].value = cData[rConfig[i].key];
  }
  return rConfig;
}

/* ============================== 本地格式转为接口格式 ==================================== */
/**
 * 默认parentKey为数字是即生成数组
 * @param {string} parentKey 
 * @param {object|Array} data 
 */
function newObj(parentKey:string, currentKey:string, data:any){
  if(!currentKey) return {};
  let r:{[key:string]:any} = {};
  if(parentKey === ""){
    if(isNumber(currentKey)){
      r = [];
      r[Number(currentKey)] = data;
    }else{
      r[currentKey] = data;
    }
  }else{
    if(isNumber(currentKey)){
      const g:{[key:string]:any} = {};
      g[parentKey] = [];
      g[parentKey][Number(currentKey)] = data;
      r = _assign(r, toFormat(g));
    }else{
      const g:{[key:string]:any} = {};
      g[parentKey] = {};
      g[parentKey][currentKey] = data;
      r = _assign(r, toFormat(g));
    }
  }
  return r;
}

/**
 * 2个参数必须为相同类型的参数
 * 因为转换出来的对象名称相同，直接使用Object.assign会导致覆盖
 * 所有需要此方法做合并处理（正常情况下是不会去重的，除非在转换的时候已经出现了重复）
 * 合并两个对象
 */
function _assign(mainData: any, newData: any ): any{
  
  if(isObj(mainData) && isObj(newData)){
    const mainKey = Object.keys(mainData);
    const newKey = Object.keys(newData);
    for(let i = 0 ; i < newKey.length ; i++){
      let flag = false;
      for(let j = 0; j < mainKey.length ; j++){
        const mk = mainKey[j];
        const nk = newKey[i];
        if(mk === nk){
          flag = true;
          // 判别下一层是不是数组，做数组合并
          if(isArr(mainData[mk]) && isArr(newData[nk])){
            for(let k = 0; k < mainData[mk].length ;k++){
              mainData[mk][k] = _assign(mainData[mk][k], newData[nk][k])
            }
          }else if(isObj(mainData[mk]) && isObj(newData[mk])){
            // default object
            mainData[mk] = {
              ...mainData[mk],
              ...newData[nk]
            }
          }
        }
      }
      if(!flag){
        mainData = {
          ...mainData,
          [newKey[i]]: newData[newKey[i]]
        }
      }
    }
  }else{
    console.error("其中一个参数不是对象||二者皆不为对象||两者数据类型不相同，不可以做合并操作");
  }
  return mainData;
}

/**
 * Convert custom data to server format data
 * oi - objectIndex
 * ai - arrayIndex
 */
export function toFormat(data:{[key:string]:any}):object{
  let r = {};
  Object.keys(data).forEach(key => {
    const oi = key.lastIndexOf(o);
    const ai = key.lastIndexOf(a);
    if(oi === ai){
      console.warn('isolated data');
      r = _assign(r, newObj("", key, data[key]));
    }else if(oi === -1){
      const currentKey = key.substring(ai+1, key.length);
      const parentKey = key.substring(0, ai);
      r = _assign(r, newObj(parentKey, currentKey,data[key]));
    }else if(ai === -1){
      const currentKey = key.substring(oi+1, key.length);
      const parentKey = key.substring(0, oi);
      r = _assign(r, newObj(parentKey, currentKey, data[key]));
    }else if(oi < ai){
      // 变成数组
      const currentKey = key.substring(ai+1, key.length);
      const parentKey = key.substring(0, ai);
      r = _assign(r, newObj(parentKey, currentKey, data[key]));
    }else if(oi > ai){
      const currentKey = key.substring(oi+1, key.length);
      const parentKey = key.substring(0, oi);
      r = _assign(r, newObj(parentKey, currentKey, data[key]));
    }
  })
  return r;
}

