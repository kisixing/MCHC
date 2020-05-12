import MyInput from './MyInput';
import MyDateTime from './MyDateTime'
import MySelect from './MySelect'
import MyCheckbox from './MyCheckbox'
import MyTable from './MyTable';
import MyCustom from './MyCustom';
import Fetuses from './business/Fetuses';
import DownScreen from './business/DownScreen';

interface MyComponent{
  [key:string]: any
}

const MyComponent:MyComponent = {
  "input": MyInput,
  "date": MyDateTime,
  "select": MySelect,
  "checkbox": MyCheckbox,
  "table": MyTable,

  "b-custom": MyCustom,

  "b-fetuses": Fetuses,
  "b-downscreen": DownScreen
}

export default MyComponent