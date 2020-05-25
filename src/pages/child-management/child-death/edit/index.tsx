import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class ChildDeathPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'child-deaths',
    moduleName: 'child-death',
    title: '儿童死亡登记',
    toApi,
    fromApi,
    Form,
  };
}
