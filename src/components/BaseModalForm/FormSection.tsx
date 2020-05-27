import React from 'react';
import { Input, InputNumber, Radio, Row, Col, DatePicker } from 'antd';
import { map, get, keyBy, isNil, isEmpty } from 'lodash';
import DeviceStatusSelect from '@/components/selects/DeviceStatusSelect';
import PermissionSelect from '@/components/selects/PermissionSelect';
import ParentPermissionSelect from '../selects/ParentPermissionSelect';
import PermissionTypeSelect from '../selects/PermissionTypeSelect';
import UploadImg from '@/components/GeneralComponents/UploadImg';
import CustomEditor from '@/components/GeneralComponents/CustomEditor';
import DataSelect from '@/components/DataSelect';
import CascaderAddress from '@/components/selects/CascaderAddress';
import { connect } from 'dva';
import PregnancyHistory from '@/components/BusinessComponents/PregnancyHistory';
import TriggerTypeSelect from '@/components/selects/TriggerTypeSelect';
import CronSelect from '@/components/selects/CronSelect';
import RadioWithInput from '@/components/selects/RadioWithInput';
import RadioWithInputNumber from '@/components/selects/RadioWithInputNumber';
import DiseaseSelect from '@/components/selects/DiseaseSelect';
import NormalSelect from '@/components/selects/NormalSelect';
import CountrySelect from '@/components/selects/CountrySelect';
import CheckboxWithInput from '@/components/ConfigComponents/CheckboxWithInput';
import ApgarScoreInput from '@/components/selects/ApgarScoreInput';
import MultipleInputWithLabel from '@/components/ConfigComponents/MultipleInputWithLabel';
import FoetalAppendage from '@/components/BusinessComponents/FoetalAppendage';
import NoenateRecord from '@/components/BusinessComponents/NoenateRecord';
import { formDescriptionsFromApi, formDescriptionsWithoutSectionApi } from '@/utils/adapter';
import request from '@/utils/request';
import CheckboxGroup from '@/components/ConfigComponents/CheckboxGroup';
import InputWithLabel from '../ConfigComponents/InputWithLabel';
import NormalCheckboxWithInput from '../ConfigComponents/NormalCheckboxWithInput';
import SelectWithOptions from '../selects/SelectWithOptions';
import DictionarySelect from '@/components/ConfigComponents/DictionarySelect';
import PureCheckbox from '../ConfigComponents/PureCheckbox';
import CheckboxWithSingleInput from '../ConfigComponents/CheckboxWithSingleInput';

export const getFormDescriptionByModuleName = async (moduleName: string) => {
  return formDescriptionsWithoutSectionApi(
    formDescriptionsFromApi(await request.get(`/form-descriptions?moduleName=${moduleName}`)),
  );
};

interface IProps {
  renderEditItem: (key: string, ReactNode: React.ReactNode, others?: object) => React.ReactNode;
  formDescriptions: any;
  id?: Number | String;
  data?: any;
  form?: any;
  products?: any;
  events?: any;
}

