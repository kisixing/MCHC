import React, { Fragment } from 'react';
import { Input, InputNumber, Tabs, Form, Radio, Row, Col, DatePicker } from 'antd';
import { map, get, keyBy, isNil, indexOf, isUndefined, concat, isEmpty } from 'lodash';
import DeviceStatusSelect from './node_modules/@/components/selects/DeviceStatusSelect';
import PermissionSelect from './node_modules/@/components/selects/PermissionSelect';
import ParentPermissionSelect from '../../selects/ParentPermissionSelect';
import PermissionTypeSelect from '../../selects/PermissionTypeSelect';
import UploadImg from './node_modules/@/components/UploadImg';
import CustomEditor from './node_modules/@/components/GeneralComponents/CustomEditor';
import DataSelect from './node_modules/@/components/DataSelect';
import CascaderAddress from './node_modules/@/components/selects/CascaderAddress';
import { connect } from 'dva';
import PregnancyHistory from './node_modules/@/components/PregnancyHistory';
import TriggerTypeSelect from './node_modules/@/components/selects/TriggerTypeSelect';
import CronSelect from './node_modules/@/components/selects/CronSelect';
import RadioWithInput from './node_modules/@/components/selects/RadioWithInput';
import RadioWithInputNumber from './node_modules/@/components/selects/RadioWithInputNumber';
import DiseaseSelect from './node_modules/@/components/selects/DiseaseSelect';
import NormalSelect from './node_modules/@/components/selects/NormalSelect';
import SelectWithOptions from './node_modules/@/components/selects/SelectWithOptions';
import CheckboxWithInput from './node_modules/@/components/selects/CheckboxWithInput';

// 逻辑影响因子，1为true，2为false
export const effects = {
  // 是否怀孕
  hasPregnancyEffets: {
    yes: ['hospital', 'gestationalWeek', 'fetalcount', 'deliverWay', 'puerperalFever', 'hemorrhage'],
    no: ['abortionWay', 'badPregnancy'],
  },
};

export const skipItems = [
  'childDeath',
  'childDeathNote',
  'childGender',
  'sequela',
  'childDeformity',
  'neonateWeight',
  'neonateHeight',
];

interface IProps {
  renderEditItem: (key: any, reactNode: any, options?: any) => any;
  formDescriptions: {};
  id?: Number | String;
  data?: any;
}

export class FormSection extends React.Component<IProps> {
  renderRowAndCol = (formDescriptionArr = []) => {
    return (
      <Row>
        {map(formDescriptionArr, (formDescription, index) => {
          return (
            <Col key={index} span={get(formDescription, 'span')} offset={get(formDescription, 'offset')}>
              {this.renderItem(formDescription)}
            </Col>
          );
        })}
      </Row>
    );
  };

