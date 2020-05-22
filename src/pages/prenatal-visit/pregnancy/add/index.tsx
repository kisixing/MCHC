import * as React from 'react';
import { Button, message } from 'antd';
import MyForm from '@/components/MyForm/index';
import config from './config';
import { getPageQuery } from '@/utils/utils';
import request from '@/utils/request';

import { getRenderData, getFormData} from '@/components/MyForm/utils';
import style from './index.less'

interface HomeState{
  formHandler:{
    [key:string]: any
  },
  formData: any
}


export default class Home extends React.Component<{},HomeState>{
  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {

      },
      formData: {}
    }
  }


  componentDidMount(){
    const urlParam = getPageQuery();

    if("id" in urlParam){
      request(`/pregnancies?id.equals=${urlParam.id}`,{
        method: "GET"
      }).then(res => {
        if(res.length !== 0){
          this.setState({formData: res[0]})
        }
      });
    }
  }


  handleSubmit = () => {
    const { id = ""} = this.state.formData;
    this.state.formHandler.submit().then(({validCode, res}:any) => {
      // if(validCode) {
        // 通过id判断 为新建还是修改
        const method = id ? "PUT" : "POST";
        const info = id ? "修改孕册病人信息成功" : "新增孕册信息成功";

        const param = { id };
        const resData = {...getFormData(res), ...param }
        request(`/pregnancies`, {
          method,
          data: resData
        }).then(r => {
          message.success(info);
        });
      // } else {
      //   message.error('必填项不能为空！');
      // }
    })
  }

  handleReset = () => {
    const { formHandler } = this.state;
    console.log(formHandler, '1223')
    if (formHandler.reset) {
      formHandler.reset();
    }
  }

  render(){
    const { formData } = this.state;
    const myConfig = getRenderData(config, formData);
    return(
      <div className={style.pregWrpper}>
        <MyForm
          config={myConfig}
          getFormHandler={(formHandler:any) => this.setState({formHandler})}
          submitChange={false}
        />
        <div className={style.btnGroup}>
          <Button className={style.resetBtn} onClick={this.handleReset}>重置</Button>
          <Button className={style.submitBtn} type="primary" onClick={this.handleSubmit}>提交</Button>
        </div>
      </div>
    )
  }
}
