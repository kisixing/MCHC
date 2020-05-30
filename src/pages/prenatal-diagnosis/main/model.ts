import { Reducer } from 'redux';
import { Subscription, Effect } from 'dva';

export interface PrenatalDiagnosisModelState {
  patient: any,
  isRequesting: boolean
}

interface PrenatalDiagnosisModelType {
  namespace: string;
  state: PrenatalDiagnosisModelState,
  effects: {

  },
  reducers: {
    changePatient: Reducer,
    setIsRequesting: Reducer,
  }
}

const prenatalDiagnosis: PrenatalDiagnosisModelType = {
  namespace: "prenatalDiagnosis",
  state: {
    patient: {},
    isRequesting: false
  },
  effects: {

  },
  reducers: {
    changePatient(state, {payload}): PrenatalDiagnosisModelState {
      return {
        ...state,
        patient: payload
      }
    },
    setIsRequesting(state, {payload}): PrenatalDiagnosisModelState {
      return {
        ...state,
        isRequesting: payload
      }
    }
  }
}

export default prenatalDiagnosis;