/*
 * @Description: bizcharts图标示例
 * @Author: Zhong Jun
 * @Date: 2020-05-14 17:19:53
 */

import React from 'react';
import { Row, Col } from 'antd';

import { Bar } from '@/components/Charts';
import { ModalView, ModalIframeView } from '@/components/PDFPreview';

import styles from './index.less';

const data = [
  {
    year: '1951 年',
    sales: 38,
  },
  {
    year: '1952 年',
    sales: 52,
  },
  {
    year: '1956 年',
    sales: 61,
  },
  {
    year: '1957 年',
    sales: 145,
  },
  {
    year: '1958 年',
    sales: 48,
  },
  {
    year: '1959 年',
    sales: 38,
  },
  {
    year: '1960 年',
    sales: 38,
  },
  {
    year: '1962 年',
    sales: 38,
  },
];

function Bizcharts() {

  return (
    <div className="page">
      <p>bizcharts图标示例</p>
      <Row gutter={[12, 12]}>
        <Col className="gutter-row" span={6}>
          <div className={styles.item}>
            <Bar dataSource={data} />
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={styles.item}>col-6666666</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={styles.item}>col-66666666</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={styles.item}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={styles.item}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={styles.item}>
            <ModalIframeView file="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf">
              iframe view
            </ModalIframeView>
            <ModalView file="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf">
              nomal view
            </ModalView>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={styles.item}>
            <a
              href={
                '/pdfjs-dist/web/viewer.html?file=https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'
              }
              target="view_window"
            >
              {' '}
              在线预览{' '}
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Bizcharts;
