import React, { Component } from 'react';

/**
 * 用于显示浮动的菜单
 */

interface FloatTreeMenuProps {
  url: string,
  handlerForGettingData: (data: any) => any,
  
}

interface FloatTreeMenuState {

}

export default class FloatTreeMenu extends Component<FloatTreeMenuProps, FloatTreeMenuState>{


  render() {
    return (
      <div>tree menu</div>
    )
  }
}