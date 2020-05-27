import * as React from 'react';
import { Tabs, Button, message } from 'antd';
import { connect } from 'dva';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';

import YCQ from './YuChanQi';
import YBBS from './YiBanBingShi';
import QTBS from './QiTaBingshi';
import YCS from './YunChanShi';
import TGJC from './TiGeJianCha';
import ZKJC from './ZhuanKeJianCha';
import JYJC from './JianYanJianCha';
import ZDCL from './ZhenDuanChuLi';

import styles from './index.less';

interface IndexState {
  tabs: any;
  step: string;
  visitData: any;
  isPost: boolean;
}
const tabContents = [YCQ, YBBS, QTBS, YCS, TGJC, ZKJC, JYJC, ZDCL];

class Index extends React.Component<{}, IndexState> {
  constructor(props) {
    super(props);
    const allTabs = tabContents.map((tab, i) => ({
      key: `tab-${i}`,
      title: tab.Title,
      Content: tab,
    }));

    this.state = {
      tabs: allTabs,
      step: allTabs[0].key,
      visitData: {},
      isPost: false,
    };
  }

  componentDidMount() {
    this.gatVisitsData();
  }

  handleSave = (resData: any) => {
    const { step, visitData, isPost } = this.state;
    const { dispatch } = this.props;
    const urlParam = getPageQuery();
    const pregnancyId = getPageQuery().id;
    const visitId = visitData.id;

    if (step === 'tab-0' || step === 'tab-1' || step === 'tab-2' || step === 'tab-3') {
      request('/pregnancies', {
        method: 'PUT',
        data: { ...resData, id: pregnancyId },
      }).then(r => {
        message.success('信息保存成功！');
        dispatch({
          type: 'pregnancy/getPregnancyData',
          payload: urlParam.id,
        });
      });
    } else {
      const method = isPost ? 'POST' : 'PUT';
      if (!isPost) {
        resData['id'] = visitId;
      }
      request('/prenatal-visits', {
        method,
        data: resData,
      }).then(r => {
        this.setState({ isPost: false });
        this.gatVisitsData();
      });
    }
  };

  gatVisitsData() {
    const urlParam = getPageQuery();
    request(`/prenatal-visits?visitType.equals=0&pregnancyId.equals=${urlParam.id}`, {
      method: 'GET',
    }).then(res => {
      if (res && res.length !== 0) {
        this.setState({ visitData: res[0] });
      } else {
        this.setState({ isPost: true });
      }
    });
  }

  handleTab(key: string) {
    const { tabs, step } = this.state;
    const tab = tabs.filter(t => t.key === step).pop() || {};
    const next = key || tabs[tabs.indexOf(tab) + 1].key;
    this.setState({
      step: next,
    });
  }

  renderTabBar = (props, DefaultTabBar) => (
    <>{({ style }) => <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />}</>
  );

  render() {
    const { tabs, step, visitData } = this.state;
    const { pregnancyData } = this.props;
    return (
      <div className={styles.initiaWrapper}>
        <Tabs
          type="card"
          activeKey={step}
          className={styles.tabs}
          tabBarStyle={{ background: '#f0f2f5', borderBottom: '1px solid #1959FF' }}
          onChange={key => this.handleTab(key)}
        >
          {tabs.map(({ key, title, Content }) => (
            <Tabs.TabPane key={key} tab={<span> {title} </span>}>
              <div>
                {step === key ? (
                  <Content formData={pregnancyData} visitData={visitData} handleSave={this.handleSave} />
                ) : null}
              </div>
            </Tabs.TabPane>
          ))}
        </Tabs>
        {/* {
          step !== tabs[tabs.length - 1].key
          ? <Button className={styles.bottomBtn} type="primary" onClick={() => this.handleSave()}>下一页</Button>
          : <Button className={styles.bottomBtn} type="primary" onClick={() => this.handleSave(step)}>保存</Button>
        } */}
      </div>
    );
  }
}

const mapStateToProps = ({ pregnancy }) => {
  return { ...pregnancy };
};

export default connect(mapStateToProps)(Index);
