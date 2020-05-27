import React from 'react';
import { Card, Typography, Alert } from 'antd';

export default (): React.ReactNode => (
  <Card style={{ height: 'calc(100vh - 133px)' }}>
    <Alert
      message="管理平台现已发布，点击左侧菜单体验所有功能吧。"
      type="success"
      showIcon
      banner
      style={{
        margin: -12,
        marginBottom: 24,
      }}
    />
    <Typography.Text strong></Typography.Text>
  </Card>
);
