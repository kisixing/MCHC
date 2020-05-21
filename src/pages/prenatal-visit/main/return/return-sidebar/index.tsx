import * as React from 'react';
import { Button, message, Input, Row, Col } from 'antd';
import styles from '../index.less';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';

import Diagnoses from '@/pages/prenatal-visit/main/components/diagnoses';

interface HomeState{
  formHandler:{
    [key:string]: any
  },
  formData: any,
}

export default class Home extends React.Component<{},HomeState>{
  static Title = '诊断处理';

  constructor(props:any){
    super(props);
    this.state = {
      formHandler: {},
      formData: {},
    }
  }


  render(){
    return(
      <div>
        <Diagnoses />
      </div>
    )
  }
}
