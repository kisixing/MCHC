import { message } from 'antd';
import { get } from 'lodash';

import Form from './components/Form';
import { toApi, fromApi } from './config/adapter';
import BaseEditPanel from '@/components/BaseEditPanel';
import WithDynamicExport from '@/components/WithDynamicExport';
import { processFromApi } from './config/adapter';
import request from '@/utils/request';

@WithDynamicExport
export default class ChildArchivePanel extends BaseEditPanel {
  static defaultProps = {
    baseUrl: 'child-archives',
    moduleName: 'childArchive',
    title: '儿童档案',
    toApi,
    fromApi,
    processFromApi,
    Form,
  };

  // handleSubmit = async (values: any) => {
  //   const { data, formDescriptionsWithoutSection } = this.state;
  //   const { toApi, baseUrl, title } = this.props;
  //   const params = toApi(
  //     {
  //       ...data,
  //       ...values,
  //     },
  //     formDescriptionsWithoutSection,
  //   );
  //   if (get(values, 'id')) {
  //     await request.put(`/${baseUrl}`, { data: params });
  //     message.success(`修改${title}成功`);
  //   } else {
  //     await request.post(`/${baseUrl}`, { data: params });
  //     message.success(`新增${title}成功`);
  //   }
  // };
}
