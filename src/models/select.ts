import { get, map, set, keyBy } from 'lodash';
import { getProducts, getDictionaries } from '@/services/select';

export default {
  namespace: 'select',

  state: {
    products: [],
  },

  effects: {
    *getProducts(_, { call, put, select }) {
      const products = yield call(getProducts);
      yield put({
        type: 'changeProducts',
        payload: { products },
      });
    },
    *getDictionaries(_, { call, put, select }) {
      const dictionaries: any = yield call(getDictionaries);
      map(dictionaries, dictionary => {
        const { module, key } = dictionary;
        set(dictionary, 'uniqueKey', `${module}.${key}`);
      });

      yield put({
        type: 'changeDictionaries',
        payload: { dictionaries: keyBy(dictionaries, 'uniqueKey') },
      });
    },
  },

  reducers: {
    changeProducts(state, { payload }) {
      return {
        products: { ...get(state, 'products'), ...get(payload, 'products') },
      };
    },
    changeDictionaries(state, { payload }) {
      return {
        dictionaries: { ...get(state, 'dictionaries'), ...get(payload, 'dictionaries') },
      };
    },
  },
};
