import React, { Fragment } from 'react';
import BaseQuery from '@/components/BaseQuery';
import { Input, DatePicker } from 'antd';
import { queryFormDescriptions as formDescriptions } from '../config/form';

export default class Query extends BaseQuery {
  renderEditItem = this.generateRenderEditItem(formDescriptions, {
    formItemLayout: this.formItemLayout,
  });

  renderContent = () => {
    return (
      <Fragment>
        {this.renderEditItem('caseNO', <Input placeholder="请输入编号" />)}
        {this.renderEditItem('name', <Input placeholder="请输入孕妇姓名" />)}
        {this.renderEditItem('birthDate', <DatePicker placeholder="请输入出生日期" />)}
      </Fragment>
    );
  };
}
