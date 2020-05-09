// Checkbox
interface ExtraEditors {
  key: any, 
  editors: Array<FormConfig>
}

// Table
interface TableColumns {
  key?: string,
  title: string,
  children?: Array<TableColumns>,
  width?: number,
  editor?: FormConfig
}

export interface ComponentOption {
  type?: string | null,
  // select
  selectOptions?: Array<{ value: string | number, label: string | number }> | null,
  // date
  format?: string,
  // checkbox
  radio?: boolean,
  extraEditors?: Array<ExtraEditors>,
  renderData?: Array<string>|Array<{key:string,label: string}>
  // table
  editable?: boolean,
  tableColumns?: Array<TableColumns>,
  // custom
  config?: Array<FormConfig>
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
  getFormHandler?: (func: any) => void,
  submitChange: boolean
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