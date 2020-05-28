import * as React from 'react';
import { Button, message } from 'antd';
import MyForm from '@/components/MyForm/index';
import config from './config';
import style from '../index.less';
import { getPageQuery } from '@/utils/utils';

import { getRenderData, getFormData} from '@/components/MyForm/utils';

interface HomeState{
  formHandler:{
    [key:string]: any
  }
}

export default class Home extends React.Component<{},HomeState>{
  static Title = '检验检查';

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
    const urlParam = getPageQuery();
    this.state.formHandler.submit().then(({validCode, res}:any) => {
      if (validCode) {
        let resData = getFormData(res);
        resData['pregnancy']['id'] = urlParam.id;
        handleSave(resData);
      } else {
        message.error('必填项不能为空！');
      }
    });
  }

  render(){
    const { visitData } = this.props;
    return(
      <div className={style.initialContent}>
        <MyForm
          config={config}
          value={visitData}
          getFormHandler={(formHandler:any) => this.setState({formHandler})}
          submitChange={false}
        />
        <div className={style.bottomBtn}>
          {/* <Button onClick={this.handleSubmit}>重置</Button> */}
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        </div>
      </div>
    )
  }
}
