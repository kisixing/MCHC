import * as React from 'react';
import MyForm from '@/components/MyForm/index';
import config from './config';
import data from './data';

import { getRenderData, toFormat} from '@/components/MyForm/utils';

interface HomeState{
  formHandler:{
    [key:string]: any
  }
}


export default class Home extends React.Component<{},HomeState>{
  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {
        
      }
    }
  }


  componentDidUpdate(){
    // if(this.state.formHandler.sub)
  }


  handleSubmit = () => {
    this.state.formHandler.submit().then(({validCode, data}:any) => {
      
      console.log(data);
      console.log(toFormat(data));
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
          getFormHandler={(formHandler) => this.setState({formHandler})}
        />
        <button
          // onClick={() => this.state.formHandler.submit()}
          type="button"
          onClick={this.handleSubmit}
        >提交</button>
      </div>
    )
  }
}
