import BaseEditPanelForm from '@/components/BaseEditPanel/BaseEditPanelForm';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class Form extends BaseEditPanelForm {
  static defaultProps = { hideTitle: true };
}
