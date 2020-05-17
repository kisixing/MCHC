import React from 'react';
import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class NeonateRecordPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'noenate-records',
    moduleName: 'neonateRecordConfig',
    title: '新生儿记录',
    toApi,
    fromApi,
    Form,
  };
}
