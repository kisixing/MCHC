import { getPregnancy, getVisits, getDiagnoses } from '@/services/pregnancy';

export default{
	namespace:'pregnancy',
	state:{
    pregnancyData: null,
    visitsData: null,
    isShowHighrisk: false,
    diagnosesList: [],
	},
	reducers:{
		setPregnancyData(state, { payload }){
			return {
        ...state,
        pregnancyData: payload
      }
    },

    setVisitsData(state, { payload }){
			return {
        ...state,
        visitsData: payload
      }
    },

    setDiagnosesList(state, { payload }){
			return {
        ...state,
        diagnosesList: payload
      }
    },

    changeHighrisk(state, { payload }){
			return {
        ...state,
        isShowHighrisk: payload
      }
    }

	},
	// 异步
	// yield表示后面的方法执行完以后 call表示调用一个api接口
	// put表示一个派发
	effects:{
		*getPregnancyData({ payload }, { call, put }){
			const res = yield call(getPregnancy, payload)
			yield put({
				type: 'setPregnancyData',
				payload: res[0]
			})
    },

    *getVisitsData({ payload }, { call, put }){
			const res = yield call(getVisits, payload)
			yield put({
				type: 'setVisitsData',
				payload: res
			})
    },

    *getDiagnosesList({ payload }, { call, put }){
			const res = yield call(getDiagnoses, payload)
			yield put({
				type: 'setDiagnosesList',
				payload: res
			})
		}
  }
}
