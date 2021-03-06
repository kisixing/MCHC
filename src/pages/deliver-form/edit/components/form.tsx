import React from 'react';
import DynamicForm from '@/components/BaseModalForm/DynamicForm';
import { Form, Divider, Button } from 'antd';
import { get, map } from 'lodash';
import FormSection from '@/components/BaseModalForm/FormSection';
import { FormInstance } from 'antd/lib/form';

const formItemLayout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 14,
  },
};

interface IProps {
  data: any;
  formDescriptionsWithoutSection: any;
  formDescriptions: any;
  onFinish: (data: any) => void;
}

interface IState {}

export default class PregnanciesForm extends DynamicForm<IProps, IState> {
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

  handleFinish = async () => {
    const form = (this.form as unknown) as FormInstance;
    const { onFinish, data } = this.props;
    // form && (await form.validateFields());
    const params = {
      ...form.getFieldsValue(),
      id: get(data, 'id'),
    };
    console.log(params);
    onFinish && onFinish(params);
  };

  renderSection = (section: any) => {
    const { data } = this.props;
    return (
      <>
        <Divider key={`${get(section, 'flag')}-divider`} orientation="left">
          {get(section, 'name')}
        </Divider>
        {this.form && (
          <FormSection
            key={`${get(section, 'flag')}-section`}
            data={data}
            formDescriptions={get(section, 'fields')}
            renderEditItem={this.renderEditItem as any}
            form={this.form}
          />
        )}
      </>
    );
  };

  renderEditContent = () => {
    const { formDescriptions } = this.props;
    return (
      <>
        {map(formDescriptions, section => {
          return this.renderSection(section);
        })}
      </>
    );
  };

  render() {
    return (
      <Form style={{ minWidth: '90%' }} ref={this.formRef} {...formItemLayout}>
        {this.renderEditContent()}
        <Form.Item key="action" wrapperCol={{ span: 4 }} style={{ display: 'flex', flexFlow: 'row-reverse' }}>
          <Button size="middle" htmlType="reset" style={{ marginLeft: 8 }}>
            重置
          </Button>
          <Button size="middle" style={{ marginLeft: 8 }} type="primary" htmlType="submit" onClick={this.handleFinish}>
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
