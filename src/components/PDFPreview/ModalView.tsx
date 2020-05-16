/*
 * @Description: 只显示预览，不包含打印功能
 * @Author: Zhong Jun
 * @Date: 2020-05-15 18:19:02
 */

import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import View from './View';
import styles from './View.less';

interface IProps {
  file?: string;
  width?: string | number;
  children?: React.ReactNode
}

function ModalView({ file, width = '210mm', children = '预览按钮' }: IProps) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {children}
      </Button>
      <Modal
        centered
        destroyOnClose={true}
        title="预览"
        width={width}
        visible={visible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
        wrapClassName={styles.modalWrap}
      >
        <View file={file} />
      </Modal>
    </>
  );
}

export default ModalView;
