import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class AuxiliaryExaminationPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: '',
    moduleName: 'auxiliaryExamination',
    title: '辅助检查',
    toApi,
    fromApi,
    Form,
  };
}
