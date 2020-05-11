import React, { Component } from 'react';
import CheckboxWithExtra from '../Base/CheckboxWithExtra';
import styles from './WhetherCheckbox.less';
// TODO 开放 有/无 是/否 的字符串接口

interface WhetherCheckboxProps {
  value: {
    checkboxValue: boolean,
    editorsValue: Array<any>
  },
  onChange: Function,
  extraEditors: Array<any>
}

export default class WhetherCheckbox extends Component<WhetherCheckboxProps>{
  // componentDidUpdate(prevProps:any) {
  //   if(JSON.stringify(prevProps) !== JSON.stringify(this.props)){
  //     this.forceUpdate();
  //   }
  // }

  // type 0 - 无  1 - 有
  handleChange = (e: any, type: number) => {
    const { onChange } = this.props;
    if (type === 0) {
      onChange({
        checkboxValue: false,
        editorsValue: []
      });
    } else if (type === 1) {
      onChange({
        checkboxValue: true,
        editorsValue: e.editorsValue
      })
    }
  }

  getEditors = (bool: boolean): Array<any> => {
    const { extraEditors } = this.props;
    const targetEditors = extraEditors.find((extraEditor: {key: boolean}) => extraEditor.key === bool);
    if(targetEditors){
      return targetEditors.editors;
    }
    return [];
  }

  render() {
    const { value } = this.props;
    console.log(this.props);
    return (
      <div className={styles['whether-checkbox']}>
        <CheckboxWithExtra
          editors={this.getEditors(true)}
          checkboxValue={value.checkboxValue}
          editorsValue={value.editorsValue}
          onChange={(val: any) => this.handleChange(val, 1)}
        >有</CheckboxWithExtra>
        <CheckboxWithExtra
          editors={this.getEditors(false)}
          checkboxValue={!value.checkboxValue}
          editorsValue={value.editorsValue}
          onChange={(val: any) => this.handleChange(val, 0)}
        >无</CheckboxWithExtra>
      </div>
    )
  }
}