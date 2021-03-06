import React from 'react';
import { message } from 'antd';
import { get } from 'lodash';

import request from '@/utils/request';
import { formDescriptionsFromApi, formDescriptionsWithoutSectionApi } from '@/utils/adapter';
import observePatientData from '@/utils/observePatientData';
import styles from './index.less';

export interface IProps {
  location?: any;
  moduleName?: string;
  title?: string;
  baseUrl?: string;
  fromApi?: any;
  toApi?: any;
  Form?: any;
}

export default class BaseEditPanel<P extends IProps = {}> extends React.Component<IProps & P> {
  state = {
    data: {},
    formDescriptionsWithoutSection: [],
    formDescriptions: [],
  };

  async componentDidMount() {
    const { location, moduleName, baseUrl, fromApi } = this.props;

    // 订阅从 panel 获取的数据
    observePatientData.subscribe((data: any) => {
      const { data: prevData } = this.state;
      this.setState({
        data: {
          ...prevData,
          ...data,
        },
      });
    });
    // 优先从 props 里面获取id，因为可能作为组件，被其它页面引用使用
    const id = get(this.props, 'id') || get(location, 'query.id');
    // TODO: 上线的时候，考虑把配置文件放在项目中，而不是通过接口获取
    const formDescriptions = formDescriptionsFromApi(await request.get(`/form-descriptions?moduleName=${moduleName}`));
    const formDescriptionsWithoutSection = formDescriptionsWithoutSectionApi(formDescriptions);
    const data = id ? fromApi(await request.get(`/${baseUrl}/${id}`), formDescriptionsWithoutSection) : {};
    this.setState({ formDescriptions, formDescriptionsWithoutSection, data });
  }

  // 卸载的时候取消订阅
  componentWillUnmount() {
    observePatientData.unSubscribe();
  }

  handleSubmit = async (values: any) => {
    const { data, formDescriptionsWithoutSection } = this.state;
    const { toApi, baseUrl, title } = this.props;
    const params = await toApi(
      {
        ...data,
        ...values,
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

  render() {
    const { Form } = this.props;
    const { formDescriptions, formDescriptionsWithoutSection, data } = this.state;
    return (
      <div className={styles.baseEditPanel}>
        <Form
          key={get(data, 'id') || Math.random()}
          data={data}
          onFinish={this.handleSubmit}
          formDescriptions={formDescriptions}
          formDescriptionsWithoutSection={formDescriptionsWithoutSection}
        />
      </div>
    );
  }
}
