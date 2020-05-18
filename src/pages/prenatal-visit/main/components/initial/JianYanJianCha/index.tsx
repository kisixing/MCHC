import * as React from 'react';
import { Button, message } from 'antd';
import MyForm from '@/components/MyForm/index';
import config from './config';
import style from '../index.less';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';

import { getRenderData, getFormData} from '@/components/MyForm/utils';

interface HomeState{
  formHandler:{
    [key:string]: any
  },
  formData: any,
  isPost: boolean
}

export default class Home extends React.Component<{},HomeState>{
  static Title = '检验检查';

  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {},
      formData: {},
      isPost: false
    }
  }

  componentDidMount() {
    const urlParam = getPageQuery();

    request(`/prenatal-visits?visitType.equals=0&pregnancyId.equals=${urlParam.id}`,{
      method: "GET"
    }).then(res => {
      if(res && res.length !== 0){
        this.setState({formData: res[0]})
      } else {
        this.setState({isPost: true})
      }
    });
  }

  componentDidUpdate(){
    const { formHandler } = this.state;
    formHandler.subscribe(".lmp", "change", (val: any) => {});
  }


  handleSubmit = () => {
    const { isPost, formData } = this.state;
    const urlParam = getPageQuery();
    this.state.formHandler.dispatch("_global","submit",{});
    this.state.formHandler.submit().then(({validCode, res}:any) => {
      if (validCode) {
        const method = isPost ? "POST" : "PUT";
        let resData = getFormData(res);
        if (isPost) {
          resData['pregnancy']['id'] = urlParam.id;
        } else {
          resData['id'] = formData.id;
          resData['pregnancy']['id'] = urlParam.id;
        }

        request('/prenatal-visits', {
          method,
          data: resData
        }).then(r => {

        });
      } else {
        message.error('必填项不能为空！');
      }
    });
  }


  render(){
    const { formData } = this.state;
    const myConfig = getRenderData(config, formData);
    return(
      <div className={style.initialContent}>
        <MyForm
          config={myConfig}
          getFormHandler={(formHandler:any) => this.setState({formHandler})}
          submitChange={false}
        />
        <div className={style.bottomBtn}>
          {/* <Button onClick={this.handleSubmit}>重置</Button> */}
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        </div>
      </div>
    )
  }
}
