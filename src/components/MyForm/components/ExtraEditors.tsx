import React, { Component } from 'react';

import MyComponent from './index';

interface ExtraEditorsProps {
  editorsValue: string,
  extraEditors: Array<any>,
  onChange: Function
}

export default class ExtraEditors extends Component<ExtraEditorsProps>{

  // 将 {"0":"a","1":"a"} 形式拆分
  renderEditors = () => {
    const { editorsValue, extraEditors, onChange } = this.props;
    let newEditorValue: any = {}
    if (editorsValue) {
      newEditorValue = JSON.parse(editorsValue);
    }
    return extraEditors.map((v: any, index: number) => {
      const RenderComponent = MyComponent[v.input_type];
      return (
        <div key={index}>
          <label>{v.label}</label>
          <RenderComponent
            value={newEditorValue[index]}
            {...v}
            onChange={(val: any) => this.handleChange(val, index)}
          />
          <span>{v.unit}</span>
        </div>
      )
    })
  }

  // 将值以上述形式返回出外部
  handleChange = (val: any, index: number) => {
    const { onChange } = this.props;
    const { editorsValue } = this.props;
    let newEditorValue: any = {}
    if (editorsValue) {
      newEditorValue = JSON.parse(editorsValue);
    }
    newEditorValue[index] = val;
    onChange(JSON.stringify(newEditorValue));
    
  }

  render() {
    return <div>
      {this.renderEditors()}
    </div>
  }
}