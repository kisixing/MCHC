/**
 * 儿童辅助检查
 */
import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';
import { formDescriptionsFromApi, formDescriptionsWithoutSectionApi } from '@/utils/adapter';
import { message } from 'antd';
import { get } from 'lodash';
import request from '@/utils/request';

@WithDynamicExport
export default class AuxiliaryExaminationPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: '/child-exam-visits',
    moduleName: 'auxiliaryExamination',
    title: '辅助检查',
    toApi,
    fromApi,
    Form,
  };

  async componentDidMount() {
    const { location, moduleName, baseUrl, fromApi, data } = this.props;

    const formDescriptions = formDescriptionsFromApi(await request.get(`/form-descriptions?moduleName=${moduleName}`));
    const formDescriptionsWithoutSection = formDescriptionsWithoutSectionApi(formDescriptions);
    this.setState({ formDescriptions, formDescriptionsWithoutSection, data:fromApi(get(data, 'childExam'), formDescriptionsWithoutSection) });
  }

  handleSubmit = async (values: any) => {
    const { data: personData, id } = this.props;
    const { data, formDescriptionsWithoutSection } = this.state;
    const { title, baseUrl } = this.props;
    const childExam = toApi(
      values,
      formDescriptionsWithoutSection,
    );

    if (id) {
      await request.put(`${baseUrl}`, {
        data: { id, childExam },
      });
      message.success(`修改${title}成功`);
    } else {
      await request.post(`${baseUrl}`, { data: { childExam } });
      message.success(`新增${title}成功`);
    }
  }
}
