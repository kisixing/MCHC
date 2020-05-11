import * as React from 'react';
import { Tabs } from 'antd';

import YCQ from './YuChanQi';
import YBBS from './YiBanBingShi';
import QTBS from './QiTaBingshi';
import YCS from './YunChanShi';
import TGJC from './TiGeJianCha';
import ZKJC from './ZhuanKeJianCha';
import JYJC from './JianYanJianCha';
import ZDCL from './ZhenDuanChuLi';

interface HomeState{
  formHandler:{
    [key:string]: any
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
    }
  }

  handleSave(key) {
    this.setState({
      step: key
    })
  }


  render(){
    const { tabs, step } = this.state;
    return(
      <div>
        <Tabs type="card" activeKey={step} onChange={key => this.handleSave(key) }>
              {tabs.map(({ key, title, Content }) => (
                <Tabs.TabPane key={key}
                  tab={ <span> {title} </span> }>
                  <div className="bgWhite pad-mid " style={{ maxWidth: "1400px" }}>
                    {step === key ? (<Content />) : null}
                  </div>
                </Tabs.TabPane>
              ))}
            </Tabs>
      </div>
    )
  }
}
