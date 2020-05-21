import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';

export class HighRiskInfantPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'labour-records',
    moduleName: 'highRiskInfant',
    title: '高危儿管理',
    toApi,
    fromApi,
    Form,
  };
}

export default WithDynamicExport(HighRiskInfantPanel);
