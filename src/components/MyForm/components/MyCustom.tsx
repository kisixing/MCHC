import React,{Component} from 'react';
import MyForm from '@/components/MyForm/index';

import { getRenderData, toFormat } from '@/components/MyForm/utils';

interface MyCustomProps {
  onChange: Function,
  dispatch: Function,
  input_props: any,
  error: any,
  path: string,
  value: any
}

interface MyCustomState {
  formHandler:{
    [key:string]: any
  }
}

// 这里的formHandler不与业务页面的formHandler合并；这里需要一个方法对外抛出change的事件

export default class MyCustom extends Component<MyCustomProps,MyCustomState>{
  constructor(props:MyCustomProps){
    super(props);
    this.state = {
      formHandler: {}
    };
  }

  // componentDidUpdate(prevProps: MyCustomProps) {
  //   // 本地的formHandler
  //   const { formHandler } = this.state;
  //   // 上一层的formHandler的dispatch
  //   const { dispatch, path } = this.props;
  //   if(JSON.stringify(this.props) !== JSON.stringify(prevProps)){
  //     // // 监听下一层 + 删除本层的字段名
  //     // formHandler.subscribe("custom", "collect", ({collectFn, p}:any) => {
  //     //   const f = this.state.formHandler;
  //     //   delete f[p];
  //     //   this.setState({
  //     //     formHandler: {
  //     //       ...collectFn,
  //     //       ...f
  //     //     }
  //     //   })
  //     // })
  //     const collectFn = {};
  //     Object.keys(formHandler).forEach((key:string) => {
  //       if(key.indexOf(".") !== -1){
  //         collectFn[`${path}${key}`] = formHandler[key]
  //       }
  //     });
  //     console.log(path);
  //     dispatch("custom", "collect", {collectFn, path});
  //   }
  // }

  componentDidUpdate(){
    // submitChange
    const { formHandler } = this.state;
    const { onChange } = this.props;
    formHandler.subscribe("_global", "change", () => {
      formHandler.submit().then(({validCode, res}:any) => {
        console.log(res);
        onChange(toFormat(res));
      })
    })
  }

  render() {
    const { config = []  } = this.props.input_props;
    const { value, path } = this.props;
    let myConfig:Array<any> = [];
    if(config){
      myConfig = getRenderData(config, value);
      // 这里需要修改config的路径，这样才可以确保路径的传递性
      // myConfig.forEach((v:any) => {
      //   v.key = v.key.indexOf(path) !== -1 ? v.key : path + v.key;
      // })
    }
    return (
      <div>
        <MyForm
          config={myConfig}
          getFormHandler={(formHandler:any) => this.setState({formHandler})}
          submitChange
        />
      </div>
    )
  }
} 