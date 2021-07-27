import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {takeLatest, put} from 'redux-saga/effects';
import {signupActionSuccess, signupActionFailed} from '../redux/action';
import {actionLoading} from '../../../Store/GlobalAction';

const signupApi = payload => {
  console.log(payload, 'ke axios');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/signup',
    data: payload,
  });
};

function* signupAction(action) {
  try {
    yield put(actionLoading(true));
    console.log(action.payload, 'ini payload');
    const res = yield signupApi(action.payload);
    console.log(res, '====> ini hasil Res');
    if (res && res.data) {
      console.log(res.data, ' data res');
      ToastAndroid.show(
        'Berhasil Sign Up',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
      yield put(signupActionSuccess(res.data.data));
      yield put(actionLoading(false));
      // reset belum
    }
  } catch (err) {
    console.log(err.response.data.message, 'Gagal SignUp');
    const errorMessage = err.response.data.message;
    errorMessage.length > 0
      ? ToastAndroid.show(errorMessage[0], ToastAndroid.LONG, ToastAndroid.TOP)
      : null;
    yield put(signupActionFailed());
    yield put(actionLoading(false));
  }
}

function* signupSaga() {
  yield takeLatest('SIGNUP', signupAction);
}

export default signupSaga;
