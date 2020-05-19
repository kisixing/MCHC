import React, { Component } from 'react';
import { Button } from 'antd';

import styles from './index.less';

// TODO 待完善

export default class FloatCard extends Component<any, any> {

  static menuWidth = 350;

  constructor(props: any){
    super(props);
    this.state = {
      offsetTop: 0,
      offsetLeft: 0,
      isShow: false
    }
  }

  componentDidMount() {
    const parentNode = this.refs.card.parentNode;
    this.setState({
      offsetLeft: parentNode.offsetLeft - FloatCard.menuWidth,
      offsetTop: parentNode.offsetTop
    });
  }

  hanldeClick = () => {
    const { isShow, offsetLeft } = this.state;
    if(isShow){
      this.setState({
        offsetLeft: offsetLeft - FloatCard.menuWidth
      });
    }else{
      this.setState({
        offsetLeft: offsetLeft + FloatCard.menuWidth
      });
    }
    this.setState({isShow: !isShow})
  }


  render() {
    // 暂时定死menu 350px trigger是50px
    const { offsetTop, offsetLeft, isShow } = this.state;
    return (
      <div 
        className={styles.card} 
        ref="card"
        style={{
          top: offsetTop,
          left: offsetLeft
        }}
      >
      <div className={styles.menu}>
        {this.props.children}
      </div>
      <div className={styles.trigger} >
        <Button
          onClick={this.hanldeClick}
        >
          {isShow ? <span>收起</span> : <span>展开</span>}
        </Button>
      </div>
    </div>
    )
  }
}