import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {navigate} from '../../../Function/Nav';
import {takeLatest, put, select} from 'redux-saga/effects';
import {
  BankAccountActionSuccess,
  ConfirmationPaymentActionSuccess,
} from './action';
import {
  actionLoading,
  actionIsLogged,
  actionSuccess,
} from '../../../Store/GlobalAction';

// GET BANK ACCOUNT
const GetBankAccount = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/payment/bank/list',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET BANK ACCOUNT
function* BankAccountAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionLoading(true));
    const res = yield GetBankAccount(action.payload, token);
    console.log(action.payload, '<=======ini hasil BANK ACCOUNT API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data BANK ACCOUNT');

      yield put(BankAccountActionSuccess(res.data));
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

// CONFIRMASI PAYMENT
const GetConfirmationPayment = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/payment/bank-transfer/confirmation',
    data: {
      billId: payload.billId,
      transactionId: payload.transactionId,
      bankDestinationId: payload.bankDestinationId,
      receipt: payload.receipt,
    },
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

//CONFIRMATION PAYMENT
function* ConfirmationPayment(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionLoading(true));
    const res = yield GetConfirmationPayment(action.payload, token);
    console.log(action.payload, '<=======ini hasil BANK ACCOUNT API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data BANK ACCOUNT');

      yield put(ConfirmationPaymentActionSuccess(res.data));
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

// ADD_NEW_CARD
const AddNewCard = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/payment/new/card',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// ADD_NEW_CARD
function* NewCardAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionLoading(true));
    const res = yield AddNewCard(action.payload, token);
    console.log(action.payload, '<=======ini hasil Menambah Credit Card');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Menambah Credit Card');

      yield put(actionLoading(false));
      yield navigate('PaymentMethod');
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

function* BankSaga() {
  yield takeLatest('GET_BANK_ACCOUNT', BankAccountAction);
  yield takeLatest('CONFIRMATION_PAYMENT', ConfirmationPayment);
  yield takeLatest('ADD_NEW_CARD', NewCardAction);
}

export default BankSaga;
