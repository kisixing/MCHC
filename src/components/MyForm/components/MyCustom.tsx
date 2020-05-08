import React,{Component} from 'react';
import MyForm from '@/components/MyForm/index';

import { getRenderData } from '@/components/MyForm/utils';

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

// TODO 这里的formHandler如何与页面的formHandler合并

export default class MyCustom extends Component<MyCustomProps,MyCustomState>{
  constructor(props:MyCustomProps){
    super(props);
    this.state = {
      formHandler: {}
    };
  }

  componentDidUpdate(prevProps: MyCustomProps) {
    // 本地的formHandler
    const { formHandler } = this.state;
    // 上一层的formHandler的dispatch
    const { dispatch, path } = this.props;
    if(JSON.stringify(this.props) !== JSON.stringify(prevProps)){
      // 监听下一层
      formHandler.subscribe("custom", "collect", (collectFn: any) => {
        this.setState({
          formHandler: {
            ...collectFn,
            ...formHandler
          }
        })
      })
      const collectFn = {};
      Object.keys(formHandler).forEach((key:string) => {
        if(key.indexOf(".") !== -1){
          collectFn[`${path}${key}`] = formHandler[key]
        }
      });
      dispatch("custom", "collect", collectFn);
    }
  }

  render() {
    const { config = [], value } = this.props.input_props;
    let myConfig:Array<any> = [];
    if(config){
      myConfig = getRenderData(config, value);
    }
    return (
      <div>
        <MyForm
          config={myConfig}
          getFormHandler={(formHandler:any) => this.setState({formHandler})}
        />
      </div>
    )
  }
} 