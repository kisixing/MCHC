function isArr(v){
  return Object.prototype.toString.call(v) === '[object Array]';
}

export function createFormHandler(config, {submitChange}){
  if(!isArr(config)){
    throw new Error(`expect array but${typeof config}`);
  }
  /**
   * @param {string} fieldName
   * @param {string} eventName
   * @param {function} cb
   * fieldName:{
   *   eventName:cb
   * }
   */

  const eventCallBacks = {}
  const formState = {
    validated: false,
    submitChange
  }

  // c - config
  const initField = function(c) {
    let r = {};
    c.forEach(v => {
      r = Object.assign(r, {
        [v.name]: {
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
      resolve({validCode,res: r})
    })
  }

  const subscribe = function(fieldName, eventName, cb) {
    // if(fieldName in this || fieldName === "_global"){
    // 这里使用this会导致subscribe传给组件后this丢失
    if(fieldName in formHandler || fieldName === "_global"){
      if(!eventCallBacks[fieldName]){
        eventCallBacks[fieldName] = {};
      }
      if(!eventCallBacks[fieldName][eventName]){
        eventCallBacks[fieldName][eventName] = [];
      }
      eventCallBacks[fieldName][eventName].push(cb);
    }
  }

  const dispatch = function(fieldName, eventName, args) {
    if(fieldName !== "_global" && submitChange){
      dispatch("_global", "change");
      return;
    }

    if(!Object.prototype.hasOwnProperty.call(eventCallBacks, fieldName)) {
      console.warn(`fieldName ${fieldName} not found in eventCallBacks Object`);
      return;
    }
    const eventObject = eventCallBacks[fieldName];

    const eventQueue = eventObject[eventName];
    if(!eventQueue || eventQueue.length === 0){
      console.warn(`fieldName ${eventName} not found in ${fieldName} Event Object || eventQueue's length is 0`);
      return;
    }
    eventQueue.forEach(func => {
      func(args);
    })
  }

  const formHandler = {...initField(config)}
  formHandler.submit = submit;
  formHandler.subscribe = subscribe;
  formHandler.dispatch = dispatch;
  formHandler.formState = formState;
  return formHandler;
}
