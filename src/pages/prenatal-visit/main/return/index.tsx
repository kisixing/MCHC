import * as React from 'react';
import { Tabs, Button, Row, Col } from 'antd';

import ReturnForm from './return-form';
import ReturnTable from './return-table';
import ReturnSidebar from './return-sidebar';
import style from './index.less';

import { getRenderData, toFormat} from '@/components/MyForm/utils';


interface HomeState{
  formHandler:{
    [key:string]: any
  }
}

export default class Home extends React.Component<{},HomeState>{
  constructor(props) {
    super(props);

    this.state = {
      formHandler: {

      }
    }
  }

  handleSave(key) {
    const { tabs, step } = this.state;
    const tab = tabs.filter(t => t.key === step).pop() || {};
    const next = key || tabs[tabs.indexOf(tab) + 1].key;
    this.setState({
      step: next
    })
  }

  getData(data) {
    console.log(data, 666)
  }


  render(){
    const { tabs, step } = this.state;
    return(
      <Row className={style.returnWrapper}>
        <Col span={18}>
          <ReturnTable />
          <ReturnForm />
        </Col>
        <Col span={6}>
          <ReturnSidebar />
        </Col>
      </Row>
    )
  }
}
