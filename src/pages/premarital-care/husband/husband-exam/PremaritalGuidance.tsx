import React from 'react';
import Form from '@/components/BaseEditPanel/BaseEditPanelForm';
// import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class PremaritalGuidance extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'admissions',
    moduleName: 'PremaritalGuidance',
    title: '婚前指导',
    // toApi,
    // fromApi,
    Form,
  };
}
