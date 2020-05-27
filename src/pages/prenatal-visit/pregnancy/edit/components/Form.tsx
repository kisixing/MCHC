import React from 'react';
import moment from 'moment';
import BaseEditPanelForm from '@/components/BaseEditPanel/BaseEditPanelForm';
import { FormInstance } from 'antd/lib/form';

export default class PregnanciesForm extends BaseEditPanelForm {
  handleIDNumberChange = (e: any) => {
    const form = (this.form as unknown) as FormInstance;
    const IDNumber = e.target.value as string;
    if (IDNumber.length === 18) {
      form &&
        form.setFieldsValue({
          dob: moment(`${IDNumber.substr(6, 4)}-${IDNumber.substr(10, 2)}-${IDNumber.substr(12, 2)}`),
        });
    }
  };

  getEvents = () => ({ handleIDNumberChange: this.handleIDNumberChange });
}
