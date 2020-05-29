import React, { Fragment } from 'react';
import BaseQuery from '@/components/BaseQuery';
import { Input } from 'antd';
import { queryFormDescriptions as formDescriptions } from '../config/form';

export default class Query extends BaseQuery {
  renderEditItem = this.generateRenderEditItem(formDescriptions, {
    formItemLayout: this.formItemLayout,
  });

  renderContent = () => {
    return (
      <Fragment>
        {this.renderEditItem('id', <Input placeholder="请输入ID" />)}
        {this.renderEditItem('section_id', <Input placeholder="请输入所属模块ID" />)}
        {this.renderEditItem('key', <Input placeholder="请输入key" />)}
        {this.renderEditItem('label', <Input placeholder="请输入标签名称" />)}
      </Fragment>
    );
  };
}
