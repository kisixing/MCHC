import { get, map, set, keyBy } from 'lodash';
import { getProducts, getDictionaries } from '@/services/select';

export default {
  namespace: 'ids',

  state: {
    womenExamRecordsEditingId: undefined,
  },

  reducers: {
    changeWomenExamRecordsEditingId(state, { payload }) {
      return {
        womenExamRecordsEditingId: get(payload, 'womenExamRecordsEditingId'),
      };
    },
  },
};
