/* eslint-disable @typescript-eslint/camelcase */
import React, { Component, ReactNode } from 'react';
import { Select } from 'antd';
import ExtraEditors from './ExtraEditors';
import MyComponent from './index';

const { Option } = Select;

interface MySelectProps {
  onChange: Function,
  dispatch: Function,
  value: any,
  input_props: SelectComponentProps
}

interface SelectComponentProps {
  type?: string,
  selectOptions?: Array<{ value: string | number, label: string | number }>,
  renderData?: Array<{ key: string, label: string }>,
  extraEditors: any,
  radio?: boolean
}

export default class MySelect extends Component<MySelectProps, {}>{
  // constructor(props: MySelectProps){
  //   super(props);

  // }



  select: { [key: string]: Function } = {
    "default": function (input_props: SelectComponentProps, value: any, onChange: Function) {
      const { selectOptions = [] } = input_props;
      const options = selectOptions?.map((v: { label: string | number, value: string | number }) => (
        <Option
          value={v.value}
          key={v.value}
        >{v.label}</Option>
      ));
      return (
        <Select
          style={{ width: '100%' }}
          onChange={(val, _options) => onChange(val)}
          showSearch
          value={value}
        >{options}</Select>
      )
    },
    "multiple": function (input_props: SelectComponentProps, value: any, onChange: Function) {
      const { renderData = [], extraEditors = [], radio = true } = input_props;
      // 将需要渲染的key转格式传入MultipleSelect
      const r = renderData.map((v: { key: string, label: string }) => ({
        // selectValue是一个boolean值
        // value形如 {a:boolean,aNote:any}
        selectValue: value[v.key] || false,
        editorsValue: value[`${v.key}Note`] || "",
        key: v.key,
        label: v.label
      }))
      // handleChange 这一步把格式转回来
      const handleChange = (val: any, key: string) => {
        const newObj = {
          [key]: val.selectValue,
          [`${key}Note`]: val.editorsValue
        };
        onChange(Object.assign(value, newObj));
      }
      return <MultipleSelect
        value={r}
        radio={radio}
        extraEditors={extraEditors}
        onChange={handleChange}
      />
    }
  }

  renderSelect = () => {
    const { input_props, value, onChange } = this.props;
    const { type = "default" } = input_props;
    return this.select[type](input_props, value, onChange);
  }


  render() {
    return this.renderSelect()
  }
}

interface MultipleSelectProps {
  value: Array<{
    selectValue: boolean,
    editorsValue: string,
    key: string | number,
    label: string | number
  }>,
  radio?: boolean,
  extraEditors?: Array<any>,
  onChange: Function
}

class MultipleSelect extends Component<MultipleSelectProps>{
  // TODO 暂时本地不保存 仅从父级取 之后再考虑
  // constructor(props: MultipleSelectProps) {
  //   super(props);
  //   this.state = {

  //   }
  // }

  // 通过组件渲染额外的输入框
  renderExtra = (value: Array<{ selectValue: boolean, editorsValue: string, key: string | number, label: string | number }>, extraEditors: Array<any>) => {
    const renderDom: Array<ReactNode> = [];
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < extraEditors.length; j++) {
        if (value[i].selectValue && value[i].key === extraEditors[j].key) {
          renderDom.push(<ExtraEditors
            key={`${i}-${j}`}
            editorsValue={value[i].editorsValue}
            extraEditors={extraEditors[j].editors}
            onChange={(val: any) => this.handleChange(val, "editorsValue", value[i].key)}
          />)
        }
      }
    }
    return renderDom;
  }

  // 渲染select主体，在里面调用extraEditors的渲染
  renderSelect = () => {
    const { value, extraEditors = [], radio = true } = this.props;
    const options = value.map((v: { key: string | number, label: string | number }) => (
      <Option
        value={v.key}
        key={v.key}
      >{v.label}</Option>
    ));
    return (
      <div>
        <Select
          mode={radio ? undefined : "multiple"}
          style={{ width: '100%' }}
          onChange={(val: any) => this.handleChange(val, "selectValue", "")}
          showSearch
          value={value.filter((v: { selectValue: boolean }) => v.selectValue)
            .map((u: { key: string | number }) => u.key)}
        >{options}</Select>
        {this.renderExtra(value, extraEditors)}
      </div >
    )
  }

  // 把选中值提交出外部，这里逻辑比较复杂 TODO 待优化
  // 参数中的key仅在editors使用

  // TODO multiple时取消选中没有响应
  handleChange = (val: any, name: string, key: string | number) => {
    const { onChange, radio, value } = this.props;
    if (name === "selectValue") {
      // select onChange
      if (radio) {
        // val string
        const i = value.findIndex((v: any) => v.key === val);
        onChange({
          selectValue: true,
          editorsValue: value[i].editorsValue
        }, val)
      } else {
        // val Array<string>
        (val as Array<string>).forEach((k: string) => {
          const i = value.findIndex((v: any) => v.key === k);
          onChange({
            selectValue: true,
            editorsValue: value[i].editorsValue
          }, k)
        })
      }
    } else if (name === "editorsValue") {
      // extraEditors onChange
      const i = value.findIndex((v: any) => v.key === key);
      onChange({
        selectValue: value[i].selectValue,
        editorsValue: val
      }, key);
    }
  }

  render() {
    return (
      <div>
        {this.renderSelect()}
      </div>
    )
  }
}
