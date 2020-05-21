import React, { Component } from 'react';
import { Row, Col, Tree, Modal, Select, Input, Button } from 'antd';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';
import { highRiskData } from './data';

import styles from './index.less';

interface PrenatalDiagnosisState {
  formData: any,
  isShowHighrisk: any,
  expandedKeys: any,
}

export default class PrenatalDiagnosis extends Component<{},PrenatalDiagnosisState>{

  constructor(props: any) {
    super(props);
    this.state = {
      formData: null,
      isShowHighrisk: true,
      expandedKeys: [],
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

  renderDanger() {
    const { isShowHighrisk, formData, expandedKeys } = this.state;

    console.log(formData, highRiskData, '455')
    const searchList = formData && highRiskData.filter(i  => !formData.search || i.name.indexOf(formData.search) !== -1);
    console.log(searchList, '444')
    let allExpandedKeys = [];
    searchList && searchList.map(item => {
      allExpandedKeys.push(item.id.toString())
    })

    const handleOk = () => {
      this.setState({ isShowHighrisk: false });
      console.log(formData, '356')
      const resData = {
        id: formData.id,
        highrisk: formData.highrisk,
        highriskNote: formData.highriskNote,
      };
      request('/pregnancies', {
        method: 'PUT',
        data: resData
      }).then(r => {

      });
    };

    const handleClear = () => {
      formData['highrisk'] = '';
      formData['highriskNote'] = '';
      this.setState({ formData });
    };

    const handleChange = (name, value) => {
      formData[name] = value;
      this.setState({ formData });
    };

    const handleCheck = keys => {
      this.setState({expandedKeys: keys})
    }

    const handleSelect = keys => {
      let initLevel = formData.highrisk;
      const node = searchList.filter(i => i.id == keys[0]).pop();
      if(node && node.level && node.level > initLevel) {
        let newLevel = node.level;
        handleChange("highrisk", newLevel)
      }

      const gettitle = n => {
        const p = searchList.filter(i => i.id === n.pId).pop();
        if (p) {
          return [...gettitle(p), n.name];
        }
        return [n.name];
      };
      if ( node && !searchList.filter(i => i.pId === node.id).length &&
           formData.highriskNote && formData.highriskNote.split("\n").indexOf(node.name) === -1) {
        handleChange( "highriskNote", (formData.highriskNote || '').replace(/\n+$/, "") + "\n" + gettitle(node).join(":") );
      } else if (node && !searchList.filter(i => i.pId === node.id).length) {
        handleChange( "highriskNote", gettitle(node).join(":") );
      }
    };


    const initTree = (pid, level = 0) =>
      searchList.filter(i => i.pId === pid).map(node => (
        <Tree.TreeNode key={node.id} title={node.name} onClick={() => handleCheck(node)} isLeaf={!searchList.filter(i => i.pId === node.id).length}>
          {level < 10 ? initTree(node.id, level + 1) : null}
        </Tree.TreeNode>
      ));

    return (formData ?
      <Modal className="highriskPop" title="高危因素" visible={isShowHighrisk} width={1000} maskClosable={true}
             onCancel={() => this.setState({ isShowHighrisk: false })} onOk={() => handleOk()}>
        <div>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <Row>
                <Col span={3}>高危等级：</Col>
                <Col span={7}>
                  <Select value={formData.highrisk} onChange={e => handleChange("highrisk", e)}>
                    {"1,2,3,4,5".split(",").map(i => (
                      <Select.Option key={i} value={i}>{i}</Select.Option>
                    ))}
                  </Select>
                </Col>
                {/* <Col span={2}>传染病：</Col>
                <Col span={10}>
                  <Select className="highrisk-infec" multiple
                          value={!!formData.infectious ? formData.infectious.split(",") : []}
                          onChange={e => handleChange("infectious", e.join())}>
                    {"乙肝大三阳,乙肝小三阳,乙肝表面抗原携带者,梅毒,HIV,结核病,重症感染性肺炎,特殊病毒感染（H1N7、寨卡等）,传染病：其他".split(",").map(i => (
                        <Select.Option key={i} value={i}>{i}</Select.Option>
                      ))}
                  </Select>
                </Col> */}
              </Row>
              <br />
              <Row>
                <Col span={3}>高危因素：</Col>
                <Col span={16}>
                  <Input.TextArea value={formData.highriskNote} onChange={e => handleChange("highriskNote", e.target.value)}/>
                </Col>
                <Col span={1}></Col>
                <Col span={2}>
                  <Button size="small" onClick={() => handleClear()}>重置</Button>
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={16}>
                  <Input value={formData.search} onChange={e => handleChange("search", e.target.value)} placeholder="输入模糊查找"/>
                </Col>
                <Col span={3}>
                  <Button size="small" onClick={() => this.setState({expandedKeys: []})}>全部收齐</Button>
                </Col>
                <Col span={3}>
                  <Button size="small" onClick={() => this.setState({expandedKeys: allExpandedKeys})}>全部展开</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <div style={{ height: 200, overflow: "auto", padding: "0 16px" }}>
            <Tree expandedKeys={expandedKeys} onExpand={handleCheck} onSelect={handleSelect} style={{ maxHeight: "90%" }}>
              {initTree(0)}
            </Tree>
          </div>
        </div>
      </Modal> : null
    )
  }

  render() {
    return (
      <div className={styles.container}>
        {this.renderDanger()}
      </div>
    )
  }
}
