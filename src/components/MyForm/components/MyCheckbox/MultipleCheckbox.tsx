import React, { Component, ReactNode } from 'react';
import { Checkbox } from 'antd';
import CheckboxWithExtra from './CheckboxWithExtra';

interface MultipleCheckboxProps {
  extraEditors: Array<any>,
  radio?: boolean,
  value: Array<any>
  onChange: Function
}

export default class MultipleCheckbox extends Component<MultipleCheckboxProps>{
  handleChange = (val: any, key: string) => {
    const { radio = true, value, onChange } = this.props;
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
              onChange={(e: any) => this.handleChange({ checkboxValue: e.target.checked }, value[i].key)}
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