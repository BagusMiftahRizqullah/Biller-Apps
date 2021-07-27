import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {navigate} from '../../../Function/Nav';
import {takeLatest, put, select} from 'redux-saga/effects';
import {
  ProfileInfoActionSuccess,
  ProfileUpdateActionSuccess,
  ProfileUploadFotoActionSuccess,
} from './action';
import {
  actionLoading,
  actionIsLogged,
  actionSuccess,
} from '../../../Store/GlobalAction';

// GET INFO PROFILE
const ProfileInfo = (payload, token) => {
  console.log(payload, '<==== ini data payload dari update profile');
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/user/info',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET INFO PROFILE
function* ProfileInfoAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield ProfileInfo(action.payload, token);
    console.log(action.payload, '<=======ini hasil Option Profile Api');
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Option InTv');

      yield put(ProfileInfoActionSuccess(res.data));
      yield put(actionLoading(false));
      yield put(actionSuccess(true));
    }
    if (res.status === 202) {
      yield put(actionSuccess(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    } else if (res.status === 204) {
      yield put(actionSuccess(false));
      yield put(actionIsLogged(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } catch (err) {
    if (err.response.status === 401) {
      console.log(err.response.status, 'Gagal Mengambil data');
      yield put({type: 'SET_IS_LOGOUT'});
      yield put(actionLoading(false));
      ToastAndroid.show(
        'Seission Anda Telah Habis, silahkan login kembali',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    } else {
      console.log(err.response, 'Gagal Mengambil data');
      yield put(actionLoading(false));
    }
  }
}

// POST Foto Profile
const ProfileUploadFoto = (payload, token) => {
  console.log(payload, '<==== ini data payload dari input userid');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/user/upload-profile',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST Foto Profile
function* ProfileUploadFotoAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield ProfileUploadFoto(action.payload, token);
    console.log(res, '<=======ini hasil user Api');
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data User');

      yield put(ProfileUploadFotoActionSuccess(res.data));
      yield put(actionSuccess(true));

      yield navigate('Profile');
    }
    if (res.status === 202) {
      yield put(actionSuccess(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    } else if (res.status === 204) {
      yield put(actionSuccess(false));
      yield put(actionIsLogged(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } catch (err) {
    if (err.response === 401) {
      yield put(actionIsLogged(false));
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    } else {
      console.log(err.response.data.message, 'Gagal Mengambil data');
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } finally {
    yield put(actionLoading(false));
  }
}

// PUT Edit Profile
const ProfileUpdate = (payload, token) => {
  console.log(payload, '<==== ini data payload dari update profile');
  return axios({
    method: 'PUT',
    url: 'https://biller-app-api.herokuapp.com/api/biller/user/update',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// PUT Edit Profile
function* ProfileUpdateAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield ProfileUpdate(action.payload, token);
    console.log(res, '<=======ini hasil user Api');
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data User');

      yield put(ProfileUpdateActionSuccess(res.data));
      yield put(actionSuccess(true));

      yield navigate('Profile');
    }
    if (res.status === 202) {
      yield put(actionSuccess(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    } else if (res.status === 204) {
      yield put(actionSuccess(false));
      yield put(actionIsLogged(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } catch (err) {
    if (err.response === 401) {
      yield put(actionIsLogged(false));
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    } else {
      console.log(err.response.data.message, 'Gagal Mengambil data');
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } finally {
    yield put(actionLoading(false));
  }
}

function* ProfileSaga() {
  yield takeLatest('GET_INFO_PROFILE', ProfileInfoAction);
  yield takeLatest('PUT_UPDATE_PROFILE', ProfileUpdateAction);
  yield takeLatest('POST_UPLOADFOTO_PROFILE', ProfileUploadFotoAction);
}
export default ProfileSaga;
