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
  const { mode } = specialConfig;

  useEffect(() => {
    const { value } = props;
    let outputData = {};
    if (!isEmpty(value)) {
      if (mode === 'single') {
        outputData = {
          selectedData: get(value, 'key'),
          otherNote: get(value, 'keyNote'),
        };
      } else if (mode === 'multiple') {
        outputData = {
          selectedData: JSON.parse(get(value, 'key')),
          otherNote: get(value, 'keyNote'),
        };
      }
      setData(outputData);
    }
  }, [props.value]);

  const handleChange = (callbackData: any) => {
    const { onChange } = props;
    const newData = {
      key: get(callbackData, 'selectedData'),
      keyNote: get(callbackData, 'otherNote'),
    };
    setData(newData);
    let outputData;
    if (mode === 'single') {
      outputData = {
        key: get(callbackData, 'selectedData'),
        keyNote: get(callbackData, 'otherNote'),
      };
    } else if (mode === 'multiple') {
      outputData = {
        key: JSON.stringify(get(callbackData, 'selectedData')),
        keyNote: get(callbackData, 'otherNote'),
      };
    }
    onChange && onChange(outputData);
  };

  return <DictionarySelect onChange={handleChange} value={data} {...specialConfig} />;
};
