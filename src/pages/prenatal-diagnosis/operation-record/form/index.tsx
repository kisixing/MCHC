import React from 'react';
import { Button, message } from 'antd';
import MyForm from '@/components/MyForm/index';
import config from './config';
// import data from './data';
import styles from './index.less';
import { isNotEmpty, getPageQuery } from '@/utils/utils';
import request from '@/utils/request';
// import FloatCard from '@/components/FloatCard';

import { getRenderData, getFormData} from '@/components/MyForm/utils';

interface HomeState{
  formHandler:{
    [key:string]: any
  },
  data: any,
  id: number,
  prenatalPatientId: number
}


export default class Home extends React.Component<{},HomeState>{
  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {
        
      },
      data: {
        id: "",
        operationType: 1,
        operationName: "羊膜腔穿刺"
      },
      id: -1,
      prenatalPatientId: -1
    }
  }

  componentDidMount () {
    const urlParams = getPageQuery();
    if (!urlParams.prenatalPatientId) {
      message.error('无用户id,请从手术病历列表进入');
      return;
    }
    this.setState({ prenatalPatientId: urlParams.prenatalPatientId, id: urlParams.id || -1 });
    
    if (urlParams.prenatalPatientId && urlParams.id) {
      request(`/pd-operations?prenatalPatientId.equals=${urlParams.prenatalPatientId}&id.equals=${urlParams.id}`,{
        method: "GET"
      }).then(res => {
        if(res.length !== 0){
          this.setState({data: res[0]})
        }
      })
    }
  }

  componentDidUpdate(){
    const { formHandler } = this.state;
    if(isNotEmpty(formHandler)){
      // formHandler.subscribe("pdProcedure","change",(val:any) => {
      //   console.log(val);
      // })
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
    const { data } = this.state;
    
    const myConfig = getRenderData(config[data.operationType], {});
    // 不要再页面render中尝试取formHandler的值，因为这个时候formItem初始化还没有完成
    return(
      <div className={styles.container}>
        {/* <FloatCard>
          这个是内容
        </FloatCard> */}
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
