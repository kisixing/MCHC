import React, { Component, ReactNode } from 'react';
import { Checkbox } from 'antd';
import WhetherCheckbox from './WhetherCheckbox';
import MultipleCheckbox from './MultipleCheckbox';
// import CheckboxWithExtra from './CheckboxWithExtra';

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