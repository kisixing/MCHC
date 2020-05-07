// Checkbox
interface ExtraEditors {
  key: any, // 此处key对应的是checkbox的value值
  editors: Array<FormConfig>
}

// Table
interface TableColumns {
  key?: string,
  title: string,
  children?: Array<TableColumns>
  width?: number      // 样式写在这个位置会不会有点不好
  editor?: FormConfig
}

export interface ComponentOption {
  type: string | null, // 单一组件多重展开
  
  // select
  selectOptions?: Array<{ value: string | number, label: string | number }> | null,
  
  // date
  format?: string,
  
  // checkbox
  radio?: boolean,
  extraEditors?: Array<ExtraEditors>,
  // 这个属性有可能适用于其他组件
  renderData?: Array<string>|Array<{key:string,label: string}>
  
  // table
  editable?: boolean, // 自动提供button和编辑功能
  tableColumns?: Array<TableColumns>
}

export interface FormConfig {
  key: string,
  label?: string,
  unit?: string,
  input_type: string,
  span: number,
  offset: number,
  hidden?: boolean,
  value?: any,
  rules?: string | object | RegExp | null,
  input_props: ComponentOption,
}

export interface MyFormProp {
  config: Array<FormConfig>,
  // TODO func类型
  getFormHandler?: (func: any) => void
}

export interface MyFormState {
  formHandler: any
}


export interface FormItemProp {
  actions?: {
    setValue?: (val: any) => void
    getValue?: () => any,
    valid?: () => any
  },
  dispatch: (fieldName: string, eventName: string, args: any) => void,
  defaultValue?: any,
  type: string,
  label: string,
  unit: string,
  input_props: ComponentOption | null,
  validate?: string | object | RegExp | null,
  path: string
}

export interface FormItemState {
  value: any,
  error: any,
  validate: string | object | RegExp | null
}