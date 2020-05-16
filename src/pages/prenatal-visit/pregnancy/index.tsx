import * as React from 'react';
import { Button } from 'antd';
import YCS from './YunChanShi';
import YCXX from './YunChanXinXi';
import YFXX from './YunFuXinxi';
import ZfXX from './ZhangFuXinXi';

import { getRenderData, toFormat} from '@/components/MyForm/utils';
import style from './index.less'

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
    return(
      <div>
        <YFXX />
        <ZfXX />
        <YCXX />
        <YCS />
        <div className={style.btnGroup}>
          <Button className={style.resetBtn}>重置</Button>
          <Button className={style.submitBtn} type="primary">提交</Button>
        </div>
      </div>
    )
  }
}
