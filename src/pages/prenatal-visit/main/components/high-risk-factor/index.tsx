import React, { Component } from 'react';
import { Row, Col, Tree, Modal, Select, Input, Button } from 'antd';
import request from '@/utils/request';
import { connect } from 'dva';
import { highRiskData } from './data';
import styles from './index.less';

interface IndexState {
  expandedKeys: any,
  pageData: any
}

class Index extends Component<{},IndexState>{

  constructor(props: any) {
    super(props);
    this.state = {
      expandedKeys: [],
      pageData: null
    }
  }

  componentDidMount() {
    const { pregnancyData } = this.props;
    this.setState({
      pageData: pregnancyData
    })
  }

  renderDanger() {
    const { isShowHighrisk, dispatch, pregnancyData } = this.props;
    const { pageData, expandedKeys } = this.state;

    const searchList = pageData && highRiskData.filter(i  => !pageData.search || i.name.indexOf(pageData.search) !== -1);
    const allExpandedKeys: string[] = [];
    searchList && searchList.map(item => {
      allExpandedKeys.push(item.id.toString())
    })

    const handleClose = (bool: boolean) => {
      dispatch({
        type: 'pregnancy/changeHighrisk',
        payload: false
      })
      if (bool) {
        const resData = {
          id: pageData.id,
          highrisk: pageData.highrisk,
          highriskNote: pageData.highriskNote,
        };
        request('/pregnancies', {
          method: 'PUT',
          data: resData
        }).then(r => {

        });
      }

    };

    const handleClear = () => {
      pageData.highrisk = '';
      pageData.highriskNote = '';
      this.setState({ pageData });
    };

    const handleChange = (name: string, value: string|number) => {
      pageData[name] = value;
      this.setState({ pageData });
    };

    const handleCheck = (keys: string) => {
      this.setState({expandedKeys: keys})
    }

    const handleSelect = (keys: string) => {
      const initLevel = pageData.highrisk;
      const node = searchList.filter(i => i.id.toString() === keys[0]).pop();
      if(node && node.level && node.level > initLevel) {
        const newLevel = node.level;
        handleChange("highrisk", newLevel)
      }

      const gettitle = n => {
        const p = searchList.filter(i => i.id === n.pId).pop();
        if (p) {
          return [...gettitle(p), n.name];
        }
        return [n.name];
      };
      if ( node && !searchList.filter(i => i.pId === node.id).length && pageData.highriskNote && pageData.highriskNote.split("\n").indexOf(node.name) === -1) {
        handleChange( "highriskNote", (pageData.highriskNote || '').replace(/\n+$/, "") + "\n" + gettitle(node).join(":") );
      } else if (node && !searchList.filter(i => i.pId === node.id).length) {
        handleChange( "highriskNote", gettitle(node).join(":") );
      }
    };


    const initTree = (pid: number, level = 0) =>
      searchList.filter(i => i.pId === pid).map(node => (
        <Tree.TreeNode key={node.id} title={node.name} onClick={() => handleCheck(node)} isLeaf={!searchList.filter(i => i.pId === node.id).length}>
          {level < 10 ? initTree(node.id, level + 1) : null}
        </Tree.TreeNode>
      ));

    return (pageData ?
      <Modal className="highriskPop" title="高危因素" visible={isShowHighrisk} width={1000} maskClosable={true}
             onCancel={() => handleClose(false)} onOk={() => handleClose(true)}>
        <div>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <Row>
                <Col span={3}>高危等级：</Col>
                <Col span={7}>
                  <Select value={pageData.highrisk} onChange={e => handleChange("highrisk", e)}>
                    {"1,2,3,4,5".split(",").map(i => (
                      <Select.Option key={i} value={i}>{i}</Select.Option>
                    ))}
                  </Select>
                </Col>
                {/* <Col span={2}>传染病：</Col> */}
                {/* <Col span={10}>
                  <Select className="highrisk-infec" multiple
                          value={!!pageData.infectious ? pageData.infectious.split(",") : []}
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
                  <Input.TextArea value={pageData.highriskNote} onChange={e => handleChange("highriskNote", e.target.value)}/>
                </Col>
                <Col span={1}></Col>
                <Col span={2}>
                  <Button onClick={() => handleClear()}>重置</Button>
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={16}>
                  <Input value={pageData.search} onChange={e => handleChange("search", e.target.value)} placeholder="输入模糊查找"/>
                </Col>
                <Col span={3}>
                  <Button onClick={() => this.setState({expandedKeys: []})}>全部收齐</Button>
                </Col>
                <Col span={3}>
                  <Button onClick={() => this.setState({expandedKeys: allExpandedKeys})}>全部展开</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <div style={{ height: 300, overflow: "auto", padding: "0 16px" }}>
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

const mapStateToProps = ({ pregnancy }) => {
  return { ...pregnancy };
};

export default connect(
  mapStateToProps
)(Index);
