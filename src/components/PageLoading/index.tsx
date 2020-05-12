import React from 'react';
import { Spin } from 'antd';

const PageLoading: React.FC<{
  tip?: string;
}> = ({ tip }) => (
  <div style={{ width: '100&', height: '100%',  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Spin size="large" tip={tip} />
  </div>
);

export default PageLoading;
