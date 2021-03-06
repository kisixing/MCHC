import * as React from 'react';
import { Button, message } from 'antd';
import { getExpected } from '@/utils/formula';
import MyForm from '@/components/MyForm/index';
import config from './config';
import style from '../index.less';

import { getRenderData, getFormData} from '@/components/MyForm/utils';

interface HomeState{
  formHandler:{
    [key:string]: any
  }
}

export default class Home extends React.Component<{},HomeState>{
  static Title = '预产期';

  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {}
    }
  }

  componentDidUpdate(){
    const { formHandler } = this.state;
    formHandler.subscribe("lmp", "change", (val: any) => {
      formHandler.edd.actions.setValue(getExpected(val));
      formHandler.sureEdd.actions.setValue(getExpected(val));
    });
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
    const { formData } = this.props;
    return(
      <div className={style.initialContent}>
        <MyForm
          config={config}
          value={formData}
          getFormHandler={(formHandler:any) => this.setState({formHandler})}
          submitChange={false}
        />
        <div className={style.bottomBtn}>
          {/* <Button onClick={this.handleSubmit}>重置</Button> */}
          <Button type="primary" onClick={this.handleSubmit}>保存</Button>
        </div>
      </div>
    )
  }
}
