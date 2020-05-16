/*
 * @Description: 弹窗pdf预览
 * @Author: Zhong Jun
 * @Date: 2020-05-15 17:04:20
 */

import React from 'react';

interface IProps {
  file?: string
  styles?: any
}

function IframeView({ file, styles = { height: 'calc(100vh - 50px)' } }: IProps) {
  return <iframe title="pdfView" width="856" style={styles} src={`/pdfjs-dist/web/viewer.html?file=${file}`} />;
}

export default IframeView;
