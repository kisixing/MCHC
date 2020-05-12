/*
 * @Description: 儿童健康体检
 * @Author: Zhong Jun
 * @Date: 2020-05-12 16:37:53
 */

import React from 'react';

import PDFPreview from '@/components/PDFPreview';

function index() {
  return (
    <div className="page">
      <p>儿童健康体检</p>
      <PDFPreview file="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf" />
    </div>
  );
}

export default index
