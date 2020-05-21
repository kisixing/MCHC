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
        {this.renderEditItem('visitDate', <DatePicker size="small" placeholder="请选择监测时间" />)}
        {this.renderEditItem('name', <Input size="small" placeholder="请输入儿童姓名" />)}
        {this.renderEditItem('motherName', <Input size="small" placeholder="请输入母亲姓名" />)}
      </Fragment>
    );
  };
}
