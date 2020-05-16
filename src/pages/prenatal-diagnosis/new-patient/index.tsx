import React,{Component} from 'react';
import { Button } from 'antd';
import MyForm from '@/components/MyForm';
import { getRenderData, getFormData} from '@/components/MyForm/utils';
import request from '@/utils/request';
import config from './config';
import styles from './index.less';

interface NewPatientState{
  formHandler:{
    [key:string]: any
  },
  data: any
}

const getWindowLocationParams = (url: string = "") => {
  const r = {};
  const paramString = url.split("?")[1];
  if (paramString) {
    const paramArr = paramString.split("&");
    paramArr.forEach((str: string) => {
      const strArr = str.split("=");
      r[strArr[0]] = strArr[1];
    })
  }
  return r;
}

export default class NewPatient extends Component<{}, NewPatientState>{
  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {

      },
      data: {
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
    const { href = "" } = window.location;
    const urlParam = getWindowLocationParams(href);
    if("id" in urlParam){
      // 这里的equal不起作用
      request(`/prenatal-patients?id.equal=1`,{
        method: "GET"
      }).then(res => {
        if(res.length !== 0){
          this.setState({data: res[0]})
        }
      });
    }
  }
  
  handleSubmit = () => {
    const { id = ""} = this.state.data;
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
    const { data } = this.state;
    const myConfig = getRenderData(config, data);
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