export class FormSection extends React.Component<IProps> {
  renderRowAndCol = (formDescriptionArr: any[] = []) => {
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
    const { renderEditItem, id, data, products, events, form } = this.props;
    const {
      inputType,
      formItemLayout: customFormItemLayout,
      styles,
      key: formDescriptionKey,
      inputProps: formDescriptionInputProps,
      special_config: formDescriptionSpecialConfig,
      path: formDescriptionPath,
    } = formDescription;

    switch (inputType) {
      case 'id':
        return <span></span>;
      case 'subdevice_id':
        return id && renderEditItem(formDescriptionKey, <Input size="small" {...formDescriptionInputProps} />);
      case 'radio':
        return renderEditItem(
          formDescriptionKey,
          <Radio.Group>
            <Radio value={1}>是</Radio>
            <Radio value={0}>否</Radio>
          </Radio.Group>,
          {
            customFormItemLayout,
            styles,
          },
        );
      case 'radio_group':
        return renderEditItem(
          get(formDescription, 'key'),
          <Radio.Group size="small" {...get(formDescription, 'inputProps')} />,
          {
            customFormItemLayout: get(formDescription, 'formItemLayout') || {},
            styles: get(formDescription, 'styles'),
          },
        );
      case 'normal_select':
        return renderEditItem(
          formDescriptionKey,
          <NormalSelect
            type={get(JSON.parse(formDescriptionSpecialConfig), 'type')}
            showSearch={get(JSON.parse(formDescriptionSpecialConfig), 'showSearch')}
            placeholder="请选择证件类型"
          />,
          {
            customFormItemLayout,
            styles,
          },
        );
      case 'dictionary_select':
        return renderEditItem(formDescriptionKey, <DictionarySelect config={formDescription} />, {
          customFormItemLayout,
          styles,
        });
      case 'country_select':
        return renderEditItem(formDescriptionKey, <CountrySelect language="zh-CN" placeholder="请选择国籍" />, {
          customFormItemLayout,
          styles,
        });
      case 'dysmenorrhea_radio':
        return renderEditItem(
          formDescriptionKey,
          <Radio.Group>
            <Radio value={true}>是</Radio>
            <Radio value={false}>否</Radio>
          </Radio.Group>,
          {
            customFormItemLayout,
            styles,
          },
        );
      case 'pregnant_radio':
        return renderEditItem(
          formDescriptionKey,
          <Radio.Group>
            <Radio value={false}>否</Radio>
            <Radio value={true}>是</Radio>
          </Radio.Group>,
          {
            customFormItemLayout,
            styles,
          },
        );
      case 'radio_with_input':
        return renderEditItem(formDescriptionKey, <RadioWithInput config={formDescription} />, {
          customFormItemLayout,
          styles,
        });
      case 'checkbox_with_input':
        return renderEditItem(formDescriptionKey, <CheckboxWithInput config={formDescription} />, {
          customFormItemLayout,
          styles,
        });
      case 'normal_checkbox_with_input':
        return renderEditItem(formDescriptionKey, <NormalCheckboxWithInput config={formDescription} />, {
          customFormItemLayout,
        });
      case 'checkbox_with_single_input':
        return renderEditItem(get(formDescription, 'key'), <CheckboxWithSingleInput config={formDescription} />, {
          customFormItemLayout: get(formDescription, 'formItemLayout') || {},
        });
      case 'pure_checkbox':
        return renderEditItem(get(formDescription, 'key'), <PureCheckbox config={formDescription} />, {
          customFormItemLayout: get(formDescription, 'formItemLayout') || {},
        });
      case 'checkbox_group':
        return renderEditItem(formDescriptionKey, <CheckboxGroup config={formDescription} />, {
          customFormItemLayout,
          styles,
        });
      case 'disease_select':
        return renderEditItem(formDescriptionKey, <DiseaseSelect config={formDescription} />, {
          customFormItemLayout,
          styles,
        });
      case 'select_with_options':
        return renderEditItem(formDescriptionKey, <SelectWithOptions config={formDescription} />, {
          customFormItemLayout,
          styles,
        });
      case 'radio_with_input_number':
        return renderEditItem(formDescriptionKey, <RadioWithInputNumber config={formDescription} />, {
          customFormItemLayout,
          styles,
        });
      case 'pregnancy_history':
        return renderEditItem(formDescriptionKey, <PregnancyHistory config={formDescription} form={form} />, {
          customFormItemLayout,
          styles,
        });
      case 'input':
        return renderEditItem(formDescriptionKey, <Input size="small" {...formDescriptionInputProps} />, {
          customFormItemLayout,
          styles,
        });
      case 'fetus_appendages':
        return renderEditItem(
          formDescriptionKey,
          <FoetalAppendage size="small" {...formDescriptionInputProps} renderEditItem={renderEditItem} form={form} />,
          {
            customFormItemLayout,
            styles,
          },
        );
      case 'noenate_record':
        return renderEditItem(
          formDescriptionKey,
          <NoenateRecord size="small" {...formDescriptionInputProps} renderEditItem={renderEditItem} form={form} />,
          {
            customFormItemLayout,
            styles,
          },
        );
      case 'multiple_input_with_label':
        return renderEditItem(formDescriptionKey, <MultipleInputWithLabel config={formDescription} />, {
          customFormItemLayout,
          styles,
        });
      case 'input_with_label':
        return renderEditItem(formDescriptionKey, <InputWithLabel config={formDescription} />, {
          customFormItemLayout,
          styles,
        });
      case 'id_number_input':
        return renderEditItem(
          formDescriptionKey,
          <Input size="small" {...formDescriptionInputProps} onChange={get(events, 'handleIDNumberChange')} />,
          {
            customFormItemLayout,
            styles,
          },
        );
      case 'cron':
        return renderEditItem(formDescriptionKey, <CronSelect {...formDescriptionInputProps} />, {
          customFormItemLayout,
          styles,
        });
      case 'trigger_type_select':
        return renderEditItem(formDescriptionKey, <TriggerTypeSelect size="small" {...formDescriptionInputProps} />, {
          customFormItemLayout,
          styles,
        });
      case 'text_area':
        return renderEditItem(formDescriptionKey, <Input.TextArea size="small" {...formDescriptionInputProps} />, {
          customFormItemLayout,
          styles,
        });
      case 'tree_select':
        return renderEditItem(formDescriptionKey, <PermissionSelect size="small" {...formDescriptionInputProps} />, {
          customFormItemLayout,
          styles,
        });
      case 'parent_select':
        return renderEditItem(
          formDescriptionKey,
          <ParentPermissionSelect size="small" {...formDescriptionInputProps} />,
          {
            customFormItemLayout,
            styles,
          },
        );
      case 'input_number':
        return renderEditItem(formDescriptionKey, <InputNumber size="small" min={0} {...formDescriptionInputProps} />, {
          customFormItemLayout,
          styles,
        });
      case 'password':
        return renderEditItem(formDescriptionKey, <Input.Password size="small" {...formDescriptionInputProps} />, {
          customFormItemLayout,
          styles,
        });
      case 'validdate':
        return renderEditItem(
          formDescriptionKey,
          <DataSelect
            size="small"
            dataSource={[
              { id: 30, name: '30天' },
              { id: 60, name: '60天' },
              { id: 90, name: '90天' },
              { id: 280, name: '一个孕周' },
            ]}
            valueKey="id"
            labelKey="name"
          />,
          {
            customFormItemLayout,
            styles,
          },
        );
      case 'editor':
        return renderEditItem(formDescriptionKey, <CustomEditor size="small" {...formDescriptionInputProps} />, {
          customFormItemLayout,
          styles,
        });
      case 'product':
        return get(formDescription, 'viewOnly')
          ? renderEditItem(
              formDescriptionKey,
              <span>{get(keyBy(products, 'id'), `${get(data, formDescriptionPath)}.name`)}</span>,
            )
          : renderEditItem(
              formDescriptionKey,
              <DataSelect size="small" url="/products" valueKey="id" labelKey="name" {...formDescriptionInputProps} />,
              {
                customFormItemLayout,
                styles,
              },
            );
      case 'roles':
        return renderEditItem(
          formDescriptionKey,
          <DataSelect
            size="small"
            url="/groups"
            valueKey="id"
            labelKey="nickname"
            mode="multiple"
            {...formDescriptionInputProps}
          />,
          {
            customFormItemLayout,
            styles,
          },
        );
      case 'device_status':
        return renderEditItem(formDescriptionKey, <DeviceStatusSelect size="small" {...formDescriptionInputProps} />, {
          customFormItemLayout,
          styles,
        });
      case 'address':
        return renderEditItem(formDescriptionKey, <CascaderAddress size="small" {...formDescriptionInputProps} />, {
          customFormItemLayout,
          styles,
        });
      case 'permission_type':
        return renderEditItem(
          formDescriptionKey,
          <PermissionTypeSelect size="small" {...formDescriptionInputProps} />,
          {
            customFormItemLayout,
            styles,
          },
        );
      case 'upload_img':
        return renderEditItem(
          formDescriptionKey,
          <UploadImg size="small" {...formDescriptionInputProps} allowUploadImages={10} />,
          {
            customFormItemLayout,
            styles,
          },
        );
      case 'single_date_picker':
        return renderEditItem(formDescriptionKey, <DatePicker size="small" {...formDescriptionInputProps} />, {
          customFormItemLayout,
          styles,
        });
      case 'apgar_score_input':
        return renderEditItem(
          formDescriptionKey,
          <ApgarScoreInput size="small" config={formDescription} form={form} />,
          {
            customFormItemLayout,
            styles,
          },
        );
      case 'view_only':
        return renderEditItem(formDescriptionKey, <span>{get(data, formDescriptionPath)}</span>);
      default:
        return renderEditItem(formDescriptionKey, <Input size="small" {...formDescriptionInputProps} />, {
          customFormItemLayout,
          styles,
        });
    }
  };

  renderContent = () => {
    const { formDescriptions = [] } = this.props;
    let tempArr: any[] = [];
    let tempSpan = 0;
    const formArray: any[] = [];
    map(formDescriptions, (formDescription, index) => {
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

export default connect(({ select }: any) => ({
  products: get(select, 'products'),
}))(FormSection);
