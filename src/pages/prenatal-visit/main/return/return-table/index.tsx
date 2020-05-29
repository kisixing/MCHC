import * as React from 'react';
import { Button, message } from 'antd';
import { connect } from 'dva';
import MyForm from '@/components/MyForm/index';
import config from './config';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';
import styles from './index.less';

import { getRenderData, getFormData} from '@/components/MyForm/utils';

interface IndexState{
  formHandler:{
    [key:string]: any
  }
}

class Index extends React.Component<{},IndexState>{
  static Title = '产检记录';

  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {},
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const urlParam = getPageQuery();
    dispatch({
      type: 'pregnancy/getVisitsData',
      payload: urlParam.id
    })
  }

  componentDidUpdate(){
    const { formHandler } = this.state;
    formHandler.subscribe("gestationalWeek", "dispatch", (val: any) => {
      console.log(val, 33233)
    });

    formHandler.subscribe("visitsList", "tableEdit", (data: any) => {
      request('/prenatal-visits', {
        method: 'put',
        data
      }).then(r => {

      });
    });
  }

  render(){
    const { visitsData } = this.props;
    return(
      <div>
        <MyForm
          config={config}
          value={visitsData}
          getFormHandler={(formHandler:any) => this.setState({formHandler})}
          submitChange={false}
        />
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
