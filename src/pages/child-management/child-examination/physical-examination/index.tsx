import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class PhysicalExaminationPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: '/child-exam-visits',
    moduleName: 'physicalExamination',
    title: '体格检查',
    toApi,
    fromApi,
    Form,
  };
}
