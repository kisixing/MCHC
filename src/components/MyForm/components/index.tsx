import MyInput from './MyInput';
import MyDateTime from './MyDateTime'
import MySelect from './MySelect'
import MyCheckbox from './MyCheckbox'
import MyTable from './MyTable';
import Address from './Address';

import SimpleObject from './SimpleObject';

import MyCustom from './MyCustom';
import ArrayCustom from './MyCustom/ArrayCustom'

interface MyComponent{
  [key:string]: any
}

const MyComponent:MyComponent = {
  "input": MyInput,
  "date": MyDateTime,
  "select": MySelect,
  "checkbox": MyCheckbox,
  "table": MyTable,
  "address": Address,

  "simpleobject": SimpleObject,

  "custom": MyCustom,
  "array-custom": ArrayCustom
}

export default MyComponent