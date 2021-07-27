import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {navigate} from '../../../Function/Nav';
import {takeLatest, put, select} from 'redux-saga/effects';
import {
  PeriodBPJSActionSuccess,
  CustomerBPJSActionSuccess,
  CreateBPJSActionSuccess,
} from './action';
import {
  actionLoading,
  actionIsLogged,
  actionSuccess,
} from '../../../Store/GlobalAction';

// GET PERIOD BPJS
const BPJSPeriod = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/bpjs/bill/period',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET OPTIONS
function* BPJSPeriodAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield BPJSPeriod(action.payload, token);
    console.log(action.payload, '<=======ini hasil BPJS Period Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Period BPJS');

      yield put(PeriodBPJSActionSuccess(res.data));
      yield put(actionLoading(false));
    }
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data BPJS Period ');

      yield put(PeriodBPJSActionSuccess(res.data));
      yield put(actionSuccess(true));
      yield put(actionLoading(false));
    }
    if (res.status === 202) {
      yield put(actionSuccess(false));
      yield put(actionLoading(false));

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

// GET Coustomer BPJS
const BPJSCustumer = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/bpjs/bill/customer/info',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET Customer
function* BPJSCustomerAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield BPJSCustumer(action.payload, token);
    console.log(action.payload, '<=======ini hasil BPJS Period Api');
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data User InTv');

      yield put(CustomerBPJSActionSuccess(res.data));
      yield put(actionSuccess(true));
      yield put(actionLoading(false));

      yield navigate('DetailPaymentBPJS');
    }
    if (res.status === 202) {
      yield put(actionSuccess(false));
      yield put(actionLoading(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    } else if (res.status === 204) {
      yield put(actionSuccess(false));
      yield put(actionIsLogged(false));
      yield put(actionLoading(false));

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

// CREATE Coustomer BPJS
const CreateBPJS = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/bpjs/bill/new/bill',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// CREATE Customer
function* CreateBPJSAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield CreateBPJS(action.payload, token);
    console.log(action.payload, '<=======ini hasil BPJS Period Api');
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data User InTv');

      yield put(CreateBPJSActionSuccess(res.data));
      yield put(actionSuccess(true));
      yield put(actionLoading(false));

      yield navigate('ResultPaymentBPJS');
    }
    if (res.status === 202) {
      yield put(actionSuccess(false));
      yield put(actionLoading(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    } else if (res.status === 204) {
      yield put(actionSuccess(false));
      yield put(actionIsLogged(false));
      yield put(actionLoading(false));

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

function* BPJSSaga() {
  yield takeLatest('GET_PERIOD_BPJS', BPJSPeriodAction);
  yield takeLatest('GET_CUSTUMER_BPJS', BPJSCustomerAction);
  yield takeLatest('CREATE_BPJS', CreateBPJSAction);
}
export default BPJSSaga;
