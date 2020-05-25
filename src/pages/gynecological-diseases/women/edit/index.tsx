import React from 'react';
import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class WifePanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'gynecological-patients',
    moduleName: 'premarital-care-wife',
    title: '女方档案',
    toApi,
    fromApi,
    Form,
  };
}
