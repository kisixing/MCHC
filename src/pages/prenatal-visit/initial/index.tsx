import * as React from 'react';
import { Tabs, Button } from 'antd';
import request from '@/utils/request';

import YCQ from './YuChanQi';
import YBBS from './YiBanBingShi';
import QTBS from './QiTaBingshi';
import YCS from './YunChanShi';
import TGJC from './TiGeJianCha';
import ZKJC from './ZhuanKeJianCha';
import JYJC from './JianYanJianCha';
import ZDCL from './ZhenDuanChuLi';

import { getRenderData, toFormat} from '@/components/MyForm/utils';
import style from './index.less'


interface HomeState{
  formHandler:{
    [key:string]: any
  }
  formData:{
    any: any
  }
}
const tabConetnts = [YCQ, YBBS, QTBS, YCS, TGJC, ZKJC, JYJC, ZDCL];

export default class Home extends React.Component<{},HomeState>{
  constructor(props) {
    super(props);
    const tabs = tabConetnts.map((tab, i) => ({
      key: `tab-${i}`,
      title: tab.Title,
      Content: tab,
    }));

    this.state = {
      tabs: tabs,
      step: tabs[0].key,
      formHandler: {

      },
      formData: {}
    }
  }

  componentDidMount() {
    request(`/prenatal-visits?visitType.equals=0`, {
      method: 'GET'
    }).then(res => {
      this.setState({
        formData: res[0]
      })
    });
  }

  getData(data) {
    console.log(data, 666)
  }

  handleSave(key) {
    const { tabs, step } = this.state;
    const tab = tabs.filter(t => t.key === step).pop() || {};
    const next = key || tabs[tabs.indexOf(tab) + 1].key;
    this.setState({
      step: next
    })
  }



  render(){
    const { tabs, step, formData } = this.state;
    return(
      <div className={style.initiaWrapper}>
        <Tabs type="card" activeKey={step} onChange={key => this.handleSave(key) }>
          {tabs.map(({ key, title, Content }) => (
            <Tabs.TabPane key={key}
              tab={ <span> {title} </span> }>
              <div>
                {step === key ? (<Content getData={this.getData.bind(this)} formData={formData}/>) : null}
              </div>
            </Tabs.TabPane>
          ))}
        </Tabs>
        {/* {
          step !== tabs[tabs.length - 1].key
          ? <Button className={style.bottomBtn} type="primary" onClick={() => this.handleSave()}>下一页</Button>
          : <Button className={style.bottomBtn} type="primary" onClick={() => this.handleSave(step)}>保存</Button>
        } */}
      </div>


      // <div>
      //   <Tabs defaultActiveKey="1" type="card" size="small">
      //     <Tabs.TabPane tab="预产期" key="Admission">
      //       <YCQ />
      //     </Tabs.TabPane>
      //     <Tabs.TabPane tab="一般病史" key="birth-information">
      //       <YBBS />
      //     </Tabs.TabPane>
      //     <Tabs.TabPane tab="其他病史" key="NursingRecord">
      //       <QTBS />
      //     </Tabs.TabPane>
      //     <Tabs.TabPane tab="孕产史" key="predelivery">
      //       <YCS />
      //     </Tabs.TabPane>
      //     <Tabs.TabPane tab="体格检查" key="CaesareanDelivery">
      //       <TGJC />
      //     </Tabs.TabPane>
      //     <Tabs.TabPane tab="专科检查" key="NeonateRecord">
      //       <ZKJC />
      //     </Tabs.TabPane>
      //     <Tabs.TabPane tab="检验检查" key="PostpartumVisit">
      //       <JYJC />
      //     </Tabs.TabPane>
      //     <Tabs.TabPane tab="诊断处理" key="PostpartumVisit">
      //       <ZDCL />
      //     </Tabs.TabPane>
      //   </Tabs>
      // </div>
    )
  }
}
