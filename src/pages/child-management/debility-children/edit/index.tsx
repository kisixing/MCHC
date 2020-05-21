import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class HearingScreeningPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'husbands',
    moduleName: 'hearingScreening',
    title: '营养性疾病儿童',
    toApi,
    fromApi,
    Form,
  };
}
