import React from 'react';
import { Form, Button, Modal, Input, message } from 'antd';
import request from '@/utils/request';

interface IProps {
  currentUser: any
  visible: boolean;
  onCancel: () => void;
}

export const PasswordModal = (props: IProps) => {
  const { currentUser, visible, onCancel } = props;

  const onFinish = ({ currentPassword, newPassword, newPasswordAgain }) => {
    const userid = currentUser.id;
    if (newPassword !== newPasswordAgain) {
      return message.warning('新密码不一致');
    }
    request
      .post('/account/change-password', {
        data: {
          currentPassword,
          newPassword,
        },
      })
      .then(res => {
        message.success('密码修改成功');
        onCancel();
      })
      .catch(err => {
        message.warning('旧密码错误');
      });
    // console.log('Success:', values);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };
  return (
    <Modal
      centered
      destroyOnClose
      visible={visible}
      title="密码修改"
      footer={null}
      okText="创建"
      cancelText="取消"
      onCancel={onCancel}
    >
      <Form {...formItemLayout} layout="horizontal" onFinish={onFinish}>
        <Form.Item label="旧密码" name="currentPassword" rules={[{ required: true, message: '请输入旧密码!' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item label="新密码" name="newPassword" rules={[{ required: true, message: '请输入新密码!' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="再次输入新密码"
          name="newPasswordAgain"
          rules={[{ required: true, message: '请再次输入新密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <div style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">
            确认
          </Button>
          <Button style={{ marginLeft: '24px' }} onClick={onCancel}>
            取消
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default PasswordModal;
