import * as React from 'react';
import { Button, message, Input } from 'antd';
import MyForm from '@/components/MyForm/index';
import config from './config';
import styles from '../index.less';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';

import { getRenderData, getFormData} from '@/components/MyForm/utils';

interface HomeState{
  formHandler:{
    [key:string]: any
  },
  formData: any,
  isPost: boolean,
  diagList: any,
}

export default class Home extends React.Component<{},HomeState>{
  static Title = '诊断处理';

  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {},
      formData: {},
      isPost: false,
      diagList: null,
    }
  }

  componentDidMount() {
    const urlParam = getPageQuery();

    this.getdiagnoses();

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

  getdiagnoses = () => {
    const urlParam = getPageQuery();
    request(`/prenatal-diagnoses?pregnancyId.equals=${urlParam.id}`,{
      method: "GET"
    }).then(res => {
      this.setState({diagList: res});
    });
  }

  postdiagnoses = (diag) => {
    const urlParam = getPageQuery();
    request(`/prenatal-diagnoses`,{
      method: "POST",
      data: {
        diagnosis: diag
      }
    }).then(res => {
      this.getdiagnoses();
    });
  }

  putdiagnoses = (item) => {
    request(`/prenatal-diagnoses`,{
      method: "PUT",
      data: item
    }).then(res => {
      this.getdiagnoses();
    });
  }

  deleteDiagnoses = (id) => {
    request(`/prenatal-diagnoses/${id}`,{
      method: "DELETE",
    }).then(res => {
      this.getdiagnoses();
    });
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
          // resData['pregnancy']['id'] = urlParam.id;
        } else {
          resData['id'] = formData.id;
          // resData['pregnancy']['id'] = urlParam.id;
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

  renderDiagnoses = () => {
    const { diagList } = this.state;
    console.log(diagList, '466')
    const handleSearch = (v) => {
      this.postdiagnoses(v);
    }

    const handleDelete = (item) => {
      this.deleteDiagnoses(item.id);
    }

    return (
      <div className={styles.diagWrapper}>
        <Input.Search
          className={styles.diagIpt}
          placeholder="请输入诊断信息"
          enterButton="添加诊断"
          size="small"
          onSearch={value => handleSearch(value)}
        />
        {
          diagList && diagList.map((item, index) => (
            <div>
              <span>{item.diagnosis}</span>
              <Button onClick={() => handleDelete(item)}>删除诊断</Button>
            </div>
          ))
        }
      </div>
    )
  }


  render(){
    const { formData } = this.state;
    const myConfig = getRenderData(config, formData);
    return(
      <div className={styles.initialContent}>
        { this.renderDiagnoses() }
        <MyForm
          config={myConfig}
          getFormHandler={(formHandler:any) => this.setState({formHandler})}
          submitChange={false}
        />
        <div className={styles.bottomBtn}>
          {/* <Button onClick={this.handleSubmit}>重置</Button> */}
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        </div>
      </div>
    )
  }
}
