import * as React from 'react';
import { Button } from 'antd';
import MyForm from '@/components/MyForm/index';
import config from './config';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';
import styles from './index.less';

import { getRenderData, getFormData} from '@/components/MyForm/utils';

interface HomeState{
  formHandler:{
    [key:string]: any
  },
  tableData: any
}


export default class Home extends React.Component<{},HomeState>{
  static Title = '产检记录';

  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {},
      tableData: null
    }
  }

  componentDidMount() {
    const urlParam = getPageQuery();
    request(`/prenatal-visits?visitType.equals=1&pregnancyId.equals=${urlParam.id}`,{
      method: 'GET'
    }).then(res => {
      const obj = {};
      obj['list'] = res;
      this.setState({
        tableData: obj
      })
    });
  }

  componentDidUpdate(){
    const { formHandler } = this.state;
    formHandler.subscribe("gestationalWeek", "dispatch", (val: any) => {
      console.log(val, 33233)
    });
  }


  handleSubmit = () => {
    console.log(this.state.formHandler, '11')
    this.state.formHandler.submit().then(({validCode, res}:any) => {
      console.log(res, '1');
      console.log(getFormData(res), '2');
      // if(!validCode){
      // }
      // const param = {visitType: 1};
      const newData = getFormData(res)['list'][2];
      console.log(newData, '366')
      request('/prenatal-visits', {
        method: 'put',
        data: newData
      }).then(r => {

      });
    });
  }


  render(){
    const { tableData } = this.state;
    const myConfig = getRenderData(config, tableData);
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
