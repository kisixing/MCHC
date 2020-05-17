import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class GeneralExaminationPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: '/child-exam-visits',
    moduleName: 'generalExamination',
    title: '内科检查',
    toApi,
    fromApi,
    Form,
  };
}
