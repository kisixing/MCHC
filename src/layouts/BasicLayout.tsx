import React, { useEffect, useState } from 'react';
import { Link, router } from 'umi';
import { connect } from 'dva';
import { Modal, ConfigProvider } from 'antd';
import ProLayout, { MenuDataItem, PageHeaderWrapper } from '@ant-design/pro-layout';
import { formatMessage } from 'umi-plugin-react/locale';
import { keyBy, keys, get, isEmpty, reduce, concat, isNil, filter } from 'lodash';
import zhCN from 'antd/es/locale/zh_CN';
import store from 'store';

import RightContent from '@/components/GlobalHeader/RightContent';
import { ConnectState } from '@/models/connect';
import request, { TOKEN } from '@/utils/request';
import RouterTabs from './RouterTabs';
import ErrorBoundary from '@/components/ErrorBoundary';
import FixedSearch from '@/components/BaseModalForm/FixedSearch';
import { omitRoutes } from '../../config/routes';
import styles from './less/Layout.less';
import logo from '../assets/logo.png';

const BasicLayout = (props: any) => {
  const [routerTabWidth, setRouterTabWidth] = useState(
    document.documentElement.clientWidth - (props.collapsed ? 79 : 256),
  );
  const { dispatch, children, settings } = props;
  const showOvertime = () => {
    Modal.error({
      title: '登录失效',
      content: '登录状态已失效，请重新登录',
      okText: '重新登录',
    });
  };

  // 登录过期与退出登录
  useEffect(() => {
    const { currentUser, allPermissions } = props;
    const username = store.get('username');
    const token = store.get(TOKEN);

    if (!username || !token) {
      dispatch({
        type: 'login/logout',
      });
      dispatch({
        type: 'user/saveCurrentUser',
        payload: {},
      });

      dispatch({
        type: 'user/saveAllPermissions',
        payload: {},
      });
      return;
    }
    if (!isEmpty(currentUser) && !isNil(allPermissions)) {
      dispatchTabs(currentUser, allPermissions);
    } else {
      initGetData();
    }
  }, [props.location.pathname, props.collapsed]);

  useEffect(() => {
    const expiredTime = store.get('expiredTime');
    const logoutTimeout = setTimeout(() => {
      dispatch({
        type: 'login/logout',
      });
      showOvertime();
    }, expiredTime);
    return () => {
      clearTimeout(logoutTimeout);
    };
  }, []);

  const initGetData = async () => {
    const { currentUser, allPermissions } = props;
    const username = store.get('username');
    const newCurrentUser = isEmpty(currentUser) ? await request.get(`/users/${username}`) : currentUser;
    const newAllPermissions = isEmpty(allPermissions)
      ? await request.get('/permissions?type.in=menu,route&size=500')
      : allPermissions;

    await dispatch({
      type: 'user/saveCurrentUser',
      payload: newCurrentUser,
    });

    await dispatch({
      type: 'user/saveAllPermissions',
      payload: newAllPermissions,
    });

    dispatch({
      type: 'select/getDictionaries',
      payload: {},
    });

    dispatchTabs(newCurrentUser, newAllPermissions);
  };

  const dispatchTabs = (currentUser: any, allPermissions: any) => {
    const { location } = props;
    const selfPermissions = reduce(
      get(currentUser, 'groups'),
      (sum, group) => concat(sum as [], get(group, 'permissions') as []),
      [],
    );
    const permissionsMapping = keyBy(concat(selfPermissions, omitRoutes), 'key');
    if (location && location.pathname !== '/') {
      const menuItemProps = get(permissionsMapping, get(location, 'pathname'));
      if (menuItemProps) {
        const data = {
          title: get(menuItemProps, 'name'),
          key: get(menuItemProps, 'key'),
          path: get(menuItemProps, 'key'),
          search: get(location, 'search'),
          closable: true,
        };
        dispatch({
          type: 'tab/changeTabs',
          payload: {
            type: 'addTab',
            data,
          },
        });
      } else {
        const allPermissionsMapping = keyBy(allPermissions, 'key');
        get(allPermissionsMapping, get(location, 'pathname'))
          ? router.push('/exception/403')
          : router.push('/exception/404');
      }
    }
  };

  const handleMenuCollapse = (payload: boolean): void => {
    setRouterTabWidth(document.documentElement.clientWidth - (payload ? 79 : 256));
    const tabBtnRef = document.getElementById(props.activeKey) as HTMLElement;
    tabBtnRef.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  };

  const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] => {
    const permissions = filter(
      reduce(get(props, 'currentUser.groups'), (sum, group) => concat(sum as [], get(group, 'permissions') as []), []),
      item => get(item, 'type') === 'menu',
    );
    const omitRoutesPermission = filter(omitRoutes, (omitMenu: any) => get(omitMenu, 'isMenu'));
    const menusPermissions = keys(keyBy(concat(permissions, omitRoutesPermission), 'key'));
    return menuList.map(item => {
      let localItem = {};
      if (menusPermissions.indexOf(item.path || '/') > -1) {
        localItem = { ...item, children: item.children ? menuDataRender(item.children) : [] };
      }
      return localItem as MenuDataItem;
    });
  };

  const handleClickMenuItem = (menuItemProps: any) => () => {
    const { activeKey } = props;
    const data = {
      title: get(menuItemProps, 'name'),
      key: get(menuItemProps, 'key'),
      path: get(menuItemProps, 'path'),
      search: '',
      closable: true,
    };

    if (activeKey !== get(menuItemProps, 'key')) {
      dispatch({
        type: 'tab/changeTabs',
        payload: {
          type: 'addTab',
          data,
        },
      });
    }

    // 滚动 activeTab
    setTimeout(() => {
      const tabBtnRef = document.getElementById(get(menuItemProps, 'key')) as HTMLElement;
      tabBtnRef.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }, 100);
  };

  const handleClickHeader = () => {
    dispatch({
      type: 'tab/changeActiveKey',
      payload: {
        data: { activeKey: '/' },
      },
    });
  };

  return (
    <ConfigProvider locale={zhCN}>
      <ProLayout
        className={styles.proLayout}
        logo={logo}
        formatMessage={formatMessage}
        menuHeaderRender={(logoDom, titleDom) => (
          <Link to="/" onClick={handleClickHeader}>
            {logoDom}
            {titleDom}
          </Link>
        )}
        onCollapse={handleMenuCollapse}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
            return defaultDom;
          }
          return (
            <Link to={menuItemProps.path} onClick={handleClickMenuItem(menuItemProps)}>
              {defaultDom}
            </Link>
          );
        }}
        breadcrumbRender={(routers = []) => [
          {
            path: '/',
            breadcrumbName: '首页',
          },
          ...routers,
        ]}
        itemRender={(route, params, routes, paths) => {
          const first = routes.indexOf(route) === 0;
          return first ? <Link to={paths.join('/')}>{route.breadcrumbName}</Link> : <span>{route.breadcrumbName}</span>;
        }}
        menuDataRender={menuDataRender}
        rightContentRender={() => <RightContent />}
        {...props}
        {...settings}
      >
        {!!store.get(TOKEN) && (
          <div className={styles.panel}>
            <PageHeaderWrapper className={styles.pageHeader} title={false} />
            <FixedSearch />
            <RouterTabs style={{ width: routerTabWidth }} />
            <div className={styles.panelChild}>
              <div id="panel-child-content" className={styles.content}>
                <ErrorBoundary>{children}</ErrorBoundary>
              </div>
              <footer className={styles.footer}>Copyright © 莲印医疗科技</footer>
            </div>
          </div>
        )}
      </ProLayout>
    </ConfigProvider>
  );
};

export default connect(({ global, settings, tab, user }: ConnectState) => ({
  collapsed: global.collapsed,
  settings,
  tabs: tab.tabs,
  activeKey: tab.activeKey,
  currentUser: get(user, 'currentUser'),
  allPermissions: get(user, 'allPermissions'),
}))(BasicLayout);
