/* eslint-disable @typescript-eslint/camelcase */
import React, { Component, ReactNode } from 'react';
import { Checkbox } from 'antd';
import MultipleCheckbox from './MultipleCheckbox';
import CustomCheckbox from './CustomCheckbox';
import { getObjectFormArray, convertExtraEditors, isObj, isArr } from '../../utils/func';

interface MyCheckboxProps {
  onChange: Function;
  dispatch?: Function;
  value: any;
  input_props: CheckboxComponentProps;
}

interface CheckboxComponentProps {
  type?: string;
  radio?: boolean;
  renderData: Array<{
    key: string;
    label: string;
    options: Array<{
      label: string | number;
      value: string | number | boolean;
    }>;
    extraEditors: Array<{
      key: string | number | string;
      editors: Array<any>;
    }>;
  }>;
}

// TODO 这个的结构以及判断过于复杂，需要修改config重构

export default class MyCheckbox extends Component<MyCheckboxProps, any> {
  checkbox: { [key: string]: Function } = {
    "default": (input_props: CheckboxComponentProps, value: any, onChange: Function): ReactNode => {
      return <Checkbox checked={value} onChange={(e: any) => onChange(e.target.checked)} />;
    },
    "multiple": (input_props: CheckboxComponentProps, value: any = {}, onChange: Function): ReactNode => {
      const editors:Array<any> = [];
      if(!isObj(value)){
        value = {};
      }
      const r:any = input_props.renderData.map((item: { key: string, label: string, extraEditors:Array<any> }) => {
        // 统一输入规范，所以在这个位置提取
        if(item.extraEditors){
          editors.push(item.extraEditors[0]);
        }
        return {
          checkboxValue: value[item.key],
          editorsValue: item.extraEditors && item.extraEditors[0].editors.length > 1 ? convertExtraEditors(value[`${item.key}Note`]) : [value[`${item.key}Note`]],
          key: item.key,
          label: item.label,
        }
      });
      const handleChange = (val: any, key: string) => {
        // 判断editors的数量决定保存为object还是string
        const index = input_props.renderData.findIndex((item: any) => item.key === key);
        if(index === -1){
          console.error(`在renderData中找不到${key}`);
          return;
        }
        let newObj:any = {};
        if(!val.checkboxValue){
          newObj = {[key]: false, [`${key}Note`]: ""}
        }else{
          newObj = {[key]: val.checkboxValue,[`${key}Note`]: ""};
          if(isArr(input_props.renderData[index].extraEditors)){
            if(input_props.renderData[index].extraEditors[0].editors.length <= 1){
              newObj[`${key}Note`] = val.editorsValue ? val.editorsValue[0] || "" : "";
            }else{
              newObj[`${key}Note`] = JSON.stringify(getObjectFormArray(val.editorsValue));
            }
          }
        }
        onChange(Object.assign(value, newObj));
      }
      return <MultipleCheckbox
        value={r}
        onChange={handleChange}
        radio={input_props.radio}
        editors={editors}
      />
    },
    "custom": (input_props: CheckboxComponentProps, value: any, onChange: Function): ReactNode => {
      const { renderData, radio = true } = input_props;
      if (renderData.length !== 1) return <span>custom型checkbox中renderData长度为1</span>;
      let r: any = {
        checkboxValue: '',
        editorsValue: '',
        key: renderData[0].key,
        options: [],
      };
      if (value && renderData[0].key in value) {
        r = {
          checkboxValue: value[renderData[0].key],
          editorsValue: renderData[0].extraEditors && renderData[0].extraEditors[0] && renderData[0].extraEditors[0].editors.length > 1 ? convertExtraEditors(value[`${renderData[0].key}Note`]) : [value[`${renderData[0].key}Note`]],
          key: renderData[0].key,
        };
      }
      const handleChange = (val: any, key: string) => {
        if(!isObj(value)){
          value = {};
        }
        const index = input_props.renderData.findIndex((item: any) => item.key === key);
        if(index === -1){
          console.error(`在renderData中找不到${key}`);
          return;
        }
        let newObj:any = {};

        if(!val.checkboxValue){
          newObj = {[key]: false, [`${key}Note`]: ""}
        }else{
          newObj = {[key]: val.checkboxValue,[`${key}Note`]: ""};
          if(isArr(input_props.renderData[index].extraEditors)){
            if(input_props.renderData[index].extraEditors[0] && input_props.renderData[index].extraEditors[0].editors.length <= 1){
              newObj[`${key}Note`] = val.editorsValue ? val.editorsValue[0] || "" : "";
            }else{
              newObj[`${key}Note`] = JSON.stringify(getObjectFormArray(val.editorsValue));
            }
          }
        }
        onChange(Object.assign(value, newObj));
      };
      return (
        <CustomCheckbox
          value={r}
          onChange={handleChange}
          radio={radio}
          options={renderData[0].options}
          editors={renderData[0].extraEditors}
        />
      );
    },
    "group": (input_props: CheckboxComponentProps, value: any, onChange: Function): ReactNode => {
      return null;
    }
  };

  renderCheckbox = () => {
    const { input_props, value, onChange } = this.props;
    const { type = 'default' } = input_props;
    return this.checkbox[type || 'default'](input_props, value, onChange);
  };

  render() {
    return <div>{this.renderCheckbox()}</div>;
  }
}
