import React from 'react';
import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import { get } from 'lodash';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';
import request from '@/utils/request';
import { message } from 'antd';

@WithDynamicExport
export default class AdmissionPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'admissions',
    moduleName: 'admission',
    title: '剖宫产记录',
    toApi,
    fromApi,
    Form,
  };

  handleSubmit = async (values: any) => {
    const { data, formDescriptionsWithoutSection } = this.state;
    const { toApi, baseUrl, title, labourRecordId } = this.props;
    const id = get(values, 'id');
    const labourRecordInfo = id
      ? {}
      : {
          labourRecord: { id: labourRecordId },
        };
    const params = toApi(
      {
        ...data,
        ...values,
        ...labourRecordInfo,
      },
      formDescriptionsWithoutSection,
    );
    if (id) {
      await request.put(`/${baseUrl}`, { data: params });
      message.success(`修改${title}成功`);
    } else {
      await request.post(`/${baseUrl}`, { data: params });
      message.success(`新增${title}成功`);
    }
  };
}
