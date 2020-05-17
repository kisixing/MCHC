import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class BirthInformationPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: '',
    moduleName: 'birthInformation',
    title: false,
    toApi,
    fromApi,
    Form,
  };
}
