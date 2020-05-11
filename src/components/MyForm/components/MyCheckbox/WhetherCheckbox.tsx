import React, { Component, ReactNode } from 'react';
import { Checkbox } from 'antd';
import CheckboxWithExtra from './CheckboxWithExtra';

interface WhetherCheckboxProps {
  value: {
    checkboxValue: boolean,
    editorsValue: string
  },
  onChange: Function,
  extraEditors: Array<any>
}

export default class WhetherCheckbox extends Component<WhetherCheckboxProps>{
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