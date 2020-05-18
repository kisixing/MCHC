import React, { Component } from 'react';
import { Button } from 'antd';

import styles from './index.less';

export default class FloatCard extends Component {

  offsetTop = 0;

  offsetLeft = 0;
  // constructor(props: any){
  //   super(props);
  //   this.state = {
  //     float_dom: ""
  //   }
  // }

  componentDidMount() {
    const parentNode = this.refs.float.parentNode;
    this.offsetLeft = parentNode.offsetLeft;
    this.offsetTop = parentNode.offsetTop;
  }

  render() {
    return <div
      className={styles.outter}
      style={{
        top: this.offsetTop,
        left: this.offsetLeft
      }}
      ref="float"
    >
      <div 
        className={styles.content}
        ref="content"  
      >
        {this.props.children}
      </div>
      <div className={styles['trigger-btn']}>
        <Button>这是一个浮动button</Button>
      </div>
    </div>
  }
}