/*
 * @Description: pdf预览组件 文档参考https://github.com/wojtekmaj/react-pdf
 * @Author: Zhong Jun
 * @Date: 2020-05-12 17:58:27
 */

import React from 'react';
import Router from 'umi/router';
import { ActivityIndicator, Modal } from 'antd-mobile';
import { Document, Page } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import styles from './View.less';

const options = {
  // 有pdf不支持的字体格式，可以通过引入pdf.js的字体来解决该问题
  // 1.cdn --> https://cdn.jsdelivr.net/npm/pdfjs-dist@2.1.266/cmaps/
  // 2.cdn --> https://cdn.bootcss.com/pdf.js/2.4.456/pdf.min.js
  // 2.本地 --> ./cmaps/
  // cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`, // '/pdfjs-dist/cmaps/',
  cMapPacked: true,
};
const SAMPLE = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';

interface IProps {
  file?: string
}

export default function Preview({ file }: IProps) {
  const [pageNumber, setPageNumber] = React.useState(1);
  const [numPages, setNumPages] = React.useState(null);

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  const onDocumentLoadError = ({ message }: any) => {
    Modal.alert('错误提示', <div style={{ wordBreak: 'break-word' }}>{message}</div>, [
      { text: '确定', onPress: () => Router.goBack() },
    ]);
  };

  return (
    <div className={styles.container}>
      <Document
        className={styles.document}
        file={file}
        options={options}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        // renderMode="canvas"
        loading={
          <div style={{ marginTop: '2em' }}>
            <ActivityIndicator text="文件加载中，请稍等..." />
          </div>
        }
        error={<div style={{ marginTop: '2em' }}>加载PDF文件失败。</div>}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} className={styles.page} scale={2.5} />
        ))}
      </Document>
    </div>
  );
}
