import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {navigate} from '../../../Function/Nav';
import {takeLatest, put, select} from 'redux-saga/effects';
import {
  NSBpjsPeriodActionSuccess,
  NSBpjsAccountActionSuccess,
  NSBpjsCreatePaymentActionSuccess,
  NSElectricityOptionActionSuccess,
  NSElectricityTokenActionSuccess,
  NSElectricityTokenAccountActionSuccess,
  NSElectricityTagihanAccountActionSuccess,
  NSElectricityTokenCreatePaymentActionSuccess,
  NSinTvOptionActionSuccess,
  NSinTvAccountActionSuccess,
  NSinTvCreatePaymentActionSuccess,
  NSLandlineAccountActionSuccess,
  NSLandlineCreatePaymentActionSuccess,
  NSMobileOptionActionSuccess,
  NSMobileAccountActionSuccess,
  NSMobileCreatePaymentActionSuccess,
  NSPDAMOptionActionSuccess,
  NSPDAMAccountActionSuccess,
  NSPDAMCreatePaymentActionSuccess,
} from './action';
import {
  actionLoading,
  actionIsLogged,
  actionSuccess,
} from '../../../Store/GlobalAction';

// GET BPJS PERIOD
const NSBpjsPeriods = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/bpjs/bill/period',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET BPJS PERIOD
function* NSBpjsPeriodAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield NSBpjsPeriods(action.payload, token);
    console.log(action.payload, '<=======ini hasil BPJS API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Period BPJS');

      yield put(NSBpjsPeriodActionSuccess(res.data));
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

