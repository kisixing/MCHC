import * as React from 'react';
import { Tabs, Button, message } from 'antd';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';
import store from 'store';

import YCQ from './YuChanQi';
import YBBS from './YiBanBingShi';
import QTBS from './QiTaBingshi';
import YCS from './YunChanShi';
import TGJC from './TiGeJianCha';
import ZKJC from './ZhuanKeJianCha';
import JYJC from './JianYanJianCha';
import ZDCL from './ZhenDuanChuLi';

import style from './index.less'


interface HomeState{
  formHandler:{
    [key:string]: any
  }
  formData: any,
  isPost: boolean,
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
      formHandler: {},
      formData: {},
      isPost: false,
    }
  }

  componentDidMount() {
    const urlParam = getPageQuery();
    request(`/prenatal-visits?visitType.equals=0&id.equals=${urlParam.id}`, {
      method: 'GET'
    }).then(res => {
      if(res.length !== 0){
        this.setState({formData: res[0]})
      }
    });

    request(`/prenatal-visits?visitType.equals=0&pregnancyId.equals=${urlParam.id}`,{
      method: "GET"
    }).then(res => {
      if(res && res.length !== 0){
        this.setState({formData: res[0]})
      } else {
        this.setState({isPost: true})
      }
    });
  }

  handleTab(key) {
    const { tabs, step } = this.state;
    const tab = tabs.filter(t => t.key === step).pop() || {};
    const next = key || tabs[tabs.indexOf(tab) + 1].key;
    this.setState({
      step: next
    })
  }


  handleSave = (resData) => {
    const { step, formData, isPost } = this.state;
    const pregnancyId = getPageQuery().id;
    const visitId = formData.id;
    console.log(resData,step, '111')

    if (step === "tab-0" || step === "tab-1" || step === "tab-2" || step === "tab-3") {
      request('/pregnancies', {
        method: 'PUT',
        data: { ...resData, id: pregnancyId }
      }).then(r => {
        message.success('信息保存成功！');
      });
    } else {
      const method = isPost ? "POST" : "PUT";
      if (!isPost) {
        resData['id'] = visitId;
      }
      request('/prenatal-visits', {
        method,
        data: resData
      }).then(r => {
        this.setState({ isPost: false });
      });
    }


  }

  render(){
    const { tabs, step } = this.state;
    return(
      <div className={style.initiaWrapper}>
        <Tabs type="card" activeKey={step} onChange={key => this.handleTab(key) }>
          {tabs.map(({ key, title, Content }) => (
            <Tabs.TabPane key={key}
              tab={ <span> {title} </span> }>
              <div>
                {step === key ? (<Content handleSave={this.handleSave} />) : null}
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
    )
  }
}
