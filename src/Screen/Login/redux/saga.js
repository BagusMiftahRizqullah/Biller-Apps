import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {takeLatest, put} from 'redux-saga/effects';
import {loginActionSuccess, loginActionFailed} from './action';
import {
  actionLoading,
  actionIsLogged,
  actionSetToken,
} from '../../../Store/GlobalAction';

const loginApi = payload => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/login',
    data: payload,
  });
};

function* loginAction(action) {
  try {
    yield put(actionLoading(true));
    console.log(action.payload);
    const res = yield loginApi(action.payload, '<=======ini hasil login api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Login');
      ToastAndroid.show('Berhasil LOGIN', ToastAndroid.SHORT, ToastAndroid.TOP);

      yield put(actionSetToken(res.data));
      yield put(actionIsLogged(true));
      yield put(actionLoading(false));
    }
  } catch (err) {
    console.log(err.response.data.message, 'Gagal Login');
    yield put(actionLoading(false));
    const errorMessage = err.response.data.message + '';
    ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
  }
}

function* loginSaga() {
  yield takeLatest('LOGIN', loginAction);
}
export default loginSaga;
