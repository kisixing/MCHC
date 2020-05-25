import React, { Ref } from 'react';
import { map, get, keyBy } from 'lodash';
import { withRouter, router } from 'umi';
import { RouteComponentProps } from 'dva/router';
import TabButton from '@/components/GeneralComponents/TabButton';
import styles from './less/RouterTabs.less';
import { connect } from 'dva';
import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';

interface IProps extends RouteComponentProps {
  style?: any;
  dispatch?: any;
  tabs?: any[];
  tabsMapping?: any;
}

export class RouterTabs extends React.Component<IProps> {
  handleClick = (tabKey: any) => {
    const { dispatch, tabsMapping, history } = this.props;
    history.push(
      `${get(tabsMapping, `${tabKey}.path`)}${
        get(tabsMapping, `${tabKey}.search`) ? get(tabsMapping, `${tabKey}.search`) : ''
      }`,
    );
    // 滚动 activeTab
    const tabBtnRef = document.getElementById(tabKey) as HTMLElement;
    tabBtnRef.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    dispatch({
      type: 'tab/changeActiveKey',
      payload: {
        data: { key: tabKey },
      },
    });
  };

  handleCloseTab = (tabKey: any) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'tab/deleteTabs',
      payload: {
        data: { key: tabKey },
      },
    });
  };

  handleCloseAllTab = () => {
    const { dispatch } = this.props;
    router.push('/');
    dispatch({
      type: 'tab/deleteAllTabs',
      payload: {},
    });
  };

  renderTabMenu = () => {
    const { tabs } = this.props;
    return (
      <Menu>
        <Menu.Item key="/">首页</Menu.Item>
        {map(tabs?.slice(1), (tab, index) => {
          return (
            <Menu.Item
              key={tab.key}
              onClick={() => {
                this.handleClick(tab.key);
              }}
            >
              {tab.title}
            </Menu.Item>
          );
        })}
        <Menu.Divider />
        <Menu.Item key="close" onClick={this.handleCloseAllTab}>
          关闭所有
        </Menu.Item>
      </Menu>
    );
  };

  render() {
    const { style, tabs, location } = this.props;

    return (
      <div className={styles.customRouterTabs} style={{ ...style, marginLeft: '-12px' }}>
        <div className={styles.customRouterTabsBtns}>
          {map(tabs, (tab, index) => {
            return (
              <TabButton
                key={tab.key}
                tabKey={tab.key}
                closable={tab.closable}
                isActive={location.pathname === tab.path}
                title={tab.title}
                onClick={this.handleClick}
                onClose={this.handleCloseTab}
              />
            );
          })}
        </div>
        <div className={styles.customRouterTabsLast}>
          <Dropdown
            overlay={this.renderTabMenu}
            overlayClassName={styles.customRouterTabsLastDropdown}
            trigger={['click']}
          >
            <span>
              展开所有
              <CaretDownOutlined title="展开" />
            </span>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default connect(({ tab }) => ({
  tabs: tab.tabs,
  tabsMapping: keyBy(tab.tabs, 'key'),
}))(withRouter(RouterTabs));
