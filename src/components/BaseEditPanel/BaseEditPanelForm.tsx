import React from 'react';
import { Form, Divider, Button } from 'antd';
import { FileTextOutlined, RedoOutlined } from '@ant-design/icons';
import { get, map, isFunction } from 'lodash';
import { FormInstance } from 'antd/lib/form';

import DynamicForm from '@/components/BaseModalForm/DynamicForm';
import FormSection from '@/components/BaseModalForm/FormSection';

import styles from './index.less';

const formItemLayout = {
  layout: 'horizontal',
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

interface IProps {
  hideTitle?: boolean;
  data: any;
  formDescriptionsWithoutSection: any;
  formDescriptions: any;
  onFinish: (data: any) => void;
}

interface IState {}

export default class BaseEditPanelForm extends DynamicForm<IProps, IState> {
  form: FormInstance | null = null;

  renderEditItem: ((key: string, ReactNode: React.ReactNode, others: object) => React.ReactNode) | null = null;

  componentDidMount() {
    const { data, formDescriptionsWithoutSection } = this.props;
    this.form = this.formRef.current;
    this.form && this.form.setFieldsValue(data);
    this.renderEditItem = this.generateRenderEditItem(formDescriptionsWithoutSection, {
      formItemLayout,
    });
    // 强制渲染获取 form
    this.forceUpdate();
  }

  // 可能需要从外部更新获取数据
  componentWillReceiveProps(nextProps: any) {
    this.form &&
      this.form.setFieldsValue({
        ...this.form.getFieldsValue(),
        ...get(nextProps, 'data'),
      });
  }

  handleReset = () => {
    const form = (this.form as unknown) as FormInstance;
    form.resetFields();
  };

  handleFinish = async () => {
    const form = (this.form as unknown) as FormInstance;
    const { onFinish, data } = this.props;
    form && (await form.validateFields());
    const params = {
      ...form.getFieldsValue(),
      id: get(data, 'id'),
    };
    onFinish && onFinish(params);
  };

  getEvents = (): object => {
    return {};
  };

  renderSection = (section: any) => {
    const { data, hideTitle } = this.props;
    return (
      <>
        {!hideTitle && (
          <Divider key={`${get(section, 'flag')}-divider`} orientation="left">
            {get(section, 'name')}
          </Divider>
        )}
        {this.form && (
          <FormSection
            key={`${get(section, 'flag')}-section`}
            data={data}
            formDescriptions={get(section, 'fields')}
            renderEditItem={this.renderEditItem as any}
            form={this.form}
            events={isFunction(this.getEvents) && this.getEvents()}
          />
        )}
      </>
    );
  };

  renderEditContent = () => {
    const { formDescriptions } = this.props;
    return (
      <>
        {map(formDescriptions, (section, index) => {
          return <div key={index}>{this.renderSection(section)}</div>;
        })}
      </>
    );
  };

  render() {
    return (
      <Form
        style={{ width: '90%', paddingTop: this.props.hideTitle ? '24px' : 0 }}
        ref={this.formRef}
        {...formItemLayout}
      >
        {this.renderEditContent()}
        <Form.Item key="action" wrapperCol={{ span: 21 }} className={styles.buttons}>
          <Button ghost type="primary" htmlType="reset" icon={<RedoOutlined />} onClick={this.handleReset}>
            重置
          </Button>
          <Button type="primary" icon={<FileTextOutlined />} htmlType="submit" onClick={this.handleFinish}>
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
