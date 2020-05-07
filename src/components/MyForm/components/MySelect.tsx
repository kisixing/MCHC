import React,{ Component} from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface MySelectProps{
  onChange: Function,
  dispatch: Function,
  value: any,
  input_props: any
}

export default class MySelect extends Component<MySelectProps,{}>{
  constructor(props: MySelectProps){
    super(props);
  
  }

  handleChange = (value: number):void => {
    this.props.onChange(value);
  }

  renderSelect = () => {
    const { input_props, value } = this.props;
    const { type } = input_props;
    const selectOptions = input_props.selectOptions.map((v:{label:string|number, value: string|number}) => (
      <Option
        value={v.value}
        key={v.value}
      >
        {v.label}
      </Option>
    ));
    if(type === "default" || !type){
      
      return (
        <Select
          style={{width: '100%'}}
          onChange={this.handleChange}
          value={value}
        >
          {selectOptions}
        </Select>
      )
    } 
  }

  render(){
    return this.renderSelect()
  }
}