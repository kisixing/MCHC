import React from 'react';
import Form from '@/components/BaseEditPanel/BaseEditPanelForm';
import { toApi, fromApi } from './adapter';
import { get } from 'lodash';
import BaseEditPanel, { IProps as BaseEditPanelIProps } from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';
import { formDescriptionsFromApi, formDescriptionsWithoutSectionApi } from '@/utils/adapter';
import request from '@/utils/request';
import { message } from 'antd';

interface IProps extends BaseEditPanelIProps {
  data?: any;
  type: 'wife' | 'husband';
}

@WithDynamicExport
export default class PhysicalExam extends BaseEditPanel<IProps> {
  static defaultProps = {
    baseUrl: 'premarital-visits',
    moduleName: 'premaritalCarePhysicalExamination',
    title: '体格检查',
    // toApi,
    // fromApi,
    Form,
  };

  async componentDidMount() {
    const { data, moduleName } = this.props;
    const formDescriptions = formDescriptionsFromApi(await request.get(`/form-descriptions?moduleName=${moduleName}`));
    const formDescriptionsWithoutSection = formDescriptionsWithoutSectionApi(formDescriptions);
    this.setState({
      formDescriptions,
      formDescriptionsWithoutSection,
      data: fromApi(get(data, 'premaritalVisit.physicalExam'), formDescriptionsWithoutSection),
    });
  }

  handleSubmit = async (values: any) => {
    const { data: personData } = this.props;
    const { data, formDescriptionsWithoutSection } = this.state;
    const { type, title, baseUrl } = this.props;
    const physicalExam = toApi(
      {
        ...data,
        ...values,
      },
      formDescriptionsWithoutSection,
    );
    const params = {
      ...get(personData, 'premaritalVisit'),
      physicalExam,
      [type]: { id: get(personData, 'id') },
    };
    if (type === 'wife' || type === 'husband') {
      if (get(params, 'id')) {
        await request.put(`/${baseUrl}`, {
          data: params,
        });
        message.success(`修改${title}成功`);
      } else {
        await request.post(`/${baseUrl}`, { data: params });
        message.success(`新增${title}成功`);
      }
    }
  };
}
