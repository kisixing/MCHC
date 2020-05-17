import React from 'react';
import Form from '@/components/BaseEditPanel/BaseEditPanelForm';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class PhysicalExam extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'husbands',
    moduleName: 'premaritalCarePhysicalExamination',
    title: '体格检查',
    // toApi,
    // fromApi,
    Form,
  };
}
