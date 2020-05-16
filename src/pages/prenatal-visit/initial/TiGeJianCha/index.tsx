import * as React from 'react';
import { Button } from 'antd';
import MyForm from '@/components/MyForm/index';
import config from './config';
import data from '../data';
import styles from '../index.less';
import request from '@/utils/request';

import { getRenderData, getFormData} from '@/components/MyForm/utils';

interface HomeState{
  formHandler:{
    [key:string]: any
  }
}


export default class Home extends React.Component<{},HomeState>{
  static Title = '体格检查';

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
    const { formData } = this.props;
    this.state.formHandler.dispatch("_global","submit",{});
    this.state.formHandler.submit().then(({validCode, res}:any) => {
      console.log(validCode);
      // if(!validCode){
      //   console.log(res);
      console.log(getFormData(res));
      // console.log(data, '111');
      // console.log({...data, ...res}, '222')
      // // }
      let newData = Object.assign(formData, getFormData(res));
      // console.log(newData, '666')

      request('/prenatal-visits', {
        method: 'PUT',
        data: getFormData(res)
      }).then(r => {

      });

    });
  }


  render(){
    const { formData } = this.props;
    const myConfig = getRenderData(config, formData);
    // 不要再页面render中尝试取formHandler的值，因为这个时候formItem初始化还没有完成
    return(
      <div>
        <MyForm
          config={myConfig}
          getFormHandler={(formHandler:any) => this.setState({formHandler})}
          submitChange={false}
        />
        <div className={styles['btn-group']}>
          <Button onClick={this.handleSubmit}>重置</Button>
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        </div>
      </div>
    )
  }
}
