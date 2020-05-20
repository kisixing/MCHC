import React, { useState, useEffect } from 'react';
import { get, isEmpty } from 'lodash';
import DictionarySelect from '@/components/GeneralComponents/DictionarySelect';

interface IProps {
  config?: any;
  value?: any;
  onChange?: any;
}

// 适配字典的 select 或者 checkbox 或者 radio
export default (props: IProps) => {
  const [data, setData] = useState({});

  const config = get(props, 'config');
  const specialConfig = get(config, 'special_config') && JSON.parse(get(config, 'special_config'));

  useEffect(() => {
    const { value } = props;
    // console.log(value);
    if (!isEmpty(value)) {
      setData({
        selectedData: get(value, 'key'),
        otherNote: get(value, 'keyNote'),
      });
    }
  }, [props.value]);

  const handleChange = (callbackData: any) => {
    const { onChange } = props;
    // console.log(callbackData);
    const newData = {
      key: get(callbackData, 'selectedData'),
      keyNote: get(callbackData, 'otherNote'),
    };
    setData(newData);
    onChange && onChange(newData);
  };

  return <DictionarySelect onChange={handleChange} value={data} {...specialConfig} />;
};
