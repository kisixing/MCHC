import * as React from 'react';
import { Button, message, Input, Row, Col, Popover } from 'antd';
import { connect } from 'dva';
import { cloneDeep } from 'lodash';
import styles from './index.less';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';

interface IndexState{

}

class Index extends React.Component<{},IndexState>{
  constructor(props:any){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.getdiagnoses();
  }

  getdiagnoses = () => {
    const { dispatch } = this.props;
    const urlParam = getPageQuery();
    dispatch({
      type: 'pregnancy/getDiagnosesList',
      payload: urlParam.id
    })
  }

  postdiagnoses = (diag: string) => {
    const { diagnosesList } = this.props;
    const urlParam = getPageQuery();
    const diagnosis = {'diagnosis': diag};
    diagnosesList.push(diagnosis);
    const resData = {
      id: urlParam.id,
      diagnoses: diagnosesList,
    };

    request('/pregnancies', {
      method: 'PUT',
      data: resData
    }).then(r => {
      this.getdiagnoses();
    });
  }

  putdiagnoses = (item: any, id: number) => {
    const { diagnosesList } = this.props;
    const urlParam = getPageQuery();
    diagnosesList[id] === item;
    const resData = {
      id: urlParam.id,
      diagnoses: diagnosesList,
    };

    request('/pregnancies', {
      method: 'PUT',
      data: resData
    }).then(r => {
      this.getdiagnoses();
    });
  }

  deleteDiagnoses = (id: number) => {
    request(`/diagnoses/${id}`,{
      method: "DELETE",
    }).then(res => {
      message.info('删除诊断成功！')
      this.getdiagnoses();
    });
  }

  renderDiagnoses = () => {
    const { pregnancyData, diagnosesList, dispatch } = this.props;

    const handleSearch = (v: string) => {
      if (v) {
        if (diagnosesList.filter(i => i.diagnosis === v).length === 0) {
          this.postdiagnoses(v);
        } else {
          message.warn('添加诊断重复！');
        }
      } else {
        message.warn('请输入诊断！');
      }
    }

    const handleVisibleChange = (visible: boolean, i: number) => {
      const newList =  cloneDeep(diagnosesList);
      const item = newList[i];
      item.visible = visible;
      dispatch({
        type: 'pregnancy/setDiagnosesList',
        payload: newList
      })
    }

    const title = (item: any) => {
      const data = {
        "诊断时间": item.createDate,
        "诊断全称": item.diagnosis,
        "诊断备注": item.note,
        "诊断医生": item.doctor,
      }
      return JSON.stringify(data, null, 4)
    }

    const handleDelete = (item: any) => {
      this.deleteDiagnoses(item.id);
    }

    const content = (item: any, i: number) => {
      const handleHighrisk = () => {
        item.visible = false;
        item.highrisk = item.highrisk === true ? false : true;
        this.putdiagnoses(item, i);
      }

      const handleSortChange = (n: number) => {
        const newList =  cloneDeep(diagnosesList);
        newList[i].sort = newList[i + n].sort ;
        newList[i + n].sort  = item.sort ;

        const urlParam = getPageQuery();
        const resData = {
          id: urlParam.id,
          diagnoses: newList,
        };

        request('/pregnancies', {
          method: 'PUT',
          data: resData
        }).then(r => {
          this.getdiagnoses();
        });
      }

      return (
        <div>
          <p><span className={styles.diagHandle} onClick={handleHighrisk}>{item.highrisk === true ? '取消高危诊断' : '标记高危诊断'}</span></p>
          {i ? <p><span className={styles.diagHandle} onClick={() => handleSortChange(-1)}>上 移</span></p> : null}
          {i + 1 < diagnosesList.length ? <p><span className={styles.diagHandle} onClick={() => handleSortChange(1)}>下 移</span></p> : null}
        </div>
      );
    }

    const setNote = (v: string, i: number) => {
      const newList =  cloneDeep(diagnosesList);
      const item = newList[i];
      item.note = v;
      dispatch({
        type: 'pregnancy/setDiagnosesList',
        payload: newList
      })
    }

    const updateNote = (item: any, i: number) => {
      this.putdiagnoses(item, i);
    }

    return (
      <div className={styles.diagWrapper}>
        <Input.Search
          className={styles.diagIpt}
          placeholder="请输入诊断信息"
          enterButton="添加诊断"
          size="small"
          onSearch={value => handleSearch(value)}
        />
        <div className={styles.firstDiag}>
          <span className={styles.diagNum}>1</span>
          G<span className={styles.diagGP}>{pregnancyData.gravidity}</span>
          P<span className={styles.diagGP}>{pregnancyData.parity}</span>
          妊娠<span className={styles.diagWeek}>{pregnancyData.gestationalWeek}</span>周
        </div>
        {
          diagnosesList && diagnosesList.map((item: any, i: number) => (
            <Row className={styles.singleDiag} title={title(item)}>
              <Col span={18} className={item.highrisk ? [styles.diagWord, styles.diagHighrisk] : styles.diagWord}>
                <Popover
                  trigger="click"
                  content={content(item, i)}
                  // visible={!!item.visible}
                  // onVisibleChange={(visible) => handleVisibleChange(visible, i)}
                >
                  <span className={styles.diagNum}>{i + 2}</span>
                  <span>{item.diagnosis}</span>
                </Popover>
                <input
                  className={styles.diagNote}
                  placeholder="备注"
                  value={item.note}
                  onChange={e => setNote(e.target.value, i)}
                  onBlur={e => updateNote(item, i)}
                />
              </Col>
              <Col span={4}>
                {item.createDate}
              </Col>
              <Col span={1}>
                <Button className={styles.delBtn} type="dashed" size="small" shape="circle" onClick={() => handleDelete(item)}>X</Button>
              </Col>
            </Row>
          ))
        }
      </div>
    )
  }

  render(){
    return(
      <div>
        { this.renderDiagnoses() }
      </div>
    )
  }
}

const mapStateToProps = ({ pregnancy }) => {
  return { ...pregnancy };
};

export default connect(
  mapStateToProps
)(Index);
