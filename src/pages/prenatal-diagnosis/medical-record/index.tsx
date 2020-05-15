import React from 'react';
import { Button } from 'antd';
import MyForm from '@/components/MyForm/index';
import config from './config';
import data from './data';
import request from '@/utils/request';
import { getRenderData, getFormData} from '@/components/MyForm/utils';
import styles from './index.less';

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

  componentDidMount() {
    // request("/prenatal-diagnoses",{
    //   method: "GET"
    // }).then((res: any) => console.log(res));
    // request("/prenatal-patients",{
    //   method: "GET"
    // }).then((res: any) => console.log(res));
    // request("/pregnancies",{
    //   method: "GET"
    // }).then((res: any) => console.log(res));
  }

  componentDidUpdate(){
    const { formHandler } = this.state;
    formHandler.subscribe("lmp", "change", (val: any) => {
      formHandler.sureEdd.actions.setValue("2020-01-01");
    });
  }

  handleSubmit = () => {
    this.state.formHandler.dispatch("_global","submit",{});
    this.state.formHandler.submit().then(({validCode, res}:any) => {
      console.log(validCode);
      // if(!validCode){
      //   console.log(res);
      console.log(getFormData(res));
      // }
      request("/prenatal-diagnoses",{
        method: "PUT",
        data: {...getFormData(res), id: 12}
      }).then((result: any) => console.log(result))
    });
  }

  render(){
    const myConfig = getRenderData(config, data);
    // 不要再页面render中尝试取formHandler的值，因为这个时候formItem初始化还没有完成
    return(
      <div className={styles.container}>
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
