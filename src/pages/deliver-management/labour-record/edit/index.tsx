import React from 'react';
import Form from './components/Form';
import { get } from 'lodash';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';
import request from '@/utils/request';
import { message } from 'antd';

export class Panel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'labour-records',
    moduleName: 'deliverForm',
    title: '分娩记录',
    toApi,
    fromApi,
    Form,
  };

  handleSubmit = async (values: any) => {
    const { data, formDescriptionsWithoutSection } = this.state;
    const { toApi, baseUrl, title } = this.props;
    const admissionId = Number(get(this.props, 'admissionId')) || Number(get(data, 'admission.id'));
    const admission = admissionId
      ? {
          admission: {
            id: admissionId,
            ...get(data, 'admission'),
          },
        }
      : {};
    const params = toApi(
      {
        ...data,
        ...values,
        ...admission,
      },
      formDescriptionsWithoutSection,
    );
    if (get(values, 'id')) {
      await request.put(`/${baseUrl}`, { data: params });
      message.success(`修改${title}成功`);
    } else {
      await request.post(`/${baseUrl}`, { data: params });
      message.success(`新增${title}成功`);
    }
  };
}

export default WithDynamicExport(Panel);
