import { Reducer } from 'redux';
import { Subscription, Effect } from 'dva';

export interface PrenatalDiagnosisModelState {
  patient: any
}

interface PrenatalDiagnosisModelType {
  namespace: string;
  state: PrenatalDiagnosisModelState,
  effects: {

  },
  reducers: {
    changePatient: Reducer
  }
}

const prenatalDiagnosis: PrenatalDiagnosisModelType = {
  namespace: "prenatalDiagnosis",
  state: {
    patient: {}
  },
  effects: {

  },
  reducers: {
    changePatient(state, {payload}): PrenatalDiagnosisModelState {
      return {
        ...state,
        patient: payload
      }
    }
  }
}

export default prenatalDiagnosis;