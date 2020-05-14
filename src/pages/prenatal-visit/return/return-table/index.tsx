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
  static Title = '孕产史';

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
    const { getData } = this.props;
    console.log(this.state.formHandler, '11')
    this.state.formHandler.submit().then(({validCode, res}:any) => {
      // console.log(res, '1');
      // console.log(toFormat(res), '2');
      // if(!validCode){
      // }
    });

    return getData(this.state.formHandler);
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
