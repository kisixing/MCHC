import generateModalForm from '@/components/BaseModalForm';
import { modalFormDescriptions as formDescriptions } from '../config/form';
import { fromApi, toApi } from '../config/adapter';

export default generateModalForm({
  formDescriptions,
  url: 'plans',
  title: '任务',
  fromApi,
  toApi,
  modalProps: {
    width: 540,
  },
  formItemLayout: {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  },
});
