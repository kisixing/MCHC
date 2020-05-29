import React from 'react';
import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class WifePanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'maternal-deaths',
    moduleName: 'maternalDeath',
    title: '孕产妇死亡登记',
    toApi,
    fromApi,
    Form,
  };
}
