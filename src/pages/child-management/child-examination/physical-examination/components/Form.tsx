import BaseEditPanelForm from '@/components/BaseEditPanel/BaseEditPanelForm';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class AdmissionForm extends BaseEditPanelForm {
  static defaultProps = { hideTitle: true };
}
