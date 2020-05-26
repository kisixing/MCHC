import React from 'react';
import { Form, Button } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';
import DynamicForm from '@/components/BaseModalForm/DynamicForm';
import styles from './index.less';

interface S {}
interface P {
  onSearch?: (value: any) => void;
}

export default class BaseQuery extends DynamicForm<P, S> {
  formDescriptions = {};

  formItemLayout = {
    labelCol: {},
    wrapperCol: {},
  };

  renderEditItem = (key: string, ReactNode: React.ReactNode, others?: object) => {};

  renderContent = () => {};

  handleReset = () => {
    this.form && this.form.resetFields();
    this.handleSearch();
  };

  handleSearch = (values = {}) => {
    const { onSearch } = this.props;
    onSearch && onSearch(values);
  };

  renderResetBtn = () => (
    <Form.Item>
      <Button size="small" icon={<RedoOutlined />} onClick={this.handleReset}>
        重置
      </Button>
    </Form.Item>
  );

  renderSearchBtn = () => (
    <Form.Item>
      <Button size="small" type="primary" icon={<SearchOutlined />} htmlType="submit">
        查询
      </Button>
    </Form.Item>
  );

  render() {
    return (
      <Form className={styles.baseQuery} ref={this.formRef} layout="inline" onFinish={this.handleSearch}>
        {this.renderContent()}
        {this.renderResetBtn()}
        {this.renderSearchBtn()}
      </Form>
    );
  }
}
