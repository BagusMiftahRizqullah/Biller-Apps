import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {navigate} from '../../../Function/Nav';
import {takeLatest, put, select} from 'redux-saga/effects';
import {
  MobileOptionActionSuccess,
  MobileAccountActionSuccess,
  MobileCreatePaymentActionSuccess,
} from './action';
import {
  actionLoading,
  actionIsLogged,
  actionSuccess,
} from '../../../Store/GlobalAction';

// GET OPTIONS
const MobileOptions = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/mobile/bill/options',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET OPTIONS
function* MobileOptionAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield MobileOptions(action.payload, token);
    console.log(action.payload, '<=======ini hasil Option Mobile Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Option Mobile');

      yield put(MobileOptionActionSuccess(res.data));
      yield put(actionLoading(false));
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

// POST User_ID Mobile
// const MobileUserId = (payload, token) => {
//   console.log(payload, '<==== ini data payload dari input userid');
//   return axios({
//     method: 'POST',
//     url: 'https://biller-app-api.herokuapp.com/api/biller/internet_TV/information',
//     data: payload,
//     headers: {
//       Authorization: 'Bearer ' + token,
//     },
//   });
// };

// POST User_ID Mobile
// function* MobileUserIdAction(action) {
//   const token = yield select(state => state.GlobalReducer.token);

//   try {
//     yield put(actionLoading(true));
//     const res = yield MobileUserId(action.payload, token);
//     console.log(res, '<=======ini hasil user Mobile Api');
//     if (res && res.data) {
//       console.log(res.data, 'ini hasil res');
//       console.log('Berhasil Mengambil data User Mobile');

//       yield put(MobileAccountActionSuccess(res.data));
//       yield put(actionSuccess(true));

//       yield navigate('DetailPaymentInternetTv');
//     } else if (res.status === 204) {
//       yield put(actionSuccess(false));
//       yield put(actionIsLogged(false));

//       const errorMessage = res.statusText + '';
//       ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
//     }
//   } catch (err) {
//     if (err.response === 401) {
//       yield put(actionIsLogged(false));
//       const errorMessage = err.response.data.message + '';
//       ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
//     } else {
//       console.log(err.response.data.message, 'Gagal Mengambil data');
//       const errorMessage = err.response.data.message + '';
//       ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
//     }
//   } finally {
//     yield put(actionLoading(false));
//   }
// }

// POST Create Payment Mobile
// const MobileCreate = (payload, token) => {
//   console.log(payload, '<==== ini data payload dari input userid');
//   return axios({
//     method: 'POST',
//     url: 'https://biller-app-api.herokuapp.com/api/biller/internet_TV/bill',
//     data: payload,
//     headers: {
//       Authorization: 'Bearer ' + token,
//     },
//   });
// };

// POST User_ID Mobile
// function* MobileCreateAction(action) {
//   const token = yield select(state => state.GlobalReducer.token);

//   try {
//     yield put(actionLoading(true));
//     const res = yield MobileCreate(action.payload, token);
//     console.log(res, '<=======ini hasil CreateBill Mobile Api');
//     if (res && res.data) {
//       console.log(res.data, 'ini hasil res');
//       console.log('Berhasil Create Bill Mobile');

//       yield put(MobileCreatePaymentActionSuccess(res.data));
//       yield put(actionSuccess(true));
//       let methodPayment = 'Bank Transfer';
//       methodPayment === 'Bank Transfer'
//         ? yield navigate('ResultPaymentBankInternetTv')
//         : methodPayment === 'Payment Card'
//         ? yield navigate('ResultPaymentCreditInternetTv')
//         : null;
//     } else if (res.status === 204) {
//       yield put(actionSuccess(false));
//       yield put(actionIsLogged(false));

//       const errorMessage = res.statusText + '';
//       ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
//     }
//   } catch (err) {
//     if (err.response === 401) {
//       yield put(actionIsLogged(false));
//       const errorMessage = err.response.data.message + '';
//       ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
//     } else {
//       console.log(err.response, 'Gagal Mengambil data');
//       const errorMessage = err.response.data.message + '';
//       ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
//     }
//   } finally {
//     yield put(actionLoading(false));
//   }
// }

function* MobileSaga() {
  yield takeLatest('GET_OPTION_MOBILE', MobileOptionAction);
  // yield takeLatest('GET_ACCOUNT_MOBILE', MobileUserIdAction);
  // yield takeLatest('CREATE_MOBILE_PAYMENT', MobileCreateAction);
}

export default MobileSaga;
