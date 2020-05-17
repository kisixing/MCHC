import * as React from 'react';
import { Button } from 'antd';
import MyForm from '@/components/MyForm/index';
import config from './config';
import request from '@/utils/request';
import styles from './index.less';
import data from './data';

import { getRenderData, getFormData} from '@/components/MyForm/utils';

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
    console.log(this.state.formHandler, '11')
    this.state.formHandler.submit().then(({validCode, res}:any) => {
      console.log(res, '1');
      console.log(getFormData(res), '2');
      // if(!validCode){
      // }
      const param = {visitType: 1};
      const newData = {...getFormData(res), ...param }
      console.log(newData, '366')
      request('/prenatal-visits', {
        method: 'post',
        data: newData
      }).then(r => {

      });
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

        <div className={styles['btn-group']}>
          {/* <Button onClick={this.handleSubmit}>重置</Button> */}
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        </div>
      </div>
    )
  }
}
