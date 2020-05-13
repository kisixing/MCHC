import React, { Component } from 'react';

interface AddressCascaderProps {

}

export default class AddressCascader extends Component<AddressCascaderProps> {
  
  componentDidMount(){
    fetch('http://api02.aliyun.venuscn.com/area/all').then()
  }
  
  render() {
    return(
      <div>aaa</div>
    )
  }
}