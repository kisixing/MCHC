import React from 'react';
import Form from '@/components/BaseEditPanel/BaseEditPanelForm';
// import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class AndrologyExam extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'admissions',
    moduleName: 'AndrologyExam',
    title: '男科检查',
    // toApi,
    // fromApi,
    Form,
  };
}
