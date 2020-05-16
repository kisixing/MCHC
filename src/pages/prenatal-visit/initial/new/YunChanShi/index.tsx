import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class ChildArchivePanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'admissions',
    moduleName: 'initial',
    title: '孕产史',
    toApi,
    fromApi,
    Form,
  };
}
