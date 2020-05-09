/* eslint-disable @typescript-eslint/camelcase */
import React,{ Component, ReactNode} from 'react';
import MyComponents from './components/index';
import { FormItemProp, FormItemState } from './interface';
import {validFun} from './utils/valid';
import styles from './formItem.less';
import { ConsoleSqlOutlined } from '@ant-design/icons';

function isBase(val:any):boolean{
  return val && typeof val !== "object";
}
export default class FormItem extends Component<FormItemProp,FormItemState>{
  constructor(props:FormItemProp){
    super(props);
    // value可能是个对象，error的格式应该与value相同，在组件渲染时候对error进行渲染
    this.state = {
      value: "",
      error: "",
      validate: [],
    }
    const self = this;
    if(props.actions){
      props.actions.getValue = function getValue(){
        return self.state.value;
      };
      props.actions.setValue = function setValue(val){
        self.setState({value: val});
      }
      props.actions.valid = function valid(){
        const error = validFun(self.state.value, props.validate || "");
        self.setState({error});
        return error === "" || JSON.stringify(error) === "{}";
      }
    }
  }

  componentDidMount(){
    this.setState({
      value: this.props.defaultValue,
      validate: this.props.validate || ""
    });
  }

  componentDidUpdate(prevProps: FormItemProp) {
    if(JSON.stringify(this.props) !== JSON.stringify(prevProps)){
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        value: this.props.defaultValue,
        validate: this.props.validate || ""
      });
    }
  }

  handleChange = (val:any) => {
    const { path, dispatch } = this.props;
    this.setState({value: val},() => {
      console.error('22');
      console.log(val);
      if(path){
        dispatch(path,"change",val);
      }
      if(this.props.actions){
        if(this.props.actions.setValue){
          this.props.actions.setValue(this.state.value);
        }else{
          console.error('缺失setValue Function');
        }
        // TODO 这个位置先将object/array的valid不在handlechange时触发，以后可以加入trigger去做响应
        if(this.props.actions.valid){
          if(typeof val === "object"){
            console.warn('校验对象为引用类型,暂时不做onChange校验');
            // this.props.actions.valid();
          }else{
            this.props.actions.valid();
          }
        }else{
          console.error('缺失valid Function || ');
        }
      }
    });
  }

  // 渲染required星号
  renderAsterisk = (validate: string|object|RegExp|null):ReactNode => {
    let isRender = false;
    if(Object.prototype.toString.call(validate) === "[object String]"){
      isRender =  (validate as string).indexOf("required") !== -1;
    }
    return isRender ? <span style={{color: 'red'}}>*</span>: null
  }

  render(){
    const { dispatch, type, label, input_props, unit, path } = this.props;
    const { value, error, validate } = this.state;
    const MyComponent = MyComponents[type];
    return(
      <div>
        {/* 业务组件与通用组件样式区别 */}
        <div className={type.indexOf('b-') === -1 ? styles['form-item'] : styles['business-component']}>
          { label !== "" ? (
            <div className={styles['formItem-label']}>
            <label>
              {this.renderAsterisk(validate)}
              {label}
            </label>
            </div>
          ) :null}
          <div className={styles['formItem-main']}>
            {MyComponent ? (
              <MyComponent
                onChange={this.handleChange}
                dispatch={dispatch}
                value={value}
                input_props={input_props}
                error={error}
                path={path}
              />
              ) : (
                <strong>
                  组件{type}不存在
                </strong>
              )}
          </div>
          {unit !== "" ? (
            <div className={styles['formItem-unit']}>
              {unit}
            </div>
          ):null}
        </div>
        {/* 基本的组件的error统一在这里做，复杂的放入业务组件中 */}
        {isBase(error) ? (
            <div className={styles['formItem-error']}>
              {error}
            </div>
          ) : null}
      </div>
    )
  }
}