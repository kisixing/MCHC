// TODO 用ts重写
function isArr(v){
  return Object.prototype.toString.call(v) === '[object Array]';
}

export function createFormHandler(config){
  if(!isArr(config)){
    throw new Error('expect array but'+ typeof config);
  }
  /**
   * @param {string} fieldName
   * @param {string} eventName
   * @param {function} cb
   * fieldName:{
   *   eventName:cb
   * }
   */
  let eventCallBacks = {}
  let formState = {
    validated: false,
  }


  // c - config
  const initField = function(c) {
    let r = {};
    c.forEach(v => {
      r = Object.assign(r, {
        [v.key]: {
          actions:{}, 
          effects:{}
        }
      })
    });
    return r;
  }
  

  const submit = function() {
    let r = {}
    let validCode = true;
    Object.keys(this).forEach(key => {
      if(this[key].actions){
        if(typeof this[key].actions.getValue === "function"){
          r = Object.assign(r, {[key]: this[key].actions.getValue()});
        }
        if(typeof this[key].actions.valid === "function"){
          const result = this[key].actions.valid();
          if(!result && validCode){
            validCode = false;
          }
        }
      }
    })
    return new Promise(resolve => {
      resolve({validCode,data: r})
    })
  }

  const subscribe = function(fieldName, eventName, cb) {
    if(fieldName in this){
      if(!eventCallBacks[fieldName]){
        eventCallBacks[fieldName] = {};
      }
      eventCallBacks[fieldName][eventName] = cb;
    }
  }

  const dispatch = function(fieldName, eventName, args) {
    // TODO 判读有无没写
    try{
      return eventCallBacks[fieldName][eventName](args);
    }catch(e){
      // console.warn
      // console.warn(e);
    }
  }

  const formHandler = {...initField(config)}
  formHandler.submit = submit;
  formHandler.subscribe = subscribe;
  formHandler.dispatch = dispatch;
  formHandler.formState = formState;
  return formHandler;
}
