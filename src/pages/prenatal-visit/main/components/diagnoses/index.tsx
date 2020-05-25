import * as React from 'react';
import { Button, message, Input, Row, Col, Popover } from 'antd';
import styles from './index.less';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';

interface HomeState{
  diagList: any,
}

export default class Home extends React.Component<{},HomeState>{

  constructor(props:any){
    super(props);
    this.state = {
      diagList: null,
    }
  }

  componentDidMount() {
    this.getdiagnoses();
  }

  getdiagnoses = () => {
    const urlParam = getPageQuery();
    request(`/prenatal-diagnoses?pregnancyId.equals=${urlParam.id}`,{
      method: "GET"
    }).then(res => {
      this.setState({diagList: res});
    });
  }

  postdiagnoses = (diag) => {
    request(`/prenatal-diagnoses`,{
      method: "POST",
      data: {
        diagnosis: diag
      }
    }).then(res => {
      this.getdiagnoses();
    });
  }

  putdiagnoses = (item) => {
    request(`/prenatal-diagnoses`,{
      method: "PUT",
      data: item
    }).then(res => {
      this.getdiagnoses();
    });
  }

  deleteDiagnoses = (id) => {
    request(`/prenatal-diagnoses/${id}`,{
      method: "DELETE",
    }).then(res => {
      this.getdiagnoses();
    });
  }


  renderDiagnoses = () => {
    const { diagList } = this.state;
    console.log(diagList, '466')
    const handleSearch = (v) => {
      this.postdiagnoses(v);
    }

    const handleDelete = (item) => {
      this.deleteDiagnoses(item.id);
    }

    const content = () => {
      return (
        <div>1111</div>
      )
    }

    const setRemark = (v, i) => {
      console.log(v, i, '464')
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
        {
          diagList && diagList.map((item, i) => (
            <Row>
              <Col span={16}>
                <div className={styles.singleDiag}>
                  <Popover content={content(item, i)}>
                    <span>{i + 1}、</span>
                    <span>{item.diagnosis}</span>
                  </Popover>
                  <input className={styles.remarkIpt} placeholder="备注" value={item.note} onChange={e => setRemark(e.target.value, i)} />
                </div>
              </Col>
              <Col span={5}>
                {item.createDate}
              </Col>
              <Col span={3}>
                <Button type="dashed" size="small" shape="circle" onClick={() => handleDelete(item)}>X</Button>
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
