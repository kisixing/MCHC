import { LogoutOutlined, KeyOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import { ClickParam } from 'antd/es/menu';
import React from 'react';
import { connect } from 'dva';
import { router } from 'umi';
import { ConnectProps, ConnectState } from '@/models/connect';
import { CurrentUser } from '@/models/user';
import HeaderDropdown from '../HeaderDropdown';
import ChangePassword from './ChangePassword';
import styles from './index.less';

export interface GlobalHeaderRightProps extends ConnectProps {
  currentUser?: CurrentUser;
  menu?: boolean;
}

class AvatarDropdown extends React.Component<GlobalHeaderRightProps> {
  state = {
    changPassWordVisible: false
  }

  onMenuClick = (event: ClickParam) => {
    const { key } = event;
    if (key === 'logout') {
      const { dispatch } = this.props;
      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }
      return;
    }
    if (key === 'password') {
      return this.setState({ changPassWordVisible: true })
    }

    router.push(`/account/${key}`);
  };

  setChangPassWordVisible = (e: boolean) => {
    this.setState({ changPassWordVisible: e })
  }

  render(): React.ReactNode {
    const {
      currentUser = {
        avatar: '',
        name: '',
      },
      menu,
    } = this.props;
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        {/* {menu && (
          <Menu.Item key="center">
            <UserOutlined />
            个人中心
          </Menu.Item>
        )} */}
        {/* {menu && (
          <Menu.Item key="settings">
            <SettingOutlined />
            个人设置
          </Menu.Item>
        )} */}
        {menu && (
          <Menu.Item key="password">
            <KeyOutlined />
            修改密码
          </Menu.Item>
        )}
        {menu && <Menu.Divider />}

        <Menu.Item key="logout">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return currentUser && currentUser.firstName ? (
      <>
        <HeaderDropdown overlay={menuHeaderDropdown}>
          <span className={`${styles.action} ${styles.account}`}>
            <Avatar className={styles.avatar} src={currentUser.avatar} alt="avatar">
              {!currentUser.avatar && currentUser.firstName ? currentUser.firstName.slice(0, 1).toUpperCase() : ''}
            </Avatar>
            <span className={styles.name}>{currentUser.firstName}</span>
          </span>
        </HeaderDropdown>
        <ChangePassword
          currentUser={currentUser}
          visible={this.state.changPassWordVisible}
          onCancel={() => this.setChangPassWordVisible(false)}
        />
      </>
    ) : (
      <Spin
        
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    );
  }
}

export default connect(({ user }: ConnectState) => ({
  currentUser: user.currentUser,
}))(AvatarDropdown);
