import React,{Component, ReactNode} from 'react';
import CheckboxWithExtra from '../Base/CheckboxWithExtra';

interface CustomCheckboxProps{
  radio?: boolean,
  value: {
    checkboxValue: any,
    editorsValue: any,
    options: Array<{label:string|number, value: string|number}>,
    key:string,
    editors: Array<any>
  },
  onChange: Function,
}

export default class CustomCheckbox extends Component<CustomCheckboxProps>{

  state = {
    // checkboxValue:""
  }

  handleChange = (val: any, key: string|number) => {
    const { onChange } = this.props;
    // onChange({
    //   checkboxValue: val.
    // })
    // console.log(val);
    console.log(key);
    onChange({
      checkboxValue: key,
      editorsValue: val.editorsValue[0]
    },this.props.value.key)
    // if (radio) {
    //   value.forEach((item: any) => {
    //     if (item.key === key) {
    //       onChange({
    //         checkboxValue: val.checkboxValue,
    //         editorsValue: val.editorsValue,
    //       }, item.key)
    //     } else {
    //       onChange({
    //         checkboxValue: false,
    //         editorsValue: "",
    //       }, item.key)
    //     }
    //   })
    // } else {
    //   onChange(val, key)
    // }
  }

  renderCheckbox = () => {
    const { value } = this.props;
    const { options = [] } = value;
    const renderDOM: Array<ReactNode> = [];
    for(let i = 0; i < options.length ; i++){
      renderDOM.push(
        <CheckboxWithExtra
          key={i}
          onChange={(val:any) => console.log(val)}
          checkboxValue={value.checkboxValue === options[i].value}
          editorsValue={value.editorsValue}
          editors={value.editors ? value.editors.find((v:any) => v.key === options[i].value) : []}
        />
      )
    }

    // return null;
    // for (let i = 0; i < options.length; i++) {
    //   for (let j = 0; j < extraEditors.length; j++) {
    //     if (options[i].value === extraEditors[j].key) {
    //       renderDOM.push(
    //         <CheckboxWithExtra
    //           key={`${i}-${j}`}
    //           onChange={(val: any) => this.handleChange(val, options[i].value)}
    //           checkboxValue={value.checkboxValue === options[i].value}
    //           editorsValue={value.editorsValue}
    //           editors={extraEditors[j].editors}
    //         >
    //           {options[i].label}
    //         </CheckboxWithExtra>
    //       )
    //       break;
    //     }
    //     if (j === extraEditors.length - 1) {
    //       renderDOM.push(
    //         <CheckboxWithExtra
    //           key={`${i}-${j}`}
    //           onChange={(val: any) => this.handleChange(val, options[i].value)}
    //           checkboxValue={value.checkboxValue === options[i].value}
    //           editorsValue={value.editorsValue}
    //           editors={[]}
    //           // checked={value[i].checkboxValue}
    //         >
    //           {options[i].label}
    //         </CheckboxWithExtra>
    //       )
    //     }
    //   }
    // }
    return renderDOM;
  }

  render() {
    return <div>
      {this.renderCheckbox()}
    </div>
  }
}