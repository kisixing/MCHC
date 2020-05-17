import * as React from 'react';
import { Button } from 'antd';
import YCS from './YunChanShi';
import YCXX from './YunChanXinXi';
import YFXX from './YunFuXinxi';
import ZfXX from './ZhangFuXinXi';
import MyForm from '@/components/MyForm/index';
import config from './config';
import data from './data';
import request from '@/utils/request';

import { getRenderData, getFormData} from '@/components/MyForm/utils';
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
      console.log(res, '1');
      console.log(getFormData(res), '122');
      // if(!validCode){
      // }
      const param = {visitType: 0};
      const newData = {...getFormData(res)['pregnancy'], ...param }
      request(`/pregnancies`, {
        method: 'post',
        data: newData
      }).then(r => {

      });

    });
  }

  render(){
    const myConfig = getRenderData(config, data);
    return(
      <div className={style.pregWrpper}>
        {/* <YFXX />
        <ZfXX />
        <YCXX />
        <YCS /> */}
        <MyForm
          config={myConfig}
          getFormHandler={(formHandler:any) => this.setState({formHandler})}
          submitChange={false}
        />
        <div className={style.btnGroup}>
          <Button className={style.resetBtn}>重置</Button>
          <Button className={style.submitBtn} type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
        </div>
      </div>
    )
  }
}
