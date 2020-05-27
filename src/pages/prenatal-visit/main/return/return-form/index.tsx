import * as React from 'react';
import { Button } from 'antd';
import MyForm from '@/components/MyForm/index';
import config from './config';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';
import style from './index.less';

import { getRenderData, getFormData} from '@/components/MyForm/utils';

interface HomeState{
  formHandler:{
    [key:string]: any
  },
  formData: any
}


export default class Home extends React.Component<{},HomeState>{
  static Title = '本次产检记录';

  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {},
      formData: null
    }
  }


  componentDidUpdate(){
    const { formHandler } = this.state;
    formHandler.subscribe(".lmp", "change", (val: any) => {});
  }


  handleSubmit = () => {
    const urlParam = getPageQuery();
    this.state.formHandler.submit().then(({validCode, res}:any) => {
      // if(!validCode){
      // }
      const param = {visitType: 1};
      const newData = {...getFormData(res), ...param }
      console.log(newData, '111')
      // newData['pregnancy']['id'] = urlParam.id;

      // console.log(newData, '366')
      request('/prenatal-visits', {
        method: 'post',
        data: newData
      }).then(r => {

      });
    });
  }

  render(){
    const { formData } = this.state;
    const myConfig = getRenderData(config, formData);
    return(
      <div>
        <MyForm
          config={myConfig}
          getFormHandler={(formHandler:any) => this.setState({formHandler})}
          submitChange={false}
        />
        <div className={style.bottomBtn} >
          {/* <Button onClick={this.handleSubmit}>重置</Button> */}
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        </div>
      </div>
    )
  }
}
