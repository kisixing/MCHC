import React from 'react';
import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class WifePanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'maternal-deaths',
    moduleName: 'puerperalCheck',
    title: '添加产后42天检查',
    toApi,
    fromApi,
    Form,
  };
}
