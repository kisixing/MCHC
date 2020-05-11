/* eslint-disable @typescript-eslint/camelcase */
import React,{Component, ReactNode} from 'react';
import MyComponent from '../index';
import { isArr } from "../../utils/func";
import styles from './index.less';

interface SimpleObjectProps{
  onChange: Function,
  dispatch?: Function,
  value: any,
  error: any,
  input_props: any
}

export default class SimpleObject extends Component<SimpleObjectProps>{

  handleChange = (val: any, key: string):void => {
    const { onChange, value } = this.props;
    // console.log(val);
    value[key] = val;
    onChange(value);
  }

  renderInput = ():ReactNode => {
    const { input_props = {}, value = {} } = this.props;
    const { config = [] } = input_props;
    if(!isArr(config)){
      return <span>input_props.config格式为Array{"<FormConfig>"}</span>;
    }
    if(config.length === 0){
      return <span>input_props.config.length 为 0</span>
    }
    return config.map((conf: any) => {
      const RenderComponent = MyComponent[conf.input_type];
      return (
        <div className={styles['simple-object-item']}>
          <div className={styles.label}>{conf.label}</div>
          <RenderComponent
            onChange={(val:any) => this.handleChange(val, conf.key)}
            value={value[conf.key]}
          />
          <div className={styles.unit}>{conf.unit}</div>
        </div>
      )
    })
  }

  render(){
    return (
      <div className={styles['simple-object']}>
        {this.renderInput()}
      </div>
    )
  }
}