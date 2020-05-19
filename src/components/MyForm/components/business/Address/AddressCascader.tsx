import React, { Component } from 'react';
import { Cascader, Input } from 'antd';

const options = [
  {
    value: "北京",
    label: "北京",
    children: [
      {
        value: "北京",
        label: "北京",
        children: [
          {
            value: "北京",
            label: "北京",
          }
        ]
      }
    ]
  },
  {
    value: "广东省",
    label: "广东省",
    children: [
      {
        value: "广州市",
        label: "广州市",
        children: [
          {
            value: "天河区",
            label: "天河区",
          },
          {
            value: "越秀区",
            label: "越秀区",
          },
          {
            value: "番禺区",
            label: "番禺区",
          },
          {
            value: "白云区",
            label: "白云区",
          },
          {
            value: "黄浦区",
            label: "黄浦区",
          },
        ]
      }
    ]
  }
]

interface AddressCascaderProps {
  onChange: Function;
  dispatch?: Function;
  value: any;
  input_props: any;
}

const SPLIT_KEY = ",";

export default class AddressCascader extends Component<AddressCascaderProps> {

  // componentDidUpdate(prevProps: AddressCascaderProps){
  //   if(this.props.value !== prevProps.value){

  //   }
  // }


  handleChange = (val: any, key: number): void => {
    const { value = "" , onChange} = this.props;
    if(key === 0){
      onChange(`${val.join(",")}${SPLIT_KEY}${this.getDataFormProp(value).inputData}`);
    }else if(key === 1){
      onChange(`${this.getDataFormProp(value).cascaderData.join(",")}${SPLIT_KEY}${val}`);
    }
  }

  getDataFormProp = (value:string = "") => {
    const targetData:any = {
      cascaderData: [],
      inputData: ""
    }
    if (value) {
      const valueArr = value.split(SPLIT_KEY);
      for (let i = 0; i < valueArr.length; i++) {
        if (i <= 2) {
          targetData.cascaderData.push(valueArr[i]);
        }
        if(i === 3){
          targetData.inputData = valueArr[i];
          break;
        }
      }
    }
    return targetData;
  }

  render() {
    const {value = ""} = this.props;
    const data = this.getDataFormProp(value);
    return (
      <div>
        <div style={{display: "flex", flexDirection: "row"}}>
          <Cascader
            options={options}
            onChange={(val: Array<string>) => this.handleChange(val, 0)}
            value={data.cascaderData}
          />
          <Input
            value={data.inputData}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleChange(e.target.value, 1)}
          />
        </div>
      </div>
    )
  }
}