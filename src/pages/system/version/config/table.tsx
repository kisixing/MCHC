import React from 'react';
import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
  {
    title: '版本号',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '版本类型',
    dataIndex: 'type',
    key: 'type',
    align: 'center',
  },
  {
    title: '地址',
    dataIndex: 'uri',
    key: 'uri',
    render: (value: any) => (
      <a href={value} target="_blank" rel="noopener noreferrer">
        {value}
      </a>
    ),
  },
  {
    title: '版本描述',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: '更新时间',
    dataIndex: 'modifiedDate',
    key: 'modifiedDate',
    align: 'center',
    render: (value: any) => formatTimeToStandard(value),
  },
];
