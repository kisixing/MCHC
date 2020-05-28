import * as React from 'react';
import { Button, message, Input, Row, Col } from 'antd';
import MyForm from '@/components/MyForm/index';
import config from './config';
import styles from '../index.less';
import { getRenderData, getFormData} from '@/components/MyForm/utils';

import Diagnoses from '@/pages/prenatal-visit/main/components/diagnoses';

interface HomeState{
  formHandler:{
    [key:string]: any
  }
}

export default class Home extends React.Component<{},HomeState>{
  static Title = '诊断处理';

  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {}
    }
  }

  componentDidUpdate(){
    const { formHandler } = this.state;
    formHandler.subscribe(".lmp", "change", (val: any) => {});
  }

  handleSubmit = () => {
    const { handleSave } = this.props;
    this.state.formHandler.submit().then(({validCode, res}:any) => {
      if (validCode) {
        handleSave(getFormData(res));
      } else {
        message.error('必填项不能为空！');
      }
    });
  }

  render(){
    const { visitData } = this.props;
    return(
      <Row className={styles.initialContent}>
        <Col span="6">
          <Diagnoses />
        </Col>
        <Col span="18">
          <MyForm
            config={config}
            value={visitData}
            getFormHandler={(formHandler:any) => this.setState({formHandler})}
            submitChange={false}
          />
          <div className={styles.bottomBtn}>
            {/* <Button onClick={this.handleSubmit}>重置</Button> */}
            <Button type="primary" onClick={this.handleSubmit}>提交</Button>
          </div>
        </Col>
      </Row>
    )
  }
}
