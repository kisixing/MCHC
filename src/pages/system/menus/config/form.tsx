export const modalFormDescriptions = {
  // id: {
  //   key: 'id',
  //   label: '编号',
  //   inputType: 'id',
  //   inputProps: {
  //     disabled: true,
  //   },
  // },
  parentid: {
    key: 'parentid',
    label: '父级菜单',
    rules: [{ required: true, message: '父级菜单是必选项' }],
    inputType: 'parent_select',
    inputProps: {
      placeholder: '请选择父级菜单',
    },
  },
  name: {
    key: 'name',
    label: '名称',
    rules: [{ required: true, message: '名称是必填项' }],
    inputType: 'input',
    inputProps: {
      placeholder: '请输入名称',
    },
  },
  type: {
    key: 'type',
    label: '类型',
    rules: [{ required: true, message: '类型是必填项' }],
    inputType: 'permission_type',
    inputProps: {
      placeholder: '请选择类型',
    },
  },
  key: {
    key: 'key',
    label: '模块名',
    rules: [{ required: true, message: '模块名是必填项' }],
    inputType: 'input',
    inputProps: {
      placeholder: '请输入模块名',
    },
  },
  // active: {
  //   key: 'active',
  //   label: '是否启用',
  //   inputType: 'pregnant_radio',
  // },
  // test: {
  //   key: 'test',
  //   label: 'test',
  //   rules: [{ required: true, message: 'test是必填项' }],
  //   inputType: 'input',
  //   inputProps: {
  //     placeholder: '请输入test值',
  //   },
  // },
};

export default {
  modalFormDescriptions,
};
