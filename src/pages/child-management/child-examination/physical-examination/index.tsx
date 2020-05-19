/**
 * 儿童体格检查
 */

import { message } from 'antd';
import moment from 'moment';
import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';
import { formDescriptionsFromApi, formDescriptionsWithoutSectionApi } from '@/utils/adapter';

import { get } from 'lodash';
import request from '@/utils/request';

@WithDynamicExport
export default class PhysicalExaminationPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: '/child-exam-visits',
    moduleName: 'premaritalCarePhysicalExamination',
    title: '体格检查',
    toApi,
    fromApi,
    Form,
  };

  async componentDidMount() {
    const { location, moduleName, baseUrl, fromApi, data, childArchivesData } = this.props;

    const formDescriptions = formDescriptionsFromApi(await request.get(`/form-descriptions?moduleName=${moduleName}`));
    const formDescriptionsWithoutSection = formDescriptionsWithoutSectionApi(formDescriptions);
    this.setState({
      formDescriptions,
      formDescriptionsWithoutSection,
      childArchives: childArchivesData,
      data: fromApi(get(data, 'childPhysicalExam'), formDescriptionsWithoutSection),
    });
  }

  handleSubmit = async (values: any) => {
    const { childArchives, id, setID } = this.props;
    const { data, formDescriptionsWithoutSection } = this.state;
    const { title, baseUrl } = this.props;
    const childPhysicalExam = toApi(
      values,
      formDescriptionsWithoutSection,
    );

    if (id) {
      await request.put(`${baseUrl}`, {
        data: { id, childPhysicalExam },
      });
      message.success(`修改${title}成功`);
    } else {
      const res = await request.post(`${baseUrl}`, {
        data: {
          visitType: 2,
          visitDate: moment().format('YYYY-MM-DD'),
          childArchives,
          childPhysicalExam,
        }
      });
      setID(res.id)
      message.success(`新增${title}成功`);
    }
  }
}
