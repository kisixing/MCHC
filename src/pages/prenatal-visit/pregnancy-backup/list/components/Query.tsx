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
        {this.renderEditItem('name', <Input placeholder="请输入孕妇姓名" />)}
        {this.renderEditItem('outpatientNO', <Input placeholder="请输入门诊号" />)}
        {this.renderEditItem('checkupNO', <Input placeholder="请输入产检编号" />)}
      </Fragment>
    );
  };
}
