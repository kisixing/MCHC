/* eslint-disable @typescript-eslint/camelcase */
import React, { Component, ReactNode } from 'react';
import { Checkbox } from 'antd';
import CheckboxWithExtra from './CheckboxWithExtra';

interface MyCheckboxProps {
  onChange: Function,
  dispatch: Function,
  value: any,
  input_props: CheckboxComponentProps
}

interface CheckboxComponentProps {
  type?: string,
  radio?: boolean
  extraEditors: any,
  renderData: Array<{ key: string, label: string }>
}

/**
 * type
 *  default  接收一个boolean
 *  whether  接收一个对象 {a:boolean,aNote:string} 互斥 默认true是展开input
 *  multiple 多个输入 接收 {a:boolean,aNode:string,b:boolean,bNote:string} 需要额外设置是否互斥
 *  自定义模式就是multiple
 */
export default class MyCheckbox extends Component<MyCheckboxProps, any> {

  // shouldComponentUpdate(){
  //   // const {value} = this.props;
  //   // if(!value){
  //   //   return false;
  //   // }
  //   return true;
  // }

  

  checkbox: { [key: string]: Function } = {
    "default": (input_props: CheckboxComponentProps, value: any, onChange: Function): ReactNode => {
      return <Checkbox
        checked={value}
        onChange={(e: any) => onChange(e.target.checked)}
      />
    },
    "whether": (input_props: CheckboxComponentProps, value: any, onChange: Function): ReactNode => {
      const { extraEditors } = input_props;
      let checkboxValue;
      let editorsValue;
      try{
        checkboxValue = value[input_props.renderData[0].key];
        editorsValue = value[`${input_props.renderData[0].key}Note`];
      }catch(e){
        checkboxValue = false;
        editorsValue = "";
        return <span>渲染BUG</span>
      }
      // 转了格式，在这个位置转回来
      const handleChange = (val: { checkboxValue: boolean, editorsValue: string }) => {
        onChange({
          [input_props.renderData[0].key]: val.checkboxValue,
          [`${input_props.renderData[0].key}Note`]: val.editorsValue
        })
      }
      // console.log(checkboxValue);
      // console.log(editorsValue);
      return <WhetherCheckbox
        value={{ checkboxValue, editorsValue }}
        onChange={handleChange}
        extraEditors={extraEditors}
      />;
    },
    "multiple": (input_props: CheckboxComponentProps, value: any, onChange: Function): ReactNode => {
      const r = input_props.renderData.map((item: { key: string, label: string }) => {
        if (value && item.key in value) {
          return {
            checkboxValue: value[item.key],
            editorsValue: value[`${item.key}Note`],
            key: item.key,
            label: item.label
          }
        }
        // console.error(`输入对象中找不到 ${item.key} || 输入对象值为空`);
        return false;
      }).filter((item: any) => !!item);
      const handleChange = (val: any, key: string) => {
        console.error('11');
        console.log(val);
        const newObj = {
          [key]: val.checkboxValue,
          [`${key}Note`]: val.editorsValue
        };
        onChange(Object.assign(value, newObj));
      }
      return <MultipleCheckbox
        value={r}
        onChange={handleChange}
        radio={input_props.radio}
        extraEditors={input_props.extraEditors}
      />
    }
  }

  componentDidUpdate(prevProps:any) {
    if(JSON.stringify(prevProps) !== JSON.stringify(this.props)){
      this.forceUpdate();
    }
  }

  renderCheckbox = () => {
    const { input_props, value, onChange } = this.props;
    const { type = "default" } = input_props;
    return this.checkbox[type || "default"](input_props, value, onChange);
  }

  

  render() {
    return (
      <div>
        {this.renderCheckbox()}
      </div>
    )
  }
}

// 是否checkbox组件
interface WhetherCheckboxProps {
  value: {
    checkboxValue: boolean,
    editorsValue: string
  },
  onChange: Function,
  extraEditors: Array<any>
}

class WhetherCheckbox extends Component<WhetherCheckboxProps>{
  componentDidUpdate(prevProps:any) {
    if(JSON.stringify(prevProps) !== JSON.stringify(this.props)){
      this.forceUpdate();
    }
  }

  // type 0 - 无  1 - 有
  handleChange = (e: any, type: number) => {
    const { onChange } = this.props;
    if (type === 0) {
      onChange({
        checkboxValue: !e.target.checked,
        editorsValue: null
      });
    } else if (type === 1) {
      // CheckboxWithExtra 这个组件传出的就是 {checkboxValue, editorsValue} 形式
      onChange(e);
    }
  }

  render() {
    const { value, extraEditors } = this.props;
    // console.log(value);
    return (
      <div>
        <CheckboxWithExtra
          editors={extraEditors[0].editors}
          checkboxValue={value.checkboxValue}
          editorsValue={value.editorsValue}
          onChange={(val: any) => this.handleChange(val, 1)}
        >有</CheckboxWithExtra>
        <Checkbox
          checked={!value.checkboxValue}
          onChange={(val: any) => this.handleChange(val, 0)}
        >
          无
        </Checkbox>
      </div>
    )
  }
}


interface MultipleCheckboxProps {
  extraEditors: Array<any>,
  radio?: boolean,
  value: Array<any>
  onChange: Function
}

class MultipleCheckbox extends Component<MultipleCheckboxProps>{


  handleChange = (val: any, key: string) => {
    const { radio = true, value, onChange } = this.props;
    // 互斥逻辑
    if (radio) {
      value.forEach((item: any) => {
        if (item.key === key) {
          onChange({
            checkboxValue: val.checkboxValue,
            editorsValue: val.editorsValue,
          }, item.key)
        } else {
          onChange({
            checkboxValue: false,
            editorsValue: "",
          }, item.key)
        }
      })
    } else {
      onChange(val, key)
    }
  }

  renderCheckbox = () => {
    const { value, extraEditors } = this.props;
    const renderDOM: Array<ReactNode> = [];
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < extraEditors.length; j++) {
        if (value[i].key === extraEditors[j].key) {
          renderDOM.push(
            <CheckboxWithExtra
              key={`${i}-${j}`}
              onChange={(val: any) => this.handleChange(val, value[i].key)}
              checkboxValue={value[i].checkboxValue}
              editorsValue={value[i].editorsValue}
              editors={extraEditors[j].editors}
            >
              {value[i].label}
            </CheckboxWithExtra>
          )
          break;
        }
        if (j === extraEditors.length - 1) {
          renderDOM.push(
            <Checkbox
              key={`${i}-${j}`}
              onChange={(e) => this.handleChange({ checkboxValue: e.target.checked }, value[i].key)}
              checked={value[i].checkboxValue}
            >
              {value[i].label}
            </Checkbox>
          )
        }
      }
    }
    return renderDOM;
  }

  render() {
    return <div>
      {this.renderCheckbox()}
    </div>
  }
}
