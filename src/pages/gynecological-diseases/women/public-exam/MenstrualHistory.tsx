import React from 'react';
import Form from '@/components/BaseEditPanel/BaseEditPanelForm';
import { toApi, fromApi } from './adapter';
import { get } from 'lodash';
import BaseEditPanel, { IProps as BaseEditPanelIProps } from '@/components/BaseEditPanel';
import { formDescriptionsFromApi, formDescriptionsWithoutSectionApi } from '@/utils/adapter';
import request from '@/utils/request';
import { message } from 'antd';
import { connect } from 'dva';

interface IProps extends BaseEditPanelIProps {
  data?: any;
}

export class MenstrualHistory extends BaseEditPanel<IProps> {
  static defaultProps = {
    baseUrl: 'gynecological-visits',
    moduleName: 'gynecologicalDiseasesMenstrualHistory',
    title: '月经史',
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
      data: fromApi(get(data, 'menstrualHistory'), formDescriptionsWithoutSection),
    });
  }

  handleSubmit = async (values: any) => {
    const { data: propsData } = this.props;
    const { data, formDescriptionsWithoutSection } = this.state;
    const { title, baseUrl } = this.props;
    const menstrualHistory = toApi(
      {
        ...data,
        ...values,
      },
      formDescriptionsWithoutSection,
    );
    const params = get(propsData, 'id')
      ? {
          id: get(propsData, 'id'),
          menstrualHistory,
        }
      : {
          menstrualHistory,
          gynecologicalPatient: { id: get(propsData, 'gynecologicalPatient.id') },
        };
    if (get(params, 'id')) {
      await request.put(`/${baseUrl}`, {
        data: params,
      });
      message.success(`修改${title}成功`);
    } else {
      const result = await request.post(`/${baseUrl}`, { data: params });
      const { dispatch } = this.props;
      await dispatch({
        type: 'ids/changeWomenExamRecordsEditingId',
        payload: {
          womenExamRecordsEditingId: get(result, 'id'),
        },
      });
      message.success(`新增${title}成功`);
    }
  };
}

export default connect()(MenstrualHistory);
