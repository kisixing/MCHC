import React from 'react';
import { connect } from 'dva';
import { get, map, last, keyBy, indexOf } from 'lodash';
import { Radio, Select, Checkbox, Row, Col, Input } from 'antd';
import isEqual from 'lodash.isequal';

interface IProps {
  mode?: 'single' | 'multiple';
  type?: 'radio' | 'checkbox' | 'select';
  uniqueKey?: string;
  boxSpan?: number;
  dictionaries?: any;
  onChange?: any;
  value?: any;
}

const FIX_OTHER_VALUE = 99;

export class DictionarySelect extends React.Component<IProps> {
  static defaultProps = {
    mode: 'single',
    type: 'select',
    boxSpan: 3,
  };

  state = {
    options: [],
    showOther: false,
    otherNote: '',
    selectedData: undefined,
  };

  componentDidMount() {
    const { dictionaries, uniqueKey, value } = this.props;
    const data = get(dictionaries, uniqueKey as string);
    this.setState({
      options: get(data, 'enumerations'),
      selectedData: get(value, 'selectedData'),
      otherNote: get(value, 'otherNote'),
    });
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    const { value } = nextProps;
    console.log(value)
    const prevValue = {
      selectedData: get(prevState, 'selectedData'),
      otherNote: get(prevState, 'otherNote'),
    };
    if (!isEqual(value, prevValue)) {
      return {
        selectedData: get(value, 'selectedData'),
        otherNote: get(value, 'otherNote'),
      };
    }
    return null;
  }

  handleSelectedChange = (e: any) => {
    const { type, mode, onChange } = this.props;
    const { otherNote: note } = this.state;
    let selectedData: any;
    let otherNote = note;
    switch (type) {
      case 'radio':
        if (mode === 'single') {
          selectedData = get(e, 'target.value');
        }
        break;
      case 'checkbox':
        if (mode === 'multiple') {
          selectedData = e;
        }
        if (mode === 'single') {
          selectedData = last(e);
        }
        break;
      case 'select':
        selectedData = e;
        break;
      default:
        break;
    }
    if (typeof selectedData === 'object' && indexOf(selectedData, FIX_OTHER_VALUE) > -1) {
      this.setState({
        showOther: true,
      });
    } else if (selectedData === FIX_OTHER_VALUE) {
      this.setState({
        showOther: true,
      });
    } else {
      otherNote = '';
      this.setState({
        showOther: false,
        otherNote: '',
      });
    }
    this.setState({
      selectedData,
    });
    onChange &&
      onChange({
        selectedData,
        otherNote,
      });
  };

  handleInputChange = (e: any) => {
    const { onChange } = this.props;
    const { selectedData } = this.state;
    this.setState({
      otherNote: get(e, 'target.value'),
    });
    onChange &&
      onChange({
        selectedData,
        otherNote: get(e, 'target.value'),
      });
  };

  renderRadios = () => {
    const { boxSpan } = this.props;
    const { options, showOther, otherNote, selectedData } = this.state;

    return (
      <Radio.Group onChange={this.handleSelectedChange} style={{ width: '100%' }} value={selectedData}>
        <Row>
          {map(options, option => {
            if (get(option, 'value') === FIX_OTHER_VALUE && showOther) {
              return (
                <>
                  <Col span={boxSpan}>
                    <Radio value={get(option, 'value')}>{get(option, 'label')}</Radio>
                  </Col>
                  <Col span={boxSpan}>
                    <Input size="small" placeholder="请输入其它" onChange={this.handleInputChange} value={otherNote} />
                  </Col>
                </>
              );
            }
            return (
              <Col span={boxSpan}>
                <Radio value={get(option, 'value')}>{get(option, 'label')}</Radio>
              </Col>
            );
          })}
        </Row>
      </Radio.Group>
    );
  };

  renderCheckboxs = () => {
    const { options, showOther, selectedData, otherNote } = this.state;
    const { mode, boxSpan } = this.props;
    const value = mode === 'single' ? [selectedData] : selectedData;

    return (
      <Checkbox.Group onChange={this.handleSelectedChange} value={value} style={{ width: '100%' }}>
        <Row>
          {map(options, option => {
            if (get(option, 'value') === FIX_OTHER_VALUE && showOther) {
              return (
                <>
                  <Col span={boxSpan}>
                    <Checkbox value={get(option, 'value')}>{get(option, 'label')}</Checkbox>
                  </Col>
                  <Col span={boxSpan}>
                    <Input size="small" placeholder="请输入其它" onChange={this.handleInputChange} value={otherNote} />
                  </Col>
                </>
              );
            }
            return (
              <Col span={boxSpan}>
                <Checkbox value={get(option, 'value')}>{get(option, 'label')}</Checkbox>
              </Col>
            );
          })}
        </Row>
      </Checkbox.Group>
    );
  };

  renderSelects = () => {
    const { mode, ...others } = this.props;
    const { options, showOther, otherNote, selectedData } = this.state;
    let selectSpan = 24;
    if (get(keyBy(options, 'value'), FIX_OTHER_VALUE)) {
      selectSpan = 11;
    }
    console.log(selectedData)
    return (
      <Row>
        <Col span={selectSpan}>
          <Select
            dropdownMatchSelectWidth
            mode={mode}
            size="small"
            allowClear
            showSearch
            filterOption={(inputValue, option: any) =>
              option.children.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
            }
            style={{ width: '100%' }}
            placeholder="请输入或选择"
            {...others}
            value={selectedData}
            onChange={this.handleSelectedChange}
          >
            {map(options, (option: any) => {
              return <Select.Option value={get(option, 'value')}>{get(option, 'label')}</Select.Option>;
            })}
          </Select>
        </Col>
        {showOther && (
          <Col span={11} offset={1}>
            <Input size="small" placeholder="请输入其它" onChange={this.handleInputChange} value={otherNote} />
          </Col>
        )}
      </Row>
    );
  };

  render() {
    const { type, value } = this.props;
    switch (type) {
      case 'radio':
        return this.renderRadios();
      case 'checkbox':
        return this.renderCheckboxs();
      case 'select':
        return this.renderSelects();
      default:
        return <></>;
    }
  }
}

export default connect(({ select }) => {
  return {
    dictionaries: get(select, 'dictionaries'),
  };
})(DictionarySelect);
