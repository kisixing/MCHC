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
  formData: any
}


export default class Home extends React.Component<{},HomeState>{
  static Title = '孕产史';

  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {},
      formData: {}
    }
  }

  componentDidMount() {
    const urlParam = getPageQuery();

    request(`/pregnancies?id.equals=${urlParam.id}`,{
      method: "GET"
    }).then(res => {
      if(res.length !== 0){
        this.setState({formData: res[0]})
      }
    });
  }

  componentDidUpdate(){
    const { formHandler } = this.state;
    formHandler.subscribe(".lmp", "change", (val: any) => {});
  }

  handleSubmit = () => {
    const { handleSave } = this.props;
    this.state.formHandler.submit().then(({validCode, res}:any) => {
      if(validCode) {
        handleSave(getFormData(res));
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
