import React, { Component } from 'react';
import MyForm from '@/components/MyForm/index';

import { getRenderData, getFormData } from '@/components/MyForm/utils';

interface MyCustomProps {
  onChange: Function,
  dispatch: Function,
  subscribe: Function
  input_props: any,
  error: any,
  path: string,
  value: any
}

interface MyCustomState {
  formHandler: {
    [key: string]: any
  }
}

// 这里的formHandler不与业务页面的formHandler合并；这里需要一个方法对外抛出change的事件
export default class MyCustom extends Component<MyCustomProps, MyCustomState>{
  constructor(props: MyCustomProps) {
    super(props);
    this.state = {
      formHandler: {}
    };
  }


  componentDidUpdate(prevProps: MyCustomProps) {
    const { formHandler } = this.state;
    const { onChange, subscribe } = this.props;
    if (subscribe) {
      // 父页面 submit 时的动作
      subscribe("_global", "submit", () => {
        // console.warn("底层form start submit");
        formHandler.submit().then(({ validCode, res }: any) => {
          if(validCode){
            onChange(getFormData(res));
          }
        })
      })
    }
    // change时的校验动作
    formHandler.subscribe("_global","change",() => {
      formHandler.submit().then(({validCode, res}: any) => {
        onChange(getFormData(res));
      })
    })
  }

  render() {
    const { config = [] } = this.props.input_props;
    const { value } = this.props;
    let myConfig: Array<any> = [];
    if (config) {
      myConfig = getRenderData(config, value);
    }
    return (
      <div style={{ marginTop: "16px" }}>
        <MyForm
          config={myConfig}
          getFormHandler={(formHandler: any) => this.setState({ formHandler })}
          submitChange
        />
      </div>
    )
  }
} 