  renderItem = (formDescription: any) => {
    const { renderEditItem, id, data, products, events, formData, form } = this.props;
    const formDescriptionKey = get(formDescription, 'key');
    switch (get(formDescription, 'inputType')) {
      case 'input':
        return renderEditItem(formDescriptionKey, <Input size="small" {...get(formDescription, 'inputProps')} />, {
          customFormItemLayout: get(formDescription, 'formItemLayout') || {},
        });
      case 'select_with_options':
        return renderEditItem(formDescriptionKey, <SelectWithOptions config={formDescription} />, {
          customFormItemLayout: get(formDescription, 'formItemLayout') || {},
        });
      case 'single_date_picker':
        return renderEditItem(formDescriptionKey, <DatePicker size="small" {...get(formDescription, 'inputProps')} />, {
          customFormItemLayout: get(formDescription, 'formItemLayout') || {},
        });
      case 'pregnant_radio':
        return renderEditItem(
          formDescriptionKey,
          <Radio.Group {...get(formDescription, 'inputProps')}>
            <Radio value={true}>是</Radio>
            <Radio value={false}>否</Radio>
          </Radio.Group>,
          { customFormItemLayout: get(formDescription, 'formItemLayout') || {} },
        );
      case 'has_pregnancy':
        return renderEditItem(
          formDescriptionKey,
          <Radio.Group onChange={get(events, 'setFormData')}>
            <Radio value={true}>是</Radio>
            <Radio value={false}>否</Radio>
          </Radio.Group>,
          { customFormItemLayout: get(formDescription, 'formItemLayout') || {} },
        );
      case 'radio_with_input':
        return renderEditItem(formDescriptionKey, <RadioWithInput config={formDescription} />, {
          customFormItemLayout: get(formDescription, 'formItemLayout') || {},
        });
      case 'input_number':
        return renderEditItem(
          formDescriptionKey,
          <InputNumber
            size="small"
            min={0}
            {...get(formDescription, 'inputProps')}
            // onChange={get(events, 'handleFetalcountChange')}
          />,
          { customFormItemLayout: get(formDescription, 'formItemLayout') || {} },
        );
      case 'fetal_count':
        return renderEditItem(
          formDescriptionKey,
          <InputNumber
            size="small"
            min={0}
            {...get(formDescription, 'inputProps')}
            onChange={get(events, 'setFormData')}
          />,
          { customFormItemLayout: get(formDescription, 'formItemLayout') || {} },
        );
      case 'checkbox_with_input':
        return renderEditItem(formDescriptionKey, <CheckboxWithInput config={formDescription} />, {
          customFormItemLayout: get(formDescription, 'formItemLayout') || {},
        });
      case 'view_only':
        return renderEditItem(formDescriptionKey, <span>{get(data, get(formDescription, 'path'))}</span>);
      default:
        return renderEditItem(formDescriptionKey, <Input size="small" {...get(formDescription, 'inputProps')} />);
    }
  };

  renderContent = () => {
    const { formDescriptions = [], formData, tabIndex } = this.props;
    let tempArr = [];
    let tempSpan = 0;
    let newRow = false;
    let formArray = [];

    map(formDescriptions, (formDescription, index) => {
      const hasPregnancy = get(formData, `hasPregnancy_${tabIndex}`);
      const formDescriptionKey = get(formDescription, 'native_key');
      if (indexOf(skipItems, formDescriptionKey) > -1) {
        return;
      }

      if (
        isUndefined(hasPregnancy) &&
        indexOf([...effects.hasPregnancyEffets.no, ...effects.hasPregnancyEffets.yes], formDescriptionKey) > -1
      ) {
        return;
      }

      if (hasPregnancy === false && indexOf(effects.hasPregnancyEffets.yes, formDescriptionKey) > -1) {
        return;
      }

      if (hasPregnancy === true && indexOf(effects.hasPregnancyEffets.no, formDescriptionKey) > -1) {
        return;
      }

      if (!isNil(get(formDescription, 'span')) && !isNil(get(formDescription, 'offset'))) {
        if (get(formDescription, 'isNewRow')) {
          const renderArr = tempArr;
          tempSpan = 0;
          tempArr = [];
          formArray.push(this.renderRowAndCol(renderArr));
        }
        if (tempSpan < 25 && tempSpan + get(formDescription, 'span') + get(formDescription, 'offset') < 25) {
          tempSpan = tempSpan + get(formDescription, 'span') + get(formDescription, 'offset');
          tempArr.push(formDescription);
          if (Number(index) === formDescriptions.length - 1) {
            formArray.push(this.renderRowAndCol(tempArr));
            tempArr = [];
          }
        } else {
          const renderArr = tempArr;
          tempArr = [];
          formArray.push(this.renderRowAndCol(renderArr));
          tempSpan = get(formDescription, 'span') + get(formDescription, 'offset');
          tempArr.push(formDescription);
        }
      } else {
        formArray.push(this.renderItem(formDescription));
      }
    });
    if (!isEmpty(tempArr)) {
      formArray.push(this.renderRowAndCol(tempArr));
    }
    return formArray;
  };

  render() {
    return <>{this.renderContent()}</>;
  }
}

export default connect(({ select }) => ({
  products: get(select, 'products'),
}))(FormSection);
