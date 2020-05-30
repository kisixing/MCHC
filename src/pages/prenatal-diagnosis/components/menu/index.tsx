import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, } from 'antd';
import styles from './index.less';

interface SiderMenuProps {
  children: any,
  // 是否折起
  collapsed: boolean
  getSiderMenuWidth?: Function
}

interface SiderMenuState {
  showMenu: boolean
}

/**
 * 256px
 * 80px
 */

const menuWidth = 250;
const menuHeight = 400;
const btnWidth = 30;

const maxcollapsedWidth = 256;
const mincollapsedWidth = 80;

class SiderMenu extends Component<SiderMenuProps, SiderMenuState> {

  constructor(props: SiderMenuProps){
    super(props);
    this.state = {
      showMenu: true
    }
  }

  componentDidMount() {
    // 初始值
    const { getSiderMenuWidth } = this.props;
    if(getSiderMenuWidth){
      getSiderMenuWidth(menuWidth+btnWidth);
    }
  }

  setShowMenu = (showMenu: boolean) => {
    const { getSiderMenuWidth } = this.props;
    this.setState({showMenu: !showMenu}, () => {
      // 将占用页面的宽度暴露出去 收起为0
      if(getSiderMenuWidth) {
        getSiderMenuWidth(this.state.showMenu ? menuWidth+btnWidth : 0)
      }
    })
  }

  render() {
    const { showMenu } = this.state;
    const { children, collapsed } = this.props;
    const collapsedWidth: number = collapsed ? mincollapsedWidth : maxcollapsedWidth;
    const left = showMenu ? collapsedWidth : collapsedWidth - menuWidth
    return (
      <div 
        className={styles['menu-block']}
        style={{left}}
      >
        <div 
          className={styles.menu}
          style={{
            width: menuWidth,
            height: menuHeight,
          }}
        >
          {children}
        </div>
        <div className={styles.btn}>
          <Button
            onClick={() => this.setShowMenu(showMenu)}
          >
            {showMenu ? "收起菜单" : "展开菜单"}
          </Button>
        </div>
      </div>
    )
  }
}

export default connect(({global, prenatalDiagnosis}:any) => {
  return {
    collapsed: global.collapsed
  }
})(SiderMenu)