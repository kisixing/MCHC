import React from 'react';
import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';
import { get, map } from 'lodash';
import { formDescriptionsFromApi, formDescriptionsWithoutSectionApi } from '@/utils/adapter';
import request from '@/utils/request';
import { message } from 'antd';

@WithDynamicExport
export default class NeonateRecordPanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'noenate-records',
    moduleName: 'neonateRecordPage',
    title: '新生儿记录',
    toApi,
    fromApi,
    Form,
  };

  async componentDidMount() {
    const { moduleName, baseUrl, labourRecordId } = this.props;
    // 目前仅作为组件，被其它页面引用使用
    const data = {
      noenateRecord: await request.get(`/${baseUrl}?labourRecordId.equals=${labourRecordId}`),
    };
    // TODO: 上线的时候，考虑把配置文件放在项目中，而不是通过接口获取
    const formDescriptions = formDescriptionsFromApi(await request.get(`/form-descriptions?moduleName=${moduleName}`));
    const formDescriptionsWithoutSection = formDescriptionsWithoutSectionApi(formDescriptions);
    this.setState({ formDescriptions, formDescriptionsWithoutSection, data });
  }

  handleSubmit = async (values: any) => {
    const { data } = this.state;
    const { labourRecordId, title, baseUrl } = this.props;
    // 获取新生儿组件的配置信息
    const formDescriptions = formDescriptionsFromApi(
      await request.get(`/form-descriptions?moduleName=neonateRecordConfig`),
    );
    const formDescriptionsWithoutSection = formDescriptionsWithoutSectionApi(formDescriptions);
    const noenateRecords = map(get(values, 'noenateRecord'), (item: any, key: any) => {
      return toApi(
        {
          ...get(data, `noenateRecord.${key}`),
          ...item,
        },
        formDescriptionsWithoutSection,
      );
    });

    const method = labourRecordId ? 'put' : 'post';
    const tip = labourRecordId ? `修改${title}成功` : `添加${title}成功`;

    await request[method](`/labour-records`, {
      data: {
        id: labourRecordId,
        noenateRecords,
      },
    });
    // const newNoenateRecord = {
    //   noenateRecord: await request.get(`/${baseUrl}?labourRecordId.equals=${labourRecordId}`),
    // };
    // this.setState({
    //   newNoenateRecord,
    // });
    message.success(tip);
  };
}
