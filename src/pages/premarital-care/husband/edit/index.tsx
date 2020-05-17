import React from 'react';
import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class HusbandPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'husbands',
    moduleName: 'premarital-care-husband',
    title: '男方档案',
    toApi,
    fromApi,
    Form,
  };
}
