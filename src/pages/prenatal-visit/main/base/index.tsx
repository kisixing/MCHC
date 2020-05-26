import React, { Component } from 'react';
import { Tabs, message } from 'antd';
import { connect } from 'dva';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';

import YFXX from './YunFuXinXi';
import ZFXX from './ZhangFuXinXi';
import styles from './index.less';

interface IndexState {
  tabs: any,
  step: string,
}
const tabContents = [YFXX, ZFXX];

class Index extends Component<{},IndexState>{

  constructor(props: any) {
    super(props);
    const allTabs = tabContents.map((tab, i) => ({
      key: `tab-${i}`,
      title: tab.Title,
      Content: tab,
    }));

    this.state = {
      tabs: allTabs,
      step: allTabs[0].key,
    }
  }

  handleSave = (resData: any) => {
    const pregnancyId = getPageQuery().id;
    const { dispatch } = this.props;
    const urlParam = getPageQuery();

    request('/pregnancies', {
      method: 'PUT',
      data: { ...resData, id: pregnancyId }
    }).then(r => {
      message.success('信息保存成功！');
      dispatch({
        type: 'pregnancy/getPregnancyData',
        payload: urlParam.id
      })
    });
  }

  handleTab(key: string) {
    const { tabs, step } = this.state;
    const tab = tabs.filter(t => t.key === step).pop() || {};
    const next = key || tabs[tabs.indexOf(tab) + 1].key;
    this.setState({
      step: next
    })
  }

  render() {
    const { tabs, step } = this.state;
    const { pregnancyData } = this.props;
    return (
      <div className={styles.initiaWrapper}>
        <Tabs type="card" activeKey={step} onChange={key => this.handleTab(key) }>
          {tabs.map(({ key, title, Content }) => (
            <Tabs.TabPane key={key}
              tab={ <span> {title} </span> }>
              <div>
                {step === key ? (<Content formData={pregnancyData} handleSave={this.handleSave} />) : null}
              </div>
            </Tabs.TabPane>
          ))}
        </Tabs>
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
