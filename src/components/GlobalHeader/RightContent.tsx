import React from 'react';
import { connect } from 'dva';

// import { QuestionCircleOutlined } from '@ant-design/icons';
// import { Tooltip } from 'antd';
import { ConnectProps, ConnectState } from '@/models/connect';
import FullScreenSwitch from './FullScreenSwitch';
import Avatar from './AvatarDropdown';
// import HeaderSearch from '../HeaderSearch';
// import SelectLang from '../SelectLang';
// import NoticeIconView from './NoticeIconView';

import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

export interface GlobalHeaderRightProps extends ConnectProps {
  theme?: SiderTheme;
  layout: 'sidemenu' | 'topmenu';
}

const GlobalHeaderRight: React.SFC<GlobalHeaderRightProps> = props => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      {/* <FullScreenSwitch /> */}
      <Avatar menu />
      {/* <SelectLang className={styles.action} /> */}
    </div>
  );
};

export default connect(({ settings }: ConnectState) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
