import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';
import { formDescriptionsFromApi, formDescriptionsWithoutSectionApi } from '@/utils/adapter';

import { get } from 'lodash';
import request from '@/utils/request';

@WithDynamicExport
export default class BirthInformationPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'child-exam-visits',
    moduleName: 'birthInformation',
    title: false,
    toApi,
    fromApi,
    Form,
  };

  async componentDidMount() {
    const { location, moduleName, baseUrl, fromApi, data } = this.props;
    console.log('7777777777', data)

    const formDescriptions = formDescriptionsFromApi(await request.get(`/form-descriptions?moduleName=${moduleName}`));
    const formDescriptionsWithoutSection = formDescriptionsWithoutSectionApi(formDescriptions);
    this.setState({ formDescriptions, formDescriptionsWithoutSection, data:fromApi(get(data, 'childArchives'), formDescriptionsWithoutSection) });
  }
}
