import React, { Component, ReactNode } from 'react';
import { Drawer, Button, Tree } from 'antd';
import request from '@/utils/request';

import styles from './index.less';


/**
 * 用于显示浮动的菜单
 * 仅做二级
 */

interface FloatTreeMenuProps {
  url: string,
  handlerBeforeGettingData?: (data: any) => any,
  firstLayer: {
    key: string,
    render: Function,
    icon?: any,
  },
  secondLayer: {
    key: string,
    render: Function,
    icon?: any,
  },
  onSelect: Function
}

interface FloatTreeMenuState {
  visible: boolean,
  data: Array<any>,
  activeKey: number|string
}

interface TreeNodeConstructor {
  title: string | ReactNode,
  key: string | number,
  icon?: any,
  children?: Array<TreeNodeConstructor>
}

const drawerBodyStyle = {
  padding: "0"
}

export default class FloatTreeMenu extends Component<FloatTreeMenuProps, FloatTreeMenuState>{
  constructor(props: FloatTreeMenuProps) {
    super(props);
    this.state = {
      visible: false,
      data: [],
      activeKey: -1
    }
  }

  componentDidMount() {
    const { url } = this.props;
    if (url) {
      request(url, {
        method: "GET"
      }).then((res: any) => {
        this.setState({ data: res })
      })
    }
  }

  openDrawer = () => {
    this.setState({ visible: true })
  }

  closeDrawer = () => {
    this.setState({ visible: false })
  }

  // generateTreeData = (
  //   data: Array<any>,
  //   firstLayer: {
  //     key: string,
  //     render: Function
  //   },
  //   secondLayer: {
  //     key: string,
  //     render: Function
  //   }): Array<TreeNodeConstructor> => {
  //   if (data.length === 0 || !firstLayer || !secondLayer) return [];
  //   const treeData: Array<TreeNodeConstructor> = [];
  //   for (let i = 0; i < data.length; i++) {
  //     const firstArgument: any = data[i][firstLayer.key];
  //     let isFound = false;
  //     for (let j = 0; j < treeData.length; j++) {
  //       if (firstArgument === treeData[j][firstLayer.key]) {
  //         if (!treeData[j].children) {
  //           treeData[j].children = [];
  //         }
  //         treeData[j].children.push({
  //           title: secondLayer.render(data[i][secondLayer.key], data[i]),
  //           key: data[i][secondLayer.key],
  //         });
  //         isFound = true;
  //         break;
  //       }
  //     }
  //     if (!isFound) {
  //       treeData.push({
  //         title: firstLayer.render(data[i][firstLayer.key], data[i]),
  //         key: data[i][firstLayer.key],
  //         children: [
  //           {
  //             title: secondLayer.render(data[i][secondLayer.key], data[i]),
  //             key: data[i][secondLayer.key],
  //           }
  //         ]
  //       })
  //     }
  //   }
  //   return treeData;
  // }


  handleSelect = (id: number|string) => {
    const { onSelect } = this.props;
    onSelect(id);
    setTimeout(() => {
      this.setState({visible: false})
    }, 300);
  }

  // 渲染菜单
  renderMenu = (data: Array<any>,
    firstLayer: {
      key: string,
      render: Function,
      icon?: any
    },
    secondLayer: {
      key: string,
      render: Function,
      icon?: any
    }): Array<ReactNode> => {
    const menuDOM: Array<ReactNode> = [];
    const firstLayerArr: Array<any> = [];
    for (let i = 0; i < data.length; i++) {
      const firstKey = data[i][firstLayer.key];
      if (firstLayerArr.findIndex(v => v === firstKey) === -1) {
        menuDOM.push(
          <div className={styles['first-layer']} key={data[i][firstLayer.key]}>
            {firstLayer.icon && firstLayer.icon}
            {firstLayer.render(data[i][firstLayer.key], data[i])}
          </div>
        );
        firstLayerArr.push(firstKey);
        for (let j = i; j < data.length; j++) {
          if (firstKey === data[j][firstLayer.key]) {
            menuDOM.push(
              <div 
                className={styles['second-layer']} 
                key={data[j][secondLayer.key]}
                onClick={() => this.handleSelect(data[j][secondLayer.key])}
              >
                <div className={styles.icon}>
                  {secondLayer.icon && secondLayer.icon}
                </div>
                <div className={styles.border}>
                  {secondLayer.render(data[j][secondLayer.key], data[j])}
                </div>
              </div>
            );
          }
        }
      }
    }

    return menuDOM;
  }

  render() {
    const { visible, data } = this.state;
    const { firstLayer, secondLayer } = this.props;
    return (
      <div className={styles['float-tree-menu']}>
        <div className={styles.btn}>
          <Button
            onClick={this.openDrawer}
          >菜单栏</Button>
        </div>
        <Drawer
          closable={false}
          placement="right"
          title="浮动菜单"
          bodyStyle={drawerBodyStyle}
          visible={visible}
          onClose={this.closeDrawer}
        >
          <div className={styles['drawer-menu']}>
            {this.renderMenu(data, firstLayer, secondLayer)}
          </div>
        </Drawer>
      </div>
    )
  }
}