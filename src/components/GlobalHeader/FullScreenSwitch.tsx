/*
 * @Description: 全屏切换
 * @Author: Zhong Jun
 * @Date: 2020-05-12 14:55:13
 */

import React, { Component } from 'react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

export default class HeaderFullScreen extends Component {
  state = { fullScreen: false }

  handleFullScreenClick = () => {
    const { fullScreen } = this.state;
    if (fullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    } else {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();
      }
    }
    this.setState({ fullScreen: !fullScreen });
  };

  render() {
    const { fullScreen } = this.state;
    return (
      <div
        style={{
          fontSize: 14,
          color: '#fff',
          cursor: 'pointer',
        }}
        onClick={this.handleFullScreenClick}
      >
        <Tooltip placement="bottom" title={fullScreen ? '退出全屏' : '全屏'}>
          {fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
        </Tooltip>
      </div>
    );
  }
}
