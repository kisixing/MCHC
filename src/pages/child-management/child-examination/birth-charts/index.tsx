/*
 * @Description: bizcharts图标示例
 * @Author: Zhong Jun
 * @Date: 2020-05-14 17:19:53
 */

import React from 'react';
import { Row, Col } from 'antd';

import { Bar, Pie } from '@/components/Charts';
import { ModalView, ModalIframeView } from '@/components/PDFPreview';

import styles from './index.less';

const data = [
  {
    x: '1951 年',
    y: 38,
  },
  {
    x: '1952 年',
    y: 52,
  },
  {
    x: '1956 年',
    y: 61,
  },
  {
    x: '1957 年',
    y: 145,
  },
  {
    x: '1958 年',
    y: 48,
  },
  {
    x: '1959 年',
    y: 38,
  },
  {
    x: '1960 年',
    y: 38,
  },
  {
    x: '1962 年',
    y: 38,
  },
];

function Bizcharts() {
  return (
    <div className="page">
      <p>bizcharts图标示例</p>
      <Row gutter={[12, 12]}>
        <Col className="gutter-row" span={12}>
          <div className={styles.item}>
            <Bar height={360} data={data} />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className={styles.item}>
            <Pie animate={true} percent={28} subTitle="饼图" total="28%" height={360} lineWidth={2} />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className={styles.item}>col-6</div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className={styles.item}>
            <ModalIframeView file="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf">
              iframe view
            </ModalIframeView>
            {'  '}
            <ModalView file="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf">
              nomal view
            </ModalView>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Bizcharts;
