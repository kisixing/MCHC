import React,{Component} from 'react';
import { Button } from 'antd';
import MyForm from '@/components/MyForm';
import { getRenderData, getFormData} from '@/components/MyForm/utils';
import request from '@/utils/request';
import config from './config';
import { getPageQuery } from '@/utils/utils';
import styles from './index.less';

interface NewPatientState{
  formHandler:{
    [key:string]: any
  },
  patients: any
}

export default class NewPatient extends Component<{}, NewPatientState>{
  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {

      },
      patients: {
        // name: "张三",
        // lmp: "2020-02-02",
        // edd: "2020-12-04",
        // sureEdd: "2020-12-21",
        // gravidity: 1,
        // parity: 1,
        // abortion: 1,
        // exfetation: 1
      }
    }
  }
  
  componentDidMount () {
    const urlParam = getPageQuery();
    if("id" in urlParam){
      request(`/prenatal-patients?id.equals=${urlParam.id}`,{
        method: "GET"
      }).then(res => {
        if(res.length !== 0){
          this.setState({patients: res[0]})
        }
      });
    }
  }
  
  handleSubmit = () => {
    const { id = ""} = this.state.patients;
    this.state.formHandler.submit().then(({validCode, res}:any) => {
      if(validCode){
        // 通过id判断 为新建还是修改
        const method = id ? "PUT" : "POST";
        const resData = getFormData(res)
        request("/prenatal-patients",{
          method,
          data: {...resData, id}
        }).then((r:any) => console.log(r))
      }
    })
  }

  render() {
    const { patients } = this.state;
    const myConfig = getRenderData(config, patients);
    return (
      <div className={styles.container}>
        <MyForm
          config={myConfig}
          getFormHandler={(formHandler: any) => this.setState({formHandler})}
          submitChange={false}
        />
        <div className={styles['btn-group']}>
          <Button>重置</Button>
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        </div>
      </div>
    )
  }
}