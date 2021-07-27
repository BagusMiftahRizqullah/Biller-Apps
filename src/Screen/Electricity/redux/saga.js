import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {navigate} from '../../../Function/Nav';
import {takeLatest, put, select} from 'redux-saga/effects';
import {
  ElectricityOptionActionSuccess,
  ElectricityTokenActionSuccess,
  ElectricityTokenAccountActionSuccess,
  ElectricityTokenCreatePaymentActionSuccess,
  ElectricityTagihanAccountActionSuccess,
} from './action';
import {
  actionLoading,
  actionIsLogged,
  actionSuccess,
} from '../../../Store/GlobalAction';

// GET OPTIONS
const ElectricityOptions = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/electricity/bill/options/1',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET OPTIONS
function* ElectricityOptionAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield ElectricityOptions(action.payload, token);
    console.log(action.payload, '<=======ini hasil Option Electricity API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Option Electricity');

      yield put(ElectricityOptionActionSuccess(res.data));
      yield put(actionLoading(false));
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
      console.log(err.response, 'Gagal Mengambil data');
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } finally {
    yield put(actionLoading(false));
  }
}

// GET Token List Pay
const ElectricityToken = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/electricity/bill/token/blank',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

//GET Token List Pay
function* ElectricityTokenAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield ElectricityToken(action.payload, token);
    console.log(action.payload, '<=======ini hasil List Token Electricity API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data List Token Electricity');

      yield put(ElectricityTokenActionSuccess(res.data));
      yield put(actionLoading(false));
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
      console.log(err.response, 'Gagal Mengambil data');
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } finally {
    yield put(actionLoading(false));
  }
}

// GET User Elect Token
const ElectricityUserToken = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/electricity/bill/token/info',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET User Elect Token
function* ElectricityTokenAccountAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield ElectricityUserToken(action.payload, token);
    console.log(
      action.payload,
      '<=======ini hasil Get User Token Electricity API',
    );
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Get User Token Electricity');

      yield put(ElectricityTokenAccountActionSuccess(res.data));
      yield put(actionLoading(false));
      yield navigate('DetailPaymentElectricity', 'PLN - Token');
    }
    if (res.status === 202) {
      yield put(actionSuccess(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
    if (res.status === 204) {
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
      yield put(actionSuccess(false));
      console.log(err.response, 'Gagal Mengambil data');
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } finally {
    yield put(actionLoading(false));
  }
}

// CREATE PAY Elect Token
const ElectricityCreatePayToken = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/electricity/bill/token/bankpayment',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// CREATE PAY Elect Token
function* ElectricityTokenCreatePayAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield ElectricityCreatePayToken(action.payload, token);
    console.log(
      action.payload,
      '<=======ini hasil Get User Token Electricity API',
    );
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Get User Token Electricity');

      yield put(ElectricityTokenCreatePaymentActionSuccess(res.data));
      yield put(actionLoading(false));
      yield navigate('ResultPaymentElectToken', 'PLN - Token');
    }
    if (res.status === 202) {
      yield put(actionSuccess(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
    if (res.status === 204) {
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
      yield put(actionSuccess(false));
      console.log(err.response, 'Gagal Mengambil data');
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } finally {
    yield put(actionLoading(false));
  }
}

// GET User Elect TAGIHAN
const ElectricityUserTagihan = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/electricity/bill/tagihan/info',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET User Elect TAGIHAN
function* ElectricityTagihanAccountAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield ElectricityUserTagihan(action.payload, token);
    console.log(
      action.payload,
      '<=======ini hasil Get User Tagihan Electricity API',
    );
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Get User Tagihan Electricity');

      yield put(ElectricityTagihanAccountActionSuccess(res.data));
      yield put(actionLoading(false));
      yield navigate('DetailPaymentElectricity', 'PLN - Tagihan');
    }
    if (res.status === 202) {
      yield put(actionSuccess(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
    if (res.status === 204) {
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
      yield put(actionSuccess(false));
      console.log(err.response, 'Gagal Mengambil data');
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } finally {
    yield put(actionLoading(false));
  }
}

function* ElectricitySaga() {
  yield takeLatest('GET_OPTION_ELECTRICITY', ElectricityOptionAction);
  yield takeLatest('GET_TOKEN_ELECTRICITY', ElectricityTokenAction);
  yield takeLatest(
    'GET_TOKEN_ACCOUNT_ELECTRICITY',
    ElectricityTokenAccountAction,
  );
  yield takeLatest(
    'CREATE_TOKEN_ELECTRICITY_PAYMENT',
    ElectricityTokenCreatePayAction,
  );
  yield takeLatest(
    'GET_TAGIHAN_ACCOUNT_ELECTRICITY',
    ElectricityTagihanAccountAction,
  );
}

export default ElectricitySaga;
