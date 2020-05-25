import { keys, get, keyBy, filter, last, map, set } from 'lodash';
import { router } from 'umi';

export default {
  namespace: 'tab',

  state: {
    activeKey: '/',
    tabs: [
      {
        title: '首页',
        key: '/',
        path: '/',
        closable: false,
      },
    ],
  },

  effects: {
    *deleteTabs(_, { call, put, select }) {
      let tabs = yield select(state => {
        return state.tab.tabs;
      });
      const key = get(_, 'payload.data.key');
      tabs = filter(tabs, tab => tab.key !== key);
      const activeKey = get(last(tabs), 'key');
      const activeTab = get(keyBy(tabs, 'key'), activeKey);
      router.push({
        pathname: get(activeTab, 'path'),
        search: get(activeTab, 'search'),
      });
      yield put({
        type: 'tab/changeTabs',
        payload: {
          type: 'deleteTab',
          data: { key },
        },
      });
    },
  },

  reducers: {
    changeTabs(state, { payload }) {
      let tabs = state.tabs;
      const tabsMapping = keyBy(tabs, 'key');
      const tabKeys = keys(tabsMapping);
      const key = get(payload, 'data.key');
      let activeKey = get(payload, 'data.key') || '/';
      if (get(payload, 'type') === 'addTab') {
        // 如果不存在 tabkeys ，直接 push 进去
        if (!(tabKeys.indexOf(key) > -1)) {
          tabs.push(get(payload, 'data'));
          activeKey = key;
        } else {
          // 如果存在的话，修改查询参数
          tabs = map(tabsMapping, (item: any) => {
            if (get(item, 'key') === key) {
              set(item, 'search', get(payload, 'data.search'));
            }
            return item;
          });
          activeKey = key;
        }
      } else if (get(payload, 'type') === 'deleteTab') {
        tabs = filter(tabs, tab => tab.key !== key);
        activeKey = get(last(tabs), 'key');
      }

      return {
        ...state,
        tabs,
        activeKey,
      };
    },
    changeActiveKey(state, { payload }) {
      return {
        ...state,
        activeKey: get(payload, 'data.activeKey'),
      };
    },
  },
};
