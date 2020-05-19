/* eslint-disable react/no-unused-state */
/* eslint-disable @typescript-eslint/camelcase */
import React, { Component, ReactNode } from 'react';
import MyComponents from './components/index';
import { FormItemProp, FormItemState } from './interface';
import { validFun } from './utils/valid';
import { isEmpty, isObj, isArr } from './utils/func';
import styles from './formItem.less';

function isBase(val: any): boolean {
  return val && typeof val !== "object";
}
export default class FormItem extends Component<FormItemProp, FormItemState>{
  constructor(props: FormItemProp) {
    super(props);
    // value可能是个对象，error的格式应该与value相同，在组件渲染时候对error进行渲染
    this.state = {
      value: "",
      error: "",
      path: "",
      validate: [],
    }
    const self = this;
    if (props.actions) {
      props.actions.getValue = function getValue() {
        return {
          value: self.state.value,
          path: self.state.path
        }
      };
      props.actions.setValue = function setValue(val) {
        self.setState({ value: val });
      }
      props.actions.reset = function reset() {
        if(isObj(self.state.value)){
          self.setState({ value: {} });
        }else if(isArr(self.state.value)){
          self.setState({ value: [] });
        }else{
          self.setState({ value: null });
        }
      }
      props.actions.valid = function valid() {
        const error = validFun(self.state.value, props.validate || "");
        // childrenError boolean
        let childrenError: any = true;
        if(props.type.indexOf("custom") !== -1){
          childrenError = self.childrenValid();
        }
        self.setState({ error });
        return isEmpty(error) && childrenError;
      }
    }
  }

  childrenValid = () => {
    return true;
  }

  componentDidMount() {
    this.setState({
      value: this.props.defaultValue,
      validate: this.props.validate || "",
      path: this.props.path
    });
  }

  componentDidUpdate(prevProps: FormItemProp) {
    const self = this;
    if (JSON.stringify(this.props) !== JSON.stringify(prevProps)) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        value: this.props.defaultValue,
        validate: this.props.validate || "",
        path: this.props.path
      });
    }
  }

  handleChange = (val: any, error: any = "") => {
    const { name, dispatch } = this.props;
    // debugger;
    this.setState({ value: val }, () => {
      if (name) {
        dispatch(name, "change", val);
      }
      if (this.props.actions) {
        if (this.props.actions.setValue) {
          this.props.actions.setValue(this.state.value);
        } else {
          console.error('缺失setValue Function');
        }
        // TODO 这个位置先将object/array的valid不在handlechange时触发，以后可以加入trigger去做响应
        if (this.props.actions.valid) {
          this.props.actions.valid();
          if(error){
            this.setState({error});
          }
        } else {
          console.error('缺失valid Function || ');
        }
      }
    });
  }

  // 渲染required星号
  renderAsterisk = (validate: string | object | RegExp | null): ReactNode => {
    let isRender = false;
    if (Object.prototype.toString.call(validate) === "[object String]") {
      isRender = (validate as string).indexOf("required") !== -1;
    }
    return isRender ? <span style={{ color: 'red' }}>*</span> : null
  }

  render() {
    const { dispatch, subscribe, type, label, input_props, unit, path, header_label } = this.props;
    const { value, error, validate } = this.state;
    const MyComponent = MyComponents[type];
    return (
      <div>
        {label !== "" && header_label ? (
          <div className={styles['form-item-header-label']}>
            <h1>
              <span>
                {this.renderAsterisk(validate)}{label}
              </span>
            </h1>
          </div>
        ) : null}
        <div className={styles['form-item']}>
          {label !== "" && !header_label ? (
            <div className={styles['form-item-inline-label']}>
              <label>{this.renderAsterisk(validate)}{label}:</label>
            </div>  
          ) : null}
          {/* 
            * full-main 代表label为header形式出现
            * main      label在同一行
            */}
          <div className={header_label ? styles['form-item-full-main'] : styles['form-item-main']}>
            {MyComponent ? (
              <MyComponent
                onChange={this.handleChange}
                dispatch={dispatch}
                // subscribe仅在一些 业务组件/内嵌表单组件 中使用
                subscribe={subscribe}
                value={value}
                input_props={input_props}
                error={error}
                path={path}
                getValidFun={(validFunc: any) => {this.childrenValid = validFunc}}
              />
            ) : (
                <strong>
                  组件{type}不存在
                </strong>
              )}
          </div>
          {unit !== "" ? (
            <div className={styles['form-item-unit']}>
              {unit}
            </div>
          ) : null}
        </div>
        {/* 基本的组件的error统一在这里做，复杂的放入业务组件中 */}
        {isBase(error) ? (
          <div className={styles['form-item-error']}>
            {error}
          </div>
        ) : null}
      </div>
    )
  }
}