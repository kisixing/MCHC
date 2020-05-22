import React from 'react';
import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class Panel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'cervical-cancers',
    moduleName: 'cervicalCancer',
    title: '宫颈癌筛查情况',
    toApi,
    fromApi,
    Form,
  };
}
