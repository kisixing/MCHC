import React from 'react';
import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import WithDynamicExport from '@/components/WithDynamicExport';
import BaseEditPanel from '@/components/BaseEditPanel';

export class Pregnancies extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'pregnancies',
    moduleName: 'pregnancy',
    title: '孕册',
    toApi,
    fromApi,
    Form,
  };
}

export default WithDynamicExport(Pregnancies);
