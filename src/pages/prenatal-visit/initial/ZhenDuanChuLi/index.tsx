import * as React from 'react';
import MyForm from '@/components/MyForm/index';
import config from './config';
import data from '../data';

import { getRenderData, toFormat} from '@/components/MyForm/utils';

interface HomeState{
  formHandler:{
    [key:string]: any
  }
}


export default class Home extends React.Component<{},HomeState>{
  static Title = '诊断处理';

  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {

      }
    }
  }


  componentDidUpdate(){
    const { formHandler } = this.state;
    formHandler.subscribe(".lmp", "change", (val: any) => {});
  }


  handleSubmit = () => {
    this.state.formHandler.submit().then(({validCode, res}:any) => {
      console.log(res);
      console.log(toFormat(res));
      // if(!validCode){
      // }
    });
  }

  render(){
    const myConfig = getRenderData(config, data);
    // 不要再页面render中尝试取formHandler的值，因为这个时候formItem初始化还没有完成
    return(
      <div>
        <MyForm
          config={myConfig}
          getFormHandler={(formHandler:any) => this.setState({formHandler})}
          submitChange={false}
        />
      </div>
    )
  }
}
