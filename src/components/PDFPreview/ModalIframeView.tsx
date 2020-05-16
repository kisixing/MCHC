/*
 * @Description: pdf.js原始示例，包括打印
 * @Author: Zhong Jun
 * @Date: 2020-05-15 18:19:02
 */

import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import IframeView from './IframeView';
import styles from './View.less';

interface IProps {
  file?: string
  width?: string | number
  children?: React.ReactNode
}

function ModalIframeView({ file, width = '856px', children = '预览按钮' }: IProps) {
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
        title="打印预览"
        width={width}
        visible={visible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
        wrapClassName={styles.modalWrap}
      >
        <IframeView file={file} />
      </Modal>
    </>
  );
}

export default ModalIframeView;
