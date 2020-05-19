import React, { Component } from 'react';
import { Checkbox } from 'antd';

interface GroupCheckboxProps {
  value: any,
  options: Array<{ label: string | number, value: string | number | boolean }>,
  editors: Array<any>,
  onChange: Function,
}



export default class GroupCheckbox extends Component<GroupCheckboxProps>{

  handleChange = (val: any): void => {
    console.log(val);
  }

  render() {
    return (
      <Checkbox.Group
        options={this.props.options || []}
        onChange={this.handleChange}
      />
    )
  }
}