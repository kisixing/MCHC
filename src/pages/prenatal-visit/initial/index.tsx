import * as React from 'react';
import { Tabs, Button } from 'antd';

import YCQ from './YuChanQi';
import YBBS from './YiBanBingShi';
import QTBS from './QiTaBingshi';
import YCS from './YunChanShi';
import TGJC from './TiGeJianCha';
import ZKJC from './ZhuanKeJianCha';
import JYJC from './JianYanJianCha';
import ZDCL from './ZhenDuanChuLi';

import { getRenderData, toFormat} from '@/components/MyForm/utils';


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
      <div>
        <Tabs type="card" activeKey={step} onChange={key => this.handleSave(key) }>
          {tabs.map(({ key, title, Content }) => (
            <Tabs.TabPane key={key}
              tab={ <span> {title} </span> }>
              <div>
                {step === key ? (<Content getData={this.getData.bind(this)} />) : null}
              </div>
            </Tabs.TabPane>
          ))}
        </Tabs>
        {
          step !== tabs[tabs.length - 1].key
          ? <Button onClick={() => this.handleSave()}>下一页</Button>
          : <Button onClick={() => this.handleSave(step)}>保存</Button>
        }
      </div>
    )
  }
}
