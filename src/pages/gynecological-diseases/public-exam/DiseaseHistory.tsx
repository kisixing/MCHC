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
  baseUrl: 'wives' | 'husbands';
}

@WithDynamicExport
export default class PhysicalExam extends BaseEditPanel<IProps> {
  static defaultProps = {
    baseUrl: '',
    moduleName: 'premaritalCareDiseaseHistory',
    title: '病史信息',
    // toApi,
    // fromApi,
    Form,
  };

  async componentDidMount() {
    const { data, moduleName } = this.props;
    const formDescriptions = formDescriptionsFromApi(await request.get(`/form-descriptions?moduleName=${moduleName}`));
    const formDescriptionsWithoutSection = formDescriptionsWithoutSectionApi(formDescriptions);
    const newData = fromApi(data, formDescriptionsWithoutSection);
    this.setState({
      formDescriptions,
      formDescriptionsWithoutSection,
      data: {
        ...newData,
        maritalHistory: JSON.stringify({
          0: get(newData, 'maritalHistory.graviditycount'),
          1: get(newData, 'maritalHistory.child'),
        }),
      },
    });
  }

  handleSubmit = async (values: any) => {
    const { formDescriptionsWithoutSection } = this.state;
    const { type, title, baseUrl, data: propsData } = this.props;
    const { maritalHistory: maritalHistoryStr } = values;
    const maritalHistoryJson = JSON.parse(maritalHistoryStr);

    const params = toApi(
      {
        ...values,
        id: get(propsData, 'id'),
        maritalHistory: {
          graviditycount: get(maritalHistoryJson, '0'),
          child: get(maritalHistoryJson, '1'),
        },
      },
      formDescriptionsWithoutSection,
    );
    if (get(params, 'id')) {
      await request.put(`/${baseUrl}`, {
        data: params,
      });
      message.success(`修改${title}成功`);
    } else {
      await request.post(`/${baseUrl}`, { data: params });
      message.success(`新增${title}成功`);
    }
  };
}
