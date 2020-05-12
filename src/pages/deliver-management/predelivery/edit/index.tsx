import React from 'react';
import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class AdmissionPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'admissions',
    moduleName: 'admission',
    title: '待产记录',
    toApi,
    fromApi,
    Form,
  };
}