// GET ACCOUNT BPJS
const NSBpjsAccountId = (payload, token) => {
  console.log(payload, '<==== ini data payload dari input userid');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/bpjs/bill/customer/info',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET ACCOUNT BPJS
function* NSBpjsAccountAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield NSBpjsAccountId(action.payload, token);
    console.log(res, '<=======ini hasil user account BPJS API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data user account BPJS API');

      yield put(NSBpjsAccountActionSuccess(res.data));
      yield put(actionSuccess(true));

      yield navigate('BPJSTransaction');
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

// POST Create Payment BPJS
const NSBpjsCreate = (payload, token) => {
  console.log(payload, '<==== ini data payload dari input userid');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/bpjs/bill/new/bill',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST Create Payment BPJS
function* NSBpjsCreatePaymentAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield NSBpjsCreate(action.payload, token);
    console.log(res, '<=======ini hasil CreateBill BPJS API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Create Bill BPJS API');

      yield put(NSBpjsCreatePaymentActionSuccess(res.data));
      yield put(actionSuccess(true));
      let methodPayment = 'Bank Transfer';
      methodPayment === 'Bank Transfer'
        ? yield navigate('BPJSTransaction')
        : methodPayment === 'Payment Card'
        ? yield navigate('BPJSTransaction')
        : null;
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

// GET OPTIONS ELECTRICITY
const NSElectricityOptions = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/electricity/bill/options/1',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET OPTIONS ELECTRICITY
function* NSElectricityOptionAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield NSElectricityOptions(action.payload, token);
    console.log(action.payload, '<=======ini hasil Option Electricity API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Option Electricity');

      yield put(NSElectricityOptionActionSuccess(res.data));
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

// GET Token List Pay ELECTRICITY
const NSElectricityToken = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/electricity/bill/token/blank',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

//GET Token List Pay ELECTRICITY
function* NSElectricityTokenAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield NSElectricityToken(action.payload, token);
    console.log(action.payload, '<=======ini hasil List Token Electricity API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data List Token Electricity');

      yield put(NSElectricityTokenActionSuccess(res.data));
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

// GET User Elect Token ELECTRICITY
const NSElectricityUserToken = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/electricity/bill/token/info',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET User Elect Token ELECTRICITY
function* NSElectricityTokenAccountAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield NSElectricityUserToken(action.payload, token);
    console.log(
      action.payload,
      '<=======ini hasil Get User Token Electricity API',
    );
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Get User Token Electricity');

      yield put(NSElectricityTokenAccountActionSuccess(res.data));
      yield put(actionLoading(false));
      yield navigate('NSDetPayElec', 'PLN - Token');
      console.log(navigate, 'NSDetPayElec');
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

// CREATE PAY Elect Token ELECTRICITY
const NSElectricityCreatePayToken = (payload, token) => {
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
function* NSElectricityTokenCreatePayAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield NSElectricityCreatePayToken(action.payload, token);
    console.log(
      action.payload,
      '<=======ini hasil Get User Token Electricity API',
    );
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Get User Token Electricity');

      yield put(NSElectricityTokenCreatePaymentActionSuccess(res.data));
      yield put(actionLoading(false));
      yield navigate('NSDetPayElec', 'PLN - Token');
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
const NSElectricityUserTagihan = (payload, token) => {
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
function* NSElectricityTagihanAccountAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield NSElectricityUserTagihan(action.payload, token);
    console.log(
      action.payload,
      '<=======ini hasil Get User Tagihan Electricity API',
    );
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Get User Tagihan Electricity');

      yield put(NSElectricityTagihanAccountActionSuccess(res.data));
      yield put(actionLoading(false));
      yield navigate('NSDetPayElec', 'PLN - Tagihan');
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

// GET OPTIONS INTERNET & TV
const NSinTvOptions = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/internet_TV/options/3',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET OPTIONS INTERNET & TV
function* NSinTvOptionAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield NSinTvOptions(action.payload, token);
    console.log(action.payload, '<=======ini hasil Option INTV Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Option InTv');

      yield put(NSinTvOptionActionSuccess(res.data));
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

// POST User_ID Internet Tv
const NSinTvUserId = (payload, token) => {
  console.log(payload, '<==== ini data payload dari input userid');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/internet_TV/information',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST User_ID Internet Tv
function* NSinTvUserIdAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield NSinTvUserId(action.payload, token);
    console.log(res, '<=======ini hasil user INTV Api');
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data User InTv');

      yield put(NSinTvAccountActionSuccess(res.data));
      yield put(actionSuccess(true));

      yield navigate('InTvTransaction');
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

// POST Create Payment Internet Tv
const NSinTvCreate = (payload, token) => {
  console.log(payload, '<==== ini data payload dari input userid');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/internet_TV/bill',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST Create Payment Internet Tv
function* NSinTvCreateAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield NSinTvCreate(action.payload, token);
    console.log(res, '<=======ini hasil CreateBill INTV Api');
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Create Bill InTv');

      yield put(NSinTvCreatePaymentActionSuccess(res.data));
      yield put(actionSuccess(true));
      let methodPayment = 'Bank Transfer';
      methodPayment === 'Bank Transfer'
        ? yield navigate('ResultPaymentBankInternetTv')
        : methodPayment === 'Payment Card'
        ? yield navigate('ResultPaymentCreditInternetTv')
        : null;
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
      console.log(err.response, 'Gagal Mengambil data');
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } finally {
    yield put(actionLoading(false));
  }
}

// LANDLINE
// POST GET ID LANDLINE
const NSLandlineUserId = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/landline/bill/info',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST GET ID LANDLINE
function* NSLandlineAccountAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionLoading(true));
    const res = yield NSLandlineUserId(action.payload, token);
    console.log(res, '<=======ini hasil user Landline Api');
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data User Landline');

      yield put(NSLandlineAccountActionSuccess(res.data));
      yield put(actionSuccess(true));

      yield navigate('LandlineTransaction');
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
      console.log(err.response.data.message, 'Gagal Mengambil data');
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } finally {
    yield put(actionLoading(false));
  }
}

// POST Create Payment Landline
const NSLandlineCreate = (payload, token) => {
  console.log(payload, '<==== ini data payload dari input userid');
  console.log(token, '<=== ini Token');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/landline/bill/bankpayment',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST User_ID Landline
function* NSLandlineCreatePaymentAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield NSLandlineCreate(action.payload, token);
    console.log(res, '<=======ini hasil CreateBill Landline Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Create Bill Landline');

      yield put(NSLandlineCreatePaymentActionSuccess(res.data));
      yield put(actionSuccess(true));
      let methodPayment = 'Bank Transfer';
      methodPayment === 'Bank Transfer'
        ? yield navigate('ResultPaymentBankLandline')
        : methodPayment === 'Payment Card'
        ? yield navigate('ResultPaymentCreditLandline')
        : null;
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

// MOBILE
// GET OPTIONS MOBILE
const NSMobileOptions = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/mobile/bill/options',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
// GET OPTIONS MOBILE
function* NSMobileOptionAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield NSMobileOptions(action.payload, token);
    console.log(action.payload, '<=======ini hasil Option Mobile Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Option Mobile');

      yield put(NSMobileOptionActionSuccess(res.data));
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

// PDAM
// GET OPTIONS PDAM
const NSPDAMOptions = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/pdam/bill/region/all',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET OPTIONS PDAM
function* NSPDAMOptionAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield NSPDAMOptions(action.payload, token);
    console.log(action.payload, '<=======ini hasil Option PDAM API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Option PDAM');

      yield put(NSPDAMOptionActionSuccess(res.data));
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

// POST GET User_ID PDAM
const NSPDAMUserId = (payload, token) => {
  console.log(payload, '<==== ini data payload dari input userid');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/pdam/bill/customer/info',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST User_ID PDAM
function* NSPDAMUserIdAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield NSPDAMUserId(action.payload, token);
    console.log(res, '<=======ini hasil user PDAM Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data User PDAM');

      yield put(NSPDAMAccountActionSuccess(res.data));
      yield put(actionSuccess(true));

      yield navigate('PDAMTransaction');
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

function* newSubOptionSaga() {
  yield takeLatest('NS_GET_BPJS_PERIOD', NSBpjsPeriodAction);
  yield takeLatest('NS_GET_ACCOUNT_BPJS', NSBpjsAccountAction);
  yield takeLatest('NS_CREATE_BPJS_PAYMENT', NSBpjsCreatePaymentAction);
  yield takeLatest('NS_GET_OPTION_ELECTRICITY', NSElectricityOptionAction);
  yield takeLatest('NS_GET_TOKEN_ELECTRICITY', NSElectricityTokenAction);
  yield takeLatest(
    'NS_GET_TOKEN_ACCOUNT_ELECTRICITY',
    NSElectricityTokenAccountAction,
  );
  yield takeLatest(
    'NS_CREATE_TOKEN_ELECTRICITY_PAYMENT',
    NSElectricityTokenCreatePayAction,
  );
  yield takeLatest(
    'NS_GET_TAGIHAN_ACCOUNT_ELECTRICITY',
    NSElectricityTagihanAccountAction,
  );
  yield takeLatest('NS_GET_OPTION_INTV', NSinTvOptionAction);
  yield takeLatest('NS_GET_ACCOUNT_INTV', NSinTvUserIdAction);
  yield takeLatest('NS_CREATE_INTV_PAYMENT', NSinTvCreateAction);
  yield takeLatest('NS_GET_ACCOUNT_LANDLINE', NSLandlineAccountAction);
  yield takeLatest('NS_CREATE_LANDLINE_PAYMENT', NSLandlineCreatePaymentAction);
  yield takeLatest('NS_GET_OPTION_MOBILE', NSMobileOptionAction);
  yield takeLatest('NS_GET_OPTION_PDAM', NSPDAMOptionAction);
  yield takeLatest('NS_GET_ACCOUNT_PDAM', NSPDAMUserIdAction);
}
export default newSubOptionSaga;
