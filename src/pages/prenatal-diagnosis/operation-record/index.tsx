import React from 'react';
import { Button } from 'antd';
import MyForm from '@/components/MyForm/index';
import config from './config';
import data from './data';
import styles from './index.less';
import { isNotEmpty } from '@/utils/utils';

import FloatCard from '@/components/FloatCard';

import { getRenderData, getFormData} from '@/components/MyForm/utils';

interface HomeState{
  formHandler:{
    [key:string]: any
  },
  data: any
}


export default class Home extends React.Component<{},HomeState>{
  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {
        
      },
      data: {}
    }
  }

  componentDidUpdate(){
    const { formHandler } = this.state;
    if(isNotEmpty(formHandler)){
      formHandler.subscribe("pdProcedure","change",(val:any) => {
        console.log(val);
      })
    }
  }

  handleSubmit = () => {
    this.state.formHandler.dispatch("_global","submit",{});
    this.state.formHandler.submit().then(({validCode, res}:any) => {
      console.log(validCode);
      console.log(getFormData(res));
    });
  }

  render(){
    const myConfig = getRenderData(config, data);
    // 不要再页面render中尝试取formHandler的值，因为这个时候formItem初始化还没有完成
    return(
      <div className={styles.container}>
        <FloatCard>
          这个是内容aaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </FloatCard>
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
