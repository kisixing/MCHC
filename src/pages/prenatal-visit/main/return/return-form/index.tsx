import * as React from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import { set } from 'lodash';
import MyForm from '@/components/MyForm/index';
import config from './config';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';
import style from './index.less';

import { getRenderData, getFormData} from '@/components/MyForm/utils';

interface IndexState{
  formHandler:{
    [key:string]: any
  },
  formData: any
}

class Index extends React.Component<{},IndexState>{

  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {},
      formData: null
    }
  }

  componentDidUpdate(){
    const { formHandler } = this.state;
    formHandler.subscribe(".lmp", "change", (val: any) => {});
  }

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { formHandler } = this.state;
    const urlParam = getPageQuery();
    formHandler.submit().then(({validCode, res}:any) => {
      // if(!validCode){
      // }
      console.log(res, getFormData(res), '000')
      const param = {visitType: 1};
      const newData = {...getFormData(res), ...param }
      console.log(newData, '111')
      set(newData, 'pregnancy.id', urlParam.id);
      // newData['pregnancy']['id'] = urlParam.id;

      console.log(newData, '222')
      // request('/prenatal-visits', {
      //   method: 'post',
      //   data: newData
      // }).then(r => {
      //   dispatch({
      //     type: 'pregnancy/getVisitsData',
      //     payload: urlParam.id
      //   })
      // });
    });
  }

  render(){
    const { formData } = this.state;
    const myConfig = getRenderData(config, formData);
    return(
      <div>
        <MyForm
          config={myConfig}
          getFormHandler={(formHandler:any) => this.setState({formHandler})}
          submitChange={false}
        />
        <div className={style.bottomBtn} >
          {/* <Button onClick={this.handleSubmit}>重置</Button> */}
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ pregnancy }) => {
  return { ...pregnancy };
};

export default connect(
  mapStateToProps
)(Index);
