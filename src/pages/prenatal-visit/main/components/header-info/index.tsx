import React, { Component } from 'react';
import { Button } from 'antd';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';

import styles from './index.less';

interface PrenatalDiagnosisState {
  currentPageKey: string,
  formData: any
}

export default class PrenatalDiagnosis extends Component<{},PrenatalDiagnosisState>{

  constructor(props: any) {
    super(props);
    this.state = {
      currentPageKey: "medical-record",
      formData: null
    }
  }

  componentDidMount() {
    const urlParam = getPageQuery();

    request(`/pregnancies?id.equals=${urlParam.id}`,{
      method: "GET"
    }).then(res => {
      if(res.length !== 0){
        this.setState({formData: res[0]})
      }
    });
  }

  renderInfo = () => {
    const { formData } = this.state;
    if(formData){
      return (
        <div className={styles['header-info']}>
          <div className={styles['user-info']}>
            <div>
              <span>姓名:</span><strong>{formData.name}</strong>
            </div>
            <div>
              <span>年龄:</span><strong>{formData.age}</strong>
            </div>
            <div>
              <span>孕周:</span><strong>{formData.gestationalWeek}</strong>
            </div>
            <div>
              <span>预产期-日期:</span><strong>{formData.edd}</strong>
            </div>
            <div>
              <span>预产期-B超:</span><strong>{formData.sureEdd}</strong>
            </div>
            <div>
              <span>产检编号:</span><strong>{formData.checkupNO}</strong>
            </div>
          </div>
          <div className={styles['header-btnList']}>
            <div className={styles["btnList-left"]}>
              <div className={styles["danger-btn-wrapper"]}>
                <Button.Group className={styles['btnList-btn-group']}>
                  <Button className={styles["level-btn"]}>
                    {formData.highrisk}
                  </Button>
                  <Button className={styles["danger-btn-infectin"]}>
                    传染病：无
                  </Button>
                </Button.Group>
              </div>
              <div className={styles["high-risk-wrapper"]}>
                <Button.Group className={styles['btnList-btn-group']}>
                  <Button className={styles["high-risk-btn"]}>高危因素：</Button>
                  <Button className={styles["high-risk-content"]} title={formData.highriskNote}>{formData.highriskNote ? formData.highriskNote : '无'}</Button>
                </Button.Group>
              </div>
            </div>
            <div className={styles["btnList-right"]}>
              <Button className={styles["danger-btn-trial"]}>疤</Button>
              <Button className={styles["danger-btn-phar"]}>栓</Button>
            </div>
          </div>
        </div>
      )
    }
    return null;
  }

  render() {
    return (
      <div>
        { this.renderInfo() }
      </div>
    )
  }
}
