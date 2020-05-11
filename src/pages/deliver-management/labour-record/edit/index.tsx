import React from 'react';
import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

export class Panel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'labour-records',
    moduleName: 'deliverForm',
    title: '分娩记录',
    toApi,
    fromApi,
    Form,
  };
}

export default WithDynamicExport(Panel);
