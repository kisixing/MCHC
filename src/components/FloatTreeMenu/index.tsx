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
    render: Function
  },
  secondLayer: {
    key: string,
    render: Function
  },
  onSelect: Function
}

interface FloatTreeMenuState {
  visible: boolean,
  data: Array<any>,
  selectedKeys: Array<any>
}

interface TreeNodeConstructor {
  title: string | ReactNode,
  key: string | number,
  icon?: any,
  children?: Array<TreeNodeConstructor>
}

export default class FloatTreeMenu extends Component<FloatTreeMenuProps, FloatTreeMenuState>{
  constructor(props: FloatTreeMenuProps) {
    super(props);
    this.state = {
      visible: false,
      data: [],
      selectedKeys: []
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

  generateTreeData = (
    data: Array<any>,
    firstLayer: {
      key: string,
      render: Function
    },
    secondLayer: {
      key: string,
      render: Function
    }): Array<TreeNodeConstructor> => {
    if (data.length === 0 || !firstLayer || !secondLayer) return [];
    const treeData: Array<TreeNodeConstructor> = [];
    for (let i = 0; i < data.length; i++) {
      const firstArgument: any = data[i][firstLayer.key];
      let isFound = false;
      for (let j = 0; j < treeData.length; j++) {
        if (firstArgument === treeData[j][firstLayer.key]) {
          if (!treeData[j].children) {
            treeData[j].children = [];
          }
          treeData[j].children.push({
            title: secondLayer.render(data[i][secondLayer.key], data[i]),
            key: data[i][secondLayer.key],
          });
          isFound = true;
          break;
        }
      }
      if (!isFound) {
        treeData.push({
          title: firstLayer.render(data[i][firstLayer.key], data[i]),
          key: data[i][firstLayer.key],
          children: [
            {
              title: secondLayer.render(data[i][secondLayer.key], data[i]),
              key: data[i][secondLayer.key],
            }
          ]
        })
      }
    }
    return treeData;
  }

  handleTreeSelect = (selectedKeys: Array<string | number>, { selected, selectedNodes, node, event }: any) => {

    const { onSelect } = this.props;
    if (!node.children && selected) {
      onSelect(selectedKeys[0])
    }
    if (selected) {
      this.setState({ selectedKeys },() => {
        setTimeout(() => {
          this.closeDrawer();
        }, 350)
      });
    }
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
          placement="right"
          visible={visible}
          onClose={this.closeDrawer}
        >
          <Tree
            defaultExpandAll
            treeData={this.generateTreeData(data, firstLayer, secondLayer)}
            onSelect={this.handleTreeSelect}
          />
        </Drawer>
      </div>
    )
  }